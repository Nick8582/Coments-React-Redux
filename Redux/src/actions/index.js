let nextCommentId = 2;
//action creators
export const addComment = (name, commentText) => {
    return {
      type: 'ADD_COMMENT',
      id: nextCommentId++,
      name,
      commentText
    }
  }
  
  export const removeComment = (id) => {
    return {
      type: 'REMOVE_COMMENT',
      id
    }
  }