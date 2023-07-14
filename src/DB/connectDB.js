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