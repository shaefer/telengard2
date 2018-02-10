import React from 'react'
import PropTypes from 'prop-types'

const PlayerInfo = ({ stats }) => {
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
      <div>Rooms Visited: {stats.roomsVisited.length}</div>
      <div>Monsters Killed: {stats.monstersKilled.length}</div>
      <div>Potions: {stats.potions.join(", ")}</div>
      <div>Weapons: {stats.weapons.join(", ")}</div>
      <div>Armor: {stats.armors.join(", ")}</div>
      <div>Exp: {stats.experience}</div>
    </div>
  );
}

PlayerInfo.propTypes = {
  stats: PropTypes.object.isRequired
}

export default PlayerInfo
