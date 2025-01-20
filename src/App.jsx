import { useState } from "react";
import './index.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [formValue, setfromValue] = useState('')
  const [todos, setTodos] = useState([])
// let number =0
  function handleChange(event) {
    setfromValue(event.target.value)
    
  }
  function handleClick(e) {
    e.preventDefault()
    setTodos((currentTodo) =>{
     console.log(currentTodo)      
     return [
      ...currentTodo,
       { id: crypto.randomUUID(), title: formValue, completed:false }
     
      
     ]
  })
    
  }
  function handleDelete(id) {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id)
      })
    
  }
  
  return (
    <div className='main-content'>
    <TodoForm todo={formValue}  onClick={handleClick} onChange={handleChange} />
    {!formValue ? 'No Task': <TodoList todo={todos} onClick={handleDelete}/>}
    
     
    </div>
  )
}

export default App
