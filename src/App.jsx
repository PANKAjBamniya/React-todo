import React,{useContext, useState} from 'react'
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import TodoContext, { TodoProvider } from './context/TodoContext';

const App = () => {
  // const { darkMode } = useContext(TodoContext)
  
  return (
    <TodoProvider>
      <div>
        <Navbar />
        <Todo/>
      </div> 
    </TodoProvider>

  )
}

export default App;