import React from 'react';
import css from './skills_image/css.svg';
import html from './skills_image/html.svg';
import javascript from './skills_image/javascript.svg'
import react from './skills_image/react.svg';
import redux from './skills_image/redux.svg';
import chakraui from './skills_image/chakraui.svg';
import node from './skills_image/node.svg';
import express from './skills_image/express.svg';
import postgres from './skills_image/postgres.svg';
import firebase from './skills_image/firebase.svg';
import git from './skills_image/git.svg';
import github from './skills_image/github.svg';
import linux from './skills_image/linux.svg';
import windows from './skills_image/windows.svg';
import './index.css';

const Skills = () => {

  return (
    <div className="container-skills ">
      <div className="star-wars">
        <div className="crawl">
          <span className="title">Front-End</span>
          <div className="skills">
            <div className="containerImg">
              <span class="image-description">CSS</span>
              <img
                src={css}
                alt="CSS3"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">HTML</span>
              <img
                src={html}
                alt="HTML5"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Java Script</span>
              <img
                src={javascript}
                alt="JavaScript"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">React js.</span>
              <img
                src={react}
                alt="React"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Redux</span>
              <img
                src={redux}
                alt="Redux"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Chackra UI</span>
              <img
                src={chakraui}
                alt="Chakra UI"
                className="image"
                style={{border:'0px', borderRadius:'200px', padding:'0'}}
              />
            </div>
            <div className="containerImg">
              <span class="image-description">React Native</span>
              <img
                src={react}
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
                src={node}
                alt="Node.js"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Express Js.</span>
              <img
                src={express}
                alt="Express.js"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Postgres SQL</span>
              <img
                src={postgres}
                alt="PostgreSQL"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">Firebase</span>
              <img
                src={firebase}
                alt="Firebase"
                className="image"
              />
            </div>
          </div>
          <span className="title1">Otras herramientas</span>
          <div className="skills1">
            <div className="containerImg">
              <span class="image-description">GIT</span>
              <img
                src={git}
                alt="CSS3"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">GIT-HUB</span>
              <img
                src={github}
                alt="HTML5"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">LINUX</span>
              <img
                src={linux}
                alt="JavaScript"
                className="image"
              />
            </div>
            <div className="containerImg">
              <span class="image-description">WINDOWS</span>
              <img
                src={windows}
                alt="React"
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
      <span className='nota'>icons of: https://iconos8.es/icons</span>
    </div>
  );
};

export default Skills;