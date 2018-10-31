export const setAnchorMenu = (state, data) => {
  state.anchorMenu.push(data)
}
export const updateAnchorMenuItem = (state, data) => {
  let tIndex = state.anchorMenu.findIndex((element) => {
    return element.id === data.id
  })
  state.anchorMenu[tIndex] = data
}
export const resetAnchorActive = (state) => {
  for (let i = 0; i < state.anchorMenu.length; i++) {
    state.anchorMenu[i].isActive = false
  }
}
export const setAnchorActive = (state, index) => {
  state.anchorMenu[index].isActive = true
}
export const selectCharacter = (state, catogory) => {
  state.character = catogory
}
export const setWidth = (state, width) => {
  state.DEVICE_WIDTH = width
}
export const updateProcessList = (state, index) => {
  state.processList[index] = true
}
export const setIndex = (state) => {
  state.stageIndex += 1
}
export const updateGameState = (state, gameState) => {
  state.gameOver = gameState
}
export const updateReadArticle = (state, readArticleState) => {
  state.readArticle = readArticleState
}
export const updateTeachingGame = (state, teachingGameState) => {
  state.teachingGame = teachingGameState
}
export const changeItemsPath = (state, path) => {
  state.items.bus_ad.bm = 'static/animated_items/bus_ad/' + path + '/data.json'
  state.items.car.bm = 'static/animated_items/car/' + path + '/data.json'
  state.items.fb_group.bm = 'static/animated_items/fb_group/' + path + '/data.json'
  state.items.flag.bm = 'static/animated_items/flag/' + path + '/data.json'
  state.items.kanban.bm = 'static/animated_items/kanban/' + path + '/data.json'
  state.items.tv_ad.bm = 'static/animated_items/tv_ad/' + path + '/data.json'
}
export const updateFinalResult = (state, cost) => {
  state.finalTotalCost = cost
}
export const updateFinalList = (state, obj) => {
  state.items[obj.id].final = obj.amount
}
