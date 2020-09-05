import React from "react"
import "./stylesTodo.css"



const Todo = ({text,todo,todos,setTodos,priority}) => {


    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    completed:!item.completed
                }
            }
            return item
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ?  "completed":""}`}>{text}</li>
            <button onClick={completeHandler} className="check">Check</button>
            <button onClick={deleteHandler} className="trash">Trash</button>
        </div>
    )
}

export default Todo