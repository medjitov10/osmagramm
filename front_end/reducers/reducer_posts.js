import { FETCH_POSTS, ADD_POST, DELETE_POST } from './../actions/posts';

const PostsReducer = ( state = [], action ) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data;
    case ADD_POST:
      if (action.payload.data.errors)
      return state
      return [action.payload.data, ...state]
    case DELETE_POST:
      return state.filter( post => (post.id !== action.payload.data.id));
  }
  return state;
};

export default PostsReducer;
