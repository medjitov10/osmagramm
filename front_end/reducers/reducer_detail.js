import {
  DETAIL_FOLLOWERS,
  DETAIL_FOLLOWINGS,
  DETAIL_LIKE_OWNERS,
  DELETE_DETAIL } from './../actions/index.js';

const DetailReducer = ( state = [], action) => {
  switch (action.type) {
    case DETAIL_FOLLOWERS:
      console.log(action.payload.data);
      return [action.payload.data, 'Followers']
    case DETAIL_FOLLOWINGS:
      return [action.payload.data, 'Followings']
    case DETAIL_LIKE_OWNERS:
      return [action.payload.data, "Likes"]

    case DELETE_DETAIL:
      return []
  }
  return state;
};

export default DetailReducer;
