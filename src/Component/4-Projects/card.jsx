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
  Link
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Cardprojects = ({ image, title, subtitle, right, video, github, id }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      key={id}
      w={{ base: '35%', lg: '20%' }}
      h={{ base: '30vh',sm:'45vh', lg: '50vh' }}
      backgroundColor="#07234a"
      border="4px double white"
      textAlign="center"
      color="white"
      fontWeight="bold"
      overflow="hidden"
      _hover={{ border: '4px solid #ea63fe', transform:'scale(1.1)' }}
      position="relative"
      borderRadius='8px'
      textTransform='uppercase'
    >
      <IconButton
        icon={<FaPlay />}
        onClick={openModal}
        aria-label="Reproducir video"
        fontSize="3xl"
        position="absolute"
        top="30%"
        left="50%"
        transform="translate(-50%, -50%)"
        cursor="pointer"
        backgroundColor="transparent"
        border="none"
        color="red"
        _hover={{ backgroundColor: 'transparent' }}
      />
      <Image
        src={image}
        width="100%"
        height={{base:'15vh',sm:'19vh',lg:"25vh"}}
        borderBottom="1px solid white"
        key={id}
        overflow="hidden"
      />
      <Text fontSize={{ base: '0.8rem', lg: '1.5rem' }}
        color="transparent"
        bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
        backgroundClip="text"
        backgroundSize="100% 100%"
        backgroundRepeat="no-repeat"
        backgroundPosition="center bottom"
      >{title}</Text>
      <Text padding='1%' fontSize={{base:'0.6rem',lg:'0.9rem'}}>{subtitle}</Text>
      <Text fontSize={{base:'0.6rem',lg:'0.9rem'}}>{right}</Text>
      <Link 
        href={github} 
        target="_blank" 
      >
        <Icon as={FaGithub} boxSize={8} color='#0dfcf9'/>
      </Link>
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
    </Box>
  );
};

export default Cardprojects;
