 
 
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { getDenimsData } from '../../Redux/Denims/action';
import "../ProductPage/Denims.css";
export default function Denims() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
   const   denims= useSelector( store =>  store.denimsreducer. denims);
  
   // const {loading,error} = useSelector( store =>  store.newarrival);
 
   useEffect(() => {
      dispatch(getDenimsData());
  },[dispatch. denims?.length]);
   console.log("denims", denims)
  return (
    <div>
 <h1 className='heading'>DENIMS</h1>
      <h2 className='subtitle'> Features denims collection from urbantouch, Choose your favourite outfit  <br/>  from a wide range of collection.</h2>

    <div className='denimscontain'>
      {
        denims.map((denim,index)=>{
            return(
                <div key={index} >
                  <NavLink to={`/${"denims"}/${denim.id}`}>
                    <img src={denim.image} alt="" className='denimsimg'/>
                  </NavLink>
                    <h3>{denim.title}</h3>
                    <p>{denim.price}</p>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}

 
 
 

 