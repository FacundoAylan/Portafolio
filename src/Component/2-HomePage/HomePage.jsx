import { FaLinkedin, FaGithub, FaCloudDownloadAlt } from 'react-icons/fa';
import cv from '../../assets/cv/CV.pdf';
import './index.css';

const HomePage = () => {
  return (
    <div className='animate-bg'>
      <div className="container-home">
        <div className="astronout" />
        <div className="astronout2" />
        <div className="container-info-home">
          <span className='saludo'>
            Hola, mi nombre es
          </span>
          <span className="fill-text">Nahuel Lescano</span>
          <span className='full'>
            Full-Stack Developer
          </span>
          <span className="custom-span">
            Experiencia en Diseño y Desarrollo de Páginas Web
          </span>
          <div className="container-link">
            <a
              href={cv}
              download="CV.pdf"
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
              href={'https://www.linkedin.com/in/nahuel-lescano-906a2618b/'}
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
              href={'https://github.com/NahuelLescano'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FaGithub
                  className="icon"
                  style={{ borderRadius: '100%', padding: '5%' }}
                />
              </div>
              <div style={{ fontSize: '15px' }}>Github</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
