import { POST_ITEM, CLEAR_POST_ITEM } from './../actions/posts';
import { ADD_COMMENT, DELETE_COMMENT } from './../actions/comments';

const PostsItemReducer = ( state = [], action ) => {
  switch (action.type) {
    case POST_ITEM:
      return action.payload.data;
    case ADD_COMMENT:
        var newState = Object.assign({}, state);
        newState.comments = newState.comments.concat(action.payload.data);
        return newState;
    case CLEAR_POST_ITEM:
      return null;
    case DELETE_COMMENT:
      var newState = Object.assign({}, state);
      newState.comments = newState.comments.filter( comment => {
        return comment.id !== action.payload.data.id;
      });
      return newState;

  }
  return state;
};

export default PostsItemReducer;
