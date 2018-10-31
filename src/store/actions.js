// 從 <Anchor> 傳物件近來vuex
// anchorItem = {
//   "id": this.setId,
//   "title": this.setProps('title'),
//   "isActive": true
// }
export const addAnchor = function ({ commit }, anchorItem) {
  commit('setAnchorMenu', anchorItem)
}
export const updateAnchor = function ({ commit }, anchorItem) {
  commit('updateAnchorMenuItem', anchorItem)
}
export const resetAnchorActive = ({ commit }) => {
  commit('resetAnchorActive')
}
export const setAnchorActive = ({ commit }, index) => {
  commit('setAnchorActive', index)
}
export const setCharacter = ({ commit }, catogory) => {
  commit('selectCharacter', catogory)
}
export const setDeviceWidth = ({ commit }, data) => {
  commit('setWidth', data.width)
}
export const setStageIndex = ({ commit }) => {
  commit('setIndex')
}
export const setItemsPath = ({ commit }, index) => {
  let pathTable = {
    1: 'mayor',
    2: 'parliamentary',
    3: 'village'
  }
  commit('changeItemsPath', pathTable[index])
}
export const updateProcessList = ({ commit }, index) => {
  document.getElementsByClassName('progress-bar')[index - 1].style['background-color'] = '#434343'
  commit('updateProcessList', index)
}
export const setGameState = ({ commit }, gameState) => {
  commit('updateGameState', gameState)
}
export const setReadArticle = ({ commit }, readArticleState) => {
  commit('updateReadArticle', readArticleState)
}
export const setTeachingGame = ({ commit }, teachingGameState) => {
  commit('updateTeachingGame', teachingGameState)
}
export const setFinalResult = ({ commit }, cost) => {
  commit('updateFinalResult', cost)
}
export const setFinalList = ({ commit }, obj) => {
  commit('updateFinalList', obj)
}
