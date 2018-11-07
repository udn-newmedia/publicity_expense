<template>
  <header class="header" :style="{ transform: 'translate3d(0,' + header_top + 'px, 0)' }">
    <div class="TheBar" :style="{ backgroundColor: bar_color }">
      <div class="logo_box">
        <a href="https://ubrand.udn.com/ubrand/index" target="_blank" @click="handle_logoGA"><i class="udn-icon udn-icon-logo" :style="{ color: setProps('iconColor') }"></i></a>
        <slot name="logo"></slot>
        <div v-if="stageIndex === 3" class="muted-btn" @click="muteSoundEffect"><img :src="mutedImage" alt=""></div>
      </div>
      <div class="menu_box">
        <div class="menu-eleciton-zone"><a href="https://udn.com/vote2018/index" target="_blank" @click="sendGA()">選戰專區</a></div>
        <div class="menu-watch-report" @click="hadleReadArticle()">看報導</div>
        <div class="go-play-game"><a href="https://udn.com/upf/newmedia/2018_data/2018election/game1/index.html">去玩遊戲</a></div>
      </div>
    </div>
  
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import setProps from '@/mixin/setProps.js'
import Utils from 'udn-newmedia-utils'
import * as d3 from 'd3'

export default {
  name: 'HeadBar',
  mixins: [setProps],
  props: {
    headColor: {
      type: String,
      default: '#fff'
    },
    jsonProps: {
      type: Object,
      default: null
    },
    iconColor: {
      type: String,
      default: '#000'
    }
  },
  data () {
    return {
      isIE: false,
      canNavScroll: false,
      header_top: 0,
      bar_color: 'transparent',
      isMuted: false
    }
  },
  computed: {
    ...mapGetters({
      character: 'getCharacter',
        readArticle: 'getReadArticle',
        stageIndex: 'getStageIndex',
    }),
    showMenu () {
      if (this.$slots.default === undefined) {
        return false
      } else {
        return true
      }
    },
    mutedImage () {
      return this.isMuted === true ? './static/off.png' : './static/on.png'
    }
  },
  methods: {
    ...mapActions([
      'setReadArticle',
      'setGameState',
      'setStageIndex'
    ]),
    handle_logoGA () {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "hamburger",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [圓形logo點擊]]"
      })
    },
    hadleReadArticle() {
      document.getElementsByClassName('header')[0].style['position'] = 'fixed'
      document.getElementsByClassName('game-wrapper')[0].style['display'] = 'none'
      document.getElementsByClassName('menu-watch-report')[0].style['display'] = 'none'
      document.getElementsByClassName('go-play-game')[0].style['display'] = 'block'
      this.setReadArticle(true)
      this.setStageIndex()

      
      document.getElementsByTagName('body')[0].style['overflow-y'] = 'scroll'
      $('html, body').animate({scrollTop: $('#article-anchor')[0].offsetTop}, 1111)
    },
    muteSoundEffect () {
      if (this.isMuted === false) {
        this.isMuted = true
        $('#sound-effect').prop('muted', true);
      } else {
        this.isMuted = false
        $('#sound-effect').prop('muted', false);
      }
    },
    sendGA(catogory, label) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "headbar",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + vm.$slots.default[i].elm.href + "][" + vm.$slots.default[i].elm.innerHTML + "] [HeadBar 外連點擊]"
      })
    }
  },
  created () {
    if (Utils.detectIE()) {
      Utils.detectIE() < 16 ? this.isIE = true : this.isIE = false
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  position: relative;
  z-index: 9990;
  width: 100%;
  height: 53px;
  background-color: #ffffff;
  transition: transform 222ms ease-out, height 444ms linear;
}
.TheBar{
  position: relative;
  z-index: 50;
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 80px;
}
.logo_box{
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;
}
.other_logo{
  max-width: 220px;
  max-height: 48px;
}
.udn-icon-logo{
  font-size: 36px;
  color: #000;
  transition: transform 288ms ease-in;
  transform: rotate(0deg);
  text-decoration: none;
  &:hover{
    transform: rotate(16deg);
  }
}
.muted-btn {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    height: 30px;
    margin: 0 10px;
  }
}
// 選單漢堡頁面
.menu_box{
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  width: 60%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 18px;
  color: #646363;
  cursor: pointer;
  div {
    padding: 10px;
  }
  .menu-watch-report {
    display: none;
    opacity: 0;
  }
  .menu-eleciton-zone {
    a {
      color: #646363
    }
  }
  .go-play-game {
    display: none;
    a {
      color: #646363
    }
  }
}
</style>
