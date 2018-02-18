import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MazeGrid from '../components/MazeGrid'
import Player from '../components/PlayerInfo'
import GameConsole from '../components/GameConsole'
import Dungeon from '../components/DungeonInfo'
import {Container, Row, Col} from 'react-grid-system'
import {keyPressHandler} from '../action-creators'


class TelengardApp extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    this.props.keyPressHandler(e);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { dispatch, config, player, gameLog, gameEngine } = this.props
    return (
      <Container fluid={true}>
        <Row>
          <Col sm={2}>
            Telengard! { config.squareSize }{ 'X' }{ config.squareSize }
            <Player stats={player}/>
            <Dungeon currentDungeonLevel={player.position.z}/>
          </Col>
          <Col sm={8}>
            <MazeGrid config={config} player={player} gameEngine={gameEngine}/>
          </Col>
          <Col sm={2}>
            <GameConsole dispatch={dispatch} logs={gameLog} playerPos={player.position} config={config} />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {keyPressHandler})(TelengardApp)
