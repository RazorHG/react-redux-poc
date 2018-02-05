import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let task, priority

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!task.value.trim()) {
            return
          }
          dispatch(addTodo(task.value, priority.value))
          task.value = ''
          priority.value = ''
        }}
      >
        <input
          ref={node => {
            task = node
          }}
        />
         <input
          ref={node => {
            priority = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo