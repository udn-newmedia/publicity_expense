<template>
  <div class="character-wrapper" ref="characterRef">
    <div class="character-container">
      <h2>如果有機會參選<br>我想當...？</h2>
      <p><br></p>
      <div class="character-btn-wrapper">
        <div class="character-btn" @click="characterEvent(1)">
          <p>改變城市的</p>
          <p class="election-name"> &nbsp市長&nbsp </p>
          <div class="character-btn-image-wrapper">
            <div class="character-face" id="mayor-face"></div>
            <div class="btn-mask-wrapper">
              <img class="btn-mask" src="static/characters/gray_face/mayor_gray.svg">
            </div>
          </div>
        </div>
        <div class="character-btn" @click="characterEvent(2)">
          <p>監督市政的</p>
          <p class="election-name"> &nbsp議員&nbsp </p>
          <div class="character-btn-image-wrapper">
            <div class="character-face" id="parliamentary-face"></div>
            <div class="btn-mask-wrapper">
              <img class="btn-mask" src="static/characters/gray_face/parliamentary_gray.svg">
            </div>
          </div>
        </div>
        <div class="character-btn" @click="characterEvent(3)">
          <p>服務里民的</p>
          <p class="election-name"> &nbsp里長&nbsp </p>
          <div class="character-btn-image-wrapper">
            <div class="character-face" id="village-face"></div>
            <div class="btn-mask-wrapper">
              <img class="btn-mask" src="static/characters/gray_face/village_gray.svg">
            </div>
          </div>
        </div>
      </div>
      <p><br></p>
      <div class="annotation"><p>註：因各縣市人口數差異大，以下人口數與選舉宣傳支出金額計算，將以台北市為例。</p></div>
      <div class="btn-wrapper">
        <div class="character-next-step" @click="goToNext()">下一步</div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'
  import * as bodymovin from 'lottie-web'
  import * as d3 from 'd3'

  export default {
    name: 'Character',
    computed: {
      ...mapGetters({
        character: 'getCharacter',
        HEADBAR_HEIGHT: 'getHeadbarHeight',
        CONTENT_WIDTH: 'getDeviceWidth',
        stageIndex: 'getStageIndex'
      }),
    },
    data() {
      return {
        population: {
          1: [218, 'null', '萬'],
          2: [28, 46, '萬'],
          3: [4000, 5000, 'null']
        },
        bodyMovinFacePath: {
          1: './static/characters/mayor_face/data.json',
          2: './static/characters/parliamentary_face/data.json',
          3: './static/characters/village_face/data.json'
        },
        bodyMovinAllPath: {
          1: './static/characters/mayor_all/data.json',
          2: './static/characters/parliamentary_all/data.json',
          3: './static/characters/village_all/data.json'
        },
        mayor: {},
        parliamentary: {},
        village: {}
      }
    },
    methods: {
      ...mapActions([
        'setCharacter',
        'setStageIndex',
        'setItemsPath',
        'updateProcessList'
      ]),
      characterEvent(catogory) {

        let self = this
        function assignCharacter(catogory) {
          switch (catogory) {
            case 1: return self.mayor.play()
            case 2: return self.parliamentary.play()
            case 3: return self.village.play()
          }
        }
        function clearCharacter() {
          self.mayor.stop()
          self.parliamentary.stop()
          self.village.stop()
        }

        this.setCharacter(catogory);
        // 選到的btn顏色變深和加上border，其他維持一樣
        $('.btn-mask').each(function(){
          this.style['opacity'] = 1;
        })
        $('.btn-mask')[catogory - 1].style['opacity'] = 0


        $('.character-face').each(function(){
          this.style['border'] = "none";
          this.style['opacity'] = 0;
        })
        $('.character-face')[catogory - 1].style['border'] = "solid 1px #cecece"
        $('.character-face')[catogory - 1].style['opacity'] = 1

        $('.election-name').each(function(){
          this.style['background-color'] = "#ffffff";
        })
        $('.election-name')[catogory - 1].style['background-color'] = "#ff4e00"

        clearCharacter()
        assignCharacter(catogory)

      },
      populationAnimate() {
        // 控制RegionInfo裡面選區人口數字的動畫
        let that = this
        let regionPopulationLeft = d3.select('.region-population-left')
        let regionPopulationRight = d3.select('.region-population-right')
        let regionPopulationUnit = d3.select('.region-population-unit')

        regionPopulationLeft
          .transition()
          .duration(2000)
          .tween("number", function() {
            let i = d3.interpolateRound(0, that.population[that.character][0]);
            return function(t) {
              regionPopulationLeft._groups[0][0].textContent = i(t)
            };
          });
        if( that.population[that.character][1] !== 'null' ) {
          regionPopulationRight
            .transition()
            .duration(2000)
            .tween("number", function() {
              let i = d3.interpolateRound(0, that.population[that.character][1]);
              return function(t) {
                regionPopulationRight._groups[0][0].textContent = i(t)
              };
            });
        }
        if( that.population[that.character][2] !== 'null' ) {
          regionPopulationUnit.text(that.population[that.character][2])
        }
      },
      assignBodyMovin(id, path) {
        return bodymovin.loadAnimation({
          container: document.getElementById(id),
          renderer: 'svg',
          loop: true,
          autoplay: false,
          path: this.bodyMovinFacePath[path]
        })
      },
      assignSelectedCharacter(){
        // RegionInfo的角色圖
        let selectedCharacter = bodymovin.loadAnimation({
          container: document.getElementById('selected-character'),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: this.bodyMovinFacePath[this.character]
        })
        // Game的角色圖
        let selectedCharacterAll = bodymovin.loadAnimation({
          container: document.getElementById('selected-character-all'),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: this.bodyMovinAllPath[this.character]
        })
      },
      goToNext() {
        this.setStageIndex()
        this.setItemsPath(this.character)
        this.updateProcessList(this.stageIndex)
        this.populationAnimate()
        this.assignSelectedCharacter()       

        $('.game').css({
          '-webkit-transform': 'translateX(-' + this.CONTENT_WIDTH * this.stageIndex + 'px)',
          '-ms-transform': 'translateX(-' + this.CONTENT_WIDTH * this.stageIndex + 'px)',
          'transform': 'translateX(-' + this.CONTENT_WIDTH * this.stageIndex + 'px)'
        })
      }
    },
    mounted() {

      this.mayor = this.assignBodyMovin('mayor-face', 1)
      this.parliamentary = this.assignBodyMovin('parliamentary-face', 2)
      this.village = this.assignBodyMovin('village-face', 3)

      // 預設選市長
      $('.btn-mask')[0].style['opacity'] = 0
      $('.character-face')[0].style['border'] = "solid 1px #cecece"
      $('.character-face')[0].style['opacity'] = 1
      $('.election-name')[0].style['background-color'] = "#ff4e00"
      this.mayor.play()

    }
  }
</script>

<style lang="scss" scoped>

  p {
    text-align: center;
  }
  .character-wrapper {
    position: relative;
    width: 100%;
    height: calc(100vh - 60px);

  }
  .character-container {
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
  }
  .character-btn-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-around;

    .character-btn {
      position: relative;
      width: 30%;
      height: 100%;
      padding: 1%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        line-height: 1.1;
      }
    }
    .election-name {
      background-color: #fff;
    }
    .character-btn-image-wrapper {
      position: relative;
      width: 100%;
      margin: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .character-face {
      position: relative;
      width: 90%;
      height: 100%;
      opacity: 0;
      border: none;
    }
    .btn-mask-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn-mask {
        position: relative;
        width: 80%;
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
    .character-next-step {
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