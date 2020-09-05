import React from "react"
import {v4 as uuidv4} from "uuid"
import "./formStyles.css"


const Form = ({setInputText,inputText,setTodos,todos,setStatus}) => {

    const inputTextHandler = (event) => {
        setInputText(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();
        if(inputText === "") {
            return alert("fill the form before you add")
        }
        setTodos([
            ...todos,{
                text:inputText,
                completed:false,
                id:uuidv4(),
                priority:"low"
            }
        ])
        setInputText("");
    }

    const statusHandler = (event) => {
        setStatus(event.target.value)
    }
    return(
        <div className="form-container">
            <form className="form">
                <input placeholder="add item" required onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
                <button onClick={submit} className="todo-btn" type="submit">ADD</button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todos">
                        <option value="all">all</option>
                        <option value="completed">completed</option>
                        <option value="incomplete">incomplete</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form