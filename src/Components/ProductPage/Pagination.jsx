import React, { useState } from 'react'
import "./pagination.css";

export default function Pagination({page,Data}) {

    const [currentPages, seTCurrentPages]=useState(1)
    
    const recordsPerPage=page;
    const lastIndex=currentPages*recordsPerPage
    const firstIndex=lastIndex-recordsPerPage
   // const records=Data.slice(firstIndex, lastIndex)
     const npage=Math.ceil(Data/recordsPerPage)
  
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
    
    <ul className='page'>
    <li> 
    <a href='#' className='page-link' onClick={perPage}>
      Prev
    </a>
    </li>
        {number.map((n, i)=>(
           
<li className={`page-item ${currentPages===n ? "active":""}`} key={i}>
<a onClick={()=>changeCPage(n)} href="!#">{n}</a>
</li>
           
            ))
       } 

       <li>
       <a href='#' className='page-link' onClick={nextPage}>
      Next
    </a>
       </li>
    </ul>

 
  )
}
