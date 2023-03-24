import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './Blog'
import Information from './Checkout/Information'
import PaymentPage from './Checkout/PaymentPage'
import Shipping from './Checkout/Shipping'
import Fotter from './Fotter'
import Homepage from './Homepage'
 
import Login from './Login'
import Navbar from './Navbar'
import Addcartpopup from './ProductPage/Addcartpopup'
import Denims from './ProductPage/Denims'
import Newarrival from './ProductPage/Newarrival'
import Productdetail from './ProductPage/Productdetail'
import Shirt from './ProductPage/Shirt'
import Shorts from './ProductPage/Shorts'
import Sweater from './ProductPage/Sweater'
import Trouser from './ProductPage/Trouser'
import Tshirt from './ProductPage/Tshirt'
import Yourcart from './ProductPage/Yourcart'
import Signup from './Signup'

export default function AllRoutes() {
  return (
    <div>
       <div>
        <Navbar />
        </div>
        <Routes> 
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/newarrival" element={<Newarrival/>} />
        <Route path="/shirt" element={<Shirt/>} />
        <Route path="/tshirt" element={<Tshirt/>} />
        <Route path="/trouser" element={<Trouser/>} />
        <Route path="/denims" element={<Denims/>} />
        <Route path="/shorts" element={<Shorts/>} />
        <Route path="/sweaters" element={<Sweater/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/information/shipping" element={<Shipping/>} />
        <Route path="/information/shipping/payment" element={<PaymentPage/>} />

        <Route path="/:end/:id" element={<Productdetail/>} />
        {/* <Route path="/addtocartpopup" element={<Addcartpopup/>} /> */}
        <Route path="/shirt/:id" element={<Productdetail/>} />
        <Route path="/yourcart" element={<Yourcart/>} />
        
       
        <Route path="/information" element={<Information/>} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>
      <div>
        <Fotter/>
      </div>
    </div>
  )
}

 
 