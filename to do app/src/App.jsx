import { useState } from 'react'
import Header from "./component/Header"
import Todoinput from "./component/Todoinput"
import TodoList from './component/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <>
      <Header />
      <Todoinput onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </>
    
  )
}

export default App