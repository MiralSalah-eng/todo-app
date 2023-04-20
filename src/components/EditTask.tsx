import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react'
import { taskType } from '../Todo';

type EditTaskProps = {
    updateTask : (task:taskType)=> void,
    closeEditMode : ()=> void,
    editedTask : taskType
}

const EditTask = ({updateTask , editedTask ,closeEditMode}:EditTaskProps) => {
    const [ updatedTaskName,setUpdatedTaskName ] = useState(editedTask.name)

    const handleTask= (e: any)=>{
        e.preventDefault();
         updateTask({...editedTask,name:updatedTaskName}) 
    }
 
    useEffect(()=> {
        const closeModalIfEscaped = (e:any) => {
          e.key === "Escape" && closeEditMode();
        }
    
        window.addEventListener('keydown', closeModalIfEscaped)
    
        return () => {
          window.removeEventListener('keydown', closeModalIfEscaped)
        }
      }, [closeEditMode])
    
   
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
        onChange={(e)=> setUpdatedTaskName(e.target.value)
        }
        placeholder='Update Task'
        />

        <label 
        htmlFor="task" 
        className="label"
        >
            Updat Task
        </label>
    </div>

    <button
    className='btn'
    type='submit'
    aria-label='Update Task'
    
    >
        <CheckIcon/>
    </button>

    <button
    className='btn'
    onClick={closeEditMode}
    >
        <XMarkIcon/>
    </button>

    
   </form>
  )
}

export default EditTask