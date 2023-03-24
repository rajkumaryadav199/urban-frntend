// export const GET_SWEATERS = "GET_SWEATERS";
// export const GET_SWEATERS_SUCCESS = "GET_SWEATERS_SUCCESS";
// export const GET_SWEATERS_FAILURE = "GET_SWEATERS_FAILURE";


import * as types from '../Newarrival/actionTypes';
import axios from 'axios';


export const getsweaters = (payload) => {
    return {
        type: types.GET_SWEATERS,
        payload: payload
    }
}
export const getsweatersSuccess = (payload) => {
    return {
        type: types.GET_SWEATERS_SUCCESS,
        payload: payload
    }
}
export const getsweatersFailure = (payload) => {
    return {
        type: types.GET_SWEATERS_FAILURE,
        payload: payload
    }
}

export const getSweaterData =(payload)=>{
    return (dispatch) => {
        dispatch(getsweaters(payload));
        axios.get('http://localhost:8080/sweaters')
            .then(res => {
                dispatch(getsweatersSuccess(res.data));
            }).catch(err => {
                dispatch(getsweatersFailure(err));
            }
            )
    }
}


