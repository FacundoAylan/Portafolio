import React from 'react';
import './index.css';
import data from '../../nahuelData';

const HomePage = () => {
  return (
    <div className="container-home">
      <h1>{data.presentation}</h1>
    </div>
  );
};

export default HomePage;
