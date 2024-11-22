const express=require('express');
const router=express.Router()
const Workout=require('../models/work')
const {getworkouts,getworkout,createworkout,deleteworkout,updateworkout}=require('../controllers/controllerfn')
//get all workouts
router.get('/',getworkouts)
//get single workout respective id  
router.get('/:id',getworkout)
//post a new workout
router.post('/',createworkout) 
//delete a  workout
router.delete('/:id',deleteworkout)
//update a  workout
router.patch('/:id',updateworkout)
module.exports=router