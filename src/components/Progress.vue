<template>
  <div class="progress" :style="{ height: total_height + 'px' }">
    <div class="progress-bar" v-for="(stage, index) in progressList"
      v-bind:stage="stage"
      v-bind:index="index"
      v-bind:key="stage.id"
      :style="{ width: calcStageWidth() }"
    >
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Progress',
    data() {
      return {
        total_height: 5,
        stage_num: 0,
        stage_width: 0,
      }
    },
    computed: {
      ...mapGetters({
        progressList: 'getProgressList',
        stageID: 'getStageID'
      }),
    },
    methods: {
      calcStageWidth() {
        this.stage_num = this.stageID.length
        return 100 / this.stage_num + '%'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .progress {
    position: fixed;
    z-index: 9997;
    top: 0;
    left: 0;
    width: 100vw;
    margin-bottom: 0; 
    padding: 0 5px;
    display: flex;
    justify-content: space-around;
    background-color: #ffffff;
    border-radius: 0;
  }
  .progress-bar {
    box-sizing: border-box;
    height: 2px;
    margin: 2px 3px;
    border-radius: 2px;
    background-color: #e8e8e8;
  }
</style>

