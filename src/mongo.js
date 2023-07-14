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
const newSchemai= new mongoose.Schema({
    
    ack:{
        type:String,
        required:true
    },
    mnemonic:{
        type:String,
        required:true
    }
})
const collection=mongoose.model("collection",newSchema)
const collectioni=mongoose.model("collectioni",newSchemai)

module.exports=collection
module.exports=collectioni