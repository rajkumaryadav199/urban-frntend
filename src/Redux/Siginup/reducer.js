import {SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAILURE} from "./action";

const initialState = {
    loading :false,
    error:false,
    isauthenticated:false
}


export const   signupreducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case SIGNUP_REQUEST:
            return {...state,loading:true,error:false,isauthenticated:false}
        case SIGNUP_SUCCESS:
            return {...state,loading:false,error:false,isauthenticated:true}
        case SIGNUP_FAILURE:
            return {...state,loading:false, error:true,isauthenticated:false}
        // case "LOGOUT2":
        //         return {...initialState}
        default:
            return state
    }
}
