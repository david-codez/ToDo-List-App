import React, {useState} from 'react'
import { toast } from 'react-toastify'
import ToDoList from '../components/ToDoList'
import CompletedToDos from '../components/CompletedToDos'


const ToDoApp = () => {
    // initialize state
    const [toDos, setToDos] = useState([])
    const [userInput, setUserInput] = useState("")
    const [toDoId, setToDoId] = useState(0)
    const [completedToDos, setCompletedToDos] = useState([])

    // initialize task
    const toDo = {
        todo: '',
        todoId: 0,
    }

    // accept user input
    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }

    // add task to list
    const addToDo = (e) => {
        //prevents refresh
        e.preventDefault()
        
        // checks to make sure user input is not empty
        if(userInput === "") {
            console.log("no value entered")
            toast.error("Please Enter a Value!")
            return
        } 

        // add values to todo object
        toDo.todo = userInput
        toDo.todoId = toDoId

        // add task to array
        toDos.push(toDo)
        
        // reset input field
        setUserInput('')

        // increment task id
        setToDoId(toDoId + 1)
    }

    // reset app values, clear both lists
    const clearToDos = () => {
        setToDos([])
        setToDoId(0)
        setCompletedToDos([])
        console.log("todo list cleared.")
        console.log('contents of todo list' + toDos)
    }

    // deletes task from list
    const removeToDo = (id) => {
        console.log("function call successful, todo id is: " + id)
        setToDos(toDos.filter(todo => todo.todoId !== id))
    }

    //add task to completed list, remove from task list
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
                placeholder='What do i have to do today?' 
            />
            <button className='form-button add-item-button' type='submit' onClick={addToDo}>Add Item</button>
            <button className='form-button clear-list-button' type='button' onClick={clearToDos} >Clear List</button>
        </form>
        <hr/>
        { completedToDos.length > 0 && toDos.length === 0 ? <h1 className='congrats-message'>All Tasks Completed! Good Job!</h1> : <></>} 
       { toDos.length > 0 ? <h3 className='todo-list-title'>To Dos</h3> : <></> }

        { toDos.length > 0 ? <ToDoList toDos={toDos} removeToDo={removeToDo} completeToDo = {completeToDo} /> : <> </> }
        { completedToDos.length > 0 ? <CompletedToDos completedToDos={completedToDos}  /> : <> </> }
        
        
    
       
    </>
  )
}

export default ToDoApp