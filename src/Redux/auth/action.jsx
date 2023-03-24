// import Axios from 'axios';
import axios from "axios";
import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./actionTypes";



const siginInRequest = () => {
    return {
        type: SIGNIN_REQUEST
    }
}
const signInSuccess = (payload) => {
    return {
        type: SIGNIN_SUCCESS,
        token:payload
        // user
    }
}
const signInFailure = (payload) => {
    return {
        type: SIGNIN_FAILURE,
        payload
        // error
    }
}
 

export const signIn = (payload) => (dispatch) => {
    dispatch(siginInRequest());
     axios.post('http://localhost:8080/api/user/login',payload)
     //https://ecom-backend-production-4249.up.railway.app/login
    // https://urbantouchclone.herokuapp.com/login
   // .then(r =>  console.log(r))

    .then(r => dispatch(signInSuccess(r.data)))
    .catch(e =>
    // console.log(e))
   dispatch(signInFailure(e.data)));
}
 
