<template>
  <div class="indicator-wrapper">
    <div class="indicator" :style="{ width: nowProgress + '%' }"></div>
  </div>
</template>
<script>
  import Utils from 'udn-newmedia-utils'

  export default {
    name: 'ReportIndicator',
    data() {
      return {
        totalHeight: 0,
        nowProgress: 0,
        nowMaxProgress: 0,
        current_stage: 0,
      }
    },
    methods: {
      handleProgress () {
        this.totalHeight = $('body')[0].clientHeight - window.innerHeight
        this.nowProgress = window.pageYOffset / this.totalHeight * 100
        this.current_stage = this.nowProgress - this.nowProgress % 10
        
        if (this.current_stage > this.nowMaxProgress) {
          this.nowMaxProgress = this.current_stage;
          
          ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "report_read",
            "eventAction": "scroll",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [page read " + this.current_stage + "%]"
          })
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleProgress)
    },
    destroyed() {
      window.addEventListener('scroll', this.handleProgress)
    }
  }
</script>
<style lang="scss" scoped>
  .indicator-wrapper {
    position: fixed;
    z-index: 9998;
    width: 100%;
    height: 2px;
  }
  .indicator {
    height: 100%;
    width: 100%;
    background-color: #bf2923;
  }
</style>
