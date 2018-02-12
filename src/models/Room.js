import seedrandom from 'seedrandom'

const STAIRSDOWN = "stairs_down";
const STAIRSUP = "stairs_up";
const TREE = "tree";

const sum = (items) => items.reduce((a, b) => a + b, 0);

const inRange = (num, start, end) => {
    return (num >= start && num <= end);
}

const getRoomFeature = (roll, pos) => {
    const tree = {item: TREE, percentage: 5, isValid: () => true};
    const stairsUp = {item: STAIRSUP, percentage: 5, isValid: () => pos.z > 0};
    const stairsDown = {item: STAIRSDOWN, percentage: 5, isValid: () => true};

    return rollForItem(roll, [tree, stairsUp, stairsDown]);
}

const rollForItem = (roll, features) => {
    const allPercentages = features.map(x => x.percentage);
    if (sum(allPercentages) > 100) throw "Feature Percentages are > 100"

    let startNum = 0;
    for(let i = 0; i<features.length;i++) {
        const feature = features[i];
        const endNum = startNum + feature.percentage;
        console.warn("Roll: " + roll + " in range: " + (startNum + 1) + "-" + endNum + " for item: " + feature.item);
        if (inRange(roll, startNum + 1, endNum) && feature.isValid()) return feature.item;
        startNum = endNum;
    }
}

const Room = (pos) => {
    const seed = pos.asSeed();
    const generator = seedrandom(seed+"room");
    const id = generator();
    const roomKey = String(id).substring(2);
    const roomPairs = roomKey.match(/.{1,2}/g);

    const featureRoll = roomPairs[0];
    const feature = getRoomFeature(featureRoll, pos);
    

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

    //Room: 6,7 Floor: 1id: 0.26863875856073577
    const IsInterestingLocation = (pos) => {
        console.warn("roomKey: " + roomKey);
        console.log(roomPairs);
        return roomPairs[0] <= 5;
    }

    return {
        id: seed,
        position: pos,
        floorType: (pos.z === 0) ? "grass" : "brick",
        hasWallToEast: HasWall(pos, pos.getPositionToEast()),
        hasWallToWest: HasWall(pos, pos.getPositionToWest()),
        hasWallToSouth: HasWall(pos, pos.getPositionToSouth()),
        hasWallToNorth: HasWall(pos, pos.getPositionToNorth()),
        hasStairsDown: feature === STAIRSDOWN,
        hasStairsUp: feature === STAIRSUP,
        isInterestingLocation: IsInterestingLocation(pos),
        feature: feature
    };
};
export default Room;