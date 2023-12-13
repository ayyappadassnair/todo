import React from 'react'
import signUp from './SignUp.module.css'
import { FaHandPeace } from "react-icons/fa6";

const SignUp = () => {
  return (
    <>
     <h1>Sign up</h1>
     <p>to make your time productive <FaHandPeace className={signUp.icon} /></p>
      <div className={signUp.main}>
        <div className={signUp.full_sec}>
         <div className={signUp.input1}>
            <div>
            <label className={signUp.lab1}>First Name <span>*</span></label>
            <input type="text" className={signUp.in1} />
            </div>
            <div>
            <label  className={signUp.lab1}>Last Name</label>
            <input type="text" className={signUp.in1} />
            </div>
         </div>
         
         <div className={signUp.input2}>
            <div>
                <label className={signUp.lab2}>Email address<span>*</span></label><br></br>
                <input type="text" className={signUp.in2}/>
            </div>
            <div className={signUp.lab3_div}>
                <label className={signUp.lab3}>password<span>*</span></label><br></br>
                <input type="text" className={signUp.in2}/>
            </div>

         </div>
           <button className={signUp.signupbtn}>Sign up</button><br></br>

           Already a user? <a href='/login'>Login</a>
           </div>
      </div>
    </>
  )
}

export default SignUp