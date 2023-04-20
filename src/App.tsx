import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import Todo from "./Todo";
import OneThingApp from "./OneThingApp";



function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex gap-8 justify-center items-center h-screen">
        <Link 
        className=" text-2xl text-slate-200 py-2 px-2 rounded-md ring-2 
       bg-teal-500 focus:outline-none focus-visible:ring-4 ring-teal-500 ring-offset-4 ring-offset-slate-800   hover:opacity-80 "
        to="todo">Todo app</Link>

        <Link
        className=" text-2xl text-slate-200 py-2 px-2 rounded-md ring-2 
        bg-teal-500 focus:outline-none focus-visible:ring-4 ring-teal-500 ring-offset-4 ring-offset-slate-800   hover:opacity-80 "
        to="onething">One Thing</Link>
      </div>
    ),
  },
    {
    path: "/todo",
    element: (
     <Todo/>
    ),
  },
    {
    path: "/onething",
    element: (
     <OneThingApp/>
    ),
  },
]);

  return (

    <RouterProvider  router={router}/>

  )
}

export default App
