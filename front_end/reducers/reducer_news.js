import { FETCH_NEWS, FETCH_LIKE_OWNERS } from './../actions/news';
import { ADD_COMMENT, DELETE_COMMENT } from './../actions/comments';

const NewsReducer = ( state = [], action ) => {
  switch (action.type) {
    case FETCH_NEWS:

      return action.payload.data;
    case ADD_COMMENT:
    if (state.length) {
      const newState = state.map( (post) => {
        if (post.id === action.payload.data.post_id) {
          post.comments = post.comments.concat(action.payload.data)
        }
        return post;
      })
      return newState;
    } else {
      return state;
    }

    case DELETE_COMMENT:
    if ( state.length ) {
      const newState = state.map( (post) => {
        if (post.id === action.payload.data.post_id) {
          post.comments = post.comments.filter( comment => comment.id !== action.payload.data.id )
        }
        return post;
      })
      return newState;
    } else {
      return state;
    }
  }
  return state;
};

export default NewsReducer;
