import { Box, Flex, Button, Icon, Text } from '@chakra-ui/react';
import { FaHome, FaBriefcase, FaCode } from 'react-icons/fa';


const NavBar = ({handleButtonClick}) => {
  return (
    <Flex 
      width='100%' 
      height='100%' 
      justifyContent={{base:'center',sm:'flex-end',lg:'flex-end'}} 
      gap={{lg:'2'}} 
      padding={{lg:'.5%'}}
      backgroundColor={{base:'trasparent',sm:'#082046',lg:'#082046'}}
      borderBottom={{base:'none',lg:'2px double #ea63fe'}}
    >
        <Button 
          backgroundColor='transparent' 
          color='#ea63fe'
          fontWeight='800'
          textTransform='uppercase'
          _hover={{color:'#0dfcf7'}}
          onClick={() => handleButtonClick('home')}
        >
          <Icon as={FaHome} boxSize={8} color='#e32451' display={{base:'block', sm:'none', lg:'none'}}/>
          <Text display={{base:'none', sm:'block', lg:'block'}}>Inicio</Text>
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
          <Text display={{base:'none', sm:'block', lg:'block'}}>Skills</Text>
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
            <Text display={{base:'none', sm:'block', lg:'block'}}>Proyectos</Text>
        </Button>
    </Flex>
  );
};

export default NavBar;
