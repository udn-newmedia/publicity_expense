import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  processList: [true, false, false, false],
  stageID: ['introduction', 'character', 'region-info', 'game'],
  stageIndex: 0,
  character: 1,
  HEADBAR_HEIGHT: 60,
  DEVICE_WIDTH: 0,
  gameOver: false,
  readArticle: false,
  teachingGame: false,
  items: {
    'tissue': {
      logo: 'static/items/1.svg',
      bm: 'static/animated_items/tissue/data.json',
      name: '面紙',
      unit: '5000包',
      unitAmount: 5000,
      cost: 1,
      zIndex: 14,
      coordinate: [9, 8],
      translate: '',
      key: 1,
      final: 0
    },
    'mask': {
      logo: 'static/items/3.svg',
      bm: 'static/animated_items/mask/data.json',
      name: '口罩',
      unit: '5000個',
      unitAmount: 5000,
      cost: 2,
      zIndex: 8,
      coordinate: [0, 0],
      // coordinate: [4, 10],
      translate: '',
      key: 2,
      final: 0
    },
    'melon': {
      logo: 'static/items/5.svg',
      bm: 'static/animated_items/melon/data.json',
      name: '菜瓜布',
      unit: '3000塊',
      unitAmount: 3000,
      cost: 3,
      zIndex: 15,
      coordinate: [10, 6],
      translate: '',
      key: 3,
      final: 0
    },
    'pen': {
      logo: 'static/items/2.svg',
      bm: 'static/animated_items/pen/data.json',
      name: '筆',
      unit: '3000支',
      unitAmount: 3000,
      cost: 4,
      zIndex: 3,
      coordinate: [11, 8],
      translate: '',
      key: 4,
      final: 0
    },
    'bag': {
      logo: 'static/items/4.svg',
      bm: 'static/animated_items/bag/data.json',
      name: '購物袋',
      unit: '3000個',
      unitAmount: 3000,
      cost: 5,
      zIndex: 9,
      coordinate: [0, 0],
      // coordinate: [5, 8],
      translate: '',
      key: 5,
      final: 0
    },
    'kanban': {
      logo: 'static/items/6.svg',
      bm: 'static/animated_items/kanban/mayor/data.json',
      name: '看板',
      unit: '10面',
      unitAmount: 10,
      cost: 20000,
      zIndex: 6,
      coordinate: [6, 3],
      translate: '',
      key: 6,
      final: 0
    },
    'bus_ad': {
      logo: 'static/items/7.svg',
      bm: 'static/animated_items/bus_ad/mayor/data.json',
      name: '公車廣告',
      unit: '10面',
      unitAmount: 10,
      cost: 10000,
      zIndex: 2,
      coordinate: [11, 4],
      translate: '',
      key: 7,
      final: 0
    },
    'car': {
      logo: 'static/items/8.svg',
      bm: 'static/animated_items/car/mayor/data.json',
      name: '宣傳車',
      unit: '1輛',
      unitAmount: 1,
      cost: 50000,
      zIndex: 13,
      coordinate: [10, 15],
      translate: '',
      key: 8,
      final: 0
    },
    'flag': {
      logo: 'static/items/9.svg',
      bm: 'static/animated_items/flag/mayor/data.json',
      name: '關東旗',
      unit: '100面',
      unitAmount: 100,
      cost: 70,
      zIndex: 12,
      coordinate: [5, 14],
      translate: '',
      key: 9,
      final: 0
    },
    'campaign': {
      logo: 'static/items/10.svg',
      bm: 'static/animated_items/campaign/data.json',
      name: '萬人活動',
      unit: '1場',
      unitAmount: 1,
      cost: 1000000,
      zIndex: 0,
      coordinate: [12, 10],
      translate: '',
      key: 10,
      final: 0
    },
    // 'campaign_2': {
    //   bm: 'static/animated_items/campaign_2/data.json',
    //   zIndex: 0,
    //   coordinate: [0, 10],
    //   translate: ''
    // },
    'tv_ad': {
      logo: 'static/items/11.svg',
      bm: 'static/animated_items/tv_ad/mayor/data.json',
      name: '電視廣告',
      unit: '1支',
      unitAmount: 1,
      cost: 6000000,
      zIndex: 6,
      coordinate: [8, 17],
      translate: '',
      key: 11,
      final: 0
    },
    'line': {
      logo: 'static/items/12.svg',
      bm: 'static/animated_items/line/data.json',
      name: 'Line@',
      unit: '半年份',
      unitAmount: 1,
      cost: 10000,
      zIndex: 4,
      coordinate: [5, 17],
      translate: '',
      key: 12,
      final: 0
    },
    'fb_group': {
      logo: 'static/items/13.svg',
      bm: 'static/animated_items/fb_group/mayor/data.json',
      name: '臉書代操',
      unit: '半年',
      unitAmount: 1,
      cost: 60000,
      zIndex: 10,
      coordinate: [5, 4],
      translate: '',
      key: 13,
      final: 0
    },
    'chatbot': {
      logo: 'static/items/14.svg',
      bm: 'static/animated_items/chatbot/data.json',
      name: '社群聊天機器人',
      unit: '',
      unitAmount: 1,
      cost: 300000,
      zIndex: 11,
      coordinate: [6, 6],
      translate: '',
      key: 14,
      final: 0
    },
    'video': {
      logo: 'static/items/15.svg',
      bm: 'static/animated_items/video/data.json',
      name: '社群短影音',
      unit: '1支',
      unitAmount: 1,
      cost: 20000,
      unit: '1支',
      zIndex: 5,
      coordinate: [7, 17],
      translate: '',
      key: 15,
      final: 0
    }
  },
  finalTotalCost: 0
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
