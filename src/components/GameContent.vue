<template>
  <div class="game-wrapper">
    <div class="game-container">
      <div class="game">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    name: 'GameContainer',
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters({
        isEnterGame: 'getEnterGame',
        HEADBAR_HEIGHT: 'getHeadbarHeight'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .game-wrapper {
    width: 100%;
    height: calc(100vh - 53px);
    background-color: #fff;
    // background-color: lightblue;

    .game-container {
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      @media (min-width: 769px) and (max-width: 1023px) {
        width: 880px;
      }
      @media screen and (min-width: 1024px) {
        width: 880px;
      }

      .game {
        width: 400%;
        // width: 500%;
        display: flex;
        transition: transform .666s ease-in-out;
        @media (min-width: 769px) and (max-width: 1023px) {
          // width: 4400px;
          width: 3520px;
        }
        @media screen and (min-width: 1024px) {
          // width: 4400px;
          width: 3520px;
        }
      }
    }
  }
</style>
