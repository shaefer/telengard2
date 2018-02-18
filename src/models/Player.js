import Position from "./Position";

const HasPlayerVisitedRoom = (player, room) => {
    return room.position.asSeed() in player.roomsVisited;
}

const initialPos = Position(5, 5, 0);
const Player = { 
    position: initialPos,
    hp:25,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    perception: 10,
    accessibleUnvisitedRooms: [],
    roomsVisited: {[initialPos.asSeed()]: initialPos},
    hasPlayerVisitedRoom: HasPlayerVisitedRoom,
    potions: [],
    weapons: [],
    armors: [],
    experience: 0,
    gold: 0,
    monstersKilled: []
};

export default Player;