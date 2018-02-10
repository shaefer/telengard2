import React from 'react'
import PropTypes from 'prop-types'

import { moveEast } from '../actions'

import { EastMoveAllowed } from '../models/DungeonBuilder'

const CanMoveEast = (dispatch, moveEast, pos, config) => {
  if (EastMoveAllowed(pos, config)) dispatch(moveEast(pos));
}

const GameConsole = ({ dispatch, logs, playerPos, config }) => {
  return (
    <div className="chatLog">
      <button onClick={e => CanMoveEast(dispatch, moveEast, playerPos, config)}>Move East</button>
      <span>https://www.npmjs.com/package/react-console-component</span>
    </div>
  );
}

GameConsole.propTypes = {
  logs: PropTypes.object.isRequired
}

export default GameConsole
