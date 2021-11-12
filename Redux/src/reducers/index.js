const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        { id: action.id, name: action.name, comment: action.comment }
      ]

    case 'DEL_COMMENT':
      return state.map(comment => {
        if (comment.id === action.id) {
          return {}
        }
        return comment;
      })

    default:
      return state;
  }
}

export default comments;