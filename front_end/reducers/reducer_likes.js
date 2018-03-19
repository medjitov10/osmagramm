import { POST_ITEM, LIKE_POST, UNLIKE_POST } from './../actions/posts';
import { FETCH_NEWS } from './../actions/news';

const LikesReducer = ( state = [], action ) => {
  switch (action.type) {
    case POST_ITEM:

      return action.payload.data.likes
    case FETCH_NEWS:
      const newState = action.payload.data.reduce((con, post) => {
      post.likes.map( like => {
        con = con.concat(like)
      })
        return con;
      },[])
      return newState;
    case LIKE_POST:
      return state.concat(action.payload.data)
    case UNLIKE_POST:
      return state.filter( (like) => like.id !== action.payload.data.id )
  }
  return state;
};

export default LikesReducer;
