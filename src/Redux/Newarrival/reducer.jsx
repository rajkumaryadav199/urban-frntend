 
import * as types from './actionTypes';

const initialState = {
    isLoading: false,
    products: [],
    error: null
}

export const newarrivalreducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types. GET_NEWARRIVAL:
            return {
                ...state,
                error:'',
                isLoading: true
            }
        case types.GET_NEWARRIVAL_SUCCESS:
            return {
                ...state,
                products: payload,
                error:'',
                isLoading: false,
         
            }
        case types.GET_NEWARRIVAL_FAILURE:
            return {
                ...state,
                isLoading: false,
               error :payload
            }
        default:
            return state;
    }
}