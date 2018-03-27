import axios from 'axios';

export const ADD_COMMENT_NEWS = "ADD_COMMENT_NEWS";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT_NEWS = 'DELETE_COMMENT_NEWS';
export const DELETE_COMMENT = 'DELETE_COMMENT';


export const addComment = (body, id) => {
  const request = axios.post('/comments/', {
    body,
    id
  });
  return {
    type: ADD_COMMENT,
    payload: request
  };
};

export const addCommentNews = (body, id) => {
  const request = axios.post('/comments/', {
    body,
    id
  });
  return {
    type: ADD_COMMENT_NEWS,
    payload: request
  };
};



export const deleteComment = (comment_id) => {
  const request = axios.delete(`/comments/${comment_id}`);

  return {
    type: DELETE_COMMENT,
    payload: request
  }
}
export const deleteCommentNews = (comment_id) => {
  const request = axios.delete(`/comments/${comment_id}`);

  return {
    type: DELETE_COMMENT_NEWS,
    payload: request
  }
}
