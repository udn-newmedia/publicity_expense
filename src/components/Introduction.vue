<template>
  <div class="intro-wrapper" ref="introRef">
    <div class="intro-container">
      <h2>我的存款夠不夠參選？<br>遊戲告訴你選舉多燒錢</h2>
      <Share :style="{transform: translateCenter}" href="https://udn.com/upf/newmedia/2018_data/2018election/game1/index.html">
      </Share>
      <img :style="{transform: translateCenter}" class="intro-cover-image" src="static/pictures/bg.svg" alt="">
      <!-- <div class="intro-text-wrapper">
        <p>九合一選戰激烈，一場選舉燒掉多少競選經費？素人想參政，門檻究竟有多高？來玩玩看互動小遊戲，看看你的存款夠不夠參選。</p>
      </div> -->
      <p><br></p>
      <div class="btn-wrapper">
        <div class="intro-next-step" @click="goToNext()">開始</div>
      </div>
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
    data() {
      return {
        translateCenter: ''
      }
    },
    computed: {
      ...mapGetters({
        HEADBAR_HEIGHT: 'getHeadbarHeight',
        CONTENT_WIDTH: 'getDeviceWidth',
        stageIndex: 'getStageIndex'
      })
    },
    methods: {
      ...mapActions([
        'setStageIndex',
        'updateProcessList'
      ]),
      goToNext() {
        this.setStageIndex()
        this.updateProcessList(this.stageIndex)

        $('.game').css({
          '-webkit-transform': 'translateX(-' + this.CONTENT_WIDTH * this.stageIndex + 'px)',
          '-ms-transform': 'translateX(-' + this.CONTENT_WIDTH * this.stageIndex + 'px)',
          'transform': 'translateX(-' + this.CONTENT_WIDTH * this.stageIndex + 'px)'
        })
        $('.menu-watch-report').css({
          'display': 'block',
          'opacity': '1'
        })
      }
    },
    mounted() {
      let startPosition = $('.intro-cover-image')[0].offsetTop + $('.intro-cover-image')[0].offsetHeight
      let endPosition = $('.btn-wrapper')[0].offsetTop
      
      this.translateCenter = 'translateY(' + ((endPosition - startPosition) * 0.25) + 'px)'
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
      width: 60%;
    }
  }

  .intro-text-wrapper {
    width: 100%;
  }
  .btn-wrapper {
    position: absolute;
    left: 0;
    bottom: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .intro-next-step {
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
  }

</style>

