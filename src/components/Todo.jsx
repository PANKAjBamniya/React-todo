import React, { useContext, useEffect, useState } from 'react';
import ListItems from './ListItems';
import TodoContext from '../context/TodoContext';

const Todo = () => {
 
  const [text, setText] = useState("")
  const {darkMode , handleAddButton , edit ,updateTodo}= useContext(TodoContext)


  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isedit ? updateTodo({
      id:edit.todo.id, text
    }) : handleAddButton(text);

    setText("")
};

  useEffect(() => {
    setText(edit.todo.text)
  },[edit])



  return (
    <div className={darkMode ? 'w-full h-[90vh] flex gap-2 flex-col items-center pt-2' : 'w-full h-[90vh] flex gap-2 flex-col items-center pt-2 bg-zinc-800 text-white'}>
      <form
      onSubmit={handleSubmit}
        className={darkMode ? 'p-6 w-[90%] bg-gray-300 rounded flex gap-2 flex-col' :'p-6 w-[90%] bg-gray-800 rounded flex gap-2 flex-col text-black'}
      >
        <span className='flex gap-2 flex-col'>
          <input
          value={text}
          onChange={(e)=>{
            setText(e.target.value)
          }}
            type="text"
            placeholder='Enter your Task'
            className='py-2 rounded px-5 w-[100%]'
            required
          />
          <button
            type="submit"
            className='bg-green-600 text-white py-2 px-8 rounded'
          >
            {edit.isedit ? 'update' : 'Add'}
          </button>
        </span>
      </form>
      <ListItems/>
    </div>
  );
};

export default Todo;
