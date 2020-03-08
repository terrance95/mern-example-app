import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: Object,

  date: {
    type: Date,
    default: Date.now
  }
});

export const Notes = mongoose.model('notes', notesSchema);
