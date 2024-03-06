import documentoPDF from './cv.pdf';
import { FaLinkedin, FaGithub, FaCloudDownloadAlt } from 'react-icons/fa';
import { Box, Flex, Icon, Link, Text, keyframes } from '@chakra-ui/react';

const animation = keyframes`
  from {
    transform: scale(0);
    rotate:-180deg
  }
  to {
    transform: scale(1);
  }
`;


const HomePage = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        padding='0.3%'
        borderRadius='18px'
        width={{ base: '90%', lg: '60%' }}
        height={{ base: '70%', sm: '75%', lg: '55vh' }}
        bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
        boxShadow="0 0 10px rgba(9, 241, 184, 0.5), 0 0 10px rgba(0, 162, 255, 0.5), 0 0 10px rgba(255, 0, 210, 0.5), 0 0 10px rgba(254, 217, 15, 0.5)"
        animation={`${animation} 0.8s ease-in-out`}
      >
      <Flex
        padding="1%"
        overflow="hidden"
        width='100%'
        height='100%'
        backgroundColor="#08244c"
        borderRadius="18px"
        color="white"
        position="relative"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontWeight="bold"
          fontSize={{ base: '1.8rem', lg: '2rem' }}
          textAlign="center"
        >
          Hola, Mi nombre es
        </Text>
        <Text
          width="100%"
          textAlign="center"
          as="span"
          display="inline-block"
          fontWeight="900"
          fontSize={{ base: '2rem', lg: '3em' }}
          lineHeight="1.2"
          letterSpacing="2px"
          padding="1px"
          color="transparent"
          bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
          backgroundClip="text"
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
          backgroundPosition="center bottom"
        >
          Facundo Aylan
        </Text>
        <Text fontWeight="bold" fontSize="1rem" textAlign="center">
          Full-Stack Developer
        </Text>
        <Text fontWeight="bold" fontSize="1rem" textAlign="center">
          Experiencia en Diseño y Desarrollo de Páginas Web y Aplicaciones
          Móviles
        </Text>
        <Flex
          width={{ base: '60%', sm: '100%', lg: '100%' }}
          flexDirection={{ base: 'column', sm: 'row', lg: 'row' }}
          justifyContent="center"
          gap={{ base: 2, lg: 10 }}
          marginTop={6}
          fontWeight="bold"
        >
          <Link
            href={documentoPDF}
            download="CV-Facundo.pdf"
            borderRadius="10px"
            border="0.8px solid #0dfef8"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="10px 20px"
            gap={2}
            _hover={{transform:'scale(1.1)'}}
          >
            <Icon as={FaCloudDownloadAlt} boxSize={7} color="#ea4aff" />
            <Text>CV</Text>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/facundo-aylan-582b52257/'}
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="12px"
            border="0.8px solid #0dfef8"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            padding="10px 20px"
            _hover={{transform:'scale(1.1)'}}
          >
            <Icon as={FaLinkedin} boxSize={7} color="#3b62f1" />
            <Text>LinkedIn</Text>
          </Link>

          <Link
            href={'https://github.com/FacundoAylan'}
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="12px"
            border="0.8px solid #0dfef8"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            padding="10px 20px"
            _hover={{transform:'scale(1.1)'}}
          >
            <Icon as={FaGithub} boxSize={7} color="#eb64fe" />
            <Text>Github</Text>
          </Link>
        </Flex>
      </Flex>
        </Box>
    </Box>
  );
};

export default HomePage;
