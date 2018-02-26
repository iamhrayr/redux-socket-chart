import {combineReducers} from 'redux';
import charts from './charts';
import socket from './socket';

const rootReducer =  combineReducers({
    socket,
    charts
});

export default rootReducer;