import React from 'react'
import PropTypes from 'prop-types'

const MazeGrid = ({ config }) => {
  const gridCell = (content) => {
    const gridWidthPercent = 100/config.gridWidth;
    const gridSizeStyle = { 
      width: gridWidthPercent + "%",
      paddingBottom: gridWidthPercent + "%"
    };
    return (
    <div className="square" style={gridSizeStyle}>
      <div className="content">
        <div className="table">
          <div className="table-cell">
            {content}
          </div>
        </div>
      </div>
    </div>
    );
  }
  const gridCells = [];
  const totalCells = config.gridHeight * config.gridWidth;
  for (let i = 0;i<totalCells;i++) {
    gridCells.push(gridCell(i));
  }
  const gridCellsDisplay = gridCells.map((item) => item);

  return (
    <div className="containerOfSquares">
      {gridCellsDisplay}
    </div>
  );
}

MazeGrid.propTypes = {
  config: PropTypes.object.isRequired
}

export default MazeGrid
