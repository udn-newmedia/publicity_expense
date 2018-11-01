<template>
  <div class="result-wrapper">
    <Content>
      <p style="text-align: center"><b>{{resultDescriptionText[character-1]}}</b></p>
      <div class="election-level-wrapper">
        <div class="election-level">
          <div class="level-line"></div>
          <div class="level-village">
            <div class="level-village-circle"></div>
            <div style="width:1px; height:75px; background-color:#9D9C9C;"></div>
            <div class="level-village-number">0</div>
            <div class="level-village-position">里長</div>
          </div>
          <div class="level-parliamentary">
            <div class="level-parliamentary-circle"></div>
            <div style="width:1px; height:25px; background-color:#9D9C9C;"></div>
            <div class="level-parliamentary-number">0</div>
            <div class="level-parliamentary-position">議員</div>
          </div>
          <div class="level-mayor">
            <div class="level-mayor-circle"></div>
            <div class="level-mayor-number">0</div>
            <div class="level-mayor-position">市長</div>
          </div>
          <div class="level-you">
            <div class="level-you-number">0</div>
            <div class="level-you-position">你</div>
            <div class="level-you-circle"></div>
          </div>
        </div>
      </div>
      <p><br></p>
      <p>根據聯合報採訪多位候選人和政治公關業者，估計六都市長候選人競選經費上看1.5億元；台北市議員候選人選舉花費至少500萬元。台北市里長候選人競選經費約5萬到10萬元。</p>
      <p><br></p>

      <div class="list-table">
        <div class="list-catogory-title">文宣小物</div>
        <div class="list-catogory">
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div>
            </div>
            <div class="list-catogory-description">1-2元／包</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div>
            </div>
            <div class="list-catogory-description">2-3元／個</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div>
            </div>
            <div class="list-catogory-description">3-4元／塊</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div>
            </div>
            <div class="list-catogory-description">4-5元／支</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div>
            </div>
            <div class="list-catogory-description">5元／個</div>
            <div class="list-catogory-amount">0</div>
          </div>
        </div>
        <div class="list-catogory-title">大型宣傳</div>
        <div class="list-catogory">
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div></div>
            <div class="list-catogory-description">每月租金：約2-3萬元／面*10面<br>製作加吊掛費：約1萬元／面*10面</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div></div>
            <div class="list-catogory-description">每月租金：約1萬元／面*10面</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div></div>
            <div class="list-catogory-description">約5-6萬元／月</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div></div>
            <div class="list-catogory-description">70元／面</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div></div>
            <div class="list-catogory-description">約100-200萬元／場</div>
            <div class="list-catogory-amount">0</div>
          </div>
        </div>
        <div class="list-catogory-title">網路電視</div>
        <div class="list-catogory">
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div></div>
            <div class="list-catogory-description">製作費加上託播費：約600-900萬元／支（註1）</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div></div>
            <div class="list-catogory-description">1萬元／月*6個月（註2）</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div></div>
            <div class="list-catogory-description">約6-8萬元／月*6個月（註3）</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div></div>
            <div class="list-catogory-description">約30-40萬元（註4）</div>
            <div class="list-catogory-amount">0</div>
          </div>
          <div class="list-catogory-row">
            <div class="list-catogory-name">
              <div class="list-catogory-name-first"></div>
              <div class="list-catogory-name-second"></div></div>
            <div class="list-catogory-description">約2-3萬元／支</div>
            <div class="list-catogory-amount">0</div>
          </div>
        </div>
        <div class="list-catogory-sum">
          <div class="list-catogory-sum-text-wrapper">
            <span class="list-catogory-sum-text">總計</span>
          </div>
          <div class="list-catogory-sum-amount-wrapper">
            <span class="list-catogory-sum-amount">{{finalTotalCost}}</span>
            <span class="list-catogory-sum-unit">萬元</span>
          </div>
        </div>
      </div>
      <p><br></p>
      <p>註1：一般電視廣告託播費是製作費的3-5倍，若以一支電視廣告製作費約150萬元估算，託播費約450萬到600萬元，製作費加上託播費合計約600萬到900萬元。</p>
      <p>註2：Line@2018選舉專案，收費方式以粉絲人數計算，10萬人以下每月1萬元；10萬-30萬人每月3萬元；30萬-100萬人每月5萬元。Line@選舉專案帳號需一次購買6個月。</p>
      <p>註3：請公關公司代操臉書粉絲專頁，一個月收費約6-8萬元，通常包括臉書廣告投放費用每月約5000-8000元。</p>
      <p>註4：社群聊天機器人費用約6-7萬元／月，半年費用約30-40萬元。</p>
      <p><br></p>
      <div class="result-btn-wrapper">
        <a class="result-share-btn" href="https://www.facebook.com/sharer/sharer.php?u=https://www.udn.com"><div>分享遊戲</div></a>
        <div class="result-next-step" @click="hadleReadArticle()">看報導</div>
      </div>
    </Content>
  </div>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'
  import * as d3 from 'd3'

  import Content from '@/components/Content'

  export default {
    name: 'Result',
    components: {
      Content
    },
    computed: {
      ...mapGetters({
        stageIndex: 'getStageIndex',
        finalCost: 'getFinalCost',
        items: 'getItems',
        character: 'getCharacter'
      })
    },
    data() {
      return {
        finalTotalCost: 0,
        finalTotalList: [],
        resultDescriptionText: ['台北市長候選人選舉經費約1.5億元', '台北市議員候選人選舉經費約500萬元', '台北市里長候選人選舉經費約5萬元']
      }
    },
    methods: {
      ...mapActions([
        'setStageIndex',
        'updateProcessList',
        'setReadArticle'
      ]),
      calcDistance(isLarger, thisCost, yourCost) {
        let ratio
        if (isLarger) {
          ratio = yourCost * 0.0114
        } else {
          ratio = 10000 * 0.0114
        }

        return thisCost / ratio
      },
      handleLevel(cost) {

        let a = ['village', 'parliamentary', 'mayor', 'you']
        let c = {
          'village' : 5,
          'parliamentary' : 300,
          'mayor' : 10000,
          'you' : cost
        }
        
        let isLarger = cost > 10000 ? true : false
        let translateDistance = d3.select('.level-mayor')._groups[0][0].clientHeight * 0.5
        for( let i in a ) {
          d3.select('.level-' + a[i] + '-number')
            .transition()
            .duration(1111)
            .tween("number", function() {
              let k = d3.interpolateRound(0, c[a[i]]);
              return function(t) {
                if(k(t) >= 10000) {
                  d3.select('.level-' + a[i] + '-number')._groups[0][0].textContent = k(t) / 10000 + '億'
                } else {
                  d3.select('.level-' + a[i] + '-number')._groups[0][0].textContent = k(t) + '萬'
                }
              }
            })
            if(a[i] === 'you') {
              d3.select('.level-' + a[i])
                .style('transform', 'translateY(' + (-translateDistance + 10) + 'px)')
                .style('left', 0)
                .transition()
                .duration(1111)
                .style('left', this.calcDistance(isLarger, c[a[i]], cost) + '%')
            } else {
              d3.select('.level-' + a[i])
                .style('transform', 'translateY(' + (translateDistance - 10) + 'px)')
                .style('left', 0)
                .transition()
                .duration(1111)
                .style('left', this.calcDistance(isLarger, c[a[i]], cost) + '%')
            }
        }

        d3.select('.level-line')
          .style('transform', 'translateY(' + translateDistance + 'px)')
      },
      handleList(cost, items) {
        let j = 0
        for(let i in items) {
          d3.selectAll('.list-catogory-name-first')._groups[0][j].textContent = items[i].name
          d3.selectAll('.list-catogory-name-second')._groups[0][j].textContent = items[i].unit
          d3.selectAll('.list-catogory-amount')._groups[0][j].textContent = '*' + items[i].final
          j++
        }
      },
      hadleReadArticle() {
        this.setReadArticle(true)
        this.setStageIndex()
        // this.updateProcessList(this.stageIndex)
        $('.menu-watch-report')[0].style['display'] = 'none'
        $('.go-play-game')[0].style['display'] = 'block'
        $('.header')[0].style.position = 'fixed'
        $('html, body').animate({scrollTop: $('#article-anchor')[0].offsetTop}, 1111)

      }
    },
    mounted() {
      let self = this
      let finalResultPromise = new Promise(function(resolve, reject) {        
        self.finalTotalCost = self.finalCost / 10000

        resolve(self.finalTotalCost)
      })

      finalResultPromise.then(function(cost) {
        self.handleLevel(cost)
        self.handleList(cost, self.items)
      })
    }
  }

