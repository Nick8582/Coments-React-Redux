import React from "react";

const CommentList = (props) => {
  const { comments } = props;

  return (
    <div>
      <h1>Коментарии на Redux</h1>
        {
          comments.map(comment => {
            return (
              <div key={comment.id}>
                <strong>{comment.name}</strong>
                <p>{comment.comment}</p>
                <button onClick={this.removeComment.bind(null, comment.id)}>Удалить комментарий</button>
              </div>
            )
          })
        }     
    </div>
  );
}

export default CommentList;