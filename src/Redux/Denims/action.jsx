
import * as types from '../Newarrival/actionTypes';
import axios from 'axios';

export const getDenims = (payload) => ({
    type:types.GET_DENIMS,
    payload
});

export const getDenimsSuccess = (payload)=> ({
    type: types.GET_DENIMS_SUCCESS,
    payload

    // console.log("raj",response.data);
});
export const getDenimsFailure = (payload)=> ({
    type: types.GET_DENIMS_FAILURE,
    payload
});
export const getDenimsData =(payload)=>{
    return (dispatch) => {
        dispatch(getDenims());
        axios.get(`http://localhost:8080/denims`,{
            params:{
                ...payload,
            }
        })
            .then(response => {
                dispatch(getDenimsSuccess(response.data));
                // console.log("raj",response.data);
            }).catch(error => {
                dispatch(getDenimsFailure(error));
            }
        );
    }
    }
