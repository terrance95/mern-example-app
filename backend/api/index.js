import express from 'express';
import mongoose from 'mongoose';
import photoRouter from './resources/photos/photo.router';

const app = express();
const PORT = 5000;

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://127.0.0.1:27017/photo-gallery', { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected.');
  })
  .catch(e => {
    console.error('Connection error', e.message);
  });

app.use('/api/photo', photoRouter);

app.get('/', (req, res) => {
  res.send('Hello API');
});

console.log(`API running on http://localhost:${PORT}`);
app.listen(PORT);
