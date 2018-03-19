import { POST_ITEM, CLEAR_POST_ITEM } from './../actions/posts';
import { ADD_COMMENT, DELETE_COMMENT } from './../actions/comments';

const PostsItemReducer = ( state = [], action ) => {
  switch (action.type) {
    case POST_ITEM:
      return action.payload.data;
    case ADD_COMMENT:
      if (state.length) {
        var newState = Object.assign({}, state);

        newState.comments = newState.comments.concat(action.payload.data);
        return newState;
      } else {
        return state;
      }

    case CLEAR_POST_ITEM:
      return null;
    case DELETE_COMMENT:
      if ( state.length ) {
        var newState = Object.assign({}, state);
        newState.comments = newState.comments.filter( comment => {
          return comment.id !== action.payload.data.id;
        });
        return newState;
      } else {
        return state;
      }


  }
  return state;
};

export default PostsItemReducer;
