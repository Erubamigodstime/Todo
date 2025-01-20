
import PropTypes from "prop-types"

const TodoForm = ({onClick, todo, onChange}) => {
  return (
    <div>
        <form>
            <div className="todo_input">
                <label htmlFor="text" > New Item</label>
                <input onChange={onChange} value={todo}  type="text" name="todo" id='todo'/>
            </div>            
            <button onClick={onClick}> Add</button>
        </form>
      
    </div>
  )
}

TodoForm.propTypes = {
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    todo: PropTypes.string
    

};
export default TodoForm
