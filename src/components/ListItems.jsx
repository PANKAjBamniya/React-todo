import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const ListItems = () => {

  const {todos,darkMode ,handleDelete ,handleEditButton} = useContext(TodoContext)
    
  return (
    <>
       <ul className='w-[90%] shadow-xl rounded flex gap-2 flex-col'>
          {todos.map((todo) => (
            <li key={todo.id}
            className={darkMode 
            ? 'w-full flex items-center justify-between bg-gray-400 py-3 text-white rounded px-4' 
            : 'w-full flex items-center justify-between bg-gray-800 py-3 text-white rounded px-4'}>
              {todo.text}
              <div className='flex gap-2'>
              <button
              onClick={() => {
                handleEditButton(todo)
              }}
              className='bg-yellow-600 text-white rounded py-1 px-3'>Edit</button>
              <button
              onClick={(() => {
                handleDelete(todo.id)
              })}
              className='bg-red-500 text-white rounded py-1 px-3'>Delete</button>
              </div>
            </li>
          ))}
        </ul>
    </>
  )
}

export default ListItems