import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import data from '../../nahuelData';
import './index.css';

const Skills = () => {
  return (
    <div className="container-contact ">
      <div className="star-wars">
        <div className="crawl">
          <span className="title">Front-End</span>
          <div className="skills">
            <div className="containerImg">
              <span class="image-description">CSS</span>
              <img
                src="https://www.svgrepo.com/show/452185/css-3.svg"
                alt="CSS3"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">HTML</span>
              <img
                src="https://www.svgrepo.com/show/452228/html-5.svg"
                alt="HTML5"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Java Script</span>
              <img
                src="https://www.svgrepo.com/show/452075/node-js.svg"
                alt="JavaScript"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">React js.</span>
              <img
                src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                alt="React"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Redux</span>
              <img
                src="https://profilinator.rishav.dev/skills-assets/redux-original.svg"
                alt="Redux"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Chackra UI</span>
              <img
                src="https://profilinator.rishav.dev/skills-assets/chakraui.png"
                alt="Chakra UI"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">React Native</span>
              <img
                src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                alt="React native"
                className="image"
              />
            </div>
          </div>
          <span className="title">Back-End</span>
          <div className="skills">
            <div className="containerImg">
              <span class="image-description">Node Js.</span>
              <img
                src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
                alt="Node.js"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Express Js.</span>
              <img
                src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
                alt="Express.js"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Postgres SQL</span>
              <img
                src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg"
                alt="PostgreSQL"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Firebase</span>
              <img
                src="https://profilinator.rishav.dev/skills-assets/firebase.png"
                alt="Firebase"
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
