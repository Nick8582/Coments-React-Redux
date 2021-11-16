const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
      ...state,
      {
        id: action.id,
        date: new Date(),
        name: action.name,
        commentText: action.commentText
      } 
    ]
    case 'REMOVE_COMMENT':
      return state.filter((comment, id) => id !== action.id)

    default:
      return state
  }
}

export default comments;