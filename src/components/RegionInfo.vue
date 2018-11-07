<template>
  <div class="region-info-wrapper" ref="regionInfoRef">
    <div class="region-info-container">
      <h3>你的選區約有</h3>
      <div class="region-population">
        <span class="region-population-left"></span>
        <span v-if="character!==1" class="region-population-left">-</span>
        <span v-if="character!==1" class="region-population-right"></span>
        <span v-if="character!==3" class="region-population-unit"></span>
      </div>
      <h3>投票人口</h3>

      <div class="info-text-wrapper"><p>{{ infoText[character] }}</p></div>
      <div class="face-wrapper">
        <div id="selected-character"></div>
      </div>
      <div class="annotation">
        <p>請根據選區投票人口評估需要多少宣傳資源。</p>
      </div>
      <div class="btn-wrapper">
        <div class="region-info-next-step" @click="goToNext()">下一步</div>
      </div>
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
        CONTENT_WIDTH: 'getDeviceWidth',
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
        this.setStageIndex()
        this.updateProcessList(this.stageIndex)
        this.setTeachingGame(true)

        $('.game').css({
          '-webkit-transform': 'translateX(-' + this.CONTENT_WIDTH * this.stageIndex + 'px)',
          '-ms-transform': 'translateX(-' + this.CONTENT_WIDTH * this.stageIndex + 'px)',
          'transform': 'translateX(-' + this.CONTENT_WIDTH* this.stageIndex + 'px)'
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  h3 {
    margin: 10px 0;
  }
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
  .info-text-wrapper {
    position: relative;
    width: 100%;
  }
  .face-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #selected-character{
      position: relative;
      width: 25%;

      @media screen and (min-width: 768px) {
        width: 30%;
      }
    }
  }
  .annotation {
    position: relative;
    width: 100%;
    p {
      font-size: 15px;
      line-height: 1.3;
      color: #8d8b8b;
    }
  }
  .btn-wrapper {
    position: absolute;
    left: 0;
    bottom: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .region-info-next-step {
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

