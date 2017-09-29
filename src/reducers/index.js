
import { combineReducers } from 'redux'

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return (todo.id === action.id) ? {...todo, completed: !todo.completed } : todo
      })
    default:
      return state
  }
}

export const toggleFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  toggleFilter
})

export default todoApp
