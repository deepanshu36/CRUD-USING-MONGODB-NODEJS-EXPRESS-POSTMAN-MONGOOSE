const express=require('express')
const router=new express.Router()
const Student=require('./model')
const bcrypt=require('bcrypt')

router.post('/',async(req,res)=>
{  

const user=new Student(req.body)

  try
  {
  const result=await user.save()
    res.status(200).send(user)
  }
  catch(e)
  {
    res.send(e);
  }


})

router.get('/:id',async(req,res)=>
{

  try{
    const id=req.params.id
      const results=await Student.find({_id:id})
        console.log(results)
      res.send(results)
  }
  catch(e)
  {
    res.send(e)
  }

})

router.patch('/:id',async(req,res)=>
{
    try{
        const result=await Student.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
          res.send(result)

    }
    catch(e)
    {
        res.send(e)
    }
})

router.delete('/:id',async(req,res)=>
{
    try{
        const result=await Student.findByIdAndDelete({_id:req.params.id})
          res.send(result)

    }
    catch(e)
    {
        res.send(e)
    }
})


module.exports=router;
