import React from 'react';
import { connect } from 'react-redux';

import CommentList from './components/index';
import AddComment from './components/add-comment';

import { addComment,removeComment } from './actions/index';

let App = ({ comments, addComment, removeComment }) => {

  return (
    <div>
      <CommentList comments={comments} removeComment={removeComment} />
      <AddComment addComment={addComment}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    comments: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (name) => dispatch(addComment(name)),
    removeComment: (id) => dispatch(removeComment(id))
  }
}



App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;