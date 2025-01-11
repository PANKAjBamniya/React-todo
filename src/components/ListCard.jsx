import React, { useContext } from 'react'
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import TodoContext from '../context/TodoContext';


const ListCard = ({todo}) => {

  const { dispatch } = useContext(TodoContext);


  const handleDelete = () => {
    dispatch({
      type : 'DELETE_TODO',
      payload : todo.id
    })
  }

  const handleEdit = () => {
    dispatch({
      type : 'EDIT_TODO',
      payload : todo
    })
  }

  return (
    <li
      className="relative flex flex-col items-start justify-between overflow-hidden bg-gray-400 dark:bg-gray-900 py-4 text-white rounded px-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
    >
      <div className="min-w-full flex flex-col space-y-3">
        <h1 className="text-xl md:text-2xl font-sans font-semibold">{todo.text}</h1>
        <p className="text-sm md:text-base text-white p-1 rounded">
          {todo.description}
        </p>
      </div>
      <div className="flex gap-2 absolute top-4 right-4">
        <button
        onClick={handleEdit}
          className="bg-yellow-600 text-white rounded py-2 px-3 hover:bg-yellow-500"
        >
          <MdEditSquare className="text-xl" />
        </button>
        <button
        onClick={handleDelete}
          className="bg-red-500 text-white rounded py-2 px-3 hover:bg-red-400"
        >
          <MdDeleteForever className="text-xl" />
        </button>
      </div>
    </li>
  )
}

export default ListCard