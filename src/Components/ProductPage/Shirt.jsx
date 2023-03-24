import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { getShirtData } from '../../Redux/Shirt/action';
import "../ProductPage/Shirts.css";

export default function Shirt() {

    const [data,setdata] = useState([]);

       const dispatch = useDispatch();
       const navigate = useNavigate();
         const  shirts = useSelector( store =>  store.shirtreducer.shirts);
     
    //     // const {loading,error} = useSelector( store =>  store.newarrival);
    
      useEffect(() => {
         dispatch(getShirtData());
     },[dispatch.shirts?.length]);
      console.log("shirt",shirts)
  return (
    <div> 
        <h1 className='heading'>SHIRTS</h1>
      <h2 className='subtitle'> features shirts from urbantouch. Choose the best outfit from a wide range  <br/> of collection.</h2>

    <div className='shirtcontain'>
      {
        shirts.map((shirt,index)=>{
            return(
                <div key={index}>
                <NavLink to={`/${"Shirts"}/${shirt.id}`}>
                <img src={shirt.image} alt="" className='shirtimg'/>
                </NavLink>
                    <h3>{shirt.title}</h3>
                    <p>{shirt.price}</p>
                 
                
                </div>
            )
        })
      }
    </div>
    </div>
  )
}



// export default function Newarrival() {
//     const [data,setdata] = useState([]);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const products = useSelector( store =>  store.newarrivalreducer.products);
 
//     // const {loading,error} = useSelector( store =>  store.newarrival);

//     useEffect(() => {
//         dispatch(getMensData());
//     },[dispatch.products?.length]);
//     console.log("prop",products)
//   return (
//     <div>
        
//         </div>

//   )}