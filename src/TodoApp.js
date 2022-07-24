import { useReducer, useCallback, useMemo, useEffect } from "react";
import todoReducer from './reducers/todo-reducer'
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Header from "./components/Header";
import { useAuth, useSite } from "./context"
import FilterTodo from "./components/FilterTodo";
import { get, post } from "./services"
import { getAllPosts, setNewPost } from "./services/posts"

function TodoApp() {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        todo: '',
        completed: false,
        search: '',
        onlyMe: false,
        filterCompleted: false
      })

      const { theme } = useSite()
      const { user } = useAuth()

      useEffect(() => {
        //getAllPosts().then(res => console.log(res))
        setNewPost({
          title: "test",
          userId: 1,
          body: "test body"
        })
      })
  
      const submitHandle = useCallback(e => {
        e.preventDefault()
        dispatch({
          type: 'ADD_TODO',
          todo: state.todo,
          userId: user.id
        })
      }, [state.todo])
    
      const updateTodo = useCallback(e => {
        dispatch({
          type: 'UPDATE_TODO',
          value: e.target.value
        })
      }, [])

      const updateCompleted = useCallback(e => {
        dispatch({
          type: 'UPDATE_COMPLETED',
          value: e.target.checked
        })
      }, [])
    
      const deleteTodo = useCallback(index => {
        dispatch({
          type: 'DELETE_TODO',
          index
        })
      }, [])

      const toggleTodo = useCallback(index => {
        dispatch({
          type: 'TOGGLE_TODO',
          index
        })
      }, [])

      const updateTodoItem = useCallback((index, value) => {
        dispatch({
          type: 'UPDATE_TODO_ITEM',
          index,
          value
        })
      }, [])
    
      const searchHandle = e => {
        dispatch({
          type: 'UPDATE_SEARCH',
          value: e.target.value
        })
      }

      const updateOnlyMe = useCallback(() => {
        dispatch({
          type: 'UPDATE_ONLY_ME'
        })
      }, [])

      const updateFilterCompleted = useCallback(value => {
        dispatch({
          type: 'UPDATE_FİLTER_COMPLETED',
          value
        })
      }, [])
    
      const filteredTodos = useMemo(() => state.todos.filter(todo => {        
          return (
            todo.title.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR'))
          ) && (
            state.onlyMe && user ? todo.userId === user.id : true
          ) && (
            state.filterCompleted ? (
              state.filterCompleted === 'completed' ? todo.completed : !todo.completed
            ) : true
          )
      }), [state.search, state.todos, state.onlyMe, user, state.filterCompleted])
    
    return (
      <div className={`wrapper ${theme}`}>
        <main className="h-full bg-gray-100 dark:bg-gray-900 dark:text-white">
          <Header search={state.search} searchHandle={searchHandle} />
          <div>
              <AddTodo todo={state.todo} submitHandle={submitHandle} updateTodo={updateTodo} completed={state.completed} updateCompleted={updateCompleted} />
              <FilterTodo onlyMe={state.onlyMe} updateOnlyMe={updateOnlyMe} updateFilterCompleted={updateFilterCompleted} filterCompleted={state.filterCompleted} />
              <Todos todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} updateTodoItem={updateTodoItem} />
          </div>
        </main>
      </div>
    )
}


export default TodoApp