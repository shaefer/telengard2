import { combineReducers } from 'redux'
import Config from '../models/Config'
import DefaultPlayer from '../models/Player'
import DungeonLevel0 from '../models/DungeonLevel0'
import Position from '../models/Position'

const config = (state = Config, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const player = (state = DefaultPlayer, action) => {
  switch (action.type) {
    case 'MOVE_EAST':
      console.warn("MOVE EAST for PLAYER reducer");
      return {
        ...state,
        position: Position(state.position.x+1, state.position.y, state.position.z)
      }
    default:
      console.warn('DEFAULT PLAYER reducer: ' + action.type);
      return state
  }
}

const gameLog = (state = {}, action) => {
  switch (action.type) {
    case 'MOVE_EAST':
      console.warn("MOVE EAST for gameConsoleReducer");
      return {
        ...state,
        tookStepEastOnConsole: true
      }
    default:
      console.warn('DEFAULT GAMELOG reducer: ' + action.type);
      return state
  }
}

const currentDungeonLevel = (state = DungeonLevel0, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  config, player, gameLog, currentDungeonLevel
})

export default rootReducer
