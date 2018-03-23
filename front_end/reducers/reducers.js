import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ProfileReducer from './reducer_profile';
import CurrentUserReducer from './reducer_current_user';

import PostsReducer from './reducer_posts';
import PostsItemReducer from './reducer_post_item';
import LikesReducer from './reducer_likes';
import NewsReducer from './reducer_news';
import DetailReducer from './reducer_detail';

const rootReducer = combineReducers({
  proFile: ProfileReducer,
  currentUser: CurrentUserReducer,
  posts: PostsReducer,
  postItem: PostsItemReducer,
  form: formReducer,
  likes: LikesReducer,
  news: NewsReducer,
  detail: DetailReducer
});



export default rootReducer;
