import React from 'react'
import PropTypes from 'prop-types'

const MazeGrid = ({ config }) => {
  const gridCell = (index, isCenter) => {
    const content = isCenter ? <img src='./images/barbarian.png' className="playerBarbarian"/> : index;
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
  for (let i = 0;i<totalCells;i++) {
    gridCells.push(gridCell(i, i == (totalCells -1)/2));
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
  config: PropTypes.object.isRequired
}

export default MazeGrid
