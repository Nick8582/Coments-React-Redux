import React from 'react'
import { connect } from 'react-redux'

import CommentList from './components/index'
import AddComment from './components/add-comment'

import { addComment, delComment } from './actions'
  

const App = (props) => {
  const {
    comments, addComment, delComment
  } = props;

  return (
    <div>
      <h1>Коментарии на Redux</h1>
      <CommentList comments={comments} delComment={delComment} />
      <AddComment addComment={addComment} />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    todo: state
  }
}

const mapDispatchToProps = (state) => {
  return {
    addComment: (name) => dispatchEvent(addComment(name)),
    delComment: (id) => dispatchEvent(delComment(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default App