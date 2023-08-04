import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import data from '../../nahuelData';
import './index.css';

const Contact = () => {
  const phoneNumber = '1136747801';
  return (
    <div className="container-contact">
      <div className="star-wars">
        <div className="crawl">
          <a
            href={`https://wa.me/${phoneNumber}`}
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

export default Contact;
