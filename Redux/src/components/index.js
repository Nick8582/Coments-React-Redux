import React from 'react';

const CommentList = ({ comments, removeComment, name }) => {

  return (
        <ul>
          {
            comments.map((comment, index) => {
              return (
                <li key={index} className="commentContainer">
                  <b>
                  {comment.name}
                  </b> 
                  <p>
                  {' "' + comment.commentText  + '"'}
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