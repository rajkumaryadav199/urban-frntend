import * as types from '../Newarrival/actionTypes';

    const initialState = {
        isLoading: false,
      denims: [],
        error: null
    }
    export const  denimsreducer = (state = initialState, action) => {
        const {type, payload} = action;
        switch (type) {
            case types.GET_DENIMS:
                return {
                    ...state,
                    error:'',
                    isLoading: true
                }
            case types.GET_DENIMS_SUCCESS:
                return {
                    ...state,
                  denims: payload,
                    error:'',
                    isLoading: false,
                }
            case types.GET_DENIMS_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error :payload
                }
            default:
                return state;
        }
    }
