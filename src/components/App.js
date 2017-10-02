import React from 'react'
import Todo from './Todo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

const App = () => {

  const onClick = () => {
    alert(5);
  }
 


  return (
    <div>
      <VisibleTodoList />
      <Footer />
      {/*<Todo completed={true} text="AAC" onClick={onClick} />*/}
    </div>
  )
}

export default App
