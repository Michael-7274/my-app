
import React, { useState, useEffect } from 'react';
import './Wallet.css';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk from "algosdk";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation,useNavigate} from "react-router-dom";
const algodClient = new algosdk.Algodv2("",'	https://testnet-api.algonode.cloud', '');
const Trans=() =>{
    const [connector, setConnector] = useState();
    const location=useLocation()
    const Tr=async()=>
    { const algosdk = require('algosdk');
      const mnemonic = document.getElementById('mnemonic').value;
      const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);
      let receiver=document.getElementById("ID").value;
      let amount = parseInt(document.getElementById("firstnumber").value);
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


   // document.getElementById('dr').innerHTML=location.state.id;
    return (
        <React.Fragment>
   <div className="wallc">
        <form>
        <p className="ad">Account :</p>
        <input type="text" id="acc" className="acc" />
        <p className="pa">Amount :</p>
        <input type='number' className="am" id="passs"/>
        <br></br>
        <br></br>
        <input type='submit' className="su" id='su' onClick={Tr} value='send'/>
        {connector && <a href={connector}>View Transaction</a>}
        </form>
        <ToastContainer />
   </div>
        
        </React.Fragment>
    )
}
export default Trans