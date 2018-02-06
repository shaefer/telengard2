import React from 'react'
import PropTypes from 'prop-types'

const PlayerDisplay = ({ stats }) => {
  //split out hp etc.

  return (
    <div className="playerInfo">
      <div>Hp: {stats.hp}</div>
      <div>Position: {stats.position.toString()}</div>
      <div>Str: {stats.strength}</div>
      <div>Dex: {stats.dexterity}</div>
      <div>Con: {stats.constitution}</div>
      <div>Wis: {stats.wisdom}</div>
      <div>Int: {stats.intelligence}</div>
      <div>Cha: {stats.charisma}</div>
      <div>Perception: {stats.perception}</div>
    </div>
  );
}

PlayerDisplay.propTypes = {
  stats: PropTypes.object.isRequired
}

export default PlayerDisplay
