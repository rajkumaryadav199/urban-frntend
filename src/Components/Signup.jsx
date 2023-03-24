import React, { useState } from 'react';
import "./Signup.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../Redux/Siginup/action';

export default function Signup() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //States
  const [formData,setForm] = useState({
    firstName: '',
    lastName: '',
    email: "",
    password: "",
  });

  const handleInput  = (e) => {
    const {name, value } = e.target;

    setForm({
      ...formData,
      [name]: value,
    });
  };

  //const isauthenticated = useSelector(state=>state.signUp.isauthenticated);

  const handleSubmit =  (e) => {
    console.log(formData,"check")
    e.preventDefault();
    if (formData.firstName === "" || formData.email === "" || formData.password === "") {
      return
    }
    dispatch(signUp(formData)); 
    
      alert("Register Successfully")
    
    
    navigate("/login");
  }
 
 

  return (
    <div className='signupcontainer'>
      <h1 className='heading1'>Create account</h1>
      <form className='signupinput '>
        <input  name="firstName"  type="text" placeholder="name" onChange={(e)=>{handleInput(e)}} className='detail' required />
        
        <br />
        <input  name="lastName" type="text"  placeholder="name"  onChange={(e)=>{handleInput(e)}}className='detail' required />
        
        <br />
        <input  name="email" type="email"   placeholder="Email" onChange={(e)=>{handleInput(e)}} required/>
        <br />
        <input name="password" type="password"   placeholder="Password"  onChange={(e)=>{handleInput(e)}} required/>
        
        <br />

        <input  type="button" value="create" className='signupbutton' onClick={handleSubmit} />
        
      </form>

    </div>
  )
}







// const navigate = useNavigate();
// const dispatch = useDispatch();

// //States
// const [formData, setForm] = useState({
//   firstName: '',
//   lastName: '',
//   email: "",
//   password: "",
// });

// const handleInput  = (e) => {
//   const { name, value } = e.target;

//   setForm({
//     ...formData,
//     [name]: value,
//   });
// };

// const handleSubmit = async (e) => {
//   console.log(formData,"check")
//   e.preventDefault();
//   if (formData.firstName === "" || formData.email === "" || formData.password === "") {
//     return
//   }

//   const { data } = await axios.post("https://urbantouchclone.herokuapp.com/register", formData)
//   console.log(data)

//   if (data.status === "ok") {
//     alert("Register Successfully");
//     navigate('/')
//   }
//   else {
//     alert("email should be unique");
//   }

// }





// return (
//   <div className='signupcontainer'>
//     <h1 className='heading1'>Create account</h1>
//     <form className='signupinput '>
//       <input  name="firstName" value={formData.firstName} type="text" placeholder="name" onChange={handleInput } className='detail' />
      
//       <br />
//       <input  name="lastName" type="text" value={formData.lastName} placeholder="name" onChange={handleInput } className='detail' />
      
//       <br />
//       <input  name="email" type="email" value={formData.email} placeholder="Email" onChange={handleInput } />
//       <br />
//       <input name="password" type="password"  value={formData.password} placeholder="Password" onChange={handleInput } />
//       <br />

//       <input  type="button" value="create" className='signupbutton' onClick={handleSubmit} />
      
//     </form>

//   </div>
// )

