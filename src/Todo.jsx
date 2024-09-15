import React from 'react'
import { ACTIONS } from './Actions'

const Todo = ({todo, dispatch}) => {
  return (
    <div className='todo'>
        <span style={{textDecoration: todo.complete ? 'line-through' : null}}>{todo.todoContent}</span>
        <button 
        className='toggle' 
        onClick={() => dispatch({type: ACTIONS.COMPLETE, payload: {id: todo.id}})}>
            {todo.complete ? '未完成' : '完成'}
        </button>
        <button 
        onClick={() => dispatch({type: ACTIONS.DELETE, payload: {id: todo.id}})}
        className='delete'>
            delete
        </button>
    </div>
  )
}

export default Todo