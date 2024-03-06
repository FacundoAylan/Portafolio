import NavBar from './Component/1-NavBar/NavBar';
import HomePage from './Component/2-HomePage/HomePage';
import Project from './Component/4-Projects/Projects';
import Skills from './Component/3-Skills/Skills';
import { Box, Flex} from '@chakra-ui/react';
import principal from './assets/principal.jpg';
import { useState } from 'react';



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
