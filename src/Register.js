import './Register.css'
import profile from "./a.png";
import email from "./email.jpg";
import pass from "./pass.png";
import Navbar from "./Navbar";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register(){
  const history=useNavigate();
  const [text,setUsername]=useState('')
  const [password,setPassword]=useState('')
  async function submit(e){
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/Register",{
        text,password
      })

      .then(res=>{
        if(res.data=="exist"){
          alert('user already exist') 
          document.getElementById('a').value='';
          document.getElementById('b').value='';
          document.getElementById('c').value='';
          //history("/Dashboard",{state:{id:text}})
        }
        else if(res.data=="notexist"){
          alert(text+" Added")
          document.getElementById('a').value='';
          document.getElementById('b').value='';
          document.getElementById('c').value='';
         // history("/Dashboard",{state:{id:text}})
          
        }
     })
     .catch(e=>{
      alert("wrong details")
     })
      }
      catch(e){
        console.log(e);
      }
  }
    return(
        <React.Fragment>
        <Navbar></Navbar>
        <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile"/>
   
              </div>
   
   
            </div>
            <div>
              <h1>Register Page</h1>
              <form action='POST'>
              <div>
                <img src={email} alt="email" className="email"/>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="user name" className="name" id='a' name='' />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email"/>
                {/*onChange={(e)=>{setPassword(e.target.value)}}*/}
                <input type="password"  placeholder="password" className="name" id='b' name='' />
              </div>
              <div className="third-input">
                <img src={pass} alt="pass" className="cemail"/>
                <input type="password" onChange={(e)=>{ if (e.target.value==document.getElementById('b').value){document.getElementById('bu').type = 'submit'; setPassword(e.target.value)} }} placeholder="confirm password" className="name" id='c' />
             </div>
             <div className="login-button">
             <input type='hidden' className="but" id='bu' value="Register" onClick={submit} />
             </div>
             </form>
              
               <p className="link">
                 <a href='./Login'>Login </a> Or<a href="./Login">Get started</a>
               </p>
              
    
            </div>
          </div>
          
   
        </div>
       </div>
       </React.Fragment>
         
 );
    }

    
export default Register;