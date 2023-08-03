import React, { useState } from 'react';
import './index.css';
import data from '../../nahuelData';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="Container_project">
      <h1 className='title-project'>Projectos</h1>
      <div className="cards-container">
        <button className="open-modal-button1" onClick={handleOpenModal}>
          <div className='card'></div>
        </button>
        <button className="open-modal-button2" onClick={handleOpenModal}>
          <div className='card'></div>
        </button>
        <button className="open-modal-button3" onClick={handleOpenModal}>
          <div className='card'></div>
        </button>
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal">
              <button onClick={handleCloseModal}>X</button>
              <h1>Projects</h1>
              <h2>{data.projects.rickAndMorty}</h2>
              <h2>{data.projects.dogs}</h2>
              <h2>{data.projects.bodu}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
