import Room from './Room';

const EastIsInBounds = (pos) => {
    const maxX = 9;
    return (pos.getPositionToEast().x <= maxX);
}

export const EastMoveAllowed = (pos, config) => {
    return EastIsInBounds(pos) && !Room(pos).hasWallToEast;
};

const WestIsInBounds = (pos) => {
    const minX = 0;
    return (pos.getPositionToWest().x >= minX);
}

export const WestMoveAllowed = (pos, config) => {
    return WestIsInBounds(pos) && !Room(pos).hasWallToWest;
};

const SouthIsInBounds = (pos) => {
    const maxY = 9;
    return (pos.getPositionToSouth().y <= maxY);
}

export const SouthMoveAllowed = (pos, config) => {
    return SouthIsInBounds(pos) && !Room(pos).hasWallToSouth;
};

const NorthIsInBounds = (pos) => {
    const minY = 0;
    return (pos.getPositionToNorth().y >= minY);
}

export const NorthMoveAllowed = (pos, config) => {
    return NorthIsInBounds(pos) && !Room(pos).hasWallToNorth;
};

export const DownMoveAllowed = (pos, config) => {
    return Room(pos).hasStairsDown;
};

export const UpMoveAllowed = (pos, config) => {
    return Room(pos).hasStairsUp(Room(pos.getPositionAbove()));
};