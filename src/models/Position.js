import DungeonLevelGenerator from '../models/DungeonLevel'

const Position = (x, y, z) => {
    return {
        x: x,
        y: y,
        z: z,
        asSeed: () => `${x}${y}${z}`,
        asNumber: () => (x*1000000) + (y*1000) + z,
        getPositionToEast: () => Position(x+1, y, z),
        getPositionToWest: () => Position(x-1, y, z),
        getPositionToNorth: () => Position(x, y-1, z),
        getPositionToSouth: () => Position(x, y+1, z),
        getPositionBelow: () => Position(x, y, z+1),
        getPositionAbove: () => Position(x, y, z-1),
        isInBounds: () => {
            var dungeonLevel = DungeonLevelGenerator(z);
            return x >= 0 && y >= 0 && x < dungeonLevel.dungeonWidth && y < dungeonLevel.dungeonHeight;
        },
        toString: () => `Room: ${x},${y} Floor: ${z+1}`
    }
};
export default Position;