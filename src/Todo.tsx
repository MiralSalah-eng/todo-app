import { useState } from 'react'
import TodoCustomForm from './components/TodoCustomForm'
import TaskList from './components/TaskList'
import EditTask from './components/EditTask'
import useLocalStorage from './hooks/useLocalStorage'
import { Link } from'react-router-dom'
import { ChevronLeftIcon } from'@heroicons/react/24/solid'
export type taskType ={
    name: string,
    checked: boolean, 
    id:any
}


function Todo() {


  //const [ tasks,setTasks ] = useState<taskType[]>([])

  // Custom Hook to save tasks to localStorage
 const [ tasks,setTasks ] = useLocalStorage<taskType[]>('react-todo.tasks', [])
  const [ editedTask , setEditedTask ] = useState<taskType>( {
    name: '',
    checked: false,
    id: '',
})
  const [ isEditing , setIsEditing ] = useState(false)

  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  
//Functions
  const addTask = (task:taskType):void =>{
    setTasks(prevState => [... prevState,task])
  }

  const deleteTask = (id:any):void => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
  }

  const toggleTask = (id: any):void => {
    setTasks(prevState => prevState.map(t => (t.id === id
      ?{...t ,checked: !t.checked}
      : t
      ) ))
  } 

  const enterEditMod = (task : taskType) => {
    setEditedTask(task)
    setIsEditing(true)
    
  }

  const updateTask = (task : taskType ) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id ? (
        {... t , name:task.name}
      ) : t
    )
    ))
    closeEditMode()
  } 

  const closeEditMode =()=>{
    setIsEditing(false)
  }
  return (


    <div className="container">
      <header>
        <h1>My Task List </h1>
      </header>
      {
        isEditing && (
          <EditTask 
          updateTask={updateTask}
          editedTask={editedTask}
          closeEditMode={closeEditMode}
          />
        )
      }


      <TodoCustomForm addTask={addTask}/>
      {tasks.length >0  && (
      <TaskList
      setTasks={setTasks}
       deleteTask={deleteTask} 
       toggleTask= {toggleTask}
       enterEditMod={enterEditMod}
       tasks={tasks}/>)}

       <Link className='text-left flex' to='/'>
        <ChevronLeftIcon width={20} />
        <span>Home</span>
        </Link>
    </div>


  )
}

export default Todo
