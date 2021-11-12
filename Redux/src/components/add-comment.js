import React from "react";

const AddComment = ({addComment}) => {

  return (
    <div className="form">
      <label>Имя:
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          required>
        </input>
      </label>
      <label>Коментарии:
        <textarea
          name="comment"
          onChange={this.handleChange}
          required>
        </textarea>
      </label>
      <button onClick={addComment} disabled={!this.validation()}>Добавить коментарий</button>
    </div>
  )
}

export default AddComment;