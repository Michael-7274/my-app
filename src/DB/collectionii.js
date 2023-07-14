const mongoose=require('mongoose')
const newSchemaii= new mongoose.Schema({
    cu:{
        type:String,
        required:true
    }
   
})
const collectionii=mongoose.model("collectionii",newSchemaii)
module.exports=collectionii