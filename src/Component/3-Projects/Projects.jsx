import React, { useState } from 'react';
import imagen1 from './images/1.jpg';
import imagen6 from './images/4.jpg';
import imagen5 from './images/6.jpg';
import imagen4 from './images/8.jpg';
import imagen3 from './images/9.jpg';
import imagen2 from './images/10.jpeg';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import './index.css';

const Projects = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slides = [
    {
      image: imagen1,
      title: 'Team',
      subtitle: '00. Team SEC C Esports',
      content: 'SEC C Esports is a professional esports team based in India...',
      rightTitle: 'Sec c',
      rightSubtitle: 'Esports',
    },
    {
      image: imagen2,
      title: 'Snak',
      subtitle: '01. The Entry Fragger',
      content: 'Abhishek Shakya, also known by his in-game name SnakeEye...',
      rightTitle: 'eEye',
      rightSubtitle: 'Abhishek',
    },
    {
      image: imagen3,
      title: 'Ven',
      subtitle: '02. The Supporter',
      content:
        'Ashish Shakya, in-game name Venom, is the support player of Team SEC C...',
      rightTitle: 'om',
      rightSubtitle: 'Ashish',
    },
    {
      image: imagen4,
      title: 'Fla',
      subtitle: '03. The IGL',
      content:
        'Pankaj Rajpoot, in-game name Flash, is the in-game leader (IGL) of Team SEC C...',
      rightTitle: 'sh',
      rightSubtitle: 'pankaj',
    },
    {
      image: imagen5,
      title: 'Mr. R',
      subtitle: '04. The All Rounder',
      content:
        'Shivam Rajput, in-game name Mr. Rajput, is an all-rounder of Team SEC C...',
      rightTitle: 'ajput',
      rightSubtitle: 'Shivam',
    },
    {
      image: imagen6,
      title: 'Sass',
      subtitle: '05. The Extra',
      content:
        'Shashank Pal, in-game name Sassy Boi, is an extra player of Team SEC C...',
      rightTitle: 'y Boi',
      rightSubtitle: 'Shashank',
    },
  ];

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
            <h1>Detalle sobre el proyecto</h1>
            <p>Detalles adicionales aquí...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
