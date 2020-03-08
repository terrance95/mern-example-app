import React, { useEffect } from 'react';
import Layout from '../components/Layout';

import { getAllPhotos } from '../utils';
import UploadForm from '../components/UploadForm';

const Home = () => {
  useEffect(() => {
    getAllPhotos()
      .then(photos => console.log(photos.data))
      .catch(e => console.log(e));
  });

  return (
    <Layout>
      <h1 style={{ marginTop: '20px' }}>Photo</h1>
      <UploadForm />
    </Layout>
  );
};

export default Home;
