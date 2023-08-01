import React from 'react';
import './index.css';
import data from '../../nahuelData';

const About = () => {
  return (
    <div className="Container-about">
      <h1>{data.name}</h1>
      <img src={data.image} alt="profile" className="image" />
      <h2>{data.description}</h2>
    </div>
  );
};

export default About;
