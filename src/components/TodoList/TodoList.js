import React from "react"
import "./stylesTodoList.css"
import Todo from "../../components/Todo/Todo"


const TodoList = ({todos,setTodos,filteredTodos}) => {
    const conditionalRender = () => {
        if(filteredTodos.length === 0) {
            return <h3 style={{color:"#f5f1da"}}>Organize and get Things done!</h3>
        }
    }
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {conditionalRender()}

                {  
                    filteredTodos.map((todo) => {
                        return <Todo todos={todos} setTodos={setTodos} todo={todo}  text={todo.text} key={todo.id} />
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList