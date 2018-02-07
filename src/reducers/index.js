import { combineReducers } from 'redux'
import Config from '../models/Config'
import DefaultPlayer from '../models/Player'

const config = (state = Config, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const player = (state = DefaultPlayer, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const gameLog = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  config, player, gameLog
})

export default rootReducer
