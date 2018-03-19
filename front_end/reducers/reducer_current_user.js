import { FETCH_CURRENT_USER, FOLLOW, FOLLOW_FROM_FOLLOWING, UNFOLLOW, UPDATE_LOGO, UNFOLLOW_FROM_FOLLOWING } from './../actions/index';

const CurrentUserReducer = (state = "", action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        current_user: action.payload.data.current_user,
        followers: action.payload.data.followers.map ( el => ( el.follower_id ) ),
        following: action.payload.data.following.map ( el => ( el.followed_id ) ),
      };

    case FOLLOW:
      if ( action.payload.data.error ) {
        alert(action.payload.data.error);
        return state;
      } else {
        var newState = Object.assign({}, state);
        newState.following = newState.following.concat(action.payload.data.user_id);
        return newState;
      }

    case FOLLOW_FROM_FOLLOWING:
      if ( action.payload.data.error ) {
        alert(action.payload.data.error);
        return state;
      } else {
        var newState = Object.assign({}, state);
        newState.following = newState.following.concat(action.payload.data.followed_id);
        return newState;
      }

    case UNFOLLOW:

      var newState2 = Object.assign({}, state);
      newState2.following = newState2.following
        .filter( follower => (follower !== action.payload.data.user_id));
      return newState2;
    case UNFOLLOW_FROM_FOLLOWING:
      var newState2 = Object.assign({}, state);
      newState2.following = newState2.following
        .filter( follower => (follower !== action.payload.data.followed_id));

      return newState2;
    case UPDATE_LOGO:

      return {
        ...state,
          current_user: {
            ...state.current_user,
            logo_img: action.payload.data.logo_img
          }
      }
  }
  return state;
};

export default CurrentUserReducer;
