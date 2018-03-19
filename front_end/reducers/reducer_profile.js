
import {
  FETCH_PROFILE_INFO, UPDATE_PROFILE_INFO, FOLLOW,
  UNFOLLOW, FOLLOW_FROM_FOLLOWING, UNFOLLOW_FROM_FOLLOWING
} from './../actions/index.js';

const ProfileReducer = ( state = null, action) => {
  switch (action.type) {
    case FETCH_PROFILE_INFO:

      return action.payload.data;
    case UPDATE_PROFILE_INFO:
      return action.payload.data;
    case FOLLOW:
      var newState = Object.assign({}, state);
      newState.followers = newState.followers.concat(action.payload.data);

      return newState;

    case FOLLOW_FROM_FOLLOWING:
      if (state.personalInfo.id === action.payload.data.user_id) {
        var newState = Object.assign({}, state);
        newState.following = newState.following.concat(action.payload.data);
        return newState;
      } else {
        return state;
      }

    case UNFOLLOW:
      var newState = Object.assign({}, state);
      newState.followers = newState.followers
        .filter( follower => (follower.follower_id !== action.payload.data.follower_id));
      return newState;

    case UNFOLLOW_FROM_FOLLOWING:
      if (state.personalInfo.id === action.payload.data.user_id) {
        var newState = Object.assign({}, state);
        newState.following = newState.following
          .filter( follower => (follower.followed_id !== action.payload.data.followed_id));
        return newState;
      } else {
        return state;
      }
  }
  return state;
};

export default ProfileReducer;
