
const TodoReducer = (state , action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return{
                ...state,
                todos: [...state.todos , action.payload]
            }
            
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        
        case 'EDIT_TODO':
            return {
                ...state,
                edit: {todos : action.payload , isEdit : true}
            }
        
            case 'UPDATE_TODO':
                return {
                    ...state,
                    todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
                }        

        default :
        return state;
    }
};

export default TodoReducer;