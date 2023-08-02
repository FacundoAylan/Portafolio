import React from 'react';
import './index.css';
import data from '../../nahuelData';

const Projects = () => {
  return (
    <div className="Container_project">
      <h1>Projects</h1>
      <h2>{data.projects.rickAndMorty}</h2>
      <h2>{data.projects.dogs}</h2>
      <h2>{data.projects.bodu}</h2>
    </div>
  );
};

export default Projects;
