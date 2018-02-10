import React from 'react'
import PropTypes from 'prop-types'

import { moveEast, moveWest, moveSouth, moveNorth } from '../actions'

import { EastMoveAllowed, WestMoveAllowed, SouthMoveAllowed, NorthMoveAllowed } from '../models/DungeonBuilder'

const CanMove = (dispatch, moveFunc, moveAllowedFunc, pos, config) => {
  if (moveAllowedFunc(pos, config)) dispatch(moveFunc(pos));
}

const GameConsole = ({ dispatch, logs, playerPos, config }) => {
  return (
    <div className="chatLog">
      <button onClick={e => CanMove(dispatch, moveEast, EastMoveAllowed, playerPos, config)}>Move East</button>
      <button onClick={e => CanMove(dispatch, moveWest, WestMoveAllowed, playerPos, config)}>Move West</button>
      <button onClick={e => CanMove(dispatch, moveSouth, SouthMoveAllowed, playerPos, config)}>Move South</button>
      <button onClick={e => CanMove(dispatch, moveNorth, NorthMoveAllowed, playerPos, config)}>Move North</button>
      <span>https://www.npmjs.com/package/react-console-component</span>
    </div>
  );
}

GameConsole.propTypes = {
  logs: PropTypes.object.isRequired
}

export default GameConsole
