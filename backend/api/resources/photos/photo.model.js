import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true }
});

export const Photo = mongoose.model('photo', photoSchema);
