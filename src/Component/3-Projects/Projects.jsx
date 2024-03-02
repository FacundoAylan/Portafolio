import { slides } from './data';
import { useRef } from "react";
import { Box, Flex, Text, ScaleFade } from '@chakra-ui/react';
import { useInViewport } from "react-in-viewport";
import Cardprojects from './card';
import background from './image/background.png'

const Projects = () => {
    const ref = useRef(null);

    const { inViewport } = useInViewport(
        ref,
        { rootMargin: "-100px" },
        { disconnectOnLeave: false },
        {}
    );

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
                gap={{base: 3, lg: 8}}
                marginTop='2%'
            >
                    {slides.map((slide, index) => {
                        return (
                            <Box
                                width={{ base: '45%', lg: '20%' }}
                                height={{ base: '40vh', sm: '50vh', lg: '40vh' }}
                                key={index}
                                flexDirection="row"
                                ref={ref}
                            >
                            <ScaleFade initialScale={0.9} in={inViewport} whileHover={{ scale: 1.1 }}>
                            <Cardprojects
                                image={slide.image}
                                title={slide.title}
                                subtitle={slide.subtitle}
                                rigth={slide.rightSubtitle}
                            />
                            </ScaleFade>
                            </Box>
                        )
                    })}

            </Flex>
        </Box>
    );
};

export default Projects;
