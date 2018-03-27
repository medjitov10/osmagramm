import { FETCH_NEWS, FETCH_LIKE_OWNERS } from './../actions/news';
import { ADD_COMMENT_NEWS, DELETE_COMMENT_NEWS } from './../actions/comments';

const NewsReducer = ( state = [], action ) => {
  switch (action.type) {
    case FETCH_NEWS:

      return action.payload.data;
    case ADD_COMMENT_NEWS:
    console.log(action.payload.data);
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

    case DELETE_COMMENT_NEWS:
    console.log(action.payload.data);
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
