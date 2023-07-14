import React, { useState, useEffect } from 'react';
import './Transi.css';
import axios from 'axios';
import Signav from './Signav';
//import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk from "algosdk";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation,useNavigate} from "react-router-dom";
const algodClient = new algosdk.Algodv2("",'	https://testnet-api.algonode.cloud', '');
function Transi()
{   
    const [connector, setConnector] = useState();
    
        //alert(localStorage.getItem("name"))
    const Tr=async()=>
    {    
         var sacc=localStorage.getItem("name");
        //var sacc=document.getElementById('sacc').value;
        var racc=document.getElementById('racc').value;
        
        try {
            await axios.post("http://localhost:8080/Transi/",{
              sacc,racc
            })
             .then(res=>{
                if(res.data=="notexist"){
                   // history("/Dashboard",{state:{id:text}})
                   alert('not exist')
                }
                else if(res.data=="notexistx"){
                    // history("/Dashboard",{state:{id:text}})
                    alert('error')
                 }
                else {
                    console.log(res.data[1].text)
                    const g =async()=>{
                        const algosdk = require('algosdk');
      const mnemonic = res.data[0].mnemonic;
      const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);
      let receiver=res.data[1].ack;
      let amount = parseInt(document.getElementById("passs").value);
      amount=amount*1000000
    
      const params = await algodClient.getTransactionParams().do();
  
      let txn = {
        "from": recoveredAccount.addr,
        "to": receiver,
        "amount": amount,
        "fee": params.fee,
        "firstRound": params.firstRound,
        "lastRound": params.lastRound,
        "genesisID": params.genesisID,
        "genesisHash": params.genesisHash,
        "note": new Uint8Array(0),
    };
  
      const signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk);
      const sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do();//blob-in format of unit-8 array
      setConnector("https://testnet.algoexplorer.io/tx/"+sendTx.txId);
      //waitForConfirmation(algodClient, sendTx.txId);
      toast.success('Transaction completed successfully', {position: "bottom-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",});
    



                    }
                  g()
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


   // document.getElementById('dr').innerHTML=location.state.id;
    return (
        <React.Fragment>
            <div className="name1"><h1>Hey lets make a Transaction</h1></div>
   <div className="wallc">
        {/*
        <p className="ad">Sender Account :</p>
    <input type="text" id="sacc" className="acc" />*/}
        <p className="ad1">Receiver Account :</p>
        <input type="text" id="racc" className="acc" />
        <p className="pa">Amount :</p>
        <input type='number' className="acc" id="passs"/>
        <br></br>
        <br></br>
        <input type='submit' className="su" id='su' onClick={Tr} value='send'/>
        {connector && <a href={connector}>View Transaction</a>}
        
        <ToastContainer />
   </div>
        
        </React.Fragment>
    )
}
export default Transi