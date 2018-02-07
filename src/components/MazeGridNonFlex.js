import React from 'react'
import PropTypes from 'prop-types'

const MazeGrid = ({ config }) => {
  const gridCell = (index, isCenter) => {
    const gridWidthPercent = 100/config.gridWidth;
    const gridSizeStyle = { 
      width: gridWidthPercent + "%",
      paddingBottom: gridWidthPercent + "%"
    };
    const centerClassName = isCenter ? "playerLoc" : "";
    const outerClassName = `square bg img1 ${centerClassName}`;
    const content = isCenter ? <img src='./images/barbarian.png' className="playerBarbarian"/> : index;

    return (
    <div className={outerClassName} style={gridSizeStyle}>
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
    gridCells.push(gridCell(i, i == 12));
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
