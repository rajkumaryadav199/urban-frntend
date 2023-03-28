import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./actionTypes";

 //const token=loadData("token")


const initialState = {
    isAuth :false ,
    token: '',
    isError:false,
    isLoading:false
}

const signInReducer = (state = initialState, action) => {  

const {type, token} = action;
console.log("11111",action)
 switch(type) {
    case SIGNIN_REQUEST:
        return {
            ...state,
            isAuth : false,
            isLoading:true,
            isError:false

 }
    case SIGNIN_SUCCESS:
    
        return {
            ...state ,
            token :token,
            isAuth:true,

        }
    case SIGNIN_FAILURE:
        return {
            ...state,
            isAuth : false,
            isError:true,
            isLoading:false,
            token:'',
        }
 

  default : 
    return state;
}
}
export default signInReducer;