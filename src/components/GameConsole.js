import React from 'react'
import PropTypes from 'prop-types'

const GameConsole = ({ logs }) => {
  return (
    <div className="chatLog">
      <span>https://www.npmjs.com/package/react-console-component</span>
    </div>
  );
}

GameConsole.propTypes = {
  logs: PropTypes.array.isRequired
}

export default GameConsole
