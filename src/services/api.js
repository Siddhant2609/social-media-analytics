import axios from 'axios';

const api = axios.create({
  baseURL: 'http://20.244.56.144/test',
});

export const getUsers = () => api.get('/users');
export const getPosts = () => api.get('/posts');
export const getComments = (postId) => api.get(`/posts/${postId}/comments`);

export default api;