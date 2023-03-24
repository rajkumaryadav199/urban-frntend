 
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { getTShirtData } from '../../Redux/T-shirt/action';
 import "../ProductPage/Tshirt.css";
 


export default function Tshirt() {
    const [data,setdata] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
      const  tshirts = useSelector( store =>  store.tshirtreducer.tshirts);
  
 //     // const {loading,error} = useSelector( store =>  store.newarrival);
 
   useEffect(() => {
      dispatch(getTShirtData());
  },[dispatch.tshirts?.length]);
   console.log("tshirt",tshirts)
return (
 <div>
    
    <h1 className='heading'> T SHIRTS</h1>
      <h2 className='subtitle'> Features t-shirt collection from urbantouch, Choose your favourite outfit  <br/>  from a wide range of collection.</h2>


   <div className='tshirtcontainer'>
   {
      tshirts.map((tshirt,index)=>{
          return(
              <div key={index}>
                <NavLink to={`/${"tshirt"}/${tshirt.id}`}>
                  <img src={tshirt.image} alt="" className='tshirtimg'/>
                </NavLink>
                  <h3>{tshirt.title}</h3>
                  <p>{tshirt.price}</p>
              </div>
          )
      })
   }
 </div>
 </div>
)
  
}
