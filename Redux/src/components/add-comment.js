import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/index.js'
import comments from '../reducers/index.js';

const AddComment = ({ addComment }) => {
  const [name, setName] = useState('');
  const [commentText, setComments] = useState('');

  return (
    <div>
      <form>
        <label htmlFor="username">Введите ваше имя:</label> <br />
        <input
          type="text"
          id="username"
          value={name}
          onChange={ev => {
            setName(ev.target.value)
          }}
        /> <br /><br />

        <label htmlFor="usercomment">Введите ваш комментарий:</label> <br />
        <textarea
          id="usercomment"
          rows="10"
          cols="40"
          value={commentText}
          onChange={ev => {
            setComments(ev.target.value)
          }}
        ></textarea> <br />
      </form>
      <button
        className="btn"
        onClick={ev => {
          addComment(name, commentText);
        }}
      >
        Добавить комментарий
      </button>
    </div>
  )
}

const mapDispatchToProps = {
  addComment,
}


export default connect(null, mapDispatchToProps)(AddComment)