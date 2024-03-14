import { useState } from 'react';
import {
  Box,
  Text,
  Image,
  Modal,
  ModalContent,
  ModalBody,
  IconButton,
  Button,
  Icon,
  Link,
  Flex,
  Center,
  keyframes,
} from '@chakra-ui/react';
import { FaPlay, FaArrowUp, FaGithub, FaArrowDown } from 'react-icons/fa';

const animation2 = keyframes`
  from{
    transform:translateX(-200%) scale(1.5)
  }
  to{
    transform:translateX(0) scale(1)
  }
`
const animation3 = keyframes`
  from{
    transform:translateX(200%)
  }
  to{
    transform:translateX(0)
  }
`

const Cardprojects = ({ image, title, content, subtitle, right, video, github, id, animations }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openModal = (e) => {
    e.stopPropagation(); 
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation(); 
    setIsModalOpen(false);
  };

  return (
    <Box 
      width={{base:'100%', lg:'20%'} }
      display='flex' 
      justifyContent='center'
    >
      <Flex
        key={id}
        w={{ base: '65%',sm:'70%', lg: '100%' }}
        h={{ base: '40vh',sm:'43vh', lg: '50vh' }}
        backgroundColor="#07234a"
        color="white"
        fontWeight="bold"
        overflow="hidden"
        position="relative"
        textTransform='uppercase'
        flexDirection={{base:'column',sm:'row',lg:'column'}}
        animation={animations? `${animation2} 2s ease`:`${animation3} 2s ease`}
        borderRadius='8px'
        boxShadow={{lg:"0 0 10px 5px rgba(255, 255, 255, 0.5)"}}
        border='1px solid white'
        zIndex={1}
      >
        <IconButton
          icon={<FaPlay />}
          onClick={openModal}
          aria-label="Reproducir video"
          fontSize="3xl"
          position="absolute"
          top={{base:'22%',sm:'48%',lg:"45%"}}
          left={{base:'50%',sm:'22%',lg:"50%"}}
          transform="translate(-50%, -50%)"
          cursor="pointer"
          backgroundColor="transparent"
          border="none"
          color="white"
          _hover={{ backgroundColor: 'transparent' }}
        />
          <Image
            src={image}
            width={{base:'100%',sm:'70%',lg:"100%"}}
            height={{base:'100%',sm:'100%',lg:"100%"}}
            borderBottom="1px solid white"
            key={id}
            overflow="hidden"
          />
        <Flex 
          position={{lg:'absolute'}}
          flexDirection='column' 
          width='100%' 
          height='100%'
          paddingBottom={{lg:'0.1%' }}
          bg={{lg:"#081b3b"}}
          transition="transform 1s ease"
          transform={{
            lg: "translateY(81%)",
          }}
          zIndex={{lg:100}}
          _hover={{
            transform: {
              lg: "translateY(0)",
            },
            paddingBottom: {
              lg: "0"
            },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          borderTop={{lg:'2px double white'}}
        >
          <Icon 
            as={isHovered ? FaArrowDown:FaArrowUp}  
            color="white" 
            position='absolute' 
            zIndex={200}
            left={2}
            top={2}
            display={{base:'none', lg:'block'}}
          />
          <Icon 
            as={isHovered ? FaArrowDown:FaArrowUp}  
            color="white" 
            position='absolute' 
            zIndex={200}
            right={2}
            top={2}
            display={{base:'none', lg:'block'}}
          />
          <Center 
            fontSize={{ base: '0.8rem', lg: '1.3rem' }}
            color="transparent"
            bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
            backgroundClip="text"
            backgroundSize="100% 100%"
            backgroundRepeat="no-repeat"
            backgroundPosition="center bottom"
          >
            {title}
          </Center>
          <Center padding='1%' fontSize={{base:'0.6rem',lg:'0.9rem'}}>{subtitle}</Center>
          <Text fontSize={{base:'0.4rem',lg:'0.8rem'}} fontWeight={600} paddingLeft='2%'>{content}</Text>
          <Text paddingLeft='2%' fontSize={{base:'0.4rem',lg:'0.8rem'}}>skills:</Text>
          <Flex 
            justifyContent='center' 
            alignItems='center' 
            gap={{base:4,lg:6}} 
            flexWrap='wrap'
            borderBottom='4px double #ea63fe'
            borderTop='4px double #ea63fe'
            marginBottom='1%'
            padding='1%'
            width={{lg:'100%'}}
          >
            {
              right?.map((value, index)=>{
                return(
                  <Flex 
                    key={index} 
                    alignItems='center' 
                    flexDirection='column' 
                  >
                    <Image src={value.icon} boxSize={6}/>
                    <Text fontSize={{base:'0.3rem',lg:'0.7rem'}}>{value.name}</Text>
                  </Flex>
                )
              })

            }
          </Flex>
          <Link 
            href={github} 
            target="_blank" 
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Icon as={FaGithub} boxSize={8} color='#0dfcf9'/>
            <Text fontSize={{base:'0.6rem',lg:'0.7rem'}}>git-hub</Text>
          </Link>
        </Flex>
      </Flex>
        {
          isModalOpen &&
          <Box 
            position='absolute' 
            zIndex={20} 
            backgroundColor='#071f45'
            width='50%'
            height='20%'
            left='25%'
            borderRadius='12px'
            border='2px solid white'
          >
            <Button
                onClick={closeModal}
                right={2}
                position="absolute"
                color="red"
                fontWeight="bold"
                backgroundColor='transparent'
                border={0}
                _hover={{border:0, backgroundColor:'transparent'}}
              >
                X
              </Button>
            <iframe
              src={video}
              frameborder="0" 
              allow="autoplay; 
              fullscreen" allowfullscreen
              style={{ width: '100%', height: '100%',margin:0 }}
            />
          </Box>
        }
    </Box>
  );
};

export default Cardprojects;
