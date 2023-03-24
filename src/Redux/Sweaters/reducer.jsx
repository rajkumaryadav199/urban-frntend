import * as types from '../Newarrival/actionTypes';


const initialState = {
    isLoading: false,
     sweater: [],
    error: null
}
 
export const sweaterSreducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.GET_SWEATERS:
            return {
                ...state,
                error:'',
                isLoading: true
            }
        case types.GET_SWEATERS_SUCCESS:
            return {
                ...state,
                sweater: payload,
                error:'',
                isLoading: false,
            }
        case types.GET_SWEATERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error :payload
            }
        default:
            return state;
    }
}
