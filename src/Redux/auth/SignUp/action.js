/*Action for signup */
import axios from "axios"
import { SIGNUP_FAILURE,SIGNUP_SUCCESS,SIGNUP_REQUEST } from "./actionType"
const siginUPRequest = () => {
    return {
        type: SIGNUP_REQUEST
        
    }
}
const signUPSuccess = (payload) => {
    console.log("payload", payload)
    return {
        type: SIGNUP_SUCCESS,
        token:payload
        // user
    }
}
const signUPFailure = (payload) => {
    return {
        type: SIGNUP_FAILURE,
        payload
        // error
    }
}

const signUp = (payload) => (dispatch) => {

   
    const requestAction=siginUPRequest()
    dispatch(requestAction);
    //const {email, password}=payload
    //const config={headers:{"Content-type":"application/json"}}

     axios.post('http://localhost:8080/api/users/register',payload)
    //https://ecom-backend-production-4249.up.railway.app/login
    // https://urbantouchclone.herokuapp.com/login
    // .then(r =>  console.log(r))

    .then(res =>
     {
        const sucessAction= signUPSuccess(res.data)
      
    //   localStorage.setItem("token", JSON.stringify(sucessAction))
         dispatch(sucessAction)
     }
        
        )
    .catch(e =>
    {
    const errorAction=signUPFailure(e.data)
   dispatch(errorAction)
    }
    
   );
}

export {signUp}