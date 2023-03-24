import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { getSweaterData } from '../../Redux/Sweaters/action';
import "../ProductPage/sweater.css";

export default function Sweater() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   const    sweater= useSelector( store =>  store.sweaterSreducer.sweater);
  
 //     // const {loading,error} = useSelector( store =>  store.newarrival);
 
   useEffect(() => {
      dispatch(getSweaterData());
  },[dispatch.  sweater?.length]);
   console.log("sweater",  sweater)


  return (
    <div>
   <h1 className='heading'>SWEATERS</h1>
      <h2 className='subtitle'> Features sweaters collection from urbantouch, Choose your favourite outfit <br/>from a wide range of collection.</h2>

    <div className='sweatercontain'>
      {
        sweater.map((sweater,index)=>{
            return(
                <div key={index}>
                  <NavLink to={`/${"sweaters"}/${sweater.id}`}>
                    <img src={sweater.image} alt="" className='sweaterimg'/>
                  </NavLink>
                    <h3>{sweater.title}</h3>
                    <p>{sweater.price}</p>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}
