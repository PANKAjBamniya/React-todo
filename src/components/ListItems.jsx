import React from 'react'

const ListItems = ({todos,handleDeleteButton}) => {
    
  return (
    <>
       <ul className='p-8 w-[90%] bg-gray-400 shadow-xl dark:bg-zinc-800 rounded flex gap-2 flex-col'>
          {todos.map((todo) => (
            <li 
            className='w-full flex items-center justify-between bg-white py-2 rounded px-3'>
              {todo.text}
              <div className='flex gap-2'>
              <button
              className='bg-yellow-600 text-white rounded py-1 px-3'>Edit</button>
              <button
              onClick={()=>{
                handleDeleteButton(todo.id)
              }}
              className='bg-red-500 text-white rounded py-1 px-3'>Delete</button>
              </div>
            </li>
          ))}
        </ul>
    </>
  )
}

export default ListItems