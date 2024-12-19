import { createContext } from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {


    return(
        <TodoContext.Provider value={{ msg : "hello" }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;