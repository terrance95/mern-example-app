import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const insertPhoto = payload => api.post('/photo', payload);
export const getAllPhotos = () => api.get('/photo');
export const updatePhotoById = (id, payload) =>
  api.put(`/photo/${id}`, payload);
export const deletePhotoById = id => api.delete(`/photo/${id}`);
export const getPhotoById = id => api.get(`/photo/${id}`);
