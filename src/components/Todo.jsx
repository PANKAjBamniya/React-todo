import React, { useState } from 'react';
import ListItems from './ListItems';


const Todo = () => {
  const [todos,setTodos] = useState([ ]);

  const [newtask, setNewtask] = useState("")

  const handleSubmit = ((e) => {
    e.preventDefault()
    const newTodo = {
      id: crypto.randomUUID(),
      text: newtask
    }
    setTodos([...todos, newTodo])
    setNewtask("")
  })

  const handleDeleteButton = ((id) => {
    setTodos(todos.filter((Todo) => Todo.id !== id))
  })

  return (
    <div className='w-full h-[90vh] flex gap-2 flex-col items-center pt-2 dark:bg-gray-700'>
      <form
      onSubmit={handleSubmit}
      className='p-6 w-[90%] bg-gray-400 dark:bg-zinc-800 rounded flex gap-2 flex-col'>
        <span className='flex gap-2 flex-col'>
          <input
            type="text"
            placeholder='Enter your Task'
            className='py-2 rounded px-5 w-[100%]'
            onChange={(e) => {
              setNewtask(e.target.value)
            }}
            value={newtask}
            required
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
