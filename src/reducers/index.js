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

const playerWithNewPos = (state, newPos) => {
  return {
    ...state,
    position: newPos,
    roomsVisited: {
      ...state.roomsVisited,
      [newPos.asSeed()] : newPos
    }
  } 
}

const player = (state = DefaultPlayer, action) => {
  switch (action.type) {
    case Actions.MOVE_EAST:
      return playerWithNewPos(state, state.position.getPositionToEast());
    case Actions.MOVE_WEST:
      return playerWithNewPos(state, state.position.getPositionToWest());
    case Actions.MOVE_SOUTH:
      return playerWithNewPos(state, state.position.getPositionToSouth());
    case Actions.MOVE_NORTH:
      return playerWithNewPos(state, state.position.getPositionToNorth());
    case Actions.MOVE_DOWN:
      return playerWithNewPos(state, state.position.getPositionBelow());
    case Actions.MOVE_UP:
      return playerWithNewPos(state, state.position.getPositionAbove());
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
    case Actions.MOVE_DOWN:
      state.logs.push("Moved Down");
      return {
        ...state,
        logs: state.logs
      }
    case Actions.MOVE_UP:
      state.logs.push("Moved Up");
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
    case Actions.MOVE_DOWN:
      return {
        ...state,
        level: state.level + 1
      }
    case Actions.MOVE_UP:
      return {
        ...state,
        level: state.level - 1
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  config, player, gameLog, currentDungeonLevel
})

export default rootReducer
