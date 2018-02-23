import * as actionTypes from '../actions/actionTypes';

export default function(state=[], action){
    switch (action.type) {
        case actionTypes.CHANGE_VIEW:
            return [
                ...state.slice(0,action.id),
                {
                    ...state[action.id],
                    live: !state[action.id].live
                },
                ...state.slice(action.id+1),
            ]
        case actionTypes.GET_CHARTS_SUCCESS: 
            return action.payload;
        default: 
            return state
    }
}