import * as types from "./actionTypes";

const initialState = {
    cart:[],
    loading:false,
    error:false,

}

const cartreducer = (state = initialState, action) => { 'reducer'
const {type, payload} = action;
 switch(type) {
    
case types.  ADD_PRODUCT_CART_REQUEST:
    return {
        ...state,
        error: '',
        loading: true
    }
case types.  ADD_PRODUCT_CART_SUCCESS:
    return {
        ...state,
    
        error: '',
        cart: [...state.cart, payload],
        loading: false
    }
case types. ADD_PRODUCT_CART_FAILURE:
    return {
        ...state,
        error: payload,
        loading: false
    }
  
  

    /////GET//////////

    case types.GET_PRODUCTS_REQUEST:
        return {
            ...state,
            error: '',
            loading: true
        }
    case types.   GET_PRODUCTS_SUCCESS:
        return {
            ...state,
        
            error: false,
            cart:   payload,
            loading: false
        }
    case types.GET_PRODUCTS_FAILURE:
        return {
            ...state,
            error: true,
            loading: false
        }







  ////////delete////////
    case types.DELETE_PRODUCT_CART_REQUEST:
        return{
          ...state, loading:true
        }
     
     case types.DELETE_PRODUCT_CART_SUCCESS:
      return{
        ...state, 
        loading:false,
         cart:payload
      }
    
      case types.DELETE_PRODUCT_CART_FAILURE:
        return{
          ...state, 
          loading:false,
          error:true
        }

    default:
        return state;
}
}







export default  cartreducer;