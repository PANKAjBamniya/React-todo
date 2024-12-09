import { createContext } from "react";
import { useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false)

    const [todos, setTodos] = useState([
        { id: 1, text: 'Buy milk'},
        { id: 2, text: 'Walk the dog'}
      ]);

    const handletheme = () => {
        setDarkMode(!darkMode)
    }

    const handleDelete = ((id) => {
        setTodos(todos.filter((todo)=> todo.id !== id))
    })

    return(
        <TodoContext.Provider value={{ todos , darkMode, handletheme, handleDelete}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;