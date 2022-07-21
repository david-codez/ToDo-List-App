import React from 'react'
import {Container} from 'react-bootstrap'

const CompletedToDos = (props) => {
    console.log(props)
    let completed = props.completedToDos
    console.log(completed)
  return (
    
    <div>
        <h1 className='todo-list-title'>Completed To Dos</h1>
        <Container>
        <ul className='completed-todo-list'>
            
          {
            completed.map((todo) => (
              
                <li className='completed-todo-item'>{todo.todo}</li>
            ))
          }
        </ul>
      </Container>

        
    </div>
  )
}

export default CompletedToDos