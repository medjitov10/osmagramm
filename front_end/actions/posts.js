import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const POST_ITEM = 'POST_ITEM';
export const CLEAR_POST_ITEM = 'CLEAR_POST_ITEM';
export const LIKE_POST = 'LIKE_POST';
export const UNLIKE_POST = 'UNLIKE_POST';
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = (id) => {
  const request = axios.get(`/posts/${id}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export const addPost = (files) => {
  const formData = new FormData();

  formData.append('post[post_image]', files.file);
  formData.append('post[body]', files.body);

  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  };
  const request = axios.post(`/posts/`,  formData,config);

  return {
    type: ADD_POST,
    payload: request
  };

};

export const deletepost = (id) => {
  const request = axios.delete(`/posts/${id}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}

export const postItem = (id) => {
  const request = axios.get(`/postitem/${id}`);

  return {
    type: POST_ITEM,
    payload: request
  };
};

export const clearPostItem = () => {
  return {
    type: CLEAR_POST_ITEM,

  }
}

export const LikePost = (id) => {
  const request = axios.post(`/likes`, { post_id: id });

  return {
    type: LIKE_POST,
    payload: request
  }
}

export const UnLikePost = (post_id) => {
  const request = axios.delete(`/likes/${post_id}`);

  return {
    type: UNLIKE_POST,
    payload: request
  }
}
