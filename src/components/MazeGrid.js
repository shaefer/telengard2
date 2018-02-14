import React from 'react'
import PropTypes from 'prop-types'
import Position from '../models/Position'
import Room from '../models/Room'

const roomDetails = (config, pos) => {
  return (config.displayRoomDetails) ? <div><span>{pos.toString()}</span></div> : "";
}

const player = (isCenter) => {
  return isCenter ? <img src='./images/barbarian_sq.png' className="playerBarbarian" alt="Player Position"/> : "";
}

const feature = (feature, position) => {
  const featureImg = (feature !== undefined) ? `./images/${feature}.png` : "";
  const featureClassName = feature + " " + "feature";
  const featureJsx = (feature && position.isInBounds()) ? <img src={featureImg} className={featureClassName}/> : "";
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

const floorStyles = (room, position) => {
  return (position.isInBounds()) ? " " + room.floorType + "Floor bg" : " blackFloor bg";
}

const gridCell = (index, isCenter, position, config) => {
  var room = Room(position);

  const isCenterStyle = (isCenter) ? " center-square" : "";
  const gridCellStyle = "square-grid__cell square-grid__cell--" + config.squareSize;
  const gridStyle = gridCellStyle + floorStyles(room, position) + wallStyles(room, position) + isCenterStyle;
  return (
    <div className={gridStyle}>
      {feature(room.feature, position)}
      {player(isCenter)}
      <div className='square-grid__content'>
        {roomDetails(config, position)}
      </div>
    </div>
  );
} 

const MazeGrid = ({ config, pos }) => {
  //0-4 y-2
  //5-9 y-1
  //15-19 y+1
  //20-24 y+2
  //%5 x-2
  //-1%5 x-1
  //+1%5 x+1
  //+2%5 x+2
  //TODO: Adjust math to work for any size grid.
  const gridCells = [];
  const totalCells = config.squareSize * config.squareSize;
  for (let i = 0;i<totalCells;i++) {
    let x = pos.x;
    let xMod = 0;
    xMod += (i % 5 === 0) ? -2 : 0;
    xMod += ((i-1)%5 === 0) ? -1 : 0;
    xMod += ((i-3)%5 === 0) ? 1 : 0;
    xMod += ((i-4)%5 === 0) ? 2 : 0;
    x = x + xMod;

    let y = pos.y;
    let yMod = 0;
    yMod += (i >= 0 && i <= 4) ? -2 : 0;
    yMod += (i >= 5 && i <= 9) ? -1 : 0;
    yMod += (i >= 15 && i <= 19) ? 1 : 0;
    yMod += (i >= 20 && i <= 24) ? 2 : 0;
    y = y + yMod;

    const calculatedPos = Position(x, y, pos.z);
    const isCenter = (i === (totalCells -1)/2);
    gridCells.push(gridCell(i, isCenter, calculatedPos, config));
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
  pos: PropTypes.object.isRequired
}

export default MazeGrid
