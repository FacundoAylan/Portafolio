import { slides } from './data';
import { Box, Flex, Text } from '@chakra-ui/react';
import background from './image/background.png'
import Cardprojects from './card';

const Projects = () => {
  return (
    <Box 
      width='100%' 
      minHeight='100vh' 
      backgroundImage={background}
      backgroundSize='100% 100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center'
      paddingTop='2%'
      paddingBottom='2%'
    >
      <Text 
        fontSize='2rem' 
        textTransform='uppercase'
        color='white'
        fontWeight='bold'
        textAlign='center'
      >
        Proyectos
      </Text>
      <Flex 
        width='100%' 
        height='auto'
        flexDirection='row' 
        flexWrap='wrap'
        justifyContent='center'
        gap={{base:3, lg:8}}
        marginTop='2%'
      >
        {slides.map((slide, index) => {
          return (
            <Cardprojects
              key={index}
              image={slide.image} 
              title={slide.title} 
              subtitle={slide.subtitle}
              rigth={slide.rightSubtitle}
            />
          )
        })}
      </Flex>
    </Box>
  );
};

export default Projects;
