export const MOVE_EAST = 'MOVE_EAST'
export const MOVE_WEST = 'MOVE_WEST'
export const MOVE_SOUTH = 'MOVE_SOUTH'
export const MOVE_NORTH = 'MOVE_NORTH'
export const MOVE_DOWN = 'MOVE_DOWN'
export const MOVE_UP = 'MOVE_UP'
export const TELEPORT = 'TELEPORT'
export const FLOOD = 'FLOOD'

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

export const moveDown = (playerPos) => ({
  type: MOVE_DOWN,
  playerPos: playerPos
});

export const moveUp = (playerPos) => ({
  type: MOVE_UP,
  playerPos: playerPos
});

export const teleport = (playerPos) => ({
  type: TELEPORT,
  playerPos: playerPos
});

export const flood = (accessibleUnvisitedRooms) => ({
  type: FLOOD,
  accessibleUnvisitedRooms: accessibleUnvisitedRooms
});
