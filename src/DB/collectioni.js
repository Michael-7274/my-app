const mongoose=require('mongoose')
const newSchemai= new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    ack:{
        type:String,
        required:true
    },
    mnemonic:{
        type:String,
        required:true
    },
    smnemonic:{
        type:String,
        required:true
    }
})
const collectioni=mongoose.model("collectioni",newSchemai)
module.exports=collectioni