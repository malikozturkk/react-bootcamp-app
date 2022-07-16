import TodoItem from "./TodoItem"
import { memo } from "react"
import { useSite } from "../context/SiteContext"

function Todos({ todos, deleteTodo }) {
    console.log('Todos rendered')
    const {theme} = useSite()
    return (
        <>
            <h3>Tema = {theme}</h3>
            <ul>
                {todos.map ((todo, index) => <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} /> )}
            </ul>   
        </>
    )
}

export default memo(Todos)