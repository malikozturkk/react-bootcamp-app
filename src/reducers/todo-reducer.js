export default function reducer(state, action) {
    switch(action.type) {
      case 'UPDATE_TODO':
        return {
          ...state,
          todo: action.value
        }
  
      case 'ADD_TODO': 
        return {
          ...state,
          todo: '',
          todos: [
            ...state.todos,
            action.todo
          ]
        }
  
        case 'DELETE_TODO': 
        return {
          ...state,
          todos: [
            ...state.todos.filter((todo, index) => index !== action.index)
          ]
        }

        case 'UPDATE_SEARCH':
          return {
            ...state,
            search: action.value
          }
    }
  }