import { combineReducers } from 'redux'
import Config from '../models/Config'
import DefaultPlayer from '../models/Player'
import DungeonLevelGenerator from '../models/DungeonLevel'

import * as Actions from '../actions'

const config = (state = Config, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const player = (state = DefaultPlayer, action) => {
  switch (action.type) {
    case Actions.MOVE_EAST:
      return {
        ...state,
        position: state.position.getPositionToEast()
      }
    case Actions.MOVE_WEST:
      return {
        ...state,
        position: state.position.getPositionToWest()
      }
    case Actions.MOVE_SOUTH:
      return {
        ...state,
        position: state.position.getPositionToSouth()
      }
    case Actions.MOVE_NORTH:
      return {
        ...state,
        position: state.position.getPositionToNorth()
      }
    default:
      console.warn('DEFAULT PLAYER reducer: ' + action.type);
      return state
  }
}

const gameLog = (state = {logs:[]}, action) => {
  switch (action.type) {
    case Actions.MOVE_EAST:
      state.logs.push("Moved East");
      return {
        ...state,
        logs: state.logs
      }
    case Actions.MOVE_WEST:
      state.logs.push("Moved West");
      return {
        ...state,
        logs: state.logs
      }
    case Actions.MOVE_SOUTH:
      state.logs.push("Moved South");
      return {
        ...state,
        logs: state.logs
      }
    case Actions.MOVE_NORTH:
      state.logs.push("Moved North");
      return {
        ...state,
        logs: state.logs
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
