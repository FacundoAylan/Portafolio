import React from 'react';
import {
    Box,
    Button,
    Flex,
    Icon,
    Link,
    Text,
    Wrap,
    WrapItem,
    keyframes,
} from '@chakra-ui/react';
import {
    FaDesktop,
    FaMicrochip,
    FaLinux,
    FaMusic,
    FaVideo,
    FaKeyboard,
} from 'react-icons/fa';

const animation = keyframes`
  from {
    transform:translateY(-100%)
  }
  to {
    transform:translateY(0)
  }
`;
const animation2 = keyframes`
  0%{
    transform:translateX(-100%)
  }
  100%{
    transfotm:traslateX(0)
  }
`;
const animation3 = keyframes`
0%{
  transform:translateX(100%)
}
100%{
  transfotm:traslateX(0)
}
`;
const animation4 = keyframes`
0%{
  transform:translateY(150%)
}
100%{
  transfotm:traslateY(0)
}
`;

const About = () => {
    return (
        <Wrap
            width="100%"
            height="100%"
            paddingTop={{ base: '0', lg: '4%' }}
            position="relative"
            overflow="hidden"
            direction="row"
            paddingLeft="20px"
            paddingRight="20px"
            alignItems="center"
        >
            <Text
                width="100%"
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={{ base: '25px', lg: '36px' }}
                animation={{
                    lg: `${animation} 1s ease`,
                }}
            >
                Sobre mi
            </Text>
            <WrapItem>
                <Text
                    fontWeight="bold"
                    marginTop="2%"
                    fontSize={{ base: '0.8rem', lg: '1.1rem' }}
                    color="white"
                    animation={{
                        lg: `${animation} 1s ease`,
                    }}
                >
                    ¡Hola! Soy Facundo, estudiante de Analista en Sistemas en la UBA y
                    Full Stack Developer. Me apasiona el diseño web y me encanta aprender
                    nuevas tecnologías. Además, tengo un gran interés en la electrónica y
                    la reparación de computadoras. Estoy emocionado por seguir creciendo
                    profesionalmente y encontrar nuevas formas de fusionar mi pasión por
                    el diseño y la tecnología. ¡Gracias por visitar mi portafolio! Siempre
                    estoy abierto a nuevas oportunidades y colaboraciones, así que no
                    dudes en ponerte en contacto conmigo.
                </Text>
            </WrapItem>
            <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection={{ base: 'column', lg: 'row' }}
                marginTop="3%"
                marginLeft={{ lg: '30vh', sm: '10vh' }}
            >
                <Box
                    width={{ base: '100%', lg: '50%' }}
                    color="white"
                    //display={{ base: 'none', lg: 'block' }}
                    flexDirection="column"
                    animation={{
                        lg: `${animation2} 1s ease`,
                    }}
                    paddingRight="20px"
                >
                    <Text
                        fontSize={{ base: '20px', lg: '36px' }}
                        fontWeight="bold"
                        color="transparent"
                        bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
                        backgroundClip="text"
                        backgroundSize="100% 100%"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center bottom"
                    >
                        Datos Personales
                    </Text>
                    <Text
                        textTransform="uppercase"
                        fontWeight="bold"
                        marginLeft="1%"
                        marginTop="1%"
                    >
                        Telefono: +54 1136747801
                    </Text>
                    <Text
                        textTransform="uppercase"
                        fontWeight="bold"
                        marginLeft="1%"
                        marginTop="1%"
                    >
                        Ubicacion: Recoleta CABA
                    </Text>
                    <Text fontWeight="bold" marginLeft="1%" marginTop="1%">
                        CORREO: facundoaylan3@gmail.com
                    </Text>
                </Box>
                <Box
                    width={{ base: '100%', lg: '90%' }}
                    color="white"
                    border="4px solid #810194"
                    borderRadius="12px"
                    backgroundColor="#0c203b"
                    animation={{
                        lg: `${animation3} 1s ease`,
                    }}
                >
                    <Text
                        fontSize={{ base: '20px', lg: '36px' }}
                        fontWeight="bold"
                        textAlign="center"
                        color="transparent"
                        bgImage="linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
                        backgroundClip="text"
                        backgroundSize="100% 100%"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center bottom"
                    >
                        Intereses
                    </Text>
                    <Flex
                        width="100%"
                        overflow="hidden"
                        flexWrap="wrap"
                        fontWeight="bold"
                        textAlign="center"
                        marginBottom="2%"
                        color="black"
                    >
                        <Box
                            border="2px solid #b601d1"
                            borderRadius="8px"
                            padding="1%"
                            marginLeft="2%"
                            backgroundColor="#ea63fe"
                        >
                            <Icon width="100px" height="100px" as={FaDesktop} />
                            <Text>Computadoras</Text>
                        </Box>
                        <Box
                            border="2px solid #b601d1"
                            borderRadius="8px"
                            padding="1%"
                            marginLeft="2%"
                            backgroundColor="#ea63fe"
                            color="black"
                        >
                            <Icon width="100px" height="100px" as={FaMicrochip} />
                            <Text>Electronica</Text>
                        </Box>
                        <Box
                            border="2px solid #b601d1"
                            borderRadius="8px"
                            padding="1%"
                            marginLeft="2%"
                            backgroundColor="#ea63fe"
                            color="black"
                        >
                            <Icon width="100px" height="100px" as={FaLinux} />
                            <Text>Linux</Text>
                        </Box>
                        <Box
                            border="2px solid #b601d1"
                            borderRadius="8px"
                            padding="1%"
                            marginLeft="2%"
                            backgroundColor="#ea63fe"
                            color="black"
                        >
                            <Icon width="100px" height="100px" as={FaMusic} />
                            <Text>Musica</Text>
                        </Box>
                        <Box
                            border="2px solid #b601d1"
                            borderRadius="8px"
                            padding="1%"
                            marginLeft="2%"
                            backgroundColor="#ea63fe"
                            color="black"
                        >
                            <Icon width="100px" height="100px" as={FaVideo} />
                            <Text>Peliculas</Text>
                        </Box>
                        <Box
                            border="2px solid #b601d1"
                            borderRadius="8px"
                            padding="1%"
                            marginLeft="2%"
                            backgroundColor="#ea63fe"
                            color="black"
                        >
                            <Icon width="100px" height="100px" as={FaKeyboard} />
                            <Text>Programar</Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Button
                position="absolute"
                marginBottom="60px"
                bottom={{ base: '10%', lg: '2%' }}
                left={{ base: '35%', lg: '45%' }}
                backgroundColor="#62aeef"
                textDecoration="none"
                _hover={{ transform: 'scale(1.1)' }}
                animation={{
                    lg: `${animation4} 1s ease`,
                }}
            >
                <Link download="Facundo_Aylan.pdf" href="./cv.pdf">
                    Descargar cv
                </Link>
            </Button>
        </Wrap>
    );
};

export default About;
