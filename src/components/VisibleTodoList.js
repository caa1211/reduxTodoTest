import React from 'react'
import {connect} from 'react-redux'
import TodoList from "./TodoList"
import {toggleTodo} from "../actions"

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed)
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, state.toggleFilter)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTodoClick: id => { dispatch(toggleTodo(id)) }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
