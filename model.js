const mongoose=require("mongoose")
const validator=require("validator")
const bcrypt=require('bcrypt')

const schema=mongoose.Schema({

    name:{
        type:String,
        minLength:2,
        maxLength:30,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validatate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("not good email")
            }
        }

    },

    phone:{
        type:Number,
        minLength:10,
        maxLength:10
    },
    address:{
        type:String,
        required:true
    }
    
})

schema.pre("save",async function(next)
{
console.log(`${this.email}`)

if(!this.isModiefied("email"))
{
this.email=await bcrypt.hash(this.email,10)

console.log(this.email)

    next()
}
})

const Student=new mongoose.model('studentdata',schema)

module.exports=Student
