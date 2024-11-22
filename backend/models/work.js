const mongoose=require('mongoose')

const Schema=mongoose.Schema

const workoutSchema=new Schema({              //obj
name:{
    type:String,required:true
},
age:{
    type:Number,required:true
},
rollno:{
    type:Number,required:true
},
percentage:{
    type:Number,required:true
}


},{timestamps:true})

module.exports=mongoose.model('work',workoutSchema)

//work.find()//give all, i used this in controllers