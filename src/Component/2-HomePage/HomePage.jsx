import profile from '@/assets/image/profile.jpg'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Box, Flex, Icon, Image, Link, Text, keyframes } from '@chakra-ui/react';

const animation = keyframes`
  0%{
    transform: translate(0, 100%);
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
const text = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const animation3=keyframes`
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0);
  }
`

const HomePage = () => {
  const email = 'facundoaylan3@gmail.com';
  const subject = '';
  const body = '';

  const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <Box
      width="100%"
      height="100vh"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems='center'
    >
      <Box
        padding={{base:'0',sm:'0.5%',lg:'0'}}
        borderRadius={{base:'0',sm:'18px',lg:'18px'}}
        width={{ base: '100%',sm:'80%', lg: '30%' }}
        height={{ base: '100%', sm: '75%', lg: '80vh' }}
        animation={{base:'',sm:`${animation} 1s ease-in-out,${animation2} 4s ease-in-out infinite`}}
      >
      <Flex
        overflow="hidden"
        width={{base:'100%',lg:'98%'}}
        height={{base:'100%',lg:'98%'}}
        backgroundColor={{base:'trasnparent',sm:"#08244c",lg:"#0c203b"}}
        borderRadius={{base:'0',sm:'18px',lg:"18px"}}
        color="white"
        position="relative"
        flexDirection="column"
        justifyContent='center'
        alignItems={"center"}
        paddingTop={{base:'15%',sm:'0', lg:'0'}}
        gap={1}
        margin={{lg:'1%'}}
      >
        <Image 
          src={profile} 
          display={{base:'block',sm:'none',lg:'block'}}
          borderRadius='100%'
          height={{base:'25%',lg:'40%'}}
          border='3px double #ea63fe'
        />
        <Text
          width="100%"
          textAlign="center"
          as="span"
          display="inline-block"
          fontWeight="900"
          fontSize={{ base: '2rem', lg: '2.5em' }}
          lineHeight="1.2"
          letterSpacing="2px"
          padding="1px"
          color="transparent"
          bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
          backgroundClip="text"
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
          backgroundPosition="center bottom"
          animation={`${text} 2s ease-in-out infinite`}
        >
          Facundo Aylan
        </Text>
        <Text fontWeight="bold" fontSize="1rem" textAlign="center">
          Desarrollador Full-Stack
        </Text>
        <Text fontWeight='bold'>Experto en Front-End</Text>
        <Text width='100%' fontWeight='bold'paddingLeft='6%'>Contactos:</Text>
        <Flex
          width={{ base: '60%', sm: '100%', lg: '100%' }}
          flexDirection='row'
          justifyContent="center"
          gap={{ base: 4,sm: 2, lg: 10 }}
          marginTop={1}
          fontWeight="bold"
        >
          <Link
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="100%"
            border={{base:'none',sm:"0.8px solid #0dfef8",lg:"2px solid #0dfef8"}}
            display="flex"
            flexDirection={{base:'column', sm:'row',lg:'row'}}
            alignItems="center"
            justifyContent="center"
            gap={2}
            padding="5px 10px"
            _hover={{transform:'scale(1.1)'}}
          >
            <Icon as={FaEnvelope} boxSize={7} color="#eb64fe" />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/facundo-aylan-582b52257/'}
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="100%"
            border={{base:'none',sm:"0.8px solid #0dfef8",lg:"2px solid #0dfef8"}}
            display="flex"
            flexDirection={{base:'column', sm:'row',lg:'row'}}
            alignItems="center"
            justifyContent="center"
            gap={2}
            padding="10px 10px"
            _hover={{transform:'scale(1.1)'}}
          >
            <Icon as={FaLinkedin} boxSize={7} color="#3b62f1" />
          </Link>

          <Link
            href={'https://github.com/FacundoAylan'}
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="100%"
            border={{base:'none',sm:"0.8px solid #0dfef8",lg:"2px solid #0dfef8"}}
            display="flex"
            flexDirection={{base:'column', sm:'row',lg:'row'}}
            alignItems="center"
            justifyContent="center"
            gap={2}
            padding="5px 10px"
            _hover={{transform:'scale(1.1)'}}
          >
            <Icon as={FaGithub} boxSize={7} color="#eb64fe" />
          </Link>
        </Flex>
      </Flex>
        </Box>
    </Box>
  );
};

export default HomePage;
