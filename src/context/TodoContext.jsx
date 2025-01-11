import { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {

    const initialState = {
        todos: [{id: 1, text: 'Buy milk', description: "description"}],
        edit: {todos : {} ,isEdit: false}
    }

    const [state , dispatch] = useReducer(TodoReducer , initialState)

    return(
        <TodoContext.Provider value={{ todos : state.todos ,edit : state.edit, dispatch}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;