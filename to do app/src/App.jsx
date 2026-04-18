import { useState } from "react";
import Header from "./component/Header";
import Todoinput from "./component/Todoinput";
import TodoItem from "./component/TodoItem";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (todoToDelete) => {
        setTodos(todos.filter(todo => todo !== todoToDelete));
    };

    return (
        <div className="app">
            <Header />
            <main className="app-main">
                <Todoinput addTodo={addTodo} />
                <div className="todo-list">
                    {todos.map((todo, index) => (
                        <TodoItem
                            key={index}
                            todo={todo}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;