import documentoPDF from './cv.pdf';
import imagen from '../../assets/bg.jpg';
import astronauta1 from '../../assets/astronout.png'
import astronauta2 from '../../assets/astronout1.png'
import { FaLinkedin, FaGithub, FaCloudDownloadAlt } from 'react-icons/fa';
import { Box, Flex, Icon, Image, Link, Text, keyframes, ScaleFade } from '@chakra-ui/react';

const traslate = keyframes`
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-20px); }
`;
const traslate2 = keyframes`
0%, 100% { transform: scale(0.5); }
50% { transform: scale(1); }
`;

const HomePage = () => {

    return (
        <Box
            width='100%'
            height='100vh'
            backgroundImage={imagen}
            backgroundSize='100% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='center'
            position='relative'
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Image
                src={astronauta1}
                alt='astronauta 1'
                position='absolute'
                height='20vh'
                width='20%'
                bottom={2}
                right={2}
                animation={`${traslate} 4s ease infinite`}
                display={{ base: 'none', lg: 'block' }}
            />

            <Image
                src={astronauta2}
                alt='astronauta 2'
                position='absolute'
                height='20vh'
                width='20%'
                top={{ base: -1, lg: 2 }}
                left={{ base: '40%', lg: 2 }}
                display={{ base: 'block', sm: 'none', lg: 'block' }}
                animation={`${traslate2} 4s ease infinite`}
            />

            <Flex
                overflow='hidden'
                width={{ base: '90%', lg: '50%' }}
                height={{ base: '70%', sm: '75%', lg: '55vh' }}
                backgroundColor='#0b043094'
                borderRadius='18px'
                border='0.8px solid #0dfef8'
                boxShadow='inset 0 0 10px 1px #0dfcf9'
                color='white'
                position='relative'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
            >
                <Text fontWeight='bold' fontSize={{ base: '1.8rem', lg: '2rem' }} textAlign='center'>
                    Hola, Mi nombre es
                </Text>
                <Text
                    width='100%'
                    textAlign='center'
                    as="span"
                    display="inline-block"
                    fontWeight="900"
                    fontSize={{ base: '2rem', lg: "3em" }}
                    lineHeight="1.2"
                    letterSpacing="2px"
                    padding="1px"
                    color="transparent"
                    bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
                    backgroundClip="text"
                    textStrokeColor="white"
                    textStrokeWidth="var(--stroke-width, 1px)"
                    backgroundSize="100% 100%"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center bottom"
                >
                    Facundo Aylan
                </Text>
                <Text fontWeight='bold' fontSize='1rem' textAlign='center'>
                    Full-Stack Developer
                </Text>
                <Text fontWeight='bold' fontSize='1rem' textAlign='center'>
                    Experiencia en Diseño y Desarrollo de Páginas Web y Aplicaciones
                    Móviles
                </Text>
                <Flex
                    width={{ base: '60%', sm: '100%', lg: '100%' }}
                    flexDirection={{ base: 'column', sm: 'row', lg: 'row' }}
                    justifyContent='center'
                    gap={{ base: 2, lg: 10 }}
                    marginTop={6}
                    fontWeight='bold'
                >
                    <Link
                        href={documentoPDF}
                        download="CV-Facundo.pdf"
                        borderRadius='10px'
                        border='0.8px solid #0dfef8'
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        padding='10px 20px'
                        gap={2}
                    >
                        <Icon
                            as={FaCloudDownloadAlt}
                            boxSize={7}
                            color='#ea4aff'
                        />
                        <Text>CV</Text>
                    </Link>
                    <Link
                        href={'https://www.linkedin.com/in/facundo-aylan-582b52257/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        borderRadius='12px'
                        border='0.8px solid #0dfef8'
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        padding='10px 20px'
                    >
                        <Icon
                            as={FaLinkedin}
                            boxSize={7}
                            color='#3b62f1'
                        />
                        <Text>LinkedIn</Text>
                    </Link>

                    <Link
                        href={'https://github.com/FacundoAylan'}
                        target="_blank"
                        rel="noopener noreferrer"
                        borderRadius='12px'
                        border='0.8px solid #0dfef8'
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        padding='10px 20px'
                    >
                        <Icon
                            as={FaGithub}
                            boxSize={7}
                            color='#eb64fe'
                        />
                        <Text>Github</Text>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default HomePage;
