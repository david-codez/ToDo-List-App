import ToDoListItem from './ToDoListItem'
import React from 'react'
import {Container} from 'react-bootstrap'

const ToDoList = (props) => {
 
    let toDos = props.toDos
    

  return (
    <div>
      
      <Container>
        <ul className='todo-list'>
            
          {
            toDos.map((todo) => (
              
                <ToDoListItem todo={todo} key={todo.toDoId} functions={props} />
            ))
          }
        </ul>
      </Container>
    </div>
  )
}

export default ToDoList