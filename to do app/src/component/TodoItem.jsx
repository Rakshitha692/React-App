import React from "react";

function TodoItem({ todo, deleteTodo }) {
    return (
        <div>
            <p>{todo}</p>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
    )

}

export default TodoItem