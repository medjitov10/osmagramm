import axios from 'axios';

export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_LIKE_OWNERS = 'FETCH_LIKE_OWNERS';

export const fetchNews = () => {
  const request = axios.get('/posts');

  return {
    type: FETCH_NEWS,
    payload: request
  }
}
