import React, { useEffect, useState } from 'react';
import "./Signup.css"
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../Redux/auth/SignUp/action';

export default function Signup() {
const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoading}=useSelector((state)=>state.signUpReducer)
  //States
  console.log("message", isLoading)
  const [formData,setForm] = useState({
    firstName: '',
    lastName: '',
    email: "",
    password: "",
  });

  const handleInput  = (e) => {
    const {name, value } = e.target;
  console.log(name, value , e.target)
    setForm({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
   dispatch(signUp(formData)); 
  
  }

  useEffect(()=>{
   if(!isLoading){
    navigate("/login")
   }
  },[isLoading])

  return (
    <div className='signupcontainer'>
      <h1 className='heading1'>Create account</h1>
      <form className='signupinput ' onSubmit={(e)=>handleSubmit(e)}>
        <input  name="firstName" 
         type="text" placeholder="First Name" 
         onChange={(e)=>{handleInput(e)}} 
         className='detail' required />
        
        <br />
        <input  name="lastName" 
        type="text"  
        placeholder="Last Name"  
        onChange={(e)=>{handleInput(e)}}className='detail' required />
        
        <br />
        <input  name="email" 
        type="email"   
        placeholder="Email" 
        onChange={(e)=>{handleInput(e)}} required/>
        <br />
        <input name="password" 
        type="password"   
        placeholder="Password"  
        onChange={(e)=>{handleInput(e)}} required/>
        
        <br />

        <input  type="Submit" 
        value="create" 
        className='signupbutton' 
       />
        
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

