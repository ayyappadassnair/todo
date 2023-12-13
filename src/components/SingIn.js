import React, { useState } from 'react'
import signIn from './SignIn.module.css'
import { FaHandPeace } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
  const[usename,setUsename]=useState('')
  const[pass,setPass]=useState('')
  const navigate = useNavigate()

  const check = ()=>{
    if(usename==="ayya@gmail.com" && pass ==="2001"){
      navigate('/todo')
    }else{
      alert("Incorrect password or email id")
    }
  }
  return (
    <>
      <h1>Sign in to your account</h1>
     <p>to add your task <FaHandPeace className={signIn.icon} /></p>
     <div className={signIn.main}>
        <label className={signIn.lab1}>Email address</label><br></br>
        <input type="text" className={signIn.input1} onChange={(e)=>setUsename(e.target.value)} />
        <label  className={signIn.lab2}>password</label><br></br>
        <input type="text" className={signIn.input1} onChange={(e)=>setPass(e.target.value)}/><br></br>
        <div className={signIn.rem}>
        <input type='checkbox'/>Remember me
        </div>
        <button className={signIn.signinbtn} onClick={check}>Sign in</button>
        <p>New User? <a href="/">Register</a></p>
     </div>
    </>
  )
}

export default SingIn