import React from 'react';
import documentoPDF from './cv.pdf';
import { FaLinkedin, FaGithub, FaCloudDownloadAlt } from 'react-icons/fa';
import './index.css';

const HomePage = () => {
  return (
    <div className='animate-bg'>
      <div className="container-home">
        <div className="astronout" />
        <div className="astronout2" />
        <div className="container-info-home">
          <span className='saludo'>
            Hola, Mi nombre es
          </span>
          <span className="fill-text">Facundo Aylan</span>
          <span className='full'>
            Full-Stack Developer
          </span>
          <span className="custom-span">
            Experiencia en Diseño y Desarrollo de Páginas Web y Aplicaciones
            Móviles
          </span>
          <div className="container-link">
            <a
              href={documentoPDF} 
              download="CV-Facundo.pdf"
            >
              <div>
                <FaCloudDownloadAlt
                  className="icon"
                  style={{ padding: '6%', borderRadius: '12px' }}
                />
              </div>
              <div style={{ fontSize: '15px' }}>CV</div>
            </a>
            <a
              href={'https://www.linkedin.com/in/facundo-aylan-582b52257/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FaLinkedin
                  className="icon"
                  style={{ borderRadius: '12px', padding: '4%' }}
                />
              </div>
              <div style={{ fontSize: '15px' }}>LinkedIn</div>
            </a>

            <a
              href={'https://github.com/FacundoAylan'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FaGithub
                  className="icon"
                  style={{ borderRadius: '100%', padding: '5%' }}
                />
              </div>
              <div style={{ fontSize: '15px' }}>Git-Hub</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
