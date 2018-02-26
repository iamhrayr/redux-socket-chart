import * as actionTypes from './actionTypes';
import io from 'socket.io-client';

export const connectSocket = () => {
    return (dispatch, getState) => {
        let isSocketOpen = getState().socket;
        if (!isSocketOpen) {
            const socket = io.connect('http://localhost:3001');
            dispatch({
                type: actionTypes.CONNECT_SOCKET,
                payload: socket
            });
        }
    }
}

export const disconnectSocket = () => {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.DISCONNECT_SOCKET,
            payload: null
        });
    }
}
