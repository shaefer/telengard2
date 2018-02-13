import {CanMove} from '../models/Movement'
import {moveEast, moveWest, moveNorth, moveSouth, moveDown, moveUp} from '../actions'
import { EastMoveAllowed, WestMoveAllowed, SouthMoveAllowed, NorthMoveAllowed, DownMoveAllowed, UpMoveAllowed } from '../models/DungeonBuilder'

export const keyPressHandler = (e) => {
    return (dispatch, getState) => {
        const currentState = getState();
        const {player, config} = currentState;
        switch(e.which) {
            case 65: // a
            case 37: // left
            CanMove(dispatch, moveWest, WestMoveAllowed, player.position, config);
            break;
    
            case 87: //w
            case 38: // up
            CanMove(dispatch, moveNorth, NorthMoveAllowed, player.position, config);
            break;
    
            case 68: //d
            case 39: // right
            CanMove(dispatch, moveEast, EastMoveAllowed, player.position, config);
            break;
    
            case 83: //s
            case 40: // down
            CanMove(dispatch, moveSouth, SouthMoveAllowed, player.position, config);
            break;

            case 90: //z (for down stairs)
            CanMove(dispatch, moveDown, DownMoveAllowed, player.position, config);
            break;

            case 85: //u (for up stairs)
            CanMove(dispatch, moveUp, UpMoveAllowed, player.position, config);
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
export const canMoveDownHandler = (e) => {
    return (dispatch, getState) => {
        const {player, config} = getState();
        CanMove(dispatch, moveDown, DownMoveAllowed, player.position, config);
        e.preventDefault(); // prevent the default action (scroll / move caret)
    }
}
export const canMoveUpHandler = (e) => {
    return (dispatch, getState) => {
        const {player, config} = getState();
        CanMove(dispatch, moveUp, UpMoveAllowed, player.position, config);
        e.preventDefault(); // prevent the default action (scroll / move caret)
    }
}