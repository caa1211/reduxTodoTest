import React from "react"
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const InputForm = ({dispatch}) => {
  let input
  return (
    <div>
      <form onSubmit=
        {
          e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }

            dispatch(addTodo(input.value))
          }
        }>
        <input ref={node => input = node}></input>
        <button>submit</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const InputFormContainer = connect(

)(InputForm)



export default InputFormContainer
