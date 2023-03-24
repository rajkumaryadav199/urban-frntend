import * as types from '../Newarrival/actionTypes';
 
const initialState = {
    isLoading: false,
    shorts:[],
    error: null
}

    export const shortreducer = (state = initialState, action) => {
        const {type, payload} = action;
        switch (type) {
            case types.GET_SHORTS:
                return {
                    ...state,
                    error:'',
                    isLoading: true
                }
            case types.GET_SHORTS_SUCCESS:
                return {
                    ...state,
                    shorts: payload,
                    error:'',
                    isLoading: false,
            
                }
            case types.GET_SHORTS_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                   error :payload
                }
            default:
                return state;
        }
    }



