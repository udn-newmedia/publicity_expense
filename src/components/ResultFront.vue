<template>
  <div class="result-wrapper">
    <div style="width: 100%; height: 53px"></div>
    <div class="result-container">
      <h2>你總共花了</h2>
        <div class="total-cost-wrapper">
          <span class="total-cost"></span>
          <span class="total-cost-unit">萬元</span>
        </div>
      <h2>宣傳費</h2>
    </div>
  </div>  
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'
  import * as d3 from 'd3'

  export default {
    name: 'Result',
    computed: {
      ...mapGetters({
        stageIndex: 'getStageIndex',
        finalCost: 'getFinalCost'
      })
    },
    data() {
      return {
        finalTotalCost: 0
      }
    },
    methods: {

    },
    mounted() {

      let self = this
      let costNumberPromise = new Promise(function(resolve, reject) {
        self.finalTotalCost = self.finalCost * 0.0001
        resolve(self.finalTotalCost)
      })

      costNumberPromise.then(function(cost) {
        d3.select('.total-cost')
          .transition()
          .duration(2000)
          .tween("number", function() {
            let i = d3.interpolateRound(0, cost);
            return function(t) {
              d3.select('.total-cost')._groups[0][0].textContent = i(t)
            };
          });
      })
    }
  }

</script>

<style lang="scss" scoped>

  .result-wrapper {
    position: relative;
    z-index: 20;
    width: 100%;
    height: 65vh;
  }
  .result-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    padding: 0 5%;
  }

  .total-cost-wrapper {
    background-color: #ff4e00;
    padding: 0 10px;
    .total-cost {
      font-size: 55px;
      font-weight: 700;
      line-height: 1.1;
    }
    .total-cost-unit {
      font-size: 26px;
      font-weight: 700;
      line-height: 1.1;
    }
  }

</style>

