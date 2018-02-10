import { combineReducers } from 'redux'
import Config from '../models/Config'
import DefaultPlayer from '../models/Player'
import DungeonLevelGenerator from '../models/DungeonLevel'
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
        position: state.position.getPositionToEast()
      }
    case 'MOVE_WEST':
      console.warn("MOVE WEST for PLAYER reducer");
      return {
        ...state,
        position: state.position.getPositionToWest()
      }
    case 'MOVE_SOUTH':
      console.warn("MOVE SOUTH for PLAYER reducer");
      return {
        ...state,
        position: state.position.getPositionToSouth()
      }
    case 'MOVE_NORTH':
      console.warn("MOVE NORTH for PLAYER reducer");
      return {
        ...state,
        position: state.position.getPositionToNorth()
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
    case 'MOVE_WEST':
      console.warn("MOVE WEST for PLAYER reducer");
      return {
        ...state,
        tookStepWestOnConsole: true
      }
    case 'MOVE_SOUTH':
      console.warn("MOVE SOUTH for PLAYER reducer");
      return {
        ...state,
        tookStepSouthOnConsole: true
      }
    default:
      console.warn('DEFAULT GAMELOG reducer: ' + action.type);
      return state
  }
}

const currentDungeonLevel = (state = DungeonLevelGenerator(0), action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  config, player, gameLog, currentDungeonLevel
})

export default rootReducer
