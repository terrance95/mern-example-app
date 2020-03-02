import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
  photo: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now
  }
});

export const Photo = mongoose.model('photo', photoSchema);
