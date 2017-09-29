import {createStore} from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

import {
    addTodo,
    toggleTodo,
    setFilter
} from './actions'

console.log(store.getState())

let unsubscribe = store.subscribe(() => 
    console.log(store.getState())
)

store.dispatch(addTodo('First action'))
store.dispatch(addTodo('Second action'))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()
