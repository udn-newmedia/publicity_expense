<template>
  <div class="wrapper" ref="gameRef">
    <div class="nav-wrapper">
      <h2>選擇你要的宣傳資源</h2>
      <div class="catogory-wrapper">
        <div class="catogory-name active">{{catogory_name[0]}}</div>
        <div class="catogory-name">{{catogory_name[1]}}</div>
        <div class="catogory-name">{{catogory_name[2]}}</div>
      </div>
      <div class="item-list-wrapper">
        <div v-for="(item, index) in items" 
          class="item-group"
          v-bind:item="item"
          v-bind:index="index"
          v-bind:key="item.key"
          :style="{width: calcItemLogoSize()[0]}">
            <div class="img-shadow"
              :id="'img-shadow-' + index"
              :style="{
                width: calcItemLogoSize()[1], 
                height: calcItemLogoSize()[1],
                borderRadius: calcItemLogoSize()[2]
              }">
            </div>
            <div class="img-bottom" >
              <img 
                :id="'img-bottom-' + index" 
                :src="item.logo"
                :style="{
                  width: calcItemLogoSize()[0],
                  height: calcItemLogoSize()[0]
                }"
              />
            </div>
            <div class="img-top" >
              <img 
                class="img-top" 
                :id="'img-top-' + index" 
                :src="item.logo" 
                :style="{
                  width: calcItemLogoSize()[0],
                  height: calcItemLogoSize()[0]
                }"
              />
            </div>
            <div>
              {{item.name}}
            </div>
            <div>
              {{item.unit}}
            </div>
            <div>
              <div class="force-update">{{forceUpdate}}</div>
              <div class="amount-counter">{{itemInPoolAmountList[items[index].key - 1]}}</div>
            </div>
        </div>
      </div>
    </div>
    <div class="item-pool-wrapper">
      <div class="item-pool">
        <!-- <div class="zone"></div> -->
        <img id="floor" src="static/animated_items/floor.svg" alt="">
        <div id="selected-character-all"></div>
        <div v-for="(item, index) in items"
          class="item-bm"
          v-bind:item="item"
          v-bind:index="index"
          v-bind:key="index"
          :id = concatID(index)
          :style="{
          zIndex: items[index].zIndex,
          transform: items[index].translate}">
        </div>
        <div class="item-bm" id="item-bm-campaign_2"></div>
      </div>
    </div>
    <div class="game-btn-wrapper">
      <div class="clear-btn" @click="clearGame()">全部清除</div>
      <div class="game-next-step" @click="goToNext()">選好了</div>
    </div>
    <audio id="sound-effect">
      <source src="static/coin05.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'
  import * as bodymovin from 'lottie-web'
  import * as d3 from 'd3'
  
  export default {
    name: 'Game',
    data() {
      return {
        catogory_name: ["宣傳小物", "大型宣傳", "電視網路"],
        item_list_width: 0,
        itemImageWidth: 0,
        itemInPoolList: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        itemInPoolAmountList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        totalCost: 0,
        forceUpdate: 0,
        enterZone: true,
        // enterZone: false

      }
    },
    computed: {
      ...mapGetters({
        character: 'getCharacter',
        HEADBAR_HEIGHT: 'getHeadbarHeight',
        DEVICE_WIDTH: 'getDeviceWidth',
        stageIndex: 'getStageIndex',
        items: 'getItems'
      })
    },
    methods: {
      ...mapActions([
        'setStageIndex',
        'updateProcessList',
        'setGameState',
        'setFinalResult',
        'setFinalList'
      ]),
      itemListSelect(self) {
        function translatingItemList(index) {
          d3.select('.item-list-wrapper').transition().duration(333).style('transform', 'translateX(' + index * (-self.item_list_width) + 'px)')
        }

        // catogory-name的顏色
        d3.select('.catogory-wrapper').selectAll('.catogory-name').on('click', function(){
          d3.select('.catogory-wrapper').selectAll('.active').attr('class', 'catogory-name')
          d3.select(this).attr('class', 'catogory-name active')

          // 控制item-list
          if(this.innerText === self.catogory_name[0]) {
            translatingItemList(0)
          } else if(this.innerText === self.catogory_name[1]) {
            translatingItemList(1)
          } else {
            translatingItemList(2)
          }
        })
      },
      calcItemLogoSize() {
        if(window.innerWidth >= 768) {
          return [
            880 * 0.13 + 'px', 
            880 * 0.13 * 0.9 + 'px', 
            880 * 0.13 * 0.45 + 'px'
          ]
        } else {
          return [
            this.DEVICE_WIDTH * 0.167 + 'px', 
            this.DEVICE_WIDTH * 0.167 * 0.90 + 'px', 
            this.DEVICE_WIDTH * 0.167 * 0.45 + 'px'
          ]
        }
        
      },
      calcItemTranslate(id) {
        if( id === 'bag' || id === 'mask') {
          let characterPosition = [d3.select('#selected-character-all')._groups[0][0].offsetLeft * 1, d3.select('#selected-character-all')._groups[0][0].offsetTop * 1]
          
          let characterSize = window.innerWidth >= 768 ? 
          [
            d3.select('.item-pool')._groups[0][0].clientWidth * 0.2, d3.select('.item-pool')._groups[0][0].clientWidth * 0.2 * 1.999
          ] : 
          [
            d3.select('.item-pool')._groups[0][0].clientWidth * 0.3, d3.select('.item-pool')._groups[0][0].clientWidth * 0.3 * 1.999
          ]
          
          if(id === 'bag') {
            if (window.innerWidth !== 768) { 
              this.items[id].translate = 'translate(' + (characterPosition[0] + (characterSize[0] * 0.15)) + 'px,' + (characterPosition[1] + (characterSize[1] * 0.26)) +'px)'
            } else {
              this.items[id].translate = 'translate(' + (characterPosition[0] + (characterSize[0] * 0.15)) + 'px,' + (characterPosition[1] + (characterSize[1] * 0.35)) +'px)'
            }
          } else {
            if (window.innerWidth !== 768) {
              this.items[id].translate = 'translate(' + (characterPosition[0] + (characterSize[0] * 0.405)) + 'px,' + (characterPosition[1] + (characterSize[1] * 0.175)) +'px)'
            } else {
              this.items[id].translate = 'translate(' + (characterPosition[0] + (characterSize[0] * 0.405)) + 'px,' + (characterPosition[1] + (characterSize[1] * 0.25)) +'px)'
            }
          }
        } else {
          let item_width = d3.select('.item-pool-wrapper').select('#item-bm-' + id)._groups[0][0].clientWidth

          this.items[id].translate = 'translateX(' + (-item_width) * 0.5 + 'px)'
        }
      },
      calcItemImageTranslate(dx, dy) {
        return 'translate(' + (dx - this.itemImageWidth * 0.5) + 'px,' + (dy - this.itemImageWidth * 0.5) + 'px)'
      },
      concatID(id) {
        return 'item-bm-'.concat(id)
      },
      drawItemBM(id) {
        return bodymovin.loadAnimation({
          container: document.getElementById('item-bm-' + id),
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: this.items[id].bm
        })
      },
      clearBM() {
          d3.selectAll('.item-bm').selectAll('svg').remove()
          d3.selectAll('.item-list-wrapper').selectAll('.amount-counter').style('opacity', 0)
          d3.selectAll('.img-shadow')
            .transition()
            .duration(333)
            .style('background-color', '#ffffff')

          for(let i in this.itemInPoolList) {
            this.itemInPoolList[i] = false
            this.itemInPoolAmountList[i] = 0
          }
          this.totalCost = 0
      },
      assignDragEvent(id, self, enterLine) {

        function dragStarted() {
          d3.selectAll('#img-shadow-' + id)
            .transition()
            .duration(1111)
            .style('background-color', '#040351')

          document.getElementById('sound-effect').load()
          document.getElementById('sound-effect').play()
        }

        function dragged() {
          selectedItem
            .style('transform', self.calcItemImageTranslate(d3.event.x, d3.event.y))

          // if(d3.event.y > enterLine) {
          //   self.enterZone = true
          // }
          //  else {
          //   if (!self.itemInPoolList[self.items[id].key - 1]) {
          //     self.enterZone = false
          //   }
          // }
        }

        function dragEnded() {
          
          if(self.enterZone) {
            if(!self.itemInPoolList[self.items[id].key - 1]) {
              self.drawItemBM(id)
              self.calcItemTranslate(id)
              if(id === 'campaign') {
                bodymovin.loadAnimation({
                  container: document.getElementById('item-bm-campaign_2'),
                  renderer: 'svg',
                  loop: false,
                  autoplay: true,
                  path: 'static/animated_items/campaign_2/data.json'
                })
              }
            }
            
            d3.selectAll('.amount-counter')._groups[0][self.items[id].key - 1].style.opacity = 1
            
            // 秀出下一步的按鈕
            if(!self.itemInPoolList[self.items[id].key - 1]){
              d3.select('.game-btn-wrapper')
                .style('visibility', 'visible')
                .transition()
                .duration(333)
                .style('opacity', 1)
            }
            // 選第一次的話新增點擊事件
            self.itemInPoolList[self.items[id].key - 1] = true
            self.itemInPoolAmountList[self.items[id].key - 1]++
            self.forceUpdate++
            self.totalCost += self.items[id].unitAmount * self.items[id].cost

            selectedItem
              .transition()
              .duration(333)
              .style('opacity', 0)
            selectedItem
              .transition()
              .duration(0)
              .delay(400)
              .style('transform', self.calcItemImageTranslate(self.itemImageWidth * 0.5, self.itemImageWidth * 0.5))
              .style('opacity', 0.8)

            // +1 +1 +1
            if(id === 'campaign') {
              d3.select('#item-bm-campaign').append('div')
                .attr('class', 'plus-one')
                .style('position', 'absolute')
                .style('display', 'flex')
                .style('justify-content', 'center')
                .style('align-items', 'center')
                .style('z-index', 500)
                .style('width', 40 + 'px')
                .style('height', 40 + 'px')
                .style('color', '#fff')
                .style('background-color', '#e4cc02')
                .style('border-radius', 25 + 'px')
                .style('left', 40 + '%')
                .style('top', 50 + '%')
                .transition()
                .duration(999)
                .style('left', 40 + '%')
                .style('top', 10 + '%')
                .style('opacity', 0)
                .style('width', 80+ 'px')
                .style('height', 80 + 'px')
                .style('color', '#fff')
                .style('background-color', '#e4cc02')
                .style('border-radius', 50 + 'px')
                .style('font-size', '48px')
                .text('+1')
            } else {
              d3.select('#item-bm-' + id).append('div')
                .attr('class', 'plus-one')
                .style('position', 'absolute')
                .style('display', 'flex')
                .style('justify-content', 'center')
                .style('align-items', 'center')
                .style('z-index', 500)
                .style('width', 40 + 'px')
                .style('height', 40 + 'px')
                .style('color', '#fff')
                .style('background-color', '#e4cc02')
                .style('border-radius', 25 + 'px')
                .style('position', 'absolute')
                .style('left', 10 + 'px')
                .style('top', -10 + 'px')
                .transition()
                .duration(999)
                .style('left', 10 + 'px')
                .style('top', -80 + 'px')
                .style('opacity', 0)
                .style('color', '#fff')
                .style('width', 80 + 'px')
                .style('height', 80 + 'px')
                .style('background-color', '#e4cc02')
                .style('border-radius', 50 + 'px')
                .style('font-size', '48px')
                .text('+1')
            }

          } else {
            d3.selectAll('#img-shadow-' + id)
              .transition()
              .duration(333)
              .style('background-color', '#ffffff')

            selectedItem
              .transition()
              .duration(333)
              .style('transform', self.calcItemImageTranslate(self.itemImageWidth * 0.5, self.itemImageWidth * 0.5))
          }         
        }

        let selectedItem = d3.select('#img-top-' + id)
          .call(d3.drag()
            .on('start', dragStarted)
            .on('drag', dragged)
            .on('end', dragEnded)
          )
      },
      handleGameContent() {
        if (window.innerWidth >= 768) {
          d3.selectAll('#game-content')
            .style('position', 'absolute')
            .style('top', 15 + '%')
            .style('transform', 'translateY(' + 0 + 'px) scale(' + 1 + ')')
            .transition()
            .duration(1111)
            .style('transform', 'translateY(' + (-window.innerHeight * 0.1) + 'px) scale(' + 0.5 + ')')
        } else {
          d3.selectAll('#game-content')
            .style('position', 'absolute')
            .style('top', 15 + '%')
            .style('transform', 'translateY(' + 0 + 'px) scale(' + 1 + ')')
            .transition()
            .duration(1111)
            .style('transform', 'translateY(' + (-window.innerHeight * 0.095) + 'px) scale(' + 0.5 + ')')
        }
      },
      goToNext() {
        let self = this
        self.setStageIndex()
        self.updateProcessList(self.stageIndex)
        self.setFinalResult(self.totalCost)
        for(let i in self.items){
          let listObject = {
            id: i,
            amount:  self.itemInPoolAmountList[self.items[i].key - 1]
          }
          self.setFinalList(listObject)
        }

        document.getElementsByClassName('header')[0].style['position'] = 'fixed'
        document.getElementsByClassName('game-btn-wrapper')[0].style.visibility = 'hidden'
        document.getElementsByTagName('body')[0].style['overflow-y'] = 'scroll'
        document.getElementsByClassName('nav-wrapper')[0].style.display = 'none'

        let nextStepPromise = new Promise(function(resolve, reject) {
          self.setGameState(true)
          let nextStepFunction = function() {
            $('html, body').animate({scrollTop: 0}, 1111)
          }

          resolve(nextStepFunction)
        })

        nextStepPromise.then(nextStepFunction => {
          nextStepFunction()
          self.handleGameContent()
        })
      },
      clearGame() {
        this.clearBM();
        // this.enterZone = false

        for(let i in this.itemInPoolList) {
          this.itemInPoolList[i] = false
        }
        for(let i in this.itemInPoolAmountList) {
          this.itemInPoolAmountList[i] = 0
        }
        this.totalCost = 0
      }
    },
    mounted() {
      // 計算item_list的寬度
      this.item_list_width = d3.select('.item-list-wrapper')._groups[0][0].clientWidth * 0.3333
      this.itemImageWidth = d3.select('.img-top')._groups[0][0].clientWidth
      this.itemListSelect(this)

      let self = this;
      let enterLine = d3.select('.item-pool')._groups[0][0].clientHeight * 0.3 + d3.select('.item-list-wrapper')._groups[0][0].clientHeight * 0.5

      for(let i in this.items){
        this.assignDragEvent(i, self, enterLine)
      }
    },
  }
