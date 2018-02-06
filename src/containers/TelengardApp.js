import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MazeGrid from '../components/MazeGrid'
import Player from '../components/PlayerDisplay'

class TelengardApp extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { config, player } = this.props
    return (
      <div>
        Telengard! { config.gridHeight }{ 'X' }{ config.gridWidth }
        <Player stats={player}/>
        <MazeGrid config={config}/>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { config, player } = state

  return {
    config, player
  }
}

export default connect(mapStateToProps)(TelengardApp)
