 
import * as types from '../Newarrival/actionTypes';
const initialState = {
    isLoading: false,
    shirts: [],
    error: null
}

export const shirtreducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.GET_SHIRT:
            return {
                ...state,
                error:'',
                isLoading: true
            }
        case types.GET_SHIRT_SUCCESS:
            return {
                ...state,
                shirts: payload,
                error:'',
                isLoading: false,
         
            }
        case types.GET_SHIRT_FAILURE:
            return {
                ...state,
                isLoading: false,
               error :payload
            }
        default:
            return state;
    }
}