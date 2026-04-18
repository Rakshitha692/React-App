import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, deleteTodo }) {
    return (
        <div className="todo-item">
            <p className="todo-text">{todo}</p>
            <button className="delete-btn" onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
    );
}

export default TodoItem;
