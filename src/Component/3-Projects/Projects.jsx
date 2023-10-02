import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { slides } from './data';
import './index.css';

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
                  <p className={index === slideNumber ? 'description' : ''}>
                    {slide.content}
                  </p>
                  <button className="btn" onClick={handleOpenModal}>
                    Mas Detalle
                  </button>
                </div>
              </div>
              <div className="right-info">
                <h1>{slide.rightTitle}</h1>
                <h3>{slide.rightSubtitle}</h3>
              </div>
              {isModalOpen && (
                <div className={index === slideNumber ? 'modal' : ''}>
                  <button
                    className={index === slideNumber ? 'close-btn' : ''}
                    onClick={handleCloseModal}
                  >
                    <FaTimes size="3rem" color="red" />
                  </button>
                  <div className="modal-content">
                    <h2
                      className={
                        index === slideNumber ? 'descriptionTotal' : 'disabled'
                      }
                    >
                      {slide.content}|
                    </h2>
                    <div className={ index === slideNumber? 'red': 'disabled'}>
                      <h2                       
                        className={
                          index === slideNumber ? 'status' : 'disabled'
                        }>
                          {slide.status}
                        </h2>
                        <div className={ index === slideNumber? 'container-icon': 'disabled'}>
                          <a href={slide.github} target="_blank" rel="noreferrer">
                            <BsGithub className='icon-red' style={{fontSize:'40px'}}/>
                          </a>
                          <a href={slide.web} target="_blank" rel="noreferrer">
                            <BiWorld className='icon-red'/>
                          </a>
                        </div>
                    </div>
                  </div>
                </div>
              )}
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
    </>
  );
};

export default Projects;
