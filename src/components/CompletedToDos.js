import React from 'react'
import {Container} from 'react-bootstrap'

const CompletedToDos = (props) => {
    
    // completed tasks are passed in through props
    let completed = props.completedToDos

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