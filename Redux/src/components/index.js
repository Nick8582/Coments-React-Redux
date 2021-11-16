import React from 'react';
import dayjs from 'dayjs';

const CommentList = ({ comments, removeComment, name }) => {

  return (
    <ul>
      {
        comments.map((comment, index) => {
          return (
            <li key={index} className="commentContainer">
              <span style={{ fontStyle: 'italic' }}>{dayjs(comment.date).format('DD.MM.YYYY HH:mm:ss')}: </span>
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