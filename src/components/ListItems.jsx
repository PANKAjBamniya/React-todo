import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const ListItems = () => {

  const {todos ,handleDelete ,handleEditButton} = useContext(TodoContext)
    
  return (
    <>
       <ul className='w-[90%] rounded  gap-2 grid md:grid-cols-3'>
          {todos.map((todo) => (
            <li key={todo.id}
            className='w-full relative flex items-start justify-between bg-gray-400 dark:bg-gray-800 py-3 text-white rounded px-4'>
              <div className='flex  flex-col space-y-3'>
              <h1 className='text-2xl font-sans'>{todo.text}</h1>
              <p className='mix-w-1/3 bg-red-600'>{todo.description}</p>
              </div>
              <div className='flex gap-2 absolute top-4 right-4'>
              <button
              onClick={() => {
                handleEditButton(todo)
              }}
              className='bg-yellow-600 text-white rounded py-2 px-3'><MdEditSquare className='text-xl'/></button>
              <button
              onClick={(() => {
                handleDelete(todo.id)
              })}
              className='bg-red-500 text-white rounded py-2 px-3'><MdDeleteForever className='text-xl'/></button>
              </div>
            </li>
          ))}
        </ul>
    </>
  )
}

export default ListItems