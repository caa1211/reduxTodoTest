import React from 'react'
import {connect} from 'react-redux'
import {setFilter} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.toggleFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
        dispatch(setFilter(ownProps.filter))
    }
  }
}

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span href="#">{children}</span>
  }
  return (<a href="#" onClick={e => {
    e.preventDefault()
    onClick()
  }}>{children}</a>)
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)


export default FilterLink
