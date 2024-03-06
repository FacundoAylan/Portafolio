import { slides } from './data';
import { Box, Flex, Text, keyframes } from '@chakra-ui/react';
import Cardprojects from './card';

const animation = keyframes`
  from{
    transform:translateY(100%)
  }
  to{
    transform:translateY(0)
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
    <Box width="100%" minHeight="100vh" paddingTop={{base:'1%',sm:'5%',lg:"5%" }}paddingBottom="2%">
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
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        alignItems='center'
        gap={{ base: 3, lg: 8 }}
        marginTop="2%"
        animation={`${animation} 1s ease`}
      >
        {slides.map((slide, index) => {
          return (
            <Cardprojects
              image={slide.image}
              title={slide.title}
              content={slide.content}
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
