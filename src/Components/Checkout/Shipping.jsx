import { Link } from 'react-router-dom';
import React from 'react'
import "./Shipping.css"

export default function Shipping() {
  return (
    <div className='ship'>

      <div className="contactship">
        <div className='szcontainer'> 
        <div className='contactinfo'> 
        <div> 
        <h1 >Contact  </h1>
        <p>+91 788979</p>
        <p>Change</p>
        </div>
        </div>
        <hr/>
        <div className='shipto'>
        <div> 
        <h1>Ship to</h1>
        <p>310/290C1 bajpainagar </p>
        <p>Change</p>
      </div>
      </div>
      </div>

      <h1 className='standard'>Shipping method</h1>
      <div className='method'> 
      <div>
        <div className='circle'></div>
      </div>
      <p >	Standard Shipping</p>
      <p>Free</p>
      </div>

      <div className='return'> 
  <div> 
    <p>Return to cart</p>
 
  <Link to='/information/shipping/payment'> <button className='but'>Continue to payment</button> </Link> 
 
    </div>
    </div>

     
      </div>

      {/* ///coupon code */}
    <div className='leftcode'>
    <hr/>
     <input placeholder='Discount code' className='discount' />
        <button className='apply'>Apply</button>
           <hr/>
        <div className='subtotal'> 
            <div>
            <p>Subtotal</p>
            <p>Shipping</p>

            </div>
            <div className='cal'>
            <p>$0.00</p>
            <p>Calculated at next step</p>
 
            </div>
            </div>
            <hr/>
            <div className='total'>

              <div>
            <p>Total</p>
            <p>INR ₹5,796.00</p>


        </div>
        </div>
        </div>
     
    </div>
  )
}
