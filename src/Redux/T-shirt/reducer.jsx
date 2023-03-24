 import * as types from '../Newarrival/actionTypes';
 
const initialState = {
    isLoading: false,
    tshirts: [],
    error: null
}

export const tshirtreducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.GET_TSHIRT:
            return {
                ...state,
                error:'',
                isLoading: true
            }
        case types.GET_TSHIRT_SUCCESS:
            return {
                ...state,
                tshirts: payload,
                error:'',
                isLoading: false,
         
            }
        case types.GET_TSHIRT_FAILURE:
            return {
                ...state,
                isLoading: false,
               error :payload
            }
        default:
            return state;
    }
}