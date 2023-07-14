import React from "react";
import './Wallet.css';
import algosdk from 'algosdk';
import {useLocation,useNavigate} from "react-router-dom";
import axios from 'axios';

import { useEffect } from "react";
const Wallet= () =>{
    const location=useLocation()
    useEffect(()=>{

       async function fetchApi(){
            var account=algosdk.generateAccount();
            
            var loc=location.state.id
    var mnemonic=algosdk.secretKeyToMnemonic(account.sk);
   

   
    var ack=account.addr;
    console.log(ack);
    console.log(mnemonic);
    try {
        await axios.post("http://localhost:8080/Dashboard",{
          loc,ack,mnemonic
        })
  
        .then(res=>{
          if(res.data=="wallet_created"){
            alert('wallet created') 

            document.getElementById('add1').innerHTML=ack;
            document.getElementById('passs1').innerHTML=mnemonic;
            //history("/Dashboard",{state:{id:text}})
          }
          else{

           alert("wallet not created")
           document.getElementById('add1').innerHTML=res.data.ack;
           document.getElementById('passs1').innerHTML=res.data.mnemonic;
           const recoveredAccount = algosdk.mnemonicToSecretKey(res.data.mnemonic);
           console.log("https://testnet.algoexplorer.io/address/"+recoveredAccount.addr);
           var si="https://testnet.algoexplorer.io/address/"+recoveredAccount.addr;
           localStorage.setItem("site", si);
            
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
    fetchApi()
    },[])
    
   // document.getElementById('dr').innerHTML=location.state.id;
    return (
       
   <div className="wallc1">
     
        <p className="ad" >Address</p>
        <textarea id="add1" rows="4" cols="50"></textarea>
        <p className="pa">Mnemonic</p>
        <textarea id="passs1" rows="4" cols="50"></textarea>
    
   </div>
        
        
    )
}

export default Wallet