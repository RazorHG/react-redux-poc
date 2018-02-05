const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
      if (validateForm(action)){
         return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false,
            priority: parseInt(action.priority)
          }
        ]
      } else {
         return [
         ...state
         ]
      }
       
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
const validateForm = (action) => {return Boolean(parseInt(action.priority))}

  export default todos