import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MazeGrid from '../components/MazeGrid'

class TelengardApp extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { config } = this.props
    return (
      <div>
        Telengard! { config.gridHeight }{ 'X' }{ config.gridWidth }
        <MazeGrid config={config}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { config } = state

  return {
    config
  }
}

export default connect(mapStateToProps)(TelengardApp)
