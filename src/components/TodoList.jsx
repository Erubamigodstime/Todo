import PropTypes from "prop-types"
import '../index.css'
const TodoList = ({todo, onClick }) => {
  return (
    <div className="todo">
        <ul className="todo-wrapper" >
            {
                todo.map((todos) =>{
                    return (
                        <li className="todo-check" key={todos.id}>
                            <input type="checkbox" checked={todos.completed} />
                            <span style={{marginRight:'20px'}}> {todos.title}</span>
                            <button onClick={()=>onClick(todos.id)} >Delete</button>
                    </li>                       

                    )}) }           
            
        </ul>
    </div>
  )
};



TodoList.propTypes = {
    todo: PropTypes.array,
    onClick: PropTypes.func
    

};
export default TodoList
