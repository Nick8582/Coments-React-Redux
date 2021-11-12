let nextCommentId = 2;

export const addComment= (name) => {
    return {
        type: 'ADD_COMMENT',
        id: nextCommentId++,
        name,
    }
}

export const delComment = (id) => {
    return {
        type: 'DEL_COMMENT',
        id
    }
}