import './Login.css'
import profile from "./a.png";
import email from "./email.jpg";
import pass from "./pass.png";
import Register from './Register';
import Navbar from "./Navbar";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login(){
  const history=useNavigate();
  const [text,setUsername]=useState('')
  const [password,setPassword]=useState('')
  async function submit(e){
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/Login/",{
        text,password
      })
       .then(res=>{
          if(res.data=="exist"){
              history("/Dashboard",{state:{id:text}})
              localStorage.setItem("name", text);
          }
          else if(res.data=="notexist"){
            alert("user have not sign up")
            
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
              <h1>Login Page</h1>
              <form action='POST'>
              <div>
                <img src={email} alt="email" className="email"/>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="user name" className="name" id='' name='' />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email"/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="user name" className="name" id='' name='' />
              </div>
              
             <div className="login-button">
             <input type="submit" className="but" value="Submit" onClick={submit} />
             </div>
             </form>
              
               <p className="link">
                 <a href='./Register'>Forgot password ?</a> Or <a href='./Register'>Sign Up</a>
               </p>
              
    
            </div>
          </div>
          
   
        </div>
       </div>
       </React.Fragment>
         
 );
    }

    
export default Login;