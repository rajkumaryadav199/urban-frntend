import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../SignIn/actionTypes";

const initState={
    user:null,
    isError:false,
    isLoading:false
}

const signUpReducer=(state=initState, action)=>{
const {type, payload}=action;
switch(type)
{
    case SIGNIN_REQUEST:
    return  {
     ...state,
     isError:false,
     isLoading:true

}
case SIGNIN_SUCCESS:
    return  {
     ...state,
     user:payload,
     isError:false

}
case SIGNIN_FAILURE:
    return  {
     ...state,
     user:payload,
     isError:true

}
default : 
return state;
}
}

export {signUpReducer}