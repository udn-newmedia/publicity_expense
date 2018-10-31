<template>
  <div class="teaching-video-wrapper">
    <div class="teaching-video-background"></div>
    <div :style="{ opacity: teachingOpacity[0] }" class="teaching-class">
      <div class="teaching-bm" id="teaching-bm1"></div>
      <div class="teaching-class-number">1</div>
      <div class="teaching-class-text">將需要的宣傳資源<br>往候選人身上拖曳</div>
    </div>
    <div :style="{ opacity: teachingOpacity[1] }" class="teaching-class">
      <div class="teaching-class2">
        <div class="teaching-bm" id="teaching-bm2"></div>
        <div class="teaching-class-number">2</div>
        <div class="teaching-class-text">點案宣傳品追加數量</div>
      </div>
    </div>
    <div :style="{ opacity: teachingOpacity[2] }" class="teaching-class">
      <div class="teaching-bm" id="teaching-bm3"></div>
      <div class="teaching-class-number">3</div>
      <div class="teaching-class-text">點選可切換不同宣傳資源類別</div>
    </div>

    <div class="close-btn" @click="ignoreTeaching('C')"></div>

    <div v-if="teachingStep.A" class="ignore-btn" @click="ignoreTeaching('A')">下一步</div>
    <div v-if="teachingStep.B" class="ignore-btn" @click="ignoreTeaching('B')">下一步</div>
    <div v-if="teachingStep.C" class="ignore-btn" @click="ignoreTeaching('C')">我知道了</div>
    <div class="teaching-progress">
      <div class="teaching-progress-btn active"></div>
      <div class="teaching-progress-btn"></div>
      <div class="teaching-progress-btn"></div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import * as bodymovin from 'lottie-web'
  import * as d3 from 'd3'

  export default {
    name: 'Teaching',
    data() {
      return {
        teachingStep: {
          'A': true,
          'B': false,
          'C': false
        },
        teachingOpacity: [1, 0, 0]
      }
    },
    methods: {
      ...mapActions([
        'setTeachingGame'
      ]),
      drawTeachingBM(id, bmPath) {
        return bodymovin.loadAnimation({
          container: document.getElementById(id),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: bmPath
        })
      },
      ignoreTeaching(index) {
        switch (index) {
          case 'A':
            this.teachingStep.A = false
            this.teachingStep.B = true
            this.teachingOpacity[0] = 0
            this.teachingOpacity[1] = 1
            $('.teaching-progress-btn')[0].style.backgroundColor = '#787878'
            $('.teaching-progress-btn')[1].style.backgroundColor = '#ffffff'
            break;
          case 'B':
            this.teachingStep.B = false
            this.teachingStep.C = true
            this.teachingOpacity[1] = 0
            this.teachingOpacity[2] = 1
            $('.teaching-progress-btn')[1].style.backgroundColor = '#787878'
            $('.teaching-progress-btn')[2].style.backgroundColor = '#ffffff'
            break;
          case 'C':
            this.setTeachingGame(false)
            break;
        }
      }
    },
    mounted() {
      d3.selectAll('.teaching-video-wrapper')
        .style('opacity', 0)
        .transition()
        .duration(2222)
        .style('opacity', 1)

      let listPosition = ($('#game')[0].children[0].children[2].offsetTop + 53) / window.innerHeight
      let itemPosition = ($('#game')[0].children[0].children[2].offsetTop + 53) / window.innerHeight
      let catogoryPosition = ($('#game')[0].children[0].children[1].offsetTop + 53) / window.innerHeight

      this.drawTeachingBM('teaching-bm1', 'static/demo/demo1')
      this.drawTeachingBM('teaching-bm2', 'static/demo/demo2')
      this.drawTeachingBM('teaching-bm3', 'static/demo/demo3')

      $('#teaching-bm1')[0].style.top = listPosition * 100 + '%'
      $('#teaching-bm2')[0].style.top = itemPosition * 100 + '%'
      $('#teaching-bm3')[0].style.top = catogoryPosition * 100 + '%'

      $('.teaching-class-number')[0].style.top = 'calc(' + listPosition * 100 + '% - 15px'
      $('.teaching-class-number')[1].style.top = 'calc(' + listPosition * 100 + '% - 15px'
      $('.teaching-class-number')[2].style.top = 'calc(' + catogoryPosition * 100 + '% - 15px'

      $('.teaching-class-number')[1].style.left = 'calc(50% - 15px)'

      if(window.innerHeight > 768) {
        $('.teaching-class-text')[0].style.top = 'calc(' + listPosition * 100 + '% + ' + 880 * 0.34 + 'px)'
        $('.teaching-class-text')[1].style.top = 'calc(' + itemPosition * 100 + '% + ' + 880 * 0.21 * 1 + 'px)'
        $('.teaching-class-text')[2].style.top = 'calc(' + catogoryPosition * 100 + '% + ' + 880 * 0.175 + 'px)'
      } else {
        $('.teaching-class-text')[0].style.top = 'calc(' + listPosition * 100 + '% + ' + window.innerWidth * 0.34 + 'px)'
        $('.teaching-class-text')[1].style.top = 'calc(' + itemPosition * 100 + '% + ' + window.innerWidth * 0.21 * 1 + 'px)'
        $('.teaching-class-text')[2].style.top = 'calc(' + catogoryPosition * 100 + '% + ' + window.innerWidth * 0.175 + 'px)'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .teaching-video-wrapper {
    position: fixed;
    z-index: 9998;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
    .teaching-video-background {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      background-color: #000000;
    }

    #teaching-bm1 {
      position: absolute;
      left: 0;
      width: 100%;
      @media screen and (min-width: 768px) {
        width: 880px;
        left: calc((100% - 880px) * 0.5)
      }
    }
    #teaching-bm2 {
      position: absolute;
      width: 20%;
      @media screen and (min-width: 768px) {
        width: 176px;
      }
    }
    #teaching-bm3 {
      position: absolute;
      left: 0;
      width: 100%;
      @media screen and (min-width: 768px) {
        width: 880px;
        left: calc((100% - 880px) * 0.5)
      }
    }

    .teaching-class2 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .teaching-class-number {
      position: absolute;
      left: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      box-shadow: 0px 1px 6.3px 0.7px rgba(0, 0, 0, 0.29);
      background-color: #ff4e00;
      color: #ffffff;
      font-size: 18px;
      @media screen and (min-width: 768px) {
        left: calc((100% - 880px) * 0.5)
      }
    }

    .teaching-class-text {
      position: absolute;
      left: 5%;
      color: #ffffff;
      font-size: 18px;
      @media screen and (min-width: 768px) {
        left: calc((100% - 880px) * 0.5)
      }
    }

    .close-btn {
      position: absolute;
      right: 32px;
      top: 32px;
      width: 32px;
      height: 32px;
      opacity: 1;
      border-radius: 16px;
      background-color: #000000;
      cursor: pointer;
    }
    .close-btn:before, .close-btn:after {
      position: absolute;
      left: 15px;
      top: 4px;
      content: ' ';
      height: 23px;
      width: 3px;
      background-color: #ffffff;
    }
    .close-btn:before {
      transform: rotate(45deg);
    }
    .close-btn:after {
      transform: rotate(-45deg);
    }

    .ignore-btn {
      position: absolute;
      bottom: 15%;
      height: 50px;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      background-color: #ff4e00;
      color: #ffffff;
      cursor: pointer;

      @media screen and (min-width: 768px) {
        width: 30%;
      }
    }

    .teaching-progress {
      position: absolute;
      bottom: 10%;
      display: flex;
      justify-content: center;
      
      .teaching-progress-btn {
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 5px;
        background-color: #787878;
      }
      .active {
        background-color: #ffffff;
      }
    }
  }
</style>
