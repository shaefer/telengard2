import Position from "./Position";

const GetLargestPosition = (pos1, pos2) => {
    if (pos1.x > pos2.x) return pos1;
    if (pos1.x == pos2.x && pos1.y > pos2.y) return pos1;
    if (pos1.y == pos2.y && pos1.z > pos2.z) return pos1;
    return pos2;
}

const IsFirstItemLarger = (pos1, pos2) => {
    return GetLargestPosition(pos1, pos2) === pos1;
}

const HasWall = (pos1, pos2) => {
    //always compare 2 positions as if they had the same result so the pos order should always be the same regardless of which is passed in first.
    let seed = (IsFirstItemLarger(pos1, pos2)) ? `${pos1.asSeed()}${pos2.asSeed()}` : `${pos2.asSeed()}${pos1.asSeed()}`;
    console.warn(pos1.toString() + pos2.toString() + " seed: " + seed);
    return false;
}

const EastIsInBounds = (pos) => {
    const maxX = (pos.z < 5) ? 9 : 14;
    return (pos.getPositionToEast().x <= maxX);
}

const EastDoesNotHitWall = (pos) => {
    return !HasWall(pos, pos.getPositionToEast());
}


export const EastMoveAllowed = (pos, config) => {
    return EastIsInBounds(pos) && EastDoesNotHitWall(pos);
};