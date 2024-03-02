import React, { useRef, useState } from 'react';
import { Box, Text, Image, Modal, ModalOverlay, ModalContent, ModalBody, IconButton, Button, ScaleFade } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa'; 
import { useInViewport } from "react-in-viewport";

const Cardprojects = ({ id, image, title, subtitle, right }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const ref = useRef(null);

    const { inViewport } = useInViewport(
        ref,
        { rootMargin: "-200px" },
        { disconnectOnLeave: false },
        {}
    );

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Box
            width={{ base: '45%', lg: '20%' }}
            height={{ base: '40vh', sm: '50vh', lg: '40vh' }}
            backgroundColor='#0b5c92'
            border='2px double white'
            borderRadius='12px'
            textAlign='center'
            color='white'
            fontWeight='bold'
            overflow='hidden'
            _hover={{ border: '4px solid #ea63fe' }}
            onClick={openModal}
            position='relative'
            ref={ref}
        >
            <ScaleFade initialScale={0.9} in={inViewport} whileHover={{ scale: 1.1 }}>
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
                    backgroundColor='transparent'
                    border='none'
                    color='red'
                    _hover={{backgroundColor:'transparent'}}
                />
                <Image
                    src={image}
                    width='100%'
                    height='60%'
                    borderBottom='1px solid white'
                    className='animation'
                    key={id}
                />
                <Text fontSize={{ base: '1rem', lg: '1.5rem' }}>{title}</Text>
                <Text>{subtitle}</Text>
                <Text>{right}</Text>
                <Modal isOpen={isModalOpen} onClose={closeModal} size="4xl">
                    <ModalOverlay />
                    <ModalContent width='100%' height='80%' overflow='hidden' position='relative'>
                        <ModalBody>
                            <Button onClick={closeModal} right={2} position='absolute' color='red' fontWeight='bold'>
                                X
                            </Button>
                            <iframe
                                width="100%"
                                height="85%"
                                src="https://www.youtube.com/watch?v=ntCZjb_AAWE&list=RDrIcZ6X0jIl4&index=8"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen

                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </ScaleFade>
        </Box>
    )
}

export default Cardprojects;
