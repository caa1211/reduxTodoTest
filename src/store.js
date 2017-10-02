import {createStore} from 'redux'
import todoApp from './reducers'
import {
    addTodo,
    toggleTodo,
    setFilter,
    VisibilityFilters
} from './actions'

let store = createStore(todoApp)
console.log(store.getState())

let unsubscribe = store.subscribe(() => 
    console.log(store.getState())
)

store.dispatch(addTodo('First action'))
store.dispatch(addTodo('Second action'))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()


// Test state

 let previousState = {
   toggleFilter: 'SHOW_ALL',
   todos: [
     {
       text: 'Read the docs.',
       complete: false
     }
   ]
 }

 // The action being performed (adding a todo)
 let action = {
   type: 'ADD_TODO',
   text: 'Understand the flow.'
 }

 // Your reducer returns the next application state
 let nextState = todoApp(previousState, action)

 console.log("----next--", nextState);
