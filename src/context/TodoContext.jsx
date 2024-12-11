import { createContext } from "react";
import { useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false)

    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState({todo : {} , isedit : false})

    const handletheme = () => {
        setDarkMode(!darkMode)
    }

    const handleDelete = ((id) => {
        setTodos(todos.filter((todo)=> todo.id !== id))
    })

    const handleAddButton = ((text) => {
        const newTodo = {
            id: crypto.randomUUID(),
            text: text,
        }
        setTodos([...todos, newTodo])
    })

    const handleEditButton = ((todo) => {
        // console.log(todo)
        setEdit({todo : todo, isedit : true})
    })
    
    const updateTodo = ((updateTodo) => {
        setTodos(
            todos.map((todo) =>
                todo.id === updateTodo.id ? updateTodo : todo
            )
        );
        setEdit({ todo: {}, isedit: false });
    });


    return(
        <TodoContext.Provider value={{ todos , darkMode, handletheme, handleDelete,handleAddButton , handleEditButton , edit , updateTodo}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;