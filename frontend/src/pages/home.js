import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useworkoutcontext"
// components
import  Details from '../components/details'
import  Form from '../components/form'
const Home = () => {
const {works,dispatch}=useWorkoutsContext()
//const [works,setworkouts]=useState()
useEffect(()=>{
const fetchworkout= async()=>{
const response=await fetch('/api/workout')
const json= await response.json()
if(response.ok){
   dispatch({type:'SET_WORKOUTS',payload:json})
  //setworkouts(json)
}}
fetchworkout()
},[dispatch])
return (
  <div className="home">
   <div className="workouts">
    {works && works.map((work)=>(
      < Details
         work={work} key={work._id}
      /> 
    ))}
   </div>
   <Form/>
  </div>
)
}
export default Home