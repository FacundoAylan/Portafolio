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
  Center
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Cardprojects = ({ image, title, content, subtitle, right, video, github, id }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(right)
  return (
    <Flex
      key={id}
      w={{ base: '65%',sm:'70%', lg: '70%' }}
      h={{ base: '40vh',sm:'43vh', lg: 'auto' }}
      backgroundColor="#07234a"
      border= '4px solid #ea63fe'
      color="white"
      fontWeight="bold"
      overflow="hidden"
      position="relative"
      borderRadius={{base:'8px',lg:'18px'}}
      textTransform='uppercase'
      flexDirection={{base:'column',sm:'row',lg:'row'}}
    >
      <IconButton
        icon={<FaPlay />}
        onClick={openModal}
        aria-label="Reproducir video"
        fontSize="3xl"
        position="absolute"
        top={{base:'22%',sm:'48%',lg:"48%"}}
        left={{base:'50%',sm:'22%',lg:"22%"}}
        transform="translate(-50%, -50%)"
        cursor="pointer"
        backgroundColor="transparent"
        border="none"
        color="red"
        _hover={{ backgroundColor: 'transparent' }}
      />
        <Image
          src={image}
          width={{base:'100%',sm:'70%',lg:"70%"}}
          height={{base:'100%',sm:'100%',lg:"37vh"}}
          borderBottom="1px solid white"
          key={id}
          overflow="hidden"
        />
      <Flex flexDirection='column' width='100%' paddingBottom='1%'>
        <Center 
          fontSize={{ base: '0.8rem', lg: '1.5rem' }}
          color="transparent"
          bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
          backgroundClip="text"
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
          backgroundPosition="center bottom"
        >{title}</Center>
        <Center padding='1%' fontSize={{base:'0.6rem',lg:'0.9rem'}}>{subtitle}</Center>
        <Text fontSize={{base:'0.4rem',lg:'0.8rem'}} fontWeight={600} paddingLeft='2%'>{content}</Text>
        <Text paddingLeft='2%' fontSize={{base:'0.4rem',lg:'0.8rem'}}>skills:</Text>
        <Flex 
          justifyContent='center' 
          alignItems='center' 
          gap={{base:4,lg:6}} 
          flexWrap='nowrap'
          borderBottom='4px double #ea63fe'
          borderTop='4px double #ea63fe'
          marginBottom='1%'
          padding='1%'
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
      <Modal isOpen={isModalOpen} onClose={closeModal} size="4xl">
        <ModalContent
          width="100%"
          height="80%"
          overflow="hidden"
          position="relative"
          padding={0}
        >
          <ModalBody padding={0} margin={0} backgroundColor='#071f45'>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Cardprojects;
