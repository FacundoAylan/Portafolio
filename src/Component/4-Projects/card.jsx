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
  Flex
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

  return (
    <Flex
      key={id}
      w={{ base: '95%',sm:'70%', lg: '60%' }}
      h={{ base: '20vh',sm:'45vh', lg: '35vh' }}
      backgroundColor="#07234a"
      border= '4px solid #ea63fe'
      alignItems='center'
      textAlign="center"
      gap={4}
      color="white"
      fontWeight="bold"
      overflow="hidden"
      position="relative"
      borderRadius='18px'
      textTransform='uppercase'
      paddingLeft={4}
    >
      <IconButton
        icon={<FaPlay />}
        onClick={openModal}
        aria-label="Reproducir video"
        fontSize="3xl"
        position="absolute"
        top="48%"
        left={{base:'22%',sm:'17%',lg:"22%"}}
        transform="translate(-50%, -50%)"
        cursor="pointer"
        backgroundColor="transparent"
        border="none"
        color="red"
        _hover={{ backgroundColor: 'transparent' }}
      />
        <Image
          src={image}
          width={{base:'60%',sm:'40%',lg:"40%"}}
          height={{base:'15vh',sm:'30vh',lg:"25vh"}}
          borderBottom="1px solid white"
          borderRadius='8px'
          key={id}
          overflow="hidden"
        />
      <Flex flexDirection='column'>
        <Text fontSize={{ base: '0.8rem', lg: '1.5rem' }}
          color="transparent"
          bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
          backgroundClip="text"
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
          backgroundPosition="center bottom"
        >{title}</Text>
        <Text padding='1%' fontSize={{base:'0.6rem',lg:'0.9rem'}}>{subtitle}</Text>
        <Text fontSize='0.8rem' fontWeight={200}>{content}</Text>
        <Text fontSize={{base:'0.6rem',lg:'0.9rem'}}>{right}</Text>
        <Link 
          href={github} 
          target="_blank" 
        >
          <Icon as={FaGithub} boxSize={8} color='#0dfcf9'/>
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
