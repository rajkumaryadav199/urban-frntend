import axios from "axios";
import * as types from "./actionTypes";

// export const GET_NEWARRIVAL = "GET_NEWARRIVAL";
// export const GET_NEWARRIVAL_SUCCESS = "GET_NEWARRIVAL_SUCCESS";
// export const GET_NEWARRIVAL_FAILURE = "GET_NEWARRIVAL_FAILURE";

export const getNewArrival = (payload) => ({
    type:types.GET_NEWARRIVAL,
    payload
});

export const getNewArrivalSuccess = (payload)=> ({
    type: types.GET_NEWARRIVAL_SUCCESS,
    payload
   
});

export const getNewArrivalFailure = (payload)=> ({
    type: types.GET_NEWARRIVAL_FAILURE,
    payload
});

export const getMensData =(payload)=>{
    return (dispatch) => {
        dispatch(getNewArrival());
        axios.get(`http://localhost:8080/api/products`,{
            params:{
                ...payload,
            }
        })
            .then(response => {
                dispatch(getNewArrivalSuccess(response.data));
               // console.log("raj",response.data);
            }).catch(error => {
                dispatch(getNewArrivalFailure(error));
            }
        );
    }
    }
 
    // https://urbantouchclone.herokuapp.com/products`
     
    