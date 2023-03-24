import React from 'react'
import "./Navbar.css"
import {IoIosSearch} from "react-icons/io";
import {FaRegUser} from "react-icons/fa";
import  { BsHandbag} from "react-icons/bs";
import {Link} from "react-router-dom";
 

 
export default function Navbar() {

  return (
    <div  className= "navcontainer">
      <div className='toLinknav'>
        <h1>Welcome to our store</h1> 
  
        </div>
        
      <div className='secondnav'> 
       <div className='urbannav'>
        <IoIosSearch  style={{width:"20px", height :"40px", marginLeft:"2%"}}/>
     <Link to="/" > 
     <img   className="touch"
        src='https://cdn.shopify.com/s/files/1/2381/1785/files/urbantouch-logo_250x.jpg?v=1647581012' alt=''  />
      </Link>  
       <Link to= "/login" ><FaRegUser   style={{width:"20px", height :"40px",color:"black", marginLeft:"25%"}}/></Link>
      <Link to="/yourcart" ><BsHandbag  style={{width:"20px", height :"40px", marginLeft:"20px" ,color:"black"}}/></Link>
       
        </div>

     <div className='links' >
    
          <Link to= "/newarrival"  style={{ color:"black" ,textDecoration:"none"}}>New Arrivals</Link>
          <Link to= "/shirt" style={{ color:"black",textDecoration:"none"}}>Shirts</Link>
          <Link to="/tshirt" style={{ color:"black",textDecoration:"none"}}>T-Shirts</Link>
          <Link to="/trouser" style={{ color:"black",textDecoration:"none"}}>Trousers</Link>
          <Link to="/denims" style={{ color:"black",textDecoration:"none"}}>Denims</Link>
          <Link to="/shorts" style={{ color:"black",textDecoration:"none"}}>Shorts</Link>
          <Link to="/sweaters" style={{ color:"black",textDecoration:"none"}}>Sweaters</Link>
          {/* <Link>Stores</Link> */}
          <Link to="/blog" style={{ color:"black",textDecoration:"none"}}> Blog </Link>
          {/* <Link to="/productdetails">Product Details</Link> */}
        
         
        </div>
     
     </div>
     </div>
  )
}
