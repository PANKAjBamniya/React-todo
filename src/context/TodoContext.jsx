import { createContext } from "react";
import { useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false)

    const handletheme = () => {
        setDarkMode(!darkMode)
    }

    const [todos, setTodos] = useState([
        { id: 1, text: 'Buy milk'},
        { id: 2, text: 'Walk the dog'}
      ]);

    return(
        <TodoContext.Provider value={{ todos , darkMode, handletheme }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;