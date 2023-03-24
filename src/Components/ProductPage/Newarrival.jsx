import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import {  getMensData,getNewArrival,getMensFilterData} from '../../Redux/Newarrival/action';
import  "../ProductPage/Newarrival.css";
import Pagination from './Pagination';
import Productdetail from './Productdetail';
import { Select } from '@chakra-ui/react'

export default function Newarrival() {

     const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector( store =>  store.newarrivalreducer.products);

    useEffect(() => {
        dispatch(getMensData());
    },[dispatch,products?.length]);

const [currentPages, seTCurrentPages]=useState(1)
    
const recordsPerPage=8;
const lastIndex=currentPages*recordsPerPage
const firstIndex=lastIndex-recordsPerPage
const records=products.slice(firstIndex, lastIndex)
 const npage=Math.ceil(products.length/recordsPerPage)

const number=[...Array(npage+1).keys()].slice(1)

const perPage=()=>{
if(currentPages!==firstIndex)
{
seTCurrentPages(currentPages-1)
}
}

const changeCPage=(id)=>{
  seTCurrentPages(id)
 
}
const nextPage=()=>{
if(currentPages!==lastIndex)
{
seTCurrentPages(currentPages+1)
}
}


  return (
    <div>
      
    <h1 className='heading'>  NEW ARRIVALS</h1>

    <div >
      <div className="filter"  >
        <div className="filter-price">
          <h3>Filter by price</h3>
          <div className="filter-price-btn">
            <button
              
              className="filter-price-btn-1"
            >
              High to low
            </button>
            <button
                className="filter-price-btn-2"
            >
              Low to high
            </button>
               </div>
           </div>
        </div>


{/* 
        //select */}

<Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
    </div>
    <div className='newarrivalcontain'> 

    
           {
                records.map((product,index)=>{
                    return(
                        <div key={index}>
                        
                                <NavLink to={`/${"newarrival"}/${product.id}`}>
                                <img src={product.image} alt="" className='newimg'/>
                                
                                </NavLink>
                        
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                        
                        
                        </div>
                    )
                })
              }
 
   
    
    </div>

    <ul className='pages'>
    <li> 
    <button  className='page-link' onClick={perPage}>
      Prev
    </button>
    </li>
        {number.map((n, i)=>(
           
<li className={`page-item ${currentPages === n ? "active":" "}`} key={i}>
<button onClick={()=>changeCPage(n)} className={`${currentPages === n ? "active":" "}`}>{n}</button>
</li> 
           
            ))
       } 

       <li>
       <button className='page-link' onClick={nextPage}>
      Next
    </button>
       </li>
    </ul>

    
    </div>
  )}