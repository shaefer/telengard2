import React from 'react'
import PropTypes from 'prop-types'

const DungeonInfo = ({ currentDungeonLevel }) => {
  return (
    <div className="dungeonInfo">
      <div>DungeonLevel: {currentDungeonLevel}</div>
    </div>
  );
}

DungeonInfo.propTypes = {
  currentDungeonLevel: PropTypes.object.isRequired
}

export default DungeonInfo
