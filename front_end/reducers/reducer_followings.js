import { FETCH_FOLLOWINGS } from './../actions/index.js';

const FollowerReducer = ( state = [], action) => {
  switch (action.type) {
    case FETCH_FOLLOWINGS:
      return action.payload.data;
  }
  return state;
};

export default FollowerReducer;
