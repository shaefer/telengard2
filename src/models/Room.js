import seedrandom from 'seedrandom'
import Position from './Position'

const STAIRSDOWN = "stairs_down";
const STAIRSUP = "stairs_up";
const TREE = "tree";

const sum = (items) => items.reduce((a, b) => a + b, 0);

const inRange = (num, start, end) => {
    return (num >= start && num <= end);
};

const getRoomFeature = (roll, pos) => {
    const tree = {item: TREE, percentage: 5, isValid: () => true};
    const stairsUp = {item: STAIRSUP, percentage: 0, isValid: () => pos.z > 0};
    const stairsDown = {item: STAIRSDOWN, percentage: 5, isValid: () => true};

    return rollForItem(roll, [tree, stairsUp, stairsDown]);
};

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
};

const RoomPairs = (pos) => {
    const seed = pos.asSeed();
    const generator = seedrandom(seed+"room");
    const id = generator();
    const roomKey = String(id).substring(2);
    const roomPairs = roomKey.match(/.{1,2}/g);
    return roomPairs;
};

const determineFeature = (pos) => {
    const roomPairs = RoomPairs(pos);
    
    const roomAbovePos = Position(pos.x, pos.y, pos.z -1);
    const roomAbovePairs = RoomPairs(roomAbovePos);
    const roomAboveFeature = getRoomFeature(roomAbovePairs[0], roomAbovePos);

    const feature = (roomAboveFeature == STAIRSDOWN && pos.z > 0) ? STAIRSUP : getRoomFeature(roomPairs[0], pos);
    return feature;
};

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

const Room = (pos) => {
    const feature = determineFeature(pos);
    return {
        id: pos.asSeed(),
        position: pos,
        floorType: (pos.z === 0) ? "grass" : "brick",
        hasWallToEast: HasWall(pos, pos.getPositionToEast()),
        hasWallToWest: HasWall(pos, pos.getPositionToWest()),
        hasWallToSouth: HasWall(pos, pos.getPositionToSouth()),
        hasWallToNorth: HasWall(pos, pos.getPositionToNorth()),
        hasStairsDown: feature === STAIRSDOWN,
        hasStairsUp: (roomAbove) => roomAbove.hasStairsDown,
        feature: feature
    };
};
export default Room;