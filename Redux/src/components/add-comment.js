import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/index.js'


const AddComment = ({ addComment }) => {
  const [name, setName] = useState('');
  const [commentText, setComments] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [commentDirty, setCommentDirty] = useState(false);
  const [nameError, setNameError] = useState('Имя не может быть пустым');
  const [commentError, setCommentError] = useState('Коментарий не может быть пустым');
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (nameError || commentError){
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError, commentError])

  const nameHandler = (ev) => {
    setName(ev.target.value)
    if (ev.target.value.length < 2) {
      setNameError('Имя должно иметь больше двух букв');
      if (!ev.target.value) {
        setNameError('Имя не может быть пустым')
      }
    } else {
      setNameError('')
    }
  }


  const commentHandler = (ev) => {
    setComments(ev.target.value)
    if (ev.target.value.length < 10) {
      setCommentError('Коментарий должен иметь больше 10 символов');
      if (!ev.target.value) {
        setCommentError('Коментарий не может быть пустым')
      }
    } else {
      setCommentError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true)
        break
        // no default
      case 'comment':
        setCommentDirty(true)
        break
        // no default
    }
  }

  const removeForm = (ev) => {
    setName('');
    setComments('');
  }

  return (
    <div>
      <form className="form">
        <label htmlFor="username">Введите ваше имя:</label> <br />
        {(nameDirty && nameError) && <div>{nameError}</div>}
        <input
          onBlur={e => blurHandler(e)}
          name="name"
          type="text"
          id="username"
          value={name}
          onChange={ev => {
            setName(ev.target.value)
            nameHandler(ev)
          }}
        /> <br /><br />

        <label htmlFor="usercomment">Введите ваш комментарий:</label> <br />
        {(commentDirty && commentError) && <div>{commentError}</div>}
        <textarea
          onBlur={e => blurHandler(e)}
          name="comment"
          id="usercomment"
          rows="10"
          cols="40"
          value={commentText}
          onChange={ev => {
            setComments(ev.target.value)
            commentHandler(ev)
          }}
        ></textarea> <br />
      </form>
      <button
        disabled = {!formValid}
        className="btn"
        onClick={ev => {
          addComment(name, commentText)
          removeForm(ev)
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