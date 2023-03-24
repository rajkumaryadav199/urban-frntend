import { fontSize } from '@mui/system'
import React from 'react'
import "./paymentpage.css"

export default function PaymentPage() {
  return (
    <div>
        <div className='paymentcheck'>
        <div className='paymentinfo'>
        <div className='szcontainers'> 
        <div className='contactinfor'> 
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

      <hr/>
        <div className='paymentmethod'>
        <div>
          <h1>Method</h1>
          <p>Standard Shipping · Free</p>
           </div>
       </div>
      </div>


          <div className='paymenttrans'>
            <h1  style={{marginLeft:"-80%" ,fontSize:"20px"}}>Payment</h1>

            <p style={{marginLeft:"-34%" ,color:"GrayText"}}>All transactions are secure and encrypted.</p>
         
         <div className='paymentdiv'>
           <div className='paymentcard'>
            <p>Credit Card /</p>
            <p> Debit Card / </p>
            <p> Net Banking /</p>
            <p>  UPI</p>
           </div>
           <hr/>
           <p>
           After clicking “Complete order”, you will be redirected to Credit <br/> Card / Debit Card / Net Banking / UPI to complete your purchase<br/> securely.
           </p>
          
         </div>

         <div className='blling'>
         
         <h1 style={{marginLeft:"-65%" ,fontSize:"20px"}}>Billing address</h1> 
         <p  style={{marginLeft:"-2%",color:"GrayText"}}> Select the address that matches your card or payment method.</p> 
        
        <div className='same'>
         <div> 
      <div className='blue' >
        <div className='circles'></div>
      </div>
      <p >Same as shipping address</p>
      
      </div>
      <hr/>
      <div className='empty'>
        <div className='emptycircle'>

        </div>
        <p>Use a different address</p>
      </div>
 

        
      </div>

         </div>
         

         
      <div className='return'> 
  <div> 
    <p style={{color:"rgb(36, 141, 211);"}}>return to cart</p>
 
    <button className='butt'  >Continue to  order</button>  
 
    </div>
    </div>
          </div>
      
         </div>
         <div>

         </div>

  {/* ///coupon code */}
  <div className='leftcodes'>
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
    </div>
  )
}
