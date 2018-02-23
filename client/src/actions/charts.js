import * as actionTypes from './actionTypes';
import axios from 'axios';
import io from 'socket.io-client';

export const getCharts = () => {
    return dispatch => {
        axios.get('http://localhost:3001/charts')
            .then(res => {
                dispatch(getChartsSuccess(res.data))
            });
    }

    function getChartsSuccess(data){
        return {
            type: actionTypes.GET_CHARTS_SUCCESS,
            payload: data
        }
    }
}


export const changeView = (id) => {
    return {
        type: actionTypes.CHANGE_VIEW,
        id
    }
}



