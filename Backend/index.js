const express=require('express')  
const app=express()  

app.get('/',(req,res)=>{
  return res.status(200).json({message:'Hello world'})  
})

app.listen(3000,(req,res)=>{
    console.log("Hello world")
})