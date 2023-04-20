import { taskType } from '../Todo'
import TaskItem from './TaskItem'
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"


type TaskListprops = {
    tasks : taskType[],
    deleteTask : (id:any)=>void,
    toggleTask : (id:any)=>void,
    enterEditMod : (task:taskType) => void,
    setTasks: React.Dispatch<React.SetStateAction<taskType[]>>
}


const TaskList = ({tasks , deleteTask , toggleTask , enterEditMod , setTasks} : TaskListprops) => {

  const onDragEnd = ( result : DropResult) => {
    const { source , destination }  = result
    if (!destination) return
    const items = Array.from(tasks)
    const [newOrder] = items.splice(source.index , 1)
    items.splice(destination!.index,0 ,newOrder)

    setTasks(items)
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
       <Droppable droppableId="droppable">
          {(provided) => (
    <ul className='tasks'  {...provided.droppableProps}
    ref={provided.innerRef}>
      {tasks.map((task,index) => (
      
            <TaskItem 
            index={index}
           key={task.id} 
            deleteTask={deleteTask} 
            toggleTask={toggleTask} 
            enterEditMod ={enterEditMod}
            task={task}/> 

  
    
      ))}
      </ul>
            
          )}
      </Droppable>
      </DragDropContext>
  )
}

export default TaskList