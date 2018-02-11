import {CanMove} from '../models/Movement'
import {moveEast, moveWest, moveNorth, moveSouth} from '../actions'
import { EastMoveAllowed, WestMoveAllowed, SouthMoveAllowed, NorthMoveAllowed } from '../models/DungeonBuilder'

export const keyPressHandler = (e) => {
    return (dispatch, getState) => {
        const currentState = getState();
        const {player, config} = currentState;
        switch(e.which) {
            case 65: // a
            case 37: // left
            CanMove(dispatch, moveWest, WestMoveAllowed, player.position, config);
            break;
    
            case 87: 
            case 38: // up
            CanMove(dispatch, moveNorth, NorthMoveAllowed, player.position, config);
            break;
    
            case 68:
            case 39: // right
            CanMove(dispatch, moveEast, EastMoveAllowed, player.position, config);
            break;
    
            case 83:
            case 40: // down
            CanMove(dispatch, moveSouth, SouthMoveAllowed, player.position, config);
            break;
    
            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    }
};

export const canMoveEastHandler = (e) => {
    return (dispatch, getState) => {
        const {player, config} = getState();
        CanMove(dispatch, moveEast, EastMoveAllowed, player.position, config);
        e.preventDefault(); // prevent the default action (scroll / move caret)
    }
}
export const canMoveWestHandler = (e) => {
    return (dispatch, getState) => {
        const {player, config} = getState();
        CanMove(dispatch, moveWest, WestMoveAllowed, player.position, config);
        e.preventDefault(); // prevent the default action (scroll / move caret)
    }
}
export const canMoveSouthHandler = (e) => {
    return (dispatch, getState) => {
        const {player, config} = getState();
        CanMove(dispatch, moveSouth, SouthMoveAllowed, player.position, config);
        e.preventDefault(); // prevent the default action (scroll / move caret)
    }
}
export const canMoveNorthHandler = (e) => {
    return (dispatch, getState) => {
        const {player, config} = getState();
        CanMove(dispatch, moveNorth, NorthMoveAllowed, player.position, config);
        e.preventDefault(); // prevent the default action (scroll / move caret)
    }
}