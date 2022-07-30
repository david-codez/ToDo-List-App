import React from 'react'
import {GiCancel} from 'react-icons/gi'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const ToDoListItem = (props) => {
  //todo is passed in through props
  let todo = props.todo
 
  //calls remove todo function from app.js
  const handleDeleteToDo = () => {
    props.functions.removeToDo(todo.todoId)

  }

  //calls complete todo function from app.js
  const handleCompleteToDo = () => {
    props.functions.completeToDo(todo.todoId)
  }

  
  return (
    
       
        <li className='todo-list-item'>
          <button className='todo-buttons complete-todo-button'>
            <AiOutlineCheckCircle className='checkmark-icon'size='2em' onClick={handleCompleteToDo} />
          </button>
          <button className='todo-buttons delete-todo-button' onClick={handleDeleteToDo}>
            <GiCancel className='delete-icon' size='2em' />
          </button>
          <span className='todo-list-item-text'>
            {todo.todo} 
          </span>  
        </li>
    
  )
}

export default ToDoListItem