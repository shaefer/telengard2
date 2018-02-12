import seedrandom from 'seedrandom'

const Room = (pos) => {
    const seed = pos.asSeed();
    const generator = seedrandom(seed+"room");
    const id = generator();
    const GetLargestPosition = (pos1, pos2) => {
        if (pos1.x > pos2.x) return pos1;
        if (pos1.x === pos2.x && pos1.y > pos2.y) return pos1;
        if (pos1.y === pos2.y && pos1.z > pos2.z) return pos1;
        return pos2;
    };
    
    const IsFirstItemLarger = (pos1, pos2) => {
        return GetLargestPosition(pos1, pos2) === pos1;
    };

    const HasWall = (pos1, pos2) => {
        //always compare 2 positions as if they had the same result so the pos order should always be the same regardless of which is passed in first.
        let seed = (IsFirstItemLarger(pos1, pos2)) ? `${pos1.asSeed()}${pos2.asSeed()}` : `${pos2.asSeed()}${pos1.asSeed()}`;
        var generator = seedrandom(seed);
        var result = generator();
        var wallResult = Math.floor(result * 10) + 1; 
        //console.warn("seed: " + seed + " result: " + result + " wallRoll: " + wallResult);
        var hasWall = false;
        if (pos1.z === 0) { 
            hasWall = wallResult <= 3; 
        } else {
            hasWall = wallResult <= 4;
        }
        //console.warn("HasWall: " + hasWall);
        return hasWall;
    };

    const IsInterestingLocation = (pos) => {
        console.warn(id);
        const locRoll = Math.floor(id * 100) + 1;
        const idAsStr = locRoll + "";
        const firstPair = Number(idAsStr.substring(0, 2));
        console.warn(firstPair);
        return firstPair <= 5;
    }

    return {
        id: seed,
        position: pos,
        floorType: (pos.z === 0) ? "grass" : "brick",
        hasWallToEast: HasWall(pos, pos.getPositionToEast()),
        hasWallToWest: HasWall(pos, pos.getPositionToWest()),
        hasWallToSouth: HasWall(pos, pos.getPositionToSouth()),
        hasWallToNorth: HasWall(pos, pos.getPositionToNorth()),
        isInterestingLocation: IsInterestingLocation(pos)
    };
};
export default Room;