import React from 'react';
import './index.css';
import data from '../../nahuelData';

const Contact = () => {
  return (
    <div className="Container_About">
      <h1>Contact</h1>
      <h2>Github: {data.links.github}</h2>
      <h2>LinkedIn: {data.links.linkedin}</h2>
    </div>
  );
};

export default Contact;
