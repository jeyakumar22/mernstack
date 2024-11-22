import {useState} from 'react'
import { useWorkoutsContext } from "../hooks/useworkoutcontext"

const Form =()=>{
const {dispatch}=useWorkoutsContext()
    const [name,setname]=useState('')
    const [age,setage]=useState('')
    const [rollno,setrollno]=useState('')
    const [percentage,setpercentage]=useState('')
    const [error,seterror]=useState(null)
    const [emptyfield,setemptyfield]=useState([])
    const handlesubmit=async(event)=>{
            event.preventDefault() //stop refresh after submit
                const work={name,age,rollno,percentage}
            const response=await fetch("api/workout",{
                method :"POST",
                body:JSON.stringify(work),
                headers:{"Content-Type":"application/json"}
            })
            const json=await response.json()

            if(!response.ok){
                    seterror(json.error)
                    setemptyfield(json.emptyfield)
            }
            if(response.ok){
                setname('')
                setage('')
                setrollno('')
                setpercentage('')
                seterror(null)
                setemptyfield([])
                console.log('new form added',json)
                dispatch({type:'CREATE_WORKOUT',payload:json})
            }
    }
    return (    
        <form className="create" onSubmit={handlesubmit}>
            <h3>Create a Form</h3>
            <label>Name of the user</label>
            <input
            type='text'
            onChange={(event)=>{setname(event.target.value)}}
            value={name}
            className={emptyfield.includes('name') ? 'error' : ''}
            />
            <label>Age of the user</label>
            <input
            type='number'
            onChange={(event)=>{setage(event.target.value)}}
            value={age}
            className={emptyfield.includes('age') ? 'error' : ''}
          
            />
            <label>Rollno of the user</label>
            <input
            type='number'
            onChange={(event)=>{setrollno(event.target.value)}}
            value={rollno}
            className={emptyfield.includes('rollno') ? 'error' : ''}
          
            />
            <label>Percentage of the user</label>
            <input
            type='number'
            onChange={(event)=>{setpercentage(event.target.value)}}
            value={percentage}
            className={emptyfield.includes('percentage') ? 'error' : ''}
          
            />
                <button>Submit</button>
                {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Form