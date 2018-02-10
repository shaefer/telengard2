import Position from "./Position";

const DungeonLevelGenerate = (z) => {
    const dungeon = { 
        playerPosition: Position(0, 0, 0),
        dungeonWidth: 10,
        dungeonHeight: 10
    };
    if (z == 0) return dungeon;
    return dungeon;
}

const DungeonLevel0 = DungeonLevelGenerate(0);

export default DungeonLevel0;