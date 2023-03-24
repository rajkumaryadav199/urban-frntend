// import Axios from 'axios';
import axios from "axios";

export const  SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export  const  SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const siginupRequest = () => {
    return {
        type: SIGNUP_REQUEST
    }
}
const signupSuccess = (payload) => {
    return {
        type:  SIGNUP_SUCCESS,
        payload
        // user
    }
}
const signupFailure = (payload) => {
    return {
        type: SIGNUP_FAILURE,
        payload
        // error
    }
}

 

// https://auth-urban.herokuapp.com/register
 
export const signUp = (payload) => (dispatch) => {
    dispatch(siginupRequest());
     axios.post('http://localhost:8080/api/users/register',payload)

   // .then(r =>  console.log(r))

    .then(r => dispatch(signupSuccess(r.data)))
    .catch(e =>
    // console.log(e))
   dispatch(signupFailure(e.data)));
}