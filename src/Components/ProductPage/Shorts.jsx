  
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import {  getShortsData } from '../../Redux/Shorts/actions';
import  "../ProductPage/Shorts.css";

export default function Shorts() {

    const [data,setdata] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
      const  shorts = useSelector( store =>store.shortreducer.shorts);
  
 //     // const {loading,error} = useSelector( store =>  store.newarrival);
 
   useEffect(() => {
      dispatch(getShortsData());
  },[dispatch.shorts?.length]);
   console.log("shorts", shorts)

  return (


    <div>
      
      <h1 className='heading'>SHORTS</h1>
      <h2 className='subtitle'>Features Shorts collection from urbantouch, Choose your favourite outfit <br/>from a wide range of collection.</h2>
  
    <div  className='shortscontain'>
      {
        shorts.map((short,index)=>{
            return(
                <div key={index}>
                  <NavLink to={`/${"shorts"}/${short.id}`}>
                    <img src={short.image} alt="" className='shortimg'/>
                  </NavLink>
                    <h3>{short.title}</h3>
                    <p>{short.price}</p>
                </div>
            )
        })
      }

    </div>
    </div>
  )
}
