import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css'; 
import image1 from '../../assets/mario.jpg';
import image2 from '../../assets/contact.jpg';
import image3 from '../../assets/home.jpg';

const images = [image1,image2,image3];

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };
  const handlePrevImage = () => {
    const newIndex = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentImage + 1) % images.length;
    setCurrentImage(newIndex);
  };

  return (
    <div className="carousel-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className='container-info'>
          <h1>titulo del projecto</h1>
          <h2>description del projecto</h2>
          <h2>aportes</h2>
          <h2>tegnologias</h2>
        </div>
      </div>
      <h1 className='title-projects'>Projects</h1>
      <button
        className='next'
        onClick={handleNextImage}
        disabled={currentImage === 0}
      >
        &#8249;
      </button>
      <button
        className='prev'
        onClick={handlePrevImage}
        disabled={currentImage === images.length - 1}
      >
        &#8250;
      </button>
      <Carousel
        showArrows={true}
        onChange={handleImageChange}
        dynamicHeight={false}
        className="carousel"
      >
        {images.map((image, index) => (
          <div className='container-image' key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
