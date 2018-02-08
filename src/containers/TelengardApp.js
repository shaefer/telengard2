import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MazeGrid from '../components/MazeGrid'
import Player from '../components/PlayerDisplay'
import GameConsole from '../components/GameConsole';
import {Container, Row, Col} from 'react-grid-system'

class TelengardApp extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { config, player, gameLog } = this.props
    return (
      <Container fluid={true}>
        <Row>
          <Col sm={2}>
            Telengard! { config.squareSize }{ 'X' }{ config.squareSize }
            <Player stats={player}/>
          </Col>
          <Col sm={8}>
            <MazeGrid config={config}/>
          </Col>
          <Col sm={2}>
            <GameConsole logs={gameLog}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { config, player, gameLog } = state

  return {
    config, player, gameLog
  }
}

export default connect(mapStateToProps)(TelengardApp)
