
//  import * as types from '../Newarrival/actionTypes';
import * as types from './actionTypes';
import axios from 'axios';

// const  addProductCartRequest = (payload) =>  {
//     return {
//         type: types.ADD_PRODUCT_CART_REQUEST,
//         payload
//     }
// }

// export const  addProductCartSuccess = (payload ) => {
//     return {
//         type: types.ADD_PRODUCT_CART_SUCCESS,
//         payload 
//     }
// }

// export const  addProductCartFailure = (payload ) => {
//     return {
//         type: types.ADD_PRODUCT_CART_FAILURE,
//         payload 
//     }
// }

// Add to cart


export const addProductCart  = (payload) => dispatch => {
    dispatch({type:types.ADD_PRODUCT_CART_REQUEST});
    return axios.post('https://nice-blue-zebra-hose.cyclic.app/api/cart', payload)
  //  console.log("pro",product)
    .then((r) => dispatch({type:types.ADD_PRODUCT_CART_SUCCESS,payload:r.data}))
    .catch((e) => dispatch({type:types.ADD_PRODUCT_CART_FAILURE, payload:e}));
}



          ///////////getcart/////
          export const getProduct=()=>(dispatch)=>{

            dispatch({ type:types.GET_PRODUCTS_REQUEST});
        
            return axios
            .get("https://nice-blue-zebra-hose.cyclic.app/api/cart")
            .then((r)=>{
                dispatch({type:types.GET_PRODUCTS_SUCCESS, payload:r.data})
            })
            .catch((r)=>{
                 dispatch({type:types.GET_PRODUCTS_FAILURE, payload:r})
            })
        }

 

export const deleteProduct=(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_PRODUCT_CART_REQUEST})

    return axios
.delete(`http://localhost:8080/cart/${id}`)
    .then((r)=>{
        dispatch({type:types.DELETE_PRODUCT_CART_SUCCESS,payload:r})
    }).catch(((err)=>{
        dispatch({type:types.DELETE_PRODUCT_CART_FAILURE,payload:err})
    }))
}