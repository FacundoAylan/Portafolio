/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import slides from './slides';
import './index.css';

/*
Creo que modal debería ser un componente aparte para poder poner diferentes 
descripciones dentro
*/
const Projects = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleNextSlide = () => {
    let nextSlideNumber = slideNumber + 1;

    if (nextSlideNumber > slides.length - 1) {
      nextSlideNumber = 0;
    }

    setSlideNumber(nextSlideNumber);
  };

  const handlePrevSlide = () => {
    let prevSlideNumber = slideNumber - 1;

    if (prevSlideNumber < 0) {
      prevSlideNumber = slides.length - 1;
    }

    setSlideNumber(prevSlideNumber);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="banner">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === slideNumber ? 'active' : ''}`}
            >
              <img src={slide.image} alt="" />
              <div className="left-info">
                <div className="penetrte-blur">
                  <h1>{slide.title}</h1>
                </div>
                <div className="content">
                  <h3>{slide.subtitle}</h3>
                  <p>{slide.content}</p>
                  <button className="btn" onClick={handleOpenModal}>
                    More Details
                  </button>
                </div>
              </div>
              <div className="right-info">
                <h1>{slide.rightTitle}</h1>
                <h3>{slide.rightSubtitle}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="navigation">
          <span className="prev-btn" onClick={handlePrevSlide}>
            <FaChevronLeft size="3x" />
          </span>
          <span className="next-btn" onClick={handleNextSlide}>
            <FaChevronRight size="3x" />
          </span>
        </div>
      </section>
      {isModalOpen && (
        <div className="modal">
            <button className="close-btn" onClick={handleCloseModal}>
              <FaTimes size="3rem" color="red" />
            </button>
          <div className="modal-content">
            <h1>
              I've been working on a web page dedicated to the popular show Rick and Morty.
              The project involved using React, Redux, and pure CSS for frontend development.
              On the backend, I utilized Express.js and Sequelize to manage data.
              It was an incredible learning experience, and I'm proud to have completed it!
            </h1>
         </div>
        </div>
      )}
    </>
  );
};

export default Projects;
