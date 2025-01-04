import React, { useContext } from 'react'
import ListCard from './ListCard';
import TodoContext from '../context/TodoContext';

const ListItems = () => {

  const {todos} = useContext(TodoContext)
    
  return (
    <ul className="w-[90%] bg-gray-300 dark:bg-gray-800 rounded gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
      {
        todos.map((todo) => <ListCard key={todo.id} todo={todo}/>)
      }
      
    </ul>

  )
}

export default ListItems