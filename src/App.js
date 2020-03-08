import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import NewBlogScreen from './pages/NewBlogScreen';

function App() {
  return (
    <Router>
      <NewBlogScreen path="/" />
    </Router>
  );
}

export default App;
