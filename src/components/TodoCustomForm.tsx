import {PlusIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'
import { taskType } from '../Todo'

type CustomFormProps = {
    addTask : (task:taskType)=> void
}

const CustomForm = ({ addTask } : CustomFormProps) => {
    const [ task,setTask ] = useState<string>('')

    const handleTask= (e: any)=>{
        e.preventDefault();
         addTask ({
            name:task,
            checked:false,
            id:`${Date.now()}`
        }) 
    }
 
    
  return (
   <form onSubmit={(e)=>handleTask(e)} className="todo">
    <div className="wrapper">
        <input 
        type="text"
        id='task'
        className='input'
        required
        autoFocus
        maxLength={60}
        onChange={(e)=> setTask(e.target.value)
        }
        placeholder='Enter Task'
        />

        <label 
        htmlFor="task" 
        className="label"
        >
            Enter Task
        </label>
    </div>

    <button
    className='btn'
    type='submit'
    aria-label='Add Task'
    
    >
        <PlusIcon/>
    </button>

  {/*   <button
    className='btn'
    type='submit'
    aria-label='Add Task'
    
    >
    </button> */}
   </form>
  )
}

export default CustomForm