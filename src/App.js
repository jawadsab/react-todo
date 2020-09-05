import React,{useState,useEffect} from "react"
import "./index.css"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import TodoList from "./components/TodoList/TodoList"

const App = () => {

    

    const [inputText,setInputText] = useState("")
    const [todos,setTodos] = useState([])
    const [status,setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([])

    const filterHandler = () => {
        switch(status) {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case "incomplete":
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos)
                break
        }
    }
    const saveToLocal = () => {
        localStorage.setItem("todos",JSON.stringify(todos))
    }
    const getLocalTodos = () => {
        if(localStorage.getItem("todos") === null) {
            localStorage.setItem("todos",JSON.stringify([]))
        } else {
            let localTodo = JSON.parse(localStorage.getItem("todos"))
            setTodos(localTodo)
        }
    }

    useEffect(() => {
        getLocalTodos()
    },[])
    useEffect(() => {
       filterHandler() 
       saveToLocal()
    },[todos,status])
    

    return(
        <div className="container">
            <Header />
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
            <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
        </div>
    )
}

export default App