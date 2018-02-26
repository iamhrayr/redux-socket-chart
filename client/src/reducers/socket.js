import * as actionTypes from '../actions/actionTypes';

export default function(state=null, action){
    switch (action.type) {
        case actionTypes.CONNECT_SOCKET: 
            return action.payload;
        case actionTypes.DISCONNECT_SOCKET: 
            return null;
        default: 
            return state
    }
}