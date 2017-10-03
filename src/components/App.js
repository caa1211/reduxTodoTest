import React from 'react'
import Todo from './Todo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'
import InputForm from './InputForm'

const App = () => {
  return (
    <div>
      <InputForm />
      <VisibleTodoList />
      <Footer />
      {/*<Todo completed={true} text="AAC" onClick={onClick} />*/}
    </div>
  )
}

export default App
