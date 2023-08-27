import data from '../../nahuelData';
import {
  FaLinkedin,
  FaGithub,
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
          Hi! My name is
        </span>
        <span
          style={{
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: '70px',
          }}
        >
          Nahuel Lescano
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
          I am a passionate Full Stack Developer and Programmer Analyst, with a background in Computer Engineering.
          I have a strong ability to adapt quickly and learn new technologies and languages on the go.
        </span>
        <div className="container-link">
          <a href={data.links.github} target="_blank" rel="noopener noreferrer">
            <div>
              <FaFileDownload className="icon" />
            </div>
            <div style={{fontSize:'15px'}}>CV</div>
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
