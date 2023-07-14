//import { Component } from "react";
import React  from "react";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Te.css';
import { Router } from "react-router-dom";
import Navbar from "./Navbar";
function Te(){
   
    return(
          
            <React.Fragment>
                <Navbar></Navbar>
         <div className="video-wrapper">
  <video  playsInline autoPlay muted loop id="vi"  >
    <source src="/vi.mp4" type="video/webm"/>
    Your browser does not support the video tag.
  </video>

  <div className="header">
    <h1>Algorand</h1>
    <button>Explore</button>
  </div>
</div>
        </React.Fragment>
 );


}


export default Te;