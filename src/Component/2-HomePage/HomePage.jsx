import React, { useEffect, useState } from 'react';
import data from '../../nahuelData';
import Typewriter from 'typewriter-effect';
import './index.css';

const HomePage = () => {
  return (
    <div className="container-home animate-bg">
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
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(data.description)
              .pauseFor(50)
              .start();
            }}
            options={{
              delay: 50,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
