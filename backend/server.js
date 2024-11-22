const express=require('express');
require('dotenv').config()
const workout=require('./routes/routemeth')
const mongoose=require('mongoose')
//express app
const app=express()
//middleware
app.use(express.json())               
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//route
// app.get('/',(req,res)=>{
// res.json({msg:"welcome"})
// }) 
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//listen for request  
app.listen(process.env.PORT,()=>{
    console.log('db connect & listening port 4000 !!!');
    });
})
.catch((error)=>{ 
    console.log(error);
})


app.use('/api/workout',workout)
// //listen for request  
// app.listen(process.env.PORT,()=>{
//     console.log('listening port 4000 !!!');
//           });