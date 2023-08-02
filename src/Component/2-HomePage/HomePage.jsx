import React, { useEffect, useState } from 'react';
import data from '../../nahuelData';
import './index.css';

const HomePage = () => {
  return (
    <div className="container-home">
      <div className="window">
        <div className="title-bar">
          <div className="title">Full Stack Developer</div>
          <div className="buttons">
            <div className="button minimize">-</div>
            <div className="button maximize">y</div>
            <div className="button close">x</div>
          </div>
        </div>
        <div className="content">
          <h1>{data.presentation}</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
