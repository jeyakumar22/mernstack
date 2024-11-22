const mongoose=require('mongoose')
const Workout=require('../models/work')

//get all workout
const getworkouts=async (req,res)=>{
    const workout=await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workout)
}

//get all workout
const getworkout=async (req,res)=>{
    const {id}=req.params
    const workout=await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error:'no such workout found'})
    }

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout found'})
    }
    res.status(200).json(workout)
}

//create new workout
const createworkout=async (req,res)=>{
    const {name,age,rollno,percentage}=req.body
    let emptyfield=[]
    if(!name){
        emptyfield.push("name")
    }
    if(!age){
        emptyfield.push("age")
    }
    if(!rollno){
        emptyfield.push("rollno")
    }
    if(!percentage){
        emptyfield.push("percentage")
    }
    if(emptyfield.length>0){
        return res.status(400).json({error: "enter required field",emptyfield})
    }
    console.log(emptyfield);
    console.log(req.body);
    try{
const workout=await Workout.create({name,age,rollno,percentage})
res.status(200).json(workout)
    }
    catch(error){
res.status(400).json({error:error.message})
    }
} 


 
//delete a workout
const deleteworkout=async (req,res)=>{
    const {id}=req.params
   
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout found'})
    }
    const workout=await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({error:'no such workout found'})
    }

    res.status(200).json(workout)
}

//update a workout
const updateworkout=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout found'})
    }
    const workout=await Workout.findOneAndUpdate({_id:id}, {...req.body})
    if(!workout){
        return res.status(404).json({error:'no such workout found'})
    }
    
    res.status(200).json(workout)
}


module.exports={
    getworkouts,getworkout,createworkout,deleteworkout,updateworkout
}