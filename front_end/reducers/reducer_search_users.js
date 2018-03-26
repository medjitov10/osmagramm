import { FETCH_SEARCH_USERS } from './../actions/index';

const SearchUsersReducer = ( state = [], action ) => {
  switch (action.type) {
    case FETCH_SEARCH_USERS:
      return action.payload.data;
  }
  return state;
};

export default SearchUsersReducer;
