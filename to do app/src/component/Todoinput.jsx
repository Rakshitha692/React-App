import { useState } from "react"
function Todoinput({addTodo}) {
    const [todo, setTodo] = useState("")

    const handleChange = () => {
        if (todo.trim() !== "") {
            addTodo(todo)
            setTodo("")
        }
    }
    return (
        <div className="todo-input-container">
            <input
                type="text"
                placeholder="Enter your todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="todo-input"
            />
            <button onClick={handleChange} className="add-todo-btn">Add Todo</button>
        </div>

    )
}

export default Todoinput

