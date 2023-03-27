import React from 'react'
import { Link } from 'react-router-dom'
import "./Information.css"
export default function Information() {
  return (
    <div className="information">
{/* 
     ///contact information */}
    <div  className='contactbox'>
      <div className='already'> <div> 
     <h1>Contact information</h1>  
      <p>Already have an account? Log in</p>
      </div>
      </div>

    <input type="text" placeholder="Email or mobile phone number" />
    
    <br/>

    <div className='contactno'> 
    <div> 
    <input type="checkbox" name="vehicle1" className='check'/>
    <p>Email me with news and offers</p>
    </div>
    </div>
    <div>
        <h1 className='shipp'>Shipping address</h1>
        <select className='country'>
            <option>Select a country</option>
            <option>India</option>

        </select>
        <br/>
        <div className='name'> 
        <div> 
        <input type="text" placeholder="Full name" />
        
        <input type="text" placeholder="Last name" />
        </div>
        </div>
        <br/>
        <div className='address'>
        <input type="text" placeholder="Address" />
        <br/>
        <input type="text" placeholder="Apartment,suite,etc.(option)" />
        </div>
        <br/>
        <div className='city'> 
        <div> 
        <input type="text" placeholder="City" />
        
          <select>
            <option>Select a state</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chandigarh</option>
            <option>Chhattisgarh</option>
            <option>Dadra and Nagar Haveli</option>
            <option>Daman and Diu</option>
            <option>Delhi</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jammu and Kashmir</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Lakshadweep</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Puducherry</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>

       </select>
<div> 
<input type="text" placeholder="Pin code" />
</div>
</div>
</div>
<br/>
<input type="text" placeholder="Phone" />

<br/>
<div className='contactno'> 
    <div>
<input type="checkbox" name="vehicle1" className='check'/>
  <p>	Save this information for next time</p>
  </div>
  </div>
  <div className='return'> 
  <div> 
    <p>Return to cart</p>
   <Link to="/information/shipping">  
   <button className='btn'>Continue to shipping</button> 
   </Link>
    </div>
    </div>
    </div>
    </div>

    
    <div className='left'>
     
    <div className='couponbox'> 
  <div className='coupimg'>

   </div>
   <div className='couponname'>

   </div>
   </div>
    <hr className='hr'/>
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

     
     //</div>
  )
}
