import * as types from '../Newarrival/actionTypes';
import axios from 'axios';

// export const GET_SHORTS = "GET_SHORTS";
// export const GET_SHORTS_SUCCESS = "GET_SHORTS_SUCCESS";
// export const GET_SHORTS_FAILURE = "GET_SHORTS_FAILURE";

 export const getShorts = () => {
    return {
        type: types.GET_SHORTS
    }
}
export const getShortsSuccess = (shorts) => {
    return {
        type: types.GET_SHORTS_SUCCESS,
        payload: shorts
    }
}
export const getShortsFailure = (error) => {
    return {
        type: types.GET_SHORTS_FAILURE,
        payload: error
    }
}


export const getShortsData = () => {
    return (dispatch) => {
        dispatch(getShorts());
        axios.get('http://localhost:8080/shorts')
            .then(response => {
                dispatch(getShortsSuccess(response.data));
            }).catch(error => {
                dispatch(getShortsFailure(error));
            }
            );
    }
}
