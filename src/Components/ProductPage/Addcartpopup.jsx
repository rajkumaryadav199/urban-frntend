import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import "../ProductPage/Addtocart.css"

export default function Addcartpopup() {
  return (
    <div className='addtocart'>
      <p><AiOutlineCheck/> Itemadded to your cart</p>

      <div className='image'>
        <div> 
        <img 
        src="https://cdn.shopify.com/s/files/1/2381/1785/products/1_b387a3ee-3d9b-4176-9d71-56b0cfb4c706.jpg?v=1651144737&width=140" alt="img"/>
        </div>
    <div className='addname'> 
     <p>LT Green Checkerd Shirt</p>
     <p>Size: M</p>
       <p>Color: Green </p>
     </div>
      </div>
        
      <button className='szview'>View my cart ()</button>
      <br/>
      <button className='szcheck'>Check out</button>

      <p className='addcontinue'>Continue shopping</p>

    </div>
  )
}
