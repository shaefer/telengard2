import Keys from '../models/Keys'
import {moveEast, moveWest, moveNorth, moveSouth, moveDown, moveUp} from '../actions'
import { CanMove, EastMoveAllowed, WestMoveAllowed, SouthMoveAllowed, NorthMoveAllowed, DownMoveAllowed, UpMoveAllowed } from '../models/DungeonBuilder'

export const keyPressHandler = (e) => {
    return (dispatch, getState) => {
        const currentState = getState();
        const {player, config} = currentState;
        switch(e.which) {
            case Keys.LEFT:
            CanMove(dispatch, moveWest, WestMoveAllowed, player.position, config);
            break;
    
            case Keys.UP:
            CanMove(dispatch, moveNorth, NorthMoveAllowed, player.position, config);
            break;
    
            case Keys.RIGHT:
            CanMove(dispatch, moveEast, EastMoveAllowed, player.position, config);
            break;
    
            case Keys.DOWN:
            CanMove(dispatch, moveSouth, SouthMoveAllowed, player.position, config);
            break;

            case Keys.D:
            CanMove(dispatch, moveDown, DownMoveAllowed, player.position, config);
            break;

            case Keys.U:
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