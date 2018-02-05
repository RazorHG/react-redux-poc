import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, priority }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <span>{priority}</span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired
}

export default Todo