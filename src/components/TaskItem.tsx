import { CheckIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import { taskType } from "../Todo"
import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"

type TaskItemProps = {
    key : string,
    task : taskType,
    deleteTask :(id:any)=>void,
    toggleTask : (id:any)=>void,
    enterEditMod: (task:taskType)=>void, 
    index: number
}

const color = 210 ;

const TaskItem = ({ key ,index, task , deleteTask ,toggleTask, enterEditMod} : TaskItemProps) => {
    const[isChecked , setIsChecked]= useState(task.checked)

    const handleCheckbox =(e:any) => {
        setIsChecked(!isChecked)
        toggleTask(task.id)
    }
  return (

    <Draggable key={task.id} draggableId={task.id} index={index}>
    {(provided , snapshot)=>(
      <li 
      className="task"
      ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps} >
    <div className="task-group">
        <input 
        className="checkbox"
        type="checkbox" 
        name={task.name}
        checked={isChecked}
        onChange={handleCheckbox}
        id={task.id}
        />

        <label 
        className="task-label"
        htmlFor={task.id}>
            {task.name}
            <p className="checkmark">
            <CheckIcon strokeWidth={2} width={24} height={24}/>
          </p>
        </label>
    </div>

    <div className="task-group">
        <button
        className="btn update"
        aria-label={`Update ${task.name} Task`}
        onClick={()=> enterEditMod(task)}

        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
        aria-label={`Delete ${task.name} Task`}
        className="btn delete"
        onClick={()=> deleteTask(task.id)}
        >
        <TrashIcon width={24} height={24} />
        </button>
    </div>

  </li> 

    )}
  </Draggable> 

  )
}

export default TaskItem