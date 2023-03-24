import * as types from '../Newarrival/actionTypes';
import axios from 'axios';


// export const GET_TROUSER = "GET_TROUSER";
// export const GET_TROUSER_SUCCESS = "GET_TROUSER_SUCCESS";
// export const GET_TROUSER_FAILURE = "GET_TROUSER_FAILURE";

export const getTrouser = (payload) => ({
    type:types.GET_TROUSER,
    payload
});

export const getTrouserSuccess = (payload)=> ({
    type: types.GET_TROUSER_SUCCESS,
    payload
   
});

export const getTrouserFailure = (payload)=> ({
    type: types.GET_TROUSER_FAILURE,
    payload
});

export const getTrouserData =(payload)=>{
    return (dispatch) => {
        dispatch(getTrouser());
        axios.get(`https://coral-tick-wear.cyclic.app/api/trousers`,{
            params:{
                ...payload,
            }
        })
            .then(response => {
                dispatch(getTrouserSuccess(response.data));
               // console.log("raj",response.data);
            }).catch(error => {
                dispatch(getTrouserFailure(error));
            }
        );
    }
    }

    // https://urbantouchclone.herokuapp.com/products3