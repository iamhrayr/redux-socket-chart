import * as actionTypes from './actionTypes';
import io from 'socket.io-client';


export const changeView = (index) => {
    return {
        type: actionTypes.CHANGE_VIEW,
        index
    }
}