import Position from "./Position";

const Player = { 
    position: Position(0, 0, 0),
    hp:25,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    perception: 10,
    roomsVisited: [],
    potions: [],
    weapons: [],
    armors: [],
    experience: 0,
    gold: 0,
    monstersKilled: []
};

export default Player;