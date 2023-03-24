import * as types from '../Newarrival/actionTypes';
 
const initialState = {
    isLoading: false,
    trousers: [],
    error: null
}

export const trouserreducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.GET_TROUSER:
            return {
                ...state,
                error:'',
                isLoading: true
            }
        case types.GET_TROUSER_SUCCESS:
            return {
                ...state,
               trousers: payload,
                error:'',
                isLoading: false,
         
            }
        case types.GET_TROUSER_FAILURE:
            return {
                ...state,
                isLoading: false,
               error :payload
            }
        default:
            return state;
    }
}