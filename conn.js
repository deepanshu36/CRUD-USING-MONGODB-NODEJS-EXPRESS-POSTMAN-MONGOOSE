const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/studentsapi")
.then(()=>{
    console.log('connection succeful')
})  
.catch((e)=>{
        console.log("no connection")
    })
