import React from 'react';
import { removeComment }  from '../actions/index';

const CommentList = ({ comments, removeComment, name }) => {

  return (
        <ul>
          {
            comments.map((comment, index) => {
              return (
                <li key={index}>
                  <b>
                  {comment.name + ' (' + comment.commentText  + ')'}
                  </b> <button
                  className="btn-remove"
                  onClick={ev => {
                    removeComment(index)
                  }}
                  >
                  X
                  </button><br />

                  </li>
                )

              })
            }
          </ul>
  )
}

export default CommentList;