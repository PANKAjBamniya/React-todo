import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const ListItems = () => {

  const {todos} = useContext(TodoContext)
    
  return (
    <>
       <ul className=' w-[90%] shadow-xl rounded flex gap-2 flex-col'>
          {todos.map((todo) => (
            <li key={todo.id}
            className='w-full flex items-center justify-between bg-gray-400 dark:bg-zinc-800 py-3 text-white rounded px-4'>
              {todo.text}
              <div className='flex gap-2'>
              <button className='bg-yellow-600 text-white rounded py-1 px-3'>Edit</button>
              <button
              className='bg-red-500 text-white rounded py-1 px-3'>Delete</button>
              </div>
            </li>
          ))}
        </ul>
    </>
  )
}

export default ListItems