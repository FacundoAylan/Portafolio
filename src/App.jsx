import NavBar from './Component/1-NavBar/NavBar';
import HomePage from './Component/2-HomePage/HomePage';
import Project from './Component/3-Projects/Projects';
import Skills from './Component/4-Skills/Skills';
import { Box, Flex } from '@chakra-ui/react';

const App = () => {
    console.log("Hola");
    const handleButtonClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Flex 
            width ='100%'
            height ='auto'
            flexDirection ='column'
            position ='relative'
            padding='0'
            margin='0'
        >
            <Box 
                width='100%' 
                height={{base:'5%', lg:'8%'}} 
                position='fixed' 
                zIndex='100'
                bottom={{base:2,sm:'94%', lg:'92%'}}
            >
                <NavBar handleButtonClick={handleButtonClick}/>
            </Box>
            <Box width='100%' height='100vh' id='home'>
                <HomePage />
            </Box>
            <Box width='100%' height='100vh' id='skills' className="animated-element">
                <Skills />
            </Box>
            <Box width='100%' minHeight='100vh' id='projects'>
                <Project />
            </Box>
        </Flex>
    );
};

export default App;
