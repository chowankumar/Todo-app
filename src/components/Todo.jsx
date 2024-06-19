import React,{useRef, useState} from 'react'
import todo_icon from "../assets/todo_icon.png"
import TodoItem from './TodoItem'

const Todo = () => {

  const [todoList,setTodoList] = useState([])

  const inputRef = useRef();

  const add = ()=>{
    const inputText = inputRef.current.value.trim();
    
    const newTodo ={
      id:Date.now(),
      text:inputText,
      isComplete:flase,
    }
  }
  return (
    <div className='bg-white place-self-center min-h-[550px] max-w-md w-11/12 flex flex-col p-7 rounded-xl'>

     <div className='flex items-center mt-7 gap-2'>
        <img src={todo_icon} alt="" className='w-8'/>
        <h1 className='text-3xl font-semibold '>To-Do-List</h1>

     </div>

     <div className='flex items-center my-7 bg-gray-200 rounded-full'>
      <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task'/>
      <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD + </button>
     </div>

     <div>
      <TodoItem/>
     </div>
        
    </div>
  )
}

export default Todo