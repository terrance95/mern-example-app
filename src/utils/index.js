//import axios from 'axios';
const axios = require('axios');

const photoApi = axios.create({
  baseURL: 'http://localhost:5000/api/photos'
});

// export const insertPhoto = payload => api.post('/photo', payload);
export const getAllPhotos = () => photoApi.get('');
// export const updatePhotoById = (id, payload) =>
//   api.put(`/photo/${id}`, payload);
// export const deletePhotoById = id => api.delete(`/photo/${id}`);
// export const getPhotoById = id => api.get(`/photo/${id}`);

export const createPhoto = payload => photoApi.post('', { photo: payload });
//export getAllPhotos = () => photoApi.get
