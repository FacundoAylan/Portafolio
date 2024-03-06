import { slides } from './data';
import { Box, Flex, Text, keyframes } from '@chakra-ui/react';
import Cardprojects from './card';

const animation = keyframes`
  from{
    transform:translateX(100%)
  }
  to{
    transform:translateX(0)
  }
`
const animation2 = keyframes`
  from{
    transform:translateY(-200%)
  }
  to{
    transform:translateY(0)
  }
`

const Projects = () => {
  return (
    <Box width="100%" minHeight="100vh" paddingTop="1%" paddingBottom="2%">
      <Text
        fontSize="2rem"
        textTransform="uppercase"
        color="white"
        fontWeight="bold"
        textAlign="center"
        animation={`${animation2} 1.5s ease`}
      >
        Proyectos
      </Text>
      <Flex
        width="100%"
        height="auto"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={{ base: 3, lg: 8 }}
        marginTop="2%"
        animation={`${animation} 1.5s ease`}
      >
        {slides.map((slide, index) => {
          return (
            <Cardprojects
              image={slide.image}
              title={slide.title}
              subtitle={slide.subtitle}
              right={slide.rightSubtitle}
              video={slide.video}
              github={slide.github}
              id={index}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default Projects;
