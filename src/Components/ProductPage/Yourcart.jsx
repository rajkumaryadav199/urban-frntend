import React, { useEffect } from 'react'
import "../ProductPage/Yourcart.css"
import {GrAdd} from 'react-icons/gr'
import {GrSubtract} from 'react-icons/gr'
import {RiDeleteBinLine} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import {addProductCart, getProduct, GetProductCart} from "../../Redux/Cart/action"
import {deleteProduct} from "../../Redux/Cart/action"

export default function Yourcart() {

const  cart= useSelector( store =>  store.cartreducer.cart);

///console.log("raj",cart)

  const dispatch = useDispatch();


  // const handeldelete = (id )=>{
  //   dispatch(deleteProduct(id))
  //   console.log("idraj",id)
  // }
  const   handeldelete=(id)=>{
    dispatch(deleteProduct(+id)) 
   }

  useEffect(() => {
    if(cart.length>0){
      dispatch(getProduct());
    }
    
},[dispatch]);
// console.log("getprop",cart)

 
 
  return (
    <div className='your'> 
    <div className='yourcontainer'>
        <div className='yorname'> 
        <p>Your cart</p>
        <p>Continue shopping</p>
        </div>
      <div className='yourtext'>
       <p>PRODUCT</p>
       <p>QUANTITY</p>
       <p>TOTAL</p>
      </div>
      <hr/>

      <div>

        {
          cart.map((e)=>(
            <div  >
                  <div className='yourimg'>

                  <img src={e.image} alt=""/>
           <div>
           <p>gff</p>
           <p>RS:1388</p>
           <p>Size:</p>
           </div>
           <div className='yourquant'>
            <div>
                <p>quant</p>
                <button className='delete' onClick={()=>handeldelete(e.id)}   style={{background:"red"}}> 
           {/* < RiDeleteBinLine/> */}
           </button>
      </div>
      </div>

       
      <div className='yourtotal'>
        <p>total</p>
      </div>
      </div>  
            </div>
        ))}
        
  
      </div>
      

      <hr/>
      <div className='subtotals'>
     <div> 
         <p className='subtotalsprice'>Subtotal</p>
         <p  className='subtotalsprices' >Rs. 3,098.00</p>
         </div>
         <div className='subtax'> 
         <p>Tax included and shipping calculated at checkout</p>
         </div>
         <br/>
         <div> 
     <button className='subcheck'>Check out</button>
     </div>
      </div>
    </div>
     
    </div>
  )
}
