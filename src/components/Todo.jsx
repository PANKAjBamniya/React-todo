import React, { useState } from 'react';
import ListItems from './ListItems';


const Todo = () => {
  const [todos,setTodos] = useState([
    {id: 1,text: "Wake-UP",},
    {id: 2,text: "Coding",},
    {id: 3,text: "Eat",},
    {id: 4,text: "Sleep",},
    {id: 5,text: "Repeat",},
  ]);

  const handleDeleteButton = ((id) => {
    setTodos(todos.filter((Todo) => Todo.id !== id))
  })

  return (
    <div className='w-full h-[90vh] flex gap-2 flex-col items-center pt-2 dark:bg-gray-700'>
      <form className='p-6 w-[90%] bg-gray-400 dark:bg-zinc-800 rounded flex gap-2 flex-col'>
        <span className='flex gap-2 flex-col'>
          <input
            type="text"
            placeholder='Enter your Task'
            className='py-2 rounded px-5 w-[100%]'
          />
          <button
            type="submit"
            className='bg-green-600 text-white py-2 px-8 rounded'
          >
            ADD
          </button>
        </span>
      </form>
      <ListItems todos={todos} handleDeleteButton={handleDeleteButton}/>
    </div>
  );
};

export default Todo;
