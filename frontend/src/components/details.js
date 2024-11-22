import { useWorkoutsContext } from "../hooks/useworkoutcontext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
const Details = ({ work }) => {
const {dispatch}=useWorkoutsContext()
const handledelete=async()=>{
    console.log("hi");
      const response= await fetch('/api/workout/'+work._id,{
        method:'DELETE'
      })
      const json =await response.json()
      if(response.ok){
          dispatch({type:"DELETE_WORKOUT",payload:json})
      }
}
return(
    <div class="workout-details" >
        <h4>
           <strong>Name:</strong> {work.name} 
        </h4>
        <p><strong>Age :</strong>{work.age} </p>
        <p><strong>Roll No :</strong>{work.rollno} </p>
        <p><strong>Percentage % :</strong>{work.percentage}</p>
        <p><strong>Created </strong>{formatDistanceToNow(new Date(work.createdAt),{addSuffix:true})}</p>
        <span className="material-symbols-outlined" onClick={handledelete}>delete</span>
        
    </div>
) 
}

export default Details
