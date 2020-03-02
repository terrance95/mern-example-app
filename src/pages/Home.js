import React, { useEffect } from 'react';
import Layout from '../components/Layout';

import { getAllPhotos } from '../util';
import UploadForm from '../components/UploadForm';

const Home = () => {
  useEffect(() => {
    getAllPhotos().then(photos => console.log(photos.data));
  });

  return (
    <Layout>
      <h1 style={{ marginTop: '20px' }}>Photo</h1>
      <UploadForm />
    </Layout>
  );
};

export default Home;
