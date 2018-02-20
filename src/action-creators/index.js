import Keys from '../models/Keys'
import Room from '../models/Room'
import {moveEast, moveWest, moveNorth, moveSouth, moveDown, moveUp, teleport, flood} from '../actions'
import { CanMove, EastMoveAllowed, WestMoveAllowed, SouthMoveAllowed, NorthMoveAllowed, DownMoveAllowed, UpMoveAllowed } from '../models/DungeonBuilder'

export const keyPressHandler = (e) => {
    return (dispatch, getState) => {
        const currentState = getState();
        const {player, config} = currentState;
        switch(e.which) {
            case Keys.LEFT:
            CanMove(dispatch, moveWest, WestMoveAllowed, player.position, player.position.getPositionToWest(), config);
            break;
    
            case Keys.UP:
            CanMove(dispatch, moveNorth, NorthMoveAllowed, player.position, player.position.getPositionToNorth(), config);
            break;
    
            case Keys.RIGHT:
            CanMove(dispatch, moveEast, EastMoveAllowed, player.position, player.position.getPositionToEast(), config);
            break;
    
            case Keys.DOWN:
            CanMove(dispatch, moveSouth, SouthMoveAllowed, player.position, player.position.getPositionToSouth(), config);
            break;

            case Keys.D:
            CanMove(dispatch, moveDown, DownMoveAllowed, player.position, player.position.getPositionBelow(), config);
            break;

            case Keys.U:
            CanMove(dispatch, moveUp, UpMoveAllowed, player.position, player.position.getPositionAbove(), config);
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
export const floodHandler = () => {
    return (dispatch, getState) => {
        const {player, config} = getState();
        //console.warn("Flood Handler: " + player.position.asSeed());
        //TODO: We don't actually check that a room we are adding to this list isn't already in it. If we circle around a single unvisited room we could potentially add it 4 times.
        let accessibleUnvisitedRooms = [];
        if (config.followStairsWhenFlooding) {
            const upRoom = Room(player.position.getPositionAbove(), config);
            if (UpMoveAllowed(player.position, config) && !player.hasPlayerVisitedRoom(player, upRoom)) accessibleUnvisitedRooms.push(upRoom);
            const downRoom = Room(player.position.getPositionBelow(), config);
            if (DownMoveAllowed(player.position, config) && !player.hasPlayerVisitedRoom(player, downRoom)) accessibleUnvisitedRooms.push(downRoom);
        }
        const eastRoom = Room(player.position.getPositionToEast(), config);
        if (EastMoveAllowed(player.position, config) && !player.hasPlayerVisitedRoom(player, eastRoom)) accessibleUnvisitedRooms.push(eastRoom);
        const westRoom = Room(player.position.getPositionToWest(), config);
        if (WestMoveAllowed(player.position, config) && !player.hasPlayerVisitedRoom(player, westRoom)) accessibleUnvisitedRooms.push(westRoom);
        const northRoom = Room(player.position.getPositionToNorth(), config);
        if (NorthMoveAllowed(player.position, config) && !player.hasPlayerVisitedRoom(player, northRoom)) accessibleUnvisitedRooms.push(northRoom);
        const southRoom = Room(player.position.getPositionToSouth(), config);
        if (SouthMoveAllowed(player.position, config) && !player.hasPlayerVisitedRoom(player, southRoom)) accessibleUnvisitedRooms.push(southRoom);

        dispatch(flood(accessibleUnvisitedRooms));
    }
}