import React,{useState} from 'react'
import Todo from './components/Todo';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handletheme = () => {
    if(darkMode){
      setDarkMode(false)
    }else{
      setDarkMode(true)
    }
  }
  return (
   <div className={darkMode ? 'dark' : ''}>
    <Navbar handletheme={handletheme} darkMode={darkMode}/>
      <Todo/>
   </div>

  )
}

export default App;