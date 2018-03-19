import { FETCH_FOLLOWERS } from './../actions/index.js';

const FollowerReducer = ( state = [], action) => {
  switch (action.type) {
    case FETCH_FOLLOWERS:
      return action.payload.data;
  }
  return state;
};

export default FollowerReducer;
