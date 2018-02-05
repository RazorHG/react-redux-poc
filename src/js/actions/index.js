let nextTodoId = 0
export const addTodo = (text, priority) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    priority: priority
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}