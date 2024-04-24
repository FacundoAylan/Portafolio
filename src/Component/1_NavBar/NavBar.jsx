import { Flex, Button, Icon, Text } from '@chakra-ui/react';
import { FaHome, FaBriefcase, FaCode } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';


const NavBar = ({handleButtonClick}) => {
  return (
    <Flex 
      width='100%' 
      height='100%' 
      justifyContent={{base:'center',sm:'flex-end',lg:'flex-end'}} 
      gap={{lg:'1'}} 
      backgroundColor={{base:'#08244c',sm:'#082046',lg:'#082046'}}
      borderBottom={{base:'none',lg:'2px double #ea63fe'}}
    >
        <Button 
          backgroundColor='transparent' 
          color='#ea63fe'
          fontWeight='900'
          textTransform='uppercase'
          _hover={{color:'#0dfcf7'}}
          onClick={() => handleButtonClick('home')}
        >
          <Icon as={FaHome} boxSize={8} color='#e32451' display={{base:'block', sm:'none', lg:'none'}}/>
          <Text display={{base:'none', sm:'block', lg:'block'}} fontFamily='title'letterSpacing='2px'>Inicio</Text>
        </Button>
        <Button 
          backgroundColor='transparent' 
          color='#ea63fe'
          fontWeight='800'
          textTransform='uppercase'
          _hover={{color:'#0dfcf7'}}
          onClick={() => handleButtonClick('about')}
        >
          <Icon as={MdPerson} boxSize={8} color='#e32451' display={{base:'block', sm:'none', lg:'none'}}/>
          <Text display={{base:'none', sm:'block', lg:'block'}} fontFamily='title'letterSpacing='2px'>Sobre mi</Text>
        </Button>
        <Button
          backgroundColor='transparent' 
          color='#ea63fe'
          fontWeight='800'
          textTransform='uppercase'
          _hover={{color:'#0dfcf7'}}
          onClick={() => handleButtonClick('skills')}
        >
          <Icon as={FaCode} boxSize={8} color='#e32451' display={{base:'block', sm:'none', lg:'none'}}/>
          <Text display={{base:'none', sm:'block', lg:'block'}} fontFamily='title'letterSpacing='2px'>Skills</Text>
        </Button>

        <Button
            backgroundColor='transparent' 
            color='#ea63fe'
            fontWeight='800'
            textTransform='uppercase'
            _hover={{color:'#0dfcf7'}}
            onClick={() => handleButtonClick('projects')}
        >
            <Icon as={FaBriefcase} boxSize={8} color='#e32451' display={{base:'block',sm:'none', lg:'none'}}/>
            <Text display={{base:'none', sm:'block', lg:'block'}} fontFamily='title'letterSpacing='2px'>Proyectos</Text>
        </Button>
    </Flex>
  );
};

export default NavBar;
