<template>
  <div class="teaching-video-wrapper">
    <div class="teaching-video-background"></div>
    <video class="teaching-video" ref="videoRef" height="70%" autoplay controlsList="nodownload" playsinline webkit-playsinline="true">
      <source src="static/mobile.mp4" type="video/mp4">
    </video>
    <!-- <div class="ignore-btn" @click="ignoreTeaching()"><img src="static/close.png" alt=""></div> -->
    <div class="ignore-btn" @click="ignoreTeaching()">朕知道了</div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'TeachingVideo',
    methods: {
      ...mapActions([
        'setTeachingGame'
      ]),
      ignoreTeaching() {
        this.setTeachingGame(false)
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
      opacity: 0.9;
      background-color: #000000;
    }

    .teaching-video {
      position: absolute;
      width: 80%;
      height: 80%;
    }

    // .ignore-btn {
    //   position: absolute;
    //   z-index: 9999;
    //   top: 15%;
    //   right: 15%;

    //   img {
    //     width: 50px;
    //   }
    // }

    .ignore-btn {
      position: absolute;
      bottom: 5%;
      height: 50px;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      background-color: #ffffff;
      color: #000000;
      cursor: pointer;

      @media screen and (min-width: 768px) {
        width: 30%;
      }
    }
  }
</style>
