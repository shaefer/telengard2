import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MazeGrid from '../components/MazeGrid'
import Player from '../components/PlayerInfo'
import GameConsole from '../components/GameConsole'
import Dungeon from '../components/DungeonInfo'
import {Container, Row, Col} from 'react-grid-system'

class TelengardApp extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { dispatch, config, player, gameLog, currentDungeonLevel } = this.props
    return (
      <Container fluid={true}>
        <Row>
          <Col sm={2}>
            Telengard! { config.squareSize }{ 'X' }{ config.squareSize }
            <Player stats={player}/>
            <Dungeon currentDungeonLevel={currentDungeonLevel}/>
          </Col>
          <Col sm={8}>
            <MazeGrid config={config} pos={player.position}/>
          </Col>
          <Col sm={2}>
            <GameConsole dispatch={dispatch} logs={gameLog} playerPos={player.position} config={config}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { config, player, gameLog, currentDungeonLevel } = state

  return {
    config, player, gameLog, currentDungeonLevel
  }
}

export default connect(mapStateToProps)(TelengardApp)
