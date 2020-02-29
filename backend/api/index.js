import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import photoRouter from './resources/photos/photo.router';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

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

app.post('/', (req, res) => {
  console.log('got it');
  res.send('Done');
});

console.log(`API running on http://localhost:${PORT}`);
app.listen(PORT);
