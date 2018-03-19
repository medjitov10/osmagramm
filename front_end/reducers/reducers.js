import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ProfileReducer from './reducer_profile';
import CurrentUserReducer from './reducer_current_user';
import FollowerReducer from './reducer_followers';
import FollowingReducer from './reducer_followings';
import PostsReducer from './reducer_posts';
import PostsItemReducer from './reducer_post_item';
import LikesReducer from './reducer_likes';
import NewsReducer from './reducer_news';

const rootReducer = combineReducers({
  proFile: ProfileReducer,
  currentUser: CurrentUserReducer,
  followers: FollowerReducer,
  followings: FollowingReducer,
  posts: PostsReducer,
  postItem: PostsItemReducer,
  form: formReducer,
  likes: LikesReducer,
  news: NewsReducer
});



export default rootReducer;
