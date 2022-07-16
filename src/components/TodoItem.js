import { memo } from "react"

function TodoItem({todo, index, deleteTodo}) {
    console.log('Todo item rendered')
    return (
        <li onClick={() => deleteTodo(index)}>{todo}</li>
    )
}

export default memo(TodoItem)