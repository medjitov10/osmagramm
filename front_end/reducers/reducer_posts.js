import { FETCH_POSTS, ADD_POST } from './../actions/posts';

const PostsReducer = ( state = [], action ) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data;
    case ADD_POST:
      if (action.payload.data.errors)
      return state
      return [action.payload.data, ...state]
  }
  return state;
};

export default PostsReducer;
