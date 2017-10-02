import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

//--Test data
import {
    addTodo,
    toggleTodo,
    setFilter,
    VisibilityFilters
} from './actions'


const initialState  = {
     todos: [{
       id: 0,
       text: "aa",
       completed: true
     },{
       id: 1,
       text: "bb",
       completed: false
     }],
     onTodoClick: () => {
       alert(3);
     }
}

let store = createStore(todoApp, initialState)

// store.dispatch(addTodo('First action'))
// store.dispatch(addTodo('Second action'))
// store.dispatch(toggleTodo(0))
//--




render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)
