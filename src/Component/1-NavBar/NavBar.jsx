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
          <Text display={{base:'none', sm:'block', lg:'block'}}>Home</Text>
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
          <Text display={{base:'none', sm:'block', lg:'block'}}>Projects</Text>
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
          <Text display={{base:'none', sm:'block', lg:'block'}}>Skill</Text>
        </Button>
    </Flex>
  );
};

export default NavBar;
