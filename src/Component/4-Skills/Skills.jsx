import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import data from '../../nahuelData';
import './index.css';

const Skills = () => {
  return (
    <div className="container-contact ">
      <div className="star-wars">
        <div className="crawl">
          <h1 className='title'>Feel free to contact me!</h1>
          <a
            href={`https://wa.me/${data.links.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="iconStyle" />
          </a>
          <a
            href={data.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="iconStyle" />
          </a>

          <a href={data.links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="iconStyle" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
