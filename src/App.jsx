import React,{useContext, useState} from 'react'
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import TodoContext from './context/TodoContext';

const App = () => {
  const { darkMode } = useContext(TodoContext)
  
  return (

      <div className={darkMode ? 'dark' : ''}>
        <Navbar />
        <Todo/>
      </div> 

  )
}

export default App;