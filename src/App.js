import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

//const createPhoto = payload => api.post('/photo', payload);
const getAllPhotos = () => api.get('/photo');

function App() {
  // useEffect(() => {
  //   function fetchData() {
  //     getAllPhotos().then(data => {
  //       console.log(data);
  //     });
  //   }
  //   fetchData();
  // }, []);

  async function fetchData() {
    await getAllPhotos().get(data => {
      let results = data.data;
      console.log(results);
    });
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => console.log(response.data));
  });

  const [state, setState] = useState(0);

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{state}</p>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Tap Me
      </button>
    </div>
  );
}

export default App;
