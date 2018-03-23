import axios from 'axios';

export const FETCH_PROFILE_INFO = 'FETCH_PROFILE_INFO';
export const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';
export const SET_NICK_NAME = 'SET_NICK_NAME';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const FETCH_FOLLOWERS = 'FETCH_FOLLOWERS';
export const FETCH_FOLLOWINGS = 'FETCH_FOLLOWINGS';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const UPDATE_LOGO = 'UPDATE_LOGO';
export const FOLLOW_FROM_FOLLOWING = 'FOLLOW_FROM_FOLLOWING';
export const UNFOLLOW_FROM_FOLLOWING = 'UNFOLLOW_FROM_FOLLOWING';
export const DELETE_DETAIL = 'DELETE_DETAIL';
export const DETAIL_FOLLOWINGS = 'DETAIL_FOLLOWINGS';
export const DETAIL_FOLLOWERS = 'DETAIL_FOLLOWERS';
export const DETAIL_LIKE_OWNERS = 'DETAIL_LIKE_OWNERS';

export const current_user = () => {
  const request = axios.get('/users/', {
    headers: { pragma: "no-cache", cacheControl: "no-cache" }
  });
  return {
    payload: request,
    type: FETCH_CURRENT_USER
  };
};

export const fetchInfo = (nickname) => {
  const request = axios.get(`/users/${nickname}`, {
    headers: { pragma: "no-cache", cacheControl: "no-cache" }
  });
  return {
    payload: request,
    type: FETCH_PROFILE_INFO
  };
};

export const updateProfile = (props) => {

  const request = axios.put(`/users/id`, props);
  return {
    payload: request,
    type: UPDATE_PROFILE_INFO
  };
};

export const fetchFollowing = (id) => {
  const request = axios.get(`/followings/${id}`);
  return {
    type: DETAIL_FOLLOWINGS,
    payload: request,

  };
};

export const fetchFollowers = (id) => {
  const request = axios.get(`/followers/${id}`);
  return {
    type: DETAIL_FOLLOWERS,
    payload: request,
  };
};


export const fetchLikeOwners = (params) => {
  const request = axios.put(`/likes/id`, {user_id: params})
  return {
    type: DETAIL_LIKE_OWNERS,
    payload: request,
  };
}

export const follow = (id) => {
  const request = axios.post(`/followers/`, {id}, {
    headers: { pragma: "no-cache", cacheControl: "no-cache" }
  });

  return {
    type: FOLLOW,
    payload: request
  };
};

export const followFromFollowing = (id) => {
  const request = axios.get(`/followfromfollowing/${id}`, {
    headers: { pragma: "no-cache", cacheControl: "no-cache" }
  });

  return {
    type: FOLLOW_FROM_FOLLOWING,
    payload: request
  }
}

export const unfollow = (id) => {
  const request = axios.delete(`/followers/${id}`, {
    headers: { pragma: "no-cache", cacheControl: "no-cache" }
  });

  return {
    type: UNFOLLOW,
    payload: request
  };
};

export const unFollowFromFollowing = (id) => {
  const request = axios.delete(`/unfollowfromfollowing/${id}`, {
    headers: { pragma: "no-cache", cacheControl: "no-cache" }
  });

  return {
    type: UNFOLLOW_FROM_FOLLOWING,
    payload: request
  };
}

export const updatelogo = (files) => {
  const formData = new FormData();

  formData.append('user[logo_img]', files);

  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  };
  const request = axios.post('/updatelogo', formData,config);

  return {
    type: UPDATE_LOGO,
    payload: request
  };
};

export const deleteDetail = () => ({
  type: DELETE_DETAIL
})
