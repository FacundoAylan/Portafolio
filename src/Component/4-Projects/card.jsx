import { useState } from 'react';
import {
  Box,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  Button,
  AspectRatio,
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';

const Cardprojects = ({ image, title, subtitle, right, video, id }) => {

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
      h={{ base: '35vh', lg: '40vh' }}
      backgroundColor="#0b5c92"
      border="2px double white"
      borderRadius="12px"
      textAlign="center"
      color="white"
      fontWeight="bold"
      overflow="hidden"
      _hover={{ border: '4px solid #ea63fe' }}
      onClick={openModal}
      position="relative"
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
        height="25vh"
        borderBottom="1px solid white"
        key={id}
        overflow="hidden"
      />
      <Text fontSize={{ base: '1rem', lg: '1.5rem' }}>{title}</Text>
      <Text>{subtitle}</Text>
      <Text>{right}</Text>
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
