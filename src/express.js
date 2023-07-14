const express = require("express")
const collection = require("./DB/collection")
const collectioni= require("./DB/collectioni")
const collectionii=require('./DB/collectionii')
const { createHash } = require('crypto');


const cors = require("cors");

//const { text } = require("express");
const app =express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())
const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/algo",{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>{
    console.log("mongodb connected");

})
.catch((e)=>{
    console.log(e)
    console.log("failed");
})

app.get("/Login",cors(),(req,res)=>{


})
app.post("/Login",async(req,res)=>{
  
    const {text,password}=req.body
    console.log(text,password)
    try{
        const check= await collection.findOne({text:text})
        if(check.password==password){
          
          
            
          
          res.json("exist")
          
        }
        else{
          res.json("notexist")
        }
      }
      catch(e){
          res.json("notexist")
      
      }
 })

app.post("/Register",async(req,res)=>{
    const {text,password}=req.body
    const data={
        text:text,
        password:password
    }
    try{
        const check= await collection.findOne({text:text})
        if(check){
          res.json("exist")
        }
        else{
          res.json("notexist")
          await collection.insertMany([data])
        }
      }
      catch(e){
          res.json("notexist")
      
      }
})

app.post("/Dashboard",async(req,res)=>{
  const {loc,ack,mnemonic}=req.body
  var smn=createHash('sha256').update(mnemonic).digest('hex');
  const data={
      text:loc,
      ack:ack,
      mnemonic:mnemonic,
      smnemonic:smn
  }
  try{   
    const check= await collectioni.findOne({text:loc})
        if(check){
          res.json(check)
          
        }
        else{
        res.json("wallet_created")
        await collectioni.insertMany([data])}
      
    }
    catch(e){
        res.json("not_created")
    
    }
})
app.post("/Transi",async(req,res)=>{
  const {sacc,racc}=req.body
 /* const data={
      text:loc,
      ack:ack,
      mnemonic:mnemonic
  }*/
  try{   
    const check= await collectioni.findOne({text:sacc})
    const check1= await collectioni.findOne({text:racc})
    var f=[check,check1];
        if(check && check1){
          
          res.json(f)
          
        }
        else{
        res.json("notexist")
     //   await collectioni.insertMany([data])
        }
    }
    catch(e){
        res.json("notexistx")
    
    }
})

app.listen(8080,()=>{
    console.log("port connected");
})
  