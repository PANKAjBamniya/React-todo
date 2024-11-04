import React, { useState } from 'react';
import ListItems from './ListItems';


const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newtask, setNewTask] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); 
    if (newtask) {
      setTodos([...todos, newtask]);
      setNewTask("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_,i) => i !== index); 
    setTodos(updatedTodos);
  };

  const handleEvent = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className='w-full h-[90vh] flex gap-2 flex-col items-center pt-2 dark:bg-gray-700'>
      <form className='p-6 w-[90%] bg-gray-400 dark:bg-zinc-800 rounded flex gap-2 flex-col' onSubmit={addTodo}>
        <span className='flex gap-2 flex-col'>
          <input
            type="text"
            placeholder='Enter your Task'
            className='py-2 rounded px-5 w-[100%]'
            value={newtask}
            onChange={handleEvent}
          />
          <button
            type="submit"
            className='bg-green-600 text-white py-2 px-8 rounded'
          >
            ADD
          </button>
        </span>
      </form>
      <ListItems todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
