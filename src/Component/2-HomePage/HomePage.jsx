import React, { useEffect, useState } from 'react';
import data from '../../nahuelData';
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaFileDownload,
} from 'react-icons/fa';
import './index.css';

const HomePage = () => {
  return (
    <div className="container-home animate-bg">
      <div className="astronout" />
      <div className="astronout2" />
      <div className="container-info-home">
        <span
          style={{
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '20px',
          }}
        >
          Hola, Mi nombre es
        </span>
        <span
          style={{
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '70px',
          }}
        >
          Facundo Aylan
        </span>
        <span
          style={{
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '25px',
          }}
        >
          Full-Stack Developer
        </span>
        <span className="custom-span">
          Experiencia en Diseño y Desarrollo de Páginas Web y Aplicaciones
          Móviles
        </span>
        <div className="container-link">
          <a href={data.links.github} target="_blank" rel="noopener noreferrer">
            <div>
              <FaFileDownload className="icon" />
            </div>
            <div style={{fontSize:'15px'}}>CV</div>
          </a>
          <a
            href={`https://wa.me/${data.links.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <FaWhatsapp className="icon" />
            </div>
            <div style={{fontSize:'15px'}}>WhattsApp</div>
          </a>
          <a
            href={data.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <FaLinkedin className="icon" />
            </div>
            <div style={{fontSize:'15px'}}>LinkedIn</div>
          </a>

          <a href={data.links.github} target="_blank" rel="noopener noreferrer">
            <div>
              <FaGithub className="icon" />
            </div>
            <div style={{fontSize:'15px'}}>Git-Hub</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
