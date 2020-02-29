import express from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import fs from 'fs';
import App from '../src/App';

const PORT = process.env.PORT || 8000;
const html = fs.readFileSync('dist/index.html').toString();

//Split Index.html file into 2 parts
const parts = html.split('Loading App');

const app = express();

app.use('/dist', express.static('dist'));

// Run Middleware
app.use((req, res) => {
  res.write(parts[0]);
  const reactMarkup = (
    // Reach Router accepts a request url from Express
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  const stream = renderToNodeStream(reactMarkup);
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.write(parts[1]);
    res.end();
  });
});

console.log(`Listening on http://localhost:${PORT}`);
app.listen(PORT);
