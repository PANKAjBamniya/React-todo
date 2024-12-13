import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const ListItems = () => {

  const {todos ,handleDelete ,handleEditButton} = useContext(TodoContext)
    
  return (
    <ul className="w-[90%] bg-gray-500 rounded gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
  {todos.map((todo) => (
    <li
      key={todo.id}
      className="relative flex flex-col items-start justify-between overflow-hidden bg-gray-400 dark:bg-gray-800 py-4 text-white rounded px-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
    >
      <div className="min-w-full flex flex-col space-y-3">
        <h1 className="text-xl md:text-2xl font-sans font-semibold">{todo.text}</h1>
        <p className="text-sm md:text-base text-white p-1 rounded">
          {todo.description}
        </p>
      </div>
      <div className="flex gap-2 absolute top-4 right-4">
        <button
          onClick={() => {
            handleEditButton(todo);
          }}
          className="bg-yellow-600 text-white rounded py-2 px-3 hover:bg-yellow-500"
        >
          <MdEditSquare className="text-xl" />
        </button>
        <button
          onClick={() => {
            handleDelete(todo.id);
          }}
          className="bg-red-500 text-white rounded py-2 px-3 hover:bg-red-400"
        >
          <MdDeleteForever className="text-xl" />
        </button>
      </div>
    </li>
  ))}
</ul>

  )
}

export default ListItems