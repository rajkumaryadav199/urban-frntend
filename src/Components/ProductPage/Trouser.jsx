 
  import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { getTrouserData  } from '../../Redux/Trouser/action';
 import "../ProductPage/Trouser.css";

export default function Trouser() {
    //const [data,setdata] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
   const  trousers= useSelector( store =>  store.trouserreducer.trousers);
  
 //     // const {loading,error} = useSelector( store =>  store.newarrival);
 
   useEffect(() => {
      dispatch(getTrouserData());
  },[dispatch.trousers?.length]);
   console.log("trouser",trousers)

  return (
    <div>
       
       <h1 className='heading'> TROUSERS</h1>
      <h2 className='subtitle'>  Features Trouser collection from urbantouch, Choose your favourite outfit    <br/>  from a wide range of collection.</h2>
   
    <div className='trousercontainer'>
      {
        trousers.map((trouser,index)=>{
            return(
                <div key={index}>
                  <NavLink to={`/${"trousers"}/${trouser.id}`}>
                    <img src={trouser.image} alt="" className='trouserimg'/>
                  </NavLink>
                    <h3>{trouser.name}</h3>
                    <p>{trouser.price}</p>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}
