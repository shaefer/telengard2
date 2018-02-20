import Room from './Room';

const EastIsInBounds = (pos) => {
    const maxX = 9;
    return (pos.getPositionToEast().x <= maxX);
}

export const EastMoveAllowed = (pos, config) => {
    return EastIsInBounds(pos) && !Room(pos, config).hasWallToEast;
};

const WestIsInBounds = (pos) => {
    const minX = 0;
    return (pos.getPositionToWest().x >= minX);
}

export const WestMoveAllowed = (pos, config) => {
    return WestIsInBounds(pos) && !Room(pos, config).hasWallToWest;
};

const SouthIsInBounds = (pos) => {
    const maxY = 9;
    return (pos.getPositionToSouth().y <= maxY);
}

export const SouthMoveAllowed = (pos, config) => {
    return SouthIsInBounds(pos) && !Room(pos, config).hasWallToSouth;
};

const NorthIsInBounds = (pos) => {
    const minY = 0;
    return (pos.getPositionToNorth().y >= minY);
}

export const NorthMoveAllowed = (pos, config) => {
    return NorthIsInBounds(pos) && !Room(pos, config).hasWallToNorth;
};

export const DownMoveAllowed = (pos, config) => {
    return Room(pos, config).hasStairsDown;
};

export const UpMoveAllowed = (pos, config) => {
    return Room(pos, config).hasStairsUp(Room(pos.getPositionAbove(), config));
};

export const CanMove = (dispatch, moveFunc, moveAllowedFunc, currentPos, newPos, config) => {
    if (moveAllowedFunc(currentPos, config)) dispatch(moveFunc(newPos));
};