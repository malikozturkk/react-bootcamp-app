import { useReducer, useCallback, useMemo } from "react";
import todoReducer from './reducers/todo-reducer'
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Header from "./components/Header";

function TodoApp() {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        todo: '',
        search: ''
      })
    
      const submitHandle = useCallback(e => {
        e.preventDefault()
        dispatch({
          type: 'ADD_TODO',
          todo: state.todo
        })
      }, [state.todo])
    
      const changeHandle = useCallback(e => {
        dispatch({
          type: 'UPDATE_TODO',
          value: e.target.value
        })
      }, [])
    
      const deleteTodo = useCallback(index => {
        dispatch({
          type: 'DELETE_TODO',
          index
        })
      }, [])
    
      const searchHandle = e => {
        dispatch({
          type: 'UPDATE_SEARCH',
          value: e.target.value
        })
      }
    
      const filteredTodos = useMemo(() => {
        return state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
      }, [state.search, state.todos])
    
    return (
      <div>
          <Header />
          <div>
            <input type='text' placeholder='Todolarda ara' value={state.search} onChange={searchHandle} />
            <hr />
            <AddTodo todo={state.todo} submitHandle={submitHandle} changeHandle={changeHandle} />
            <hr />
            <Todos todos={filteredTodos} deleteTodo={deleteTodo} />
        </div>
      </div>
    )
}


export default TodoApp