import React, { useContext, useEffect, useState } from 'react';
import ListItems from './ListItems';
// import TodoContext from '../context/TodoContext';

const Todo = () => {
 

  return (
    <div className='w-full h-screen flex gap-2 flex-col items-center p-6 md:p-10 dark:bg-gray-700'>
      <form
        className='md:p-10  p-4 w-[90%] bg-gray-300 dark:bg-gray-800 rounded flex flex-col'
      >
        <span className='flex gap-3 flex-col'>
          <input
            type="text"
            placeholder='Enter your Task'
            className='py-3 rounded px-4 w-[100%]'
            required
          />
          <textarea
          className='outline-none rounded p-4' placeholder='Description' rows="4"></textarea>
          <button
            type="submit"
            className='bg-green-600 text-white py-3 px-8 rounded'
          >
             Add
          </button>
        </span>
      </form>
      <ListItems/>
    </div>
  );
};

export default Todo;
