<template>
  <div class="region-info-wrapper">
    <div class="region-info-container">
      <h2>你的選區約有</h2>
      <div class="region-population">
        <span class="region-population-left"></span>
        <span v-if="character!==1" class="region-population-left">-</span>
        <span v-if="character!==1" class="region-population-right"></span>
        <span v-if="character!==3" class="region-population-unit"></span>
      </div>

      <h2>投票人口</h2>
      <p><br></p>

      <div class="info-text-wrapper"><p>{{ infoText[character] }}</p></div>
      <div class="face-wrapper">
        <div id="selected-character"></div>
      </div>
      <div class="annotation"><p>請根據選區的投票人口數評估，</p><p>點「下一步」選擇你需要多少宣傳資源。</p></div>
      <div class="region-info-next-step">下一步</div>
    </div>
  </div>  
</template>
<script>

  import { mapGetters, mapActions } from 'vuex'
  import * as bodymovin from 'lottie-web'

  export default {
    name: 'RegionInfo',
    computed: {
      ...mapGetters({
        HEADBAR_HEIGHT: 'getHeadbarHeight',
        DEVICE_WIDTH: 'getDeviceWidth',
        stageIndex: 'getStageIndex',
        character: 'getCharacter'
      }),
    },
    data() {
      return {
        infoText: {
          1: '台北市總人口267萬人，具有投票權的市民（20歲以上）約218萬人。',
          2: '台北市各選區20歲以上、有投票權的人口數，以大安、文山區約46萬人最多，中正、萬華區約28萬人最少。',
          3: '台北市各里平均人口約5800人，20歲以上、有投票權的人口數約占八成，約4600人。'
        },
        bodyMovinPath: {
          1: './static/characters/mayor_face/data.json',
          2: './static/characters/parliamentary_face/data.json',
          3: './static/characters/village_face/data.json'
        },
      }
    },
    methods: {
      ...mapActions([
        'setStageIndex',
        'updateProcessList',
        'setTeachingGame'
      ]),
      goToNext() {
        $('.game').css({
          '-webkit-transform': 'translateX(-' + this.DEVICE_WIDTH * this.stageIndex + 'px)',
          '-ms-transform': 'translateX(-' + this.DEVICE_WIDTH * this.stageIndex + 'px)',
          'transform': 'translateX(-' + this.DEVICE_WIDTH * this.stageIndex + 'px)'
        })
      }
    },
    mounted() {
      $('.region-info-next-step').click(() => {
        this.setStageIndex()
        this.updateProcessList(this.stageIndex)
        this.setTeachingGame(true)
        this.goToNext()
      })
    }
  }
</script>
<style lang="scss" scoped>
  p {
    text-align: center;
  }
  .region-info-wrapper {
    position: relative;
    width: 100%;
    height: calc(100vh - 60px);
  }
  .region-info-container {
      padding: 0 5%;
      display: flex;
      flex-direction: column;
      justify-content: top;
      align-items: center;
  }
  .region-population {
    background-color: #ff4e00;
    
    .region-population-left {
      padding: 0 2px;
      margin: 0;
      font-size: 45px;
      line-height: 1.1;
    }
    .region-population-right {
      padding: 0 2px;
      margin: 0;
      font-size: 45px;
      line-height: 1.1;
    }
    .region-population-unit {
      padding: 0 2px;
      font-size: 26px;
      font-weight: 700;
    }
  }
  .face-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #selected-character{
      position: relative;
      width: 30%;
    }   
  }
  .annotation {
    p {
      font-size: 15px;
      line-height: 1.3;
      color: #8d8b8b;
    }
  }
  .region-info-next-step {
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

