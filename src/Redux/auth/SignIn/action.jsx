// import Axios from 'axios';
import axios from "axios";
import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS} from "./actionTypes";



const siginInRequest = () => {
    return {
        type: SIGNIN_REQUEST
        
    }
}
const signInSuccess = (payload) => {
    console.log("payload", payload)
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
 
 const signIn = (email,password) => (dispatch) => {

    const requestAction=siginInRequest()
    dispatch(requestAction);
    //const {email, password}=payload
    //const config={headers:{"Content-type":"application/json"}}

     axios.post('http://localhost:8080/api/users/login',{email, password})
    //https://ecom-backend-production-4249.up.railway.app/login
    // https://urbantouchclone.herokuapp.com/login
    // .then(r =>  console.log(r))

    .then(res =>
     {
        const sucessAction= signInSuccess(res.data.token)
      
    //   localStorage.setItem("token", JSON.stringify(sucessAction))
         dispatch(sucessAction)
     }
        
        )
    .catch(e =>
    {
    const errorAction=signInFailure(e.data)
   dispatch(errorAction)
    }
    
   );
}


export {signInFailure, signInSuccess, siginInRequest,signIn}
