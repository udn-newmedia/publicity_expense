<template>
  <div class="intro-wrapper">
    <div class="intro-container">
    <h2>選舉宣傳費怎麼花？<br>你來分配看看！</h2>
    <Share href="https:www.udn.com"></Share>
    <img class="intro-cover-image" src="static/pictures/bg.svg" alt="">
    <p>九合一選戰激烈，候選人砸錢宣傳不手軟，打一場選戰燒掉多少宣傳費？來玩玩看互動小遊戲，讓你了解候選人的競選經費花到哪裡去。</p>
    <p><br></p>

    <div class="intro-next-step">開始</div>
    <!-- <div class="test">aaaaa</div> -->
    </div>

  </div>  
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'
  import Share from '@/components/Share'

  export default {
    name: 'Introduction',
    components: {
      Share
    },
    computed: {
      ...mapGetters({
        HEADBAR_HEIGHT: 'getHeadbarHeight',
        DEVICE_WIDTH: 'getDeviceWidth',
        stageIndex: 'getStageIndex'
      })
    },
    methods: {
      ...mapActions([
        'setStageIndex',
        'updateProcessList'
      ]),
      goToNext() {
        $('.game').css({
          '-webkit-transform': 'translateX(-' + this.DEVICE_WIDTH * this.stageIndex + 'px)',
          '-ms-transform': 'translateX(-' + this.DEVICE_WIDTH * this.stageIndex + 'px)',
          'transform': 'translateX(-' + this.DEVICE_WIDTH * this.stageIndex + 'px)'
        })
        $('.menu-watch-report').css({
          'display': 'block',
          'opacity': '1'
        })
      }
    },
    mounted() {
      $('.intro-next-step').click(() => {
        this.setStageIndex()
        this.updateProcessList(this.stageIndex)
        this.goToNext()
        // document.getElementById('game-cover').style.display = 'none'
        // document.getElementById('game-content').style.position = 'fixed'
      })
    }
  }
</script>

<style lang="scss" scoped>

  p {
    text-align: center;
  }
  .intro-wrapper {
    position: relative;
    width: 100%;
    height: calc(100vh - 60px);
   
  }
  .intro-container {
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    padding: 0 5%;
  }
  .intro-cover-image {
    width: 80%;
    @media screen and (min-width: 768px) {
      width: 70%;
    }
  }
  .intro-next-step {
    position: absolute;
    bottom: 15%;
    height: 50px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #040351;
    color: #fff;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      width: 30%;
    }
  }

</style>