</script>

<style lang="scss" scoped>

  h2 {
    margin-top: 0;
  }

  .wrapper {
    position: relative;
    z-index: 10;
    width: 100%;
    height: calc(100vh - 53px);
    overflow: hidden;
  }
  .nav-wrapper{
    position: relative;
    height: 25%;
  }
  .catogory-wrapper {
    position: relative;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .catogory-name {
      position: relative;
      width: 25%;
      padding: 0 5px;
      border-bottom: solid 1px #dcdcdc;
      background-color: #ffffff;
      color: #000000;
      text-align: center;
    }
    .active {
      position: relative;
      width: 25%;
      padding: 0 5px;
      border-bottom: solid 1px #dcdcdc;
      background-color: #040351;
      color: #ffffff;
      text-align: center;
    }
  }
  .item-list-wrapper {
    position: relative;
    z-index: 2;
    width: 300%;
    padding: 0 0;
    display: flex;
    justify-content: space-around;
    align-items: start;

    .item-group {
      position: relative;
      width: 5%;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
      @media screen and (min-width: 768px) {
        width: 3%;
        font-size: 18px;
      }
    }
    .img-top {
      position: absolute;
      z-index: 30;
      top: 0;
      left: 0;
      opacity: 0.8;
    }
    .img-bottom {
      position: relative;
      z-index: 20;
      opacity: 1;
    }
    .img-shadow {
      position: absolute;
      z-index: 10;
      background-color: #ffffff;
      transform: translate(11%, 9%);
    }
    .force-update {
      display: none;
    }
    .amount-counter {
      position: absolute;
      z-index: 100;
      top: -5px;
      left: -5px;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      background-color: #040351;
      color: #ffffff;
      opacity: 0;
    }
  }
  .item-pool-wrapper {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 75%;
  }

  .item-pool {
    position: relative;
    width: 100%;
    height: 100%;
    // transform: translateY(10%);
    // background-color: lightblue;

    .zone {
      position: relative;
      width: 100px;
      height: 100px;
      background-color: red;
      opacity: 0.3;
      left: calc(50% - 50px);
      top: calc(30% - 50px);
    }

    #selected-character-all{
      position: absolute;
      z-index: 1;
      top: 15%;
      left: 35%;
      width: 30%;
      @media screen and (min-width: 768px) {
        left: 40%;
        width: 20%;
        height: 50%;
      }
    }
    #floor {
      position: absolute;
      top: 35%;
      left: -25%;
      width: 150%;
    }
    #item-bm-tissue {
      position: absolute;
      width: 10%;
      top: 50%;
      left: 40%;
    }
    #item-bm-mask {
      position: absolute;
      width: 15%;
      height: 10%;
      top: 0%;
      left: 0%;
      @media screen and (min-width: 768px) {
        width: 10%;
      }
    }
    #item-bm-melon {
      position: absolute;
      width: 10%;
      top: 60%;
      left: 35%;
    }
    #item-bm-pen {
      position: absolute;
      width: 10%;
      top: 45%;
      left: 30%;      
    }
    #item-bm-bag {
      position: absolute;
      width: 15%;
      top: 0%;
      left: 0%;
      @media screen and (min-width: 768px) {
        width: 10%;
      }
    }
    #item-bm-kanban {
      position: absolute;
      width: 25%;
      top: 35%;
      left: 15%;      
    }
    #item-bm-bus_ad {
      position: absolute;
      width: 40%;
      top: 55%;
      left: 20%;      
    }
    #item-bm-car {
      position: absolute;
      width: 35%;
      top: 50%;
      left: 70%;      
    }
    #item-bm-flag {
      position: absolute;
      width: 15%;
      top: 25%;
      left: 70%;      
    }
    #item-bm-campaign {
      position: absolute;
      width: 150%;
      height: 100%;
      top: 30%;
      left: 50%;
      @media screen and (min-width: 768px) {
        top: 15%;
        // top: 25%;
        left: 50%;
      }
    }
    #item-bm-campaign_2 {
      position: absolute;
      width: 100%;
      height: 80%;
      top: -5%;
      // top: 0%;
      @media screen and (min-width: 768px) {
        width: 80%;
        left: 10%;
        top: 0;
      }
    }
    #item-bm-tv_ad {
      position: absolute;
      width: 15%;
      top: 45%;
      left: 85%;
    }
    #item-bm-line {
      position: absolute;
      width: 15%;
      top: 25%;
      left: 85%;
    }
    #item-bm-fb_group {
      position: absolute;
      width: 15%;
      top: 25%;
      left: 20%;     
    }
    #item-bm-video {
      position: absolute;
      width: 15%;
      top: 35%;
      left: 85%;
    }
    #item-bm-chatbot {
      position: absolute;
      width: 10%;
      top: 30%;
      left: 35%;
    }
  }
  .game-btn-wrapper {
    position: absolute;
    z-index: 3;
    bottom: 15%;
    width: 100%;
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;

    .clear-btn {
      height: 50px;
      width: 40%;
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 1px #040351;
      border-radius: 30px;
      background-color: #ffffff;
      color: #040351;
      cursor: pointer;

      @media screen and (min-width: 768px) {
        width: 30%;
      }
    }
    .game-next-step {
      height: 50px;
      width: 40%;
      margin: 0 10px;
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