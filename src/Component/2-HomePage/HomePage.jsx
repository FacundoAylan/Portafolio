import documentoPDF from './cv.pdf';
import profile from '../../assets/image/profile.jpg'
import { FaLinkedin, FaGithub, FaCloudDownloadAlt } from 'react-icons/fa';
import { Box, Flex, Icon, Image, Link, Text, keyframes } from '@chakra-ui/react';

const animation = keyframes`
  from {
    transform: scale(0);
    rotate:-180deg
  }
  to {
    transform: scale(1);
  }
`;
const animation2 = keyframes`
  0% {
    background-image: linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f);
  }
  25%{
    background-image: linear-gradient(to right, #00a2ff, #ff00d2, #fed90f, #09f1b8);
  }
  50% {
    background-image: linear-gradient(to right, #ff00d2, #fed90f, #09f1b8, #00a2ff);
  }
  100%{
    background-image: linear-gradient(to right, #fed90f, #09f1b8, #00a2ff, #ff00d2);
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
        padding={{base:'0',sm:'0.5%',lg:'0.3%'}}
        borderRadius={{base:'0',sm:'18px',lg:'18px'}}
        width={{ base: '100%',sm:'80%', lg: '60%' }}
        height={{ base: '100%', sm: '75%', lg: '55vh' }}
        bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
        animation={`${animation} 1s ease-in-out,${animation2} 4s ease-in-out infinite`}
        border={{base:'none',sm:'2px solid #9389a3',lg:'2px solid #9389a3'}}
      >
      <Flex
        padding="2%"
        overflow="hidden"
        width='100%'
        height='100%'
        backgroundColor="#08244c"
        borderRadius={{base:'0',sm:'5% 20%',lg:"5% 40%"}}
        color="white"
        position="relative"
        flexDirection="column"
        justifyContent={{base:"start",sm:'center',lg:'center'}}
        alignItems={"center"}
        paddingTop={{base:'15%',sm:'0', lg:'0'}}
        gap={1}
      >
        <Image 
          src={profile} 
          display={{base:'block',sm:'none',lg:'none'}}
          borderRadius='100%'
          height='25%'
          border='3px double #ea63fe'
        />
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
          flexDirection='row'
          justifyContent="center"
          gap={{ base: 4,sm: 2, lg: 10 }}
          marginTop={6}
          fontWeight="bold"
        >
          <Link
            href={documentoPDF}
            download="CV-Facundo.pdf"
            borderRadius="10px"
            border={{base:'none',sm:"0.8px solid #0dfef8",lg:"0.8px solid #0dfef8"}}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection={{base:'column', sm:'row',lg:'row'}}
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
            border={{base:'none',sm:"0.8px solid #0dfef8",lg:"0.8px solid #0dfef8"}}
            display="flex"
            flexDirection={{base:'column', sm:'row',lg:'row'}}
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
            border={{base:'none',sm:"0.8px solid #0dfef8",lg:"0.8px solid #0dfef8"}}
            display="flex"
            flexDirection={{base:'column', sm:'row',lg:'row'}}
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