</script>

<style lang="scss" scoped>
  .result-wrapper {
    position: relative;
    z-index: 20;
    width: 100%;

    h3 {
      text-align: center;
      font-weight: 700;
    }
    .article_container {
      padding-top: 0;
    }
  }
  .election-level-wrapper {
    .election-level {      
      width: 100%;
      height: 20vh;
      padding: 20px 0;
      margin: 50px 0;


      .level-line {
        position: relative;
        width: 100%;
        height: 1px;
        border: solid 1px #dcdcdc;
        background-color: #dcdcdc;
      }

      .level-village {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;      

        .level-village-position {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 50px;
          transform: translateX(20px);
        }
        .level-village-circle {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          opacity: 0.7;
          background-color: #040351;
        }
        .level-village-number {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 50px;
          transform: translateX(20px);
        }
      }

      .level-parliamentary {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        left: 100px;
        
        .level-parliamentary-position {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 50px;
          transform: translateX(20px);
        }
        .level-parliamentary-circle {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          opacity: 0.7;
          background-color: #040351;
        }
        .level-parliamentary-number {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 50px;
          transform: translateX(20px);
        }
      }

      .level-mayor {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .level-mayor-position {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
        }
        .level-mayor-circle {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          opacity: 0.7;
          background-color: #040351;
        }
        .level-mayor-number {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
        }
      }
      
      .level-you {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .level-you-position {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          color: #ff4e00;
        }
        .level-you-circle {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          opacity: 0.7;
          background-color: #ff4e00;
        }
        .level-you-number {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          white-space: nowrap;
          color: #ff4e00;
        }
      }

      .level-unit {
        position: relative;
        top: 100%;
        text-align: end;
        font-size: 14px;
        color: #8e8d8d;
      }
    }
  }

  .list-table {
    width: 100%;
    margin-bottom: 30px;
    .list-catogory-sum {
      display: flex;
      padding: 20px 0;
      width: 100%;

      .list-catogory-sum-text-wrapper {
        width: 10%;
        .list-catogory-sum-text {
          width: 10%;
        }
      }
      .list-catogory-sum-amount-wrapper {
        text-align: end;
        width: 90%;
        .list-catogory-sum-amount {
          width: 80%;
          text-align: end;
          font-size: 50px;
          font-weight: 700;
          color: #ff4e00;
        }
        .list-catogory-sum-unit {
          width: 10%;
          font-size: 24px;
        }
      }

    }

  }
  .list-catogory-title {
    font-size: 18px;
    width: 80px;
    margin-top: 10px; 
    text-align: center;
    background-color: #040351;
    color: #ffffff
  }
  .list-catogory-row {
    display: flex;
    width: 100%;
    padding: 5px 0;
    .list-catogory-name {
      width: 40%;
      border-bottom: solid 1px #dcdcdc;
    }
    .list-catogory-description {
      width: 40%;
      border-bottom: solid 1px #dcdcdc;
    }
    .list-catogory-amount {
      width: 20%;
      border-bottom: solid 1px #dcdcdc;
      text-align: end;
      color: #ff4e00;
    }
  }

  .result-btn-wrapper {
    position: relative;
    z-index: 3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .result-share-btn {
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
    .result-next-step {
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

