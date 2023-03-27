import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import {  getMensData,getNewArrival,getMensFilterData} from '../../Redux/Newarrival/action';
import  "../ProductPage/Newarrival.css";

import Productdetail from './Productdetail';
import { Select ,AccordionButton, AccordionItem,Stack,Checkbox,Accordion,Box,AccordionIcon,AccordionPanel, Flex
} from '@chakra-ui/react'

export default function Newarrival() {
  // States for filter paramerter 
  const [colorFilters, setColorFilters] = useState([]);
  const [sizeFilters, setSizeFilters] = useState([]);
  const [titleFilters, setTitleFilters] = useState([]);

     const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector( store =>  store.newarrivalreducer.products);

    // data sent  to action to store into store
    useEffect(() => {
        dispatch(getMensData());
    },[dispatch,products?.length]);


// Methods for pagination
const [currentPages, seTCurrentPages]=useState(1)
// total data per page
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

// Handdle for function filter datas

const handleColorChange = (event) => {
  const value = event.target.value;
  const checked = event.target.checked;
  if (checked) {
    setColorFilters(prevFilters => [...prevFilters, value]);
  } else {
    setColorFilters(prevFilters => prevFilters.filter(f => f !== value));
  }
}

const handleSizeChange = (event) => {
  const value = event.target.value;
  const checked = event.target.checked;
  if (checked) {
    setSizeFilters(prevFilters => [...prevFilters, value]);
  } else {
    setSizeFilters(prevFilters => prevFilters.filter(f => f !== value));
  }
}

const handleTitleChange = (event) => {
  const value = event.target.value;
  const checked = event.target.checked;
  if (checked) {
    setTitleFilters(prevFilters => [...prevFilters, value]);
  } else {
    setTitleFilters(prevFilters => prevFilters.filter(f => f !== value));
  }
}

const filteredItems = records.filter(item => {
  // Check if color filter matches
  if (colorFilters.length > 0 && !colorFilters.includes(item.color)) {
    return false;
  }
  // Check if size filter matches
  if (sizeFilters.length > 0 && !sizeFilters.includes(item.size)) {
    return false;
  }
  // Check if title filter matches
  if (titleFilters.length > 0 && !titleFilters.includes(item.title)) {
    return false;
  }
  // All filters match
  return true;
});

  return (
    <div>
      
    <h1 className='heading'>  NEW ARRIVALS</h1>


   <div className='main-newarrivl'>

 <div className='filter'>

 <Accordion defaultIndex={[0]}   allowMultiple>
 <AccordionItem>
  
  <h2>
    <AccordionButton className='accbtn'  style={{border:"none" , fontSize:"20px"}}>
      <Box as="span"  flex='1' textAlign='left'>
        Size
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
<AccordionPanel>
<Stack spacing={5} direction='column'>

<div className='checkbox'>
<input type="checkbox" value="M" checked={sizeFilters.includes("M")} onChange={handleSizeChange}/>
<label>M</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="L" checked={sizeFilters.includes("L")} onChange={handleSizeChange}/>
<label>L</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="XL" checked={sizeFilters.includes("XL")} onChange={handleSizeChange}/>
<label>XL</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="XXL" checked={sizeFilters.includes("XXL")} onChange={handleSizeChange} />
<label>XXL</label>
</div>
</Stack>
</AccordionPanel>
   

   
    </AccordionItem>
</Accordion>

 <Accordion defaultIndex={[0]} allowMultiple>
<AccordionItem>
  <h2>
    <AccordionButton className='accbtn'>
      <Box as="span" flex='1' textAlign='left'>
        Color
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
<AccordionPanel>
<Stack spacing={5} direction='column'>

<div className='checkbox'>
<input type="checkbox" value="Red" checked={colorFilters.includes("Red")} onChange={handleColorChange}/>
<label>Red</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="Green" checked={colorFilters.includes("Green")} onChange={handleColorChange}/>
<label>Green</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="Blue" checked={colorFilters.includes("Blue")} onChange={handleColorChange}/>
<label>Blue</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="Black" checked={colorFilters.includes("Black")} onChange={handleColorChange} />
<label>Black</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="White" checked={colorFilters.includes("White")} onChange={handleColorChange} />
<label>White</label>
</div>
</Stack>
</AccordionPanel>
   

   
</AccordionItem>
</Accordion>

<Accordion defaultIndex={[0]} allowMultiple>
<AccordionItem>
  <h2>
    <AccordionButton className='accbtn'>
      <Box as="span" flex='1' textAlign='left'>
        Title
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
<AccordionPanel>
<Stack spacing={5} direction='column'>

<div className='checkbox'>
<input type="checkbox" value="Polo" checked={titleFilters.includes("Polo")} onChange={handleTitleChange}/>
<label>Polo</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="Addidas" checked={titleFilters.includes("Addidas")} onChange={handleTitleChange}/>
<label>Addidas</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="Levis" checked={titleFilters.includes("Levis")} onChange={handleTitleChange}/>
<label>Levi's</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="Puma" checked={titleFilters.includes("Puma")} onChange={handleTitleChange} />
<label>Puma</label>
</div>

<div className='checkbox'>
<input type="checkbox" value="Petter England" 
checked={titleFilters.includes("Petter England")}
onChange={handleTitleChange} />
<label>Petter England</label>

</div>
</Stack>
</AccordionPanel>
   
   </AccordionItem>
</Accordion>
 </div>


    <div className='newarrivalcontain'> 

    
           {
            filteredItems.map((product,index)=>{
                
                    return(
                        <div key={index}>
                        
                                <NavLink to={`/${"newarrival"}/${product._id}`}>
                                <img src={product.image} alt="img" className='newimg'/>
                                
                                </NavLink>
                        
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                        
                        
                        </div>
                    )
                })
              }
 
   
    
    </div>

  

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