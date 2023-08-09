import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css'; 
import image1 from '../../assets/mario.jpg';
import image2 from '../../assets/contact.jpg';
import image3 from '../../assets/home.jpg';

const images = [image1,image2,image3];

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageChange = (index) => {
    setCurrentImage(images[index]);
  };

  return (
    <div className="carousel-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <h1>titulo del projecto</h1>
        <h2>description del projecto</h2>
        <h2>aportes</h2>
        <h2>tegnologias</h2>
      </div>
      <Carousel
        showArrows={true}
        onChange={handleImageChange}
        dynamicHeight={false}
        className="carousel"
      >
        {images.map((image, index) => (
          <div key={index} className='container-image'>
            <img  className='image' src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
