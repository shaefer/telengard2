import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {canMoveEastHandler, canMoveWestHandler, canMoveNorthHandler, canMoveSouthHandler} from '../action-creators'

const GameConsole = ({ gameLog, playerPos, config, canMoveEastHandler, canMoveWestHandler, canMoveNorthHandler, canMoveSouthHandler }) => {
  return (
    <div className="chatLog">
      <button onClick={canMoveEastHandler}>Move East</button>
      <button onClick={canMoveWestHandler}>Move West</button>
      <button onClick={canMoveSouthHandler}>Move South</button>
      <button onClick={canMoveNorthHandler}>Move North</button>
      {gameLog.logs.map(item => <div>{item}</div>)}
    </div>
  );
}

GameConsole.propTypes = {
  logs: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  const { config, player, gameLog, currentDungeonLevel } = state

  return {
    config, player, gameLog, currentDungeonLevel
  }
}

export default connect(mapStateToProps, {canMoveEastHandler, canMoveWestHandler, canMoveNorthHandler, canMoveSouthHandler})(GameConsole)
