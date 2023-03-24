import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./actionTypes";

 //const token=loadData("token")


const initialState = {
    auth : false ,
    token:'',
    isError:false,
    isLoading:true
}

const signInReducer = (state = initialState, action) => {  

const {type, payload} = action;
 switch(type) {
    case SIGNIN_REQUEST:
        return {
            ...state,
            auth : false,
            isLoading:true,
            isError:false

 }
    case SIGNIN_SUCCESS:
    
        return {
            ...state,
            auth : true,
            token: payload.token,  
        }
    case SIGNIN_FAILURE:
        return {
            ...state,
            auth : false,
            isError:true,
            isLoading:false,
            token:'',
        }
 

  default : 
    return state;
}
}
export default signInReducer;