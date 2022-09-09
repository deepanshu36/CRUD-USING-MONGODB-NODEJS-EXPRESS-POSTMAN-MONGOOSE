const express=require('express')

const Student = require('./model')

const router=require('./router')
const app=express()

require("./conn")

const model=require('./model')

const port=process.env.port || 8000

app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})


