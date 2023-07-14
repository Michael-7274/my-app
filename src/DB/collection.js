const mongoose=require('mongoose')
const newSchema= new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
const collection=mongoose.model("collection",newSchema)
module.exports=collection