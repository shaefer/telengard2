import Position from "./Position";

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
    roomsVisited: {[initialPos.asSeed()]: initialPos},
    potions: [],
    weapons: [],
    armors: [],
    experience: 0,
    gold: 0,
    monstersKilled: []
};

export default Player;