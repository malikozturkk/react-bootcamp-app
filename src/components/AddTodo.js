import { memo } from "react"

function AddTodo({ submitHandle, changeHandle, todo }) {
    console.log('ADD Todo rendered')
    return (
        <form onSubmit={submitHandle}>
            <input type='text' value={todo} onChange={changeHandle} />
            <button disabled={!todo} type="submit">Ekle</button>
        </form>
    )
}

export default memo(AddTodo)