import React from 'react';
//import dayjs from 'dayjs';{dayjs(comment.date).format('DD.MM.YYYY HH:mm:ss')}:

const getDateCorrectFormat = date => {
  const d = date ? new Date(date) :new Date();
  const options = {weekday: 'long', year: 'numeric', mounth: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
  return d.toLocaleString('ru-RU', options);
}

const CommentList = ({ comments, removeComment, name }) => {

  return (
    <ul>
      {
        comments.map((comment, index) => {
          return (
            <li key={index} className="commentContainer">
              <span style={{ fontStyle: 'italic' }}>{getDateCorrectFormat(comment.date)}: </span>
              <b>
                {comment.name}
              </b>
              <p>
                {' "' + comment.commentText + '"'}
              </p>
              <button
                className="btn-remove"
                onClick={ev => {
                  removeComment(index)
                }}
              >
                Удалить
              </button><br />

            </li>
          )
        })
      }
    </ul>
  )
}

export default CommentList;