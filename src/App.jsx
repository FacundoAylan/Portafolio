import NavBar from './Component/1-NavBar/NavBar';
import HomePage from './Component/2-HomePage/HomePage';
import Project from './Component/4-Projects/Projects';
import Skills from './Component/3-Skills/Skills';
import { Box, Flex, Image, keyframes } from '@chakra-ui/react';
import astronauta1 from './assets/astronout.png';
import astronauta2 from './assets/astronout1.png';
import principal from './assets/principal.jpg';
import { useState } from 'react';

const traslate = keyframes`
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-20px); }
`;
const traslate2 = keyframes`
0%, 100% { transform: scale(0.5); }
50% { transform: scale(1); }
`;

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [animationKey, setAnimationKey] = useState(0); // Nuevo estado para reiniciar animaciones

  const handleButtonClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        setActiveSection(id);
        setAnimationKey((prevKey) => prevKey + 1); // Cambia el valor para reiniciar animaciones
      }, 100);
    }
  };
  return (
    <Flex
      key={animationKey}
      width="100%"
      height="auto"
      flexDirection="column"
      position="relative"
      padding="0"
      margin="0"
      backgroundImage={principal}
      backgroundSize={{ base: '250% 100%', sm: '350% 100%', lg: '100% 100%' }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Image
        position="fixed"
        src={astronauta1}
        alt="astronauta 1"
        height="20vh"
        width="20%"
        top="80vh"
        right={2}
        animation={`${traslate} 4s ease infinite`}
        display={{ base: 'none', lg: 'block' }}
        zIndex={200}
      />

      <Image
        src={astronauta2}
        alt="astronauta 2"
        position="absolute"
        height="20vh"
        width="20%"
        top={{ base: -1, lg: 2 }}
        left={{ base: '40%', lg: 2 }}
        display={{ base: 'none', sm: 'none', lg: 'block' }}
        animation={`${traslate2} 4s ease infinite`}
      />
      <Box
        width="100%"
        height={{ base: '5%', lg: '8%' }}
        position="fixed"
        zIndex="100"
        bottom={{ base: 2, sm: '94%', lg: '92%' }}
      >
        <NavBar handleButtonClick={handleButtonClick} />
      </Box>
      <Box width="100%" height="100vh" id="home" overflow="hidden">
        <HomePage isActive={activeSection === 'home'} />
      </Box>
      <Box width="100%" height="100vh" id="skills" overflow="hidden">
        <Skills isActive={activeSection === 'skills'} />
      </Box>
      <Box width="100%" minHeight="100vh" id="projects" overflow="hidden">
        <Project isActive={activeSection === 'projects'} />
      </Box>
    </Flex>
  );
};

export default App;
