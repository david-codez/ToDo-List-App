import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import ToDoList from '../components/ToDoList'
import CompletedToDos from '../components/CompletedToDos'


const ToDoApp = () => {
    
    const [toDos, setToDos] = useState([])
    const [userInput, setUserInput] = useState("")
    const [toDoId, setToDoId] = useState(0)
    const [completedToDos, setCompletedToDos] = useState([])


    const toDo = {
        todo: '',
        todoId: 0,
    }

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }
    const addToDo = (e) => {
        e.preventDefault()
        if(userInput === "") {
            console.log("no value entered")
            toast.error("Please Enter a Value!")
            return
        } 
        toDo.todo = userInput
        toDo.todoId = toDoId

        toDos.push(toDo)
        setUserInput('')
        setToDoId(toDoId + 1)
    }

    const clearToDos = () => {
        setToDos([])
        setToDoId(0)
        setCompletedToDos([])
        console.log("todo list cleared.")
        console.log('contents of todo list' + toDos)
    }
    const removeToDo = (id) => {
        console.log("function call successful, todo id is: " + id)
        setToDos(toDos.filter(todo => todo.todoId !== id))
    }
    const completeToDo = (id) => {
        console.log('function call successful, todo id is ' + id)
        let complete = toDos.filter(todo => todo.todoId === id)[0]
        completedToDos.push(complete)
        setToDos(toDos.filter(todo => todo.todoId !== id))
       
    }

  return (
    <>
        
        <h1 className='app-title'>To Do List</h1>
        <form className='add-todo-form'>
            <input 
                type='text' 
                onChange={handleUserInput} 
                name='todo' 
                className='to-do-input-field' 
                value={userInput} 
                placeholder='what do i have to do today?' 
            />
            <button className='form-button add-item-button' type='submit' onClick={addToDo}>Add Item</button>
            <button className='form-button clear-list-button' type='button' onClick={clearToDos} >Clear List</button>
        </form>
        <hr/>
        <h3 className='todo-list-title'>To Dos</h3>

        { toDos.length > 0 ? <ToDoList toDos={toDos} removeToDo={removeToDo} completeToDo = {completeToDo} /> : <> </> }
        { completedToDos.length > 0 ? <CompletedToDos completedToDos={completedToDos}  /> : <> </> }
        
        
    
       
    </>
  )
}

export default ToDoApp