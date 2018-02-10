export const MOVE_EAST = 'MOVE_EAST'
export const MOVE_WEST = 'MOVE_WEST'
export const MOVE_SOUTH = 'MOVE_SOUTH'
export const MOVE_NORTH = 'MOVE_NORTH'

export const moveEast = (playerPos) => ({
  type: MOVE_EAST,
  playerPos: playerPos
});

export const moveWest = (playerPos) => ({
  type: MOVE_WEST,
  playerPos: playerPos
});

export const moveSouth = (playerPos) => ({
  type: MOVE_SOUTH,
  playerPos: playerPos
});

export const moveNorth = (playerPos) => ({
  type: MOVE_NORTH,
  playerPos: playerPos
});
