import React,{useState} from 'react'
import Todo from './components/Todo';
import Navbar from './components/Navbar';


const App = () => {

  const [darkMode, setDarkMode] = useState(false)
  const handletheme = () => {
    setDarkMode(!darkMode)
  }
  
  return (

      <div className={darkMode ? 'dark' : ''}>
        <Navbar darkMode={darkMode} handletheme={handletheme}/>
        <Todo/>
      </div> 

  )
}

export default App;