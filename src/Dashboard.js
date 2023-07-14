import React,{useState} from "react";
import './Dashboard.css';
import Signav from "./Signav";
import Wallet from "./Wallet";
//import Trans from "../Trans";
import Transi from "./Transi";
import {useLocation,useNavigate} from "react-router-dom";

function Dashboard(){
    const [active,setActive]=useState('');
    const location=useLocation()
    var sit=localStorage.getItem('site');
   //alert(sit);
   // document.getElementById('dr').innerHTML=location.state.id;
    return (
        <React.Fragment>
            <Signav></Signav>

            <div className="name"><h1>Hello {location.state.id}</h1></div>
            

            <div className = "gallery">
            
  <div className="clipped-border" >
    <p className='cli' onClick={()=>setActive('f')} >Wallet</p>
  </div>
  <div className="clipped-border">
  {/*onClick={()=>setActive('f1')}*/}
<a className='cli' href='./Transi' id="an" >Transaction</a>
</div>
  <div className="clipped-border">
 <a className='cli' href={sit} id="an" >Explorer</a>
  </div>
    <div className="clipped-border">
<a className='cli' href="https://bank.testnet.algorand.network/" id="an" >Algos</a>
  </div>
    <div className="clipped-border">
 <p className='cli' >Recent</p>
  </div>
  <div className = "shadow"></div>
</div>
<div className="wallet">
    {active === 'f' && <Wallet/>}
    
    {/*active === 'a' && window.open('https://bank.testnet.algorand.network/')*/}

</div>

        
        </React.Fragment>
    )
}
export default Dashboard