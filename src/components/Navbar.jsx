import React from 'react'
import { MdWbSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const Navbar = () => {

  const { handletheme , darkMode}= useContext(TodoContext)

  return (
    <div className={darkMode ? 'w-full flex justify-between px-7 py-3 shadow-xl ': 'w-full flex justify-between px-7 py-3 shadow-xl bg-gray-800 text-white'}>
        <h1 className='text-3xl bold'>React Todo</h1>
        <button 
        onClick={handletheme}
        className='py-2 text-black text-2xl rounded border-2	 px-4' >
          {darkMode ? <MdWbSunny /> : <IoMoonSharp />}
        </button>
    </div>
  )
}

export default Navbar