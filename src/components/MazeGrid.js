import React from 'react'
import PropTypes from 'prop-types'
import Position from '../models/Position'
import Room from '../models/Room'

const roomDetails = (config, pos) => {
  return (config.displayRoomDetails) ? <div><span>{pos.toString()}</span></div> : "";
}

const playerImg = (isCenter) => {
  return isCenter ? <img src='./images/barbarian_sq.png' className="playerBarbarian" alt="Player Position"/> : "";
}

const feature = (feature, position) => {
  const featureImg = (feature !== undefined) ? `./images/${feature}.png` : "";
  const featureClassName = feature + " feature";
  const featureJsx = (feature && position.isInBounds()) ? <img src={featureImg} className={featureClassName} alt={feature}/> : "";
  return featureJsx;
}

const wallStyles = (room, position) => {
  let gridWallStyle = " ";
  if (position.isInBounds()) {
    gridWallStyle += room.hasWallToEast ? "hasEastWall " : "noEastWall ";
    gridWallStyle += room.hasWallToWest ? "hasWestWall " : "noWestWall ";
    gridWallStyle += room.hasWallToSouth ? "hasSouthWall " : "noSouthWall ";
    gridWallStyle += room.hasWallToNorth ? "hasNorthWall " : "noNorthWall ";
  } else {
    gridWallStyle = " outOfBounds ";
  }
  return gridWallStyle;
}

const floorStyles = (room, position, player, config) => {
  const mainFloorType = (position.isInBounds()) ? " " + room.floorType + "Floor bg" : " blackFloor bg";
  return (config.showRoomsVisited && player.hasPlayerVisitedRoom(player, room)) ? mainFloorType + " roomVisited" : mainFloorType;
}

const gridCell = (index, isCenter, position, player, config) => {
  var room = Room(position);

  const isCenterStyle = (isCenter) ? " center-square" : "";
  const gridCellStyle = "square-grid__cell square-grid__cell--" + config.squareSize;
  const gridStyle = gridCellStyle + floorStyles(room, position, player, config) + wallStyles(room, position) + isCenterStyle;
  return (
    <div className={gridStyle}>
      {feature(room.feature, position)}
      {playerImg(isCenter)}
      <div className='square-grid__content'>
        {roomDetails(config, position)}
      </div>
    </div>
  );
} 

const getXOffsetFromCenter = (cellIndex, squareSize) => {
  let xMod = 0;
  const maxDistanceFromCenter = Math.trunc(-squareSize/2);
  for (let i = 0;i<squareSize;i++) {
    const modToAdd =  ((cellIndex - i) % squareSize === 0) ? maxDistanceFromCenter + i : 0;
    xMod += modToAdd;
  }
  return xMod;
}

const getYOffsetFromCenter = (cellIndex, squareSize) => {
  const maxDistanceFromCenter = Math.trunc(-squareSize/2); //-2 for 5
  return Math.trunc(cellIndex / squareSize) + maxDistanceFromCenter;
}

const MazeGrid = ({ config, player, gameEngine }) => {
  const pos = player.position;
  const gridCells = [];
  const totalCells = config.squareSize * config.squareSize;
  for (let i = 0;i<totalCells;i++) {
    const x = pos.x + getXOffsetFromCenter(i, config.squareSize);
    const y = pos.y + getYOffsetFromCenter(i, config.squareSize);

    const calculatedPos = Position(x, y, pos.z);
    const isCenter = (i === (totalCells -1)/2);
    gridCells.push(gridCell(i, isCenter, calculatedPos, player, config));
  }
  const gridCellsDisplay = gridCells.map((item) => item);

  return (
    <div className="square-grid">
      {gridCellsDisplay}
    </div>
  );
}

MazeGrid.propTypes = {
  config: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired
}

export default MazeGrid
