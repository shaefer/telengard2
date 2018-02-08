import React from 'react'
import PropTypes from 'prop-types'
import Position from '../models/Position'

const MazeGrid = ({ config, pos }) => {
  console.warn(pos);
  console.warn(Position(1, 2, 3));
  const gridCell = (index, isCenter, position) => {
    console.warn(position);
    const content = isCenter ? <div><img src='./images/barbarian.png' className="playerBarbarian"/><span>{position.toString()}</span></div> : <div>{index}{position.toString()}</div>;
    const gridFloorStyle = " brickFloor bg";
    const gridCellStyle = "square-grid__cell square-grid__cell--";
    const gridStyle = gridCellStyle + config.squareSize + gridFloorStyle;
    return (
      <div className={gridStyle}>
        <div className='square-grid__content'>
          {content}
        </div>
      </div>
      );
  }
  const gridCells = [];
  const totalCells = config.squareSize * config.squareSize;

  //0-4 y-2
  //5-9 y-1
  //15-19 y+1
  //20-24 y+2
  //%5 x-2
  //-1%5 x-1
  //+1%5 x+1
  //+2%5 x+2
  //TODO: Adjust math to work for any size grid.
  for (let i = 0;i<totalCells;i++) {
    let x = pos.x;
    let xMod = 0;
    xMod += (i % 5 == 0) ? -2 : 0;
    xMod += ((i-1)%5 == 0) ? -1 : 0;
    xMod += ((i-3)%5 == 0) ? 1 : 0;
    xMod += ((i-4)%5 == 0) ? 2 : 0;
    x = x + xMod;

    let y = pos.y;
    let yMod = 0;
    yMod += (i >= 0 && i <= 4) ? -2 : 0;
    yMod += (i >= 5 && i <= 9) ? -1 : 0;
    yMod += (i >= 15 && i <= 19) ? 1 : 0;
    yMod += (i >= 20 && i <= 24) ? 2 : 0;
    y = y + yMod;

    console.warn(x, y, pos.z);
    const calculatedPos = Position(x, y, pos.z);
    const isCenter = (i == (totalCells -1)/2);
    gridCells.push(gridCell(i, isCenter, calculatedPos));
  }
  const gridCellsDisplay = gridCells.map((item) => item);

  return (
    //containerOfSquares
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
