import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {canMoveEastHandler, canMoveWestHandler, canMoveNorthHandler, canMoveSouthHandler, canMoveDownHandler, canMoveUpHandler, floodHandler} from '../action-creators'

import Room from '../models/Room'

const Times = (func, num) => {
  for (let i = 0; i<num; i++) {
    func();
  }
}

const GameConsole = ({ gameLog, player, config, canMoveEastHandler, canMoveWestHandler, canMoveNorthHandler, canMoveSouthHandler, canMoveDownHandler, canMoveUpHandler, floodHandler }) => {

  const room = Room(player.position, config);
  const downButton = (room.hasStairsDown) ? <button onClick={canMoveDownHandler}>Move Down</button> : "";
  const upButton = (room.hasStairsUp(Room(room.position.getPositionAbove(), config))) ? <button onClick={canMoveUpHandler}>Move Up</button> : "";

  return (
    <div className="chatLog">
      <button onClick={canMoveEastHandler}>Move East</button>
      <button onClick={canMoveWestHandler}>Move West</button>
      <button onClick={canMoveSouthHandler}>Move South</button>
      <button onClick={canMoveNorthHandler}>Move North</button>
      <button onClick={floodHandler}>Random</button>
      <button onClick={() => Times(floodHandler, 2000)}>Random X 2000</button>
      {downButton}
      {upButton}

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

export default connect(mapStateToProps, {canMoveEastHandler, canMoveWestHandler, canMoveNorthHandler, canMoveSouthHandler, canMoveDownHandler, canMoveUpHandler, floodHandler})(GameConsole)
