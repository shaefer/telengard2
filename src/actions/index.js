export const MOVE_EAST = 'MOVE_EAST'

export const moveEast = (playerPos) => ({
  type: MOVE_EAST,
  playerPos: playerPos
});
