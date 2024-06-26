import React from 'react';
import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Text,
  keyframes,
} from '@chakra-ui/react';
import {
  FaDesktop,
  FaMicrochip,
  FaGamepad,
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
    <Box
      width="100%"
      height='100%'
      paddingTop={{ base: '0',sm:'3%', lg: '4%' }}
      position="relative"
      overflow="hidden"
    >
      <Box
        width="100%"
        height="100%"
        filter="drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5))"
        position="relative"
        display="inline-block"
      >
        <Text
          letterSpacing='4px'
          fontFamily='title'
          color='#ea63fe'
          width="100%"
          textAlign="center"
          fontWeight="bold"
          fontSize={{ base: '25px', lg: '36px' }}
          animation={{
            lg: `${animation} 1s ease`,
          }}
        >
          SOBRE MI
        </Text>
        <Text
          fontWeight="bold"
          marginTop="2%"
          paddingLeft='2%'
          paddingRight='2%'
          fontSize={{ base: '0.8rem', lg: '1.2rem' }}
          color="white"
          animation={{
            lg: `${animation} 1s ease`,
          }}
          textAlign= 'justify'
          fontFamily='description'
          letterSpacing='3px'
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
        <Flex marginTop="3%" flexDirection={{ base: 'column', lg: 'row' }} >
          <Box
            width={{ base: '100%', lg: '50%' }}
            color="white"
            display={{ base: 'none', lg: 'block' }}
            paddingLeft='2%'
            animation={{
              lg: `${animation2} 1s ease`,
            }}
          >
            <Text
              fontSize={{ base: '10px', lg: '20px' }}
              fontWeight="bold"
              letterSpacing='4px'
              fontFamily='title'
              color='#ea63fe'
              textTransform='uppercase'
            >
              Datos Personales
            </Text>
            <Text
              textTransform="uppercase"
              fontWeight="bold"
              marginLeft="1%"
              marginTop="1%"
              fontFamily='description'
              letterSpacing='3px'
            >
              Cumpleaños: 20/02/2000
            </Text>
            <Text
              textTransform="uppercase"
              fontWeight="bold"
              marginLeft="1%"
              marginTop="1%"
              fontFamily='description'
              letterSpacing='3px'
            >
              Telefono: +54 1136747801
            </Text>
            <Text
              textTransform="uppercase"
              fontWeight="bold"
              marginLeft="1%"
              marginTop="1%"
              fontFamily='description'
              letterSpacing='3px'
            >
              Ubicacion: Recoleta capital federal
            </Text>
            <Text fontWeight="bold" marginLeft="1%" marginTop="1%" fontFamily='description'
              letterSpacing='3px'>
              CORREO: facundoaylan3@gmail.com
            </Text>
          </Box>
          <Box
            width={{ base: '100%', lg: '62%' }}
            color="white"
            borderRadius="12px"
            animation={{
              lg: `${animation3} 1s ease`,
            }}
            paddingLeft={{base:'4%', sm:'1%', lg:'0'}}
          >
            <Text
              fontSize={{ base: '20px', lg: '20px' }}
              fontWeight="bold"
              textAlign="center"
              letterSpacing='4px'
              fontFamily='title'
              color='#ea63fe'
              textTransform='uppercase'
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
            >
              <Box
                borderRight="6px solid #07e2c5"
                borderTop="6px solid #07e2c5"
                borderLeft='6px solid #07e2c5'
                borderBottom='6px solid #07e2c5'
                boxShadow="inset 0 0 65px 5px #08e4c4"
              >
                <Icon width="100px" height="100px" as={FaDesktop} color='#f5f5dc'/>
                <Text fontFamily='description'letterSpacing='2px'>Computadoras</Text>
              </Box>
              <Box
                borderBottom="6px solid #07e2c5"
                borderTop='6px solid #07e2c5'
                borderRight='6px solid #07e2c5'
                boxShadow="inset 0 0 65px 5px #08e4c4"
                padding="1%"
              >
                <Icon
                  width="100px"
                  height="100px"
                  as={FaMicrochip}
                  color='#f5f5dc'
                />
                <Text fontFamily='description'letterSpacing='2px'>Electronica</Text>
              </Box>
              <Box
                borderRight="6px solid #ea63fe"
                borderTop="6px solid #ea63fe"
                borderBottom='6px solid #ea63fe'
                boxShadow="inset 0 0 65px 5px #ea63fe"
                padding="1%"
              >
                <Icon width="100px" height="100px" as={FaGamepad} color=''/>
                <Text fontFamily='description'letterSpacing='2px'>Videojuegos</Text>
              </Box>
              <Box
                borderRight="6px solid #07e2c5"
                borderBottom="6px solid #ea63fe"
                borderTop='6px solid #ea63fe'
                boxShadow="inset 0 0 65px 5px #ea63fe"
                padding="1%"
              >
                <Icon
                  width="100px"
                  height="100px"
                  as={FaMusic}
                />
                <Text fontFamily='description'letterSpacing='2px'>Musica</Text>
              </Box>
              <Box
                borderBottom="6px solid #07e2c5"
                borderTop='6px solid #07e2c5'
                borderRight='6px solid #07e2c5'
                boxShadow="inset 0 0 65px 5px #08e4c4"
                padding="1%"
              >
                <Icon
                  width="100px"
                  height="100px"
                  as={FaVideo}
                  color='white'
                />
                <Text fontFamily='description'letterSpacing='2px'>Peliculas</Text>
              </Box>
              <Box
                borderBottom="6px solid #07e2c5"
                borderTop='6px solid #07e2c5'
                borderRight='6px solid #07e2c5'
                boxShadow="inset 0 0 65px 5px #08e4c4"
                padding="1%"
              >
                <Icon width="100px" height="100px" as={FaKeyboard} color='#f5f5dc'/>
                <Text fontFamily='description'letterSpacing='2px'>Programar</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Button
          position="absolute"
          bottom={{ base: '10%',sm:'1%', lg: '2%' }}
          left={{ base: '35%',sm:'40%', lg: '45%' }}
          backgroundColor="#082046"
          textDecoration="none"
          borderColor='#ea63fe'
          borderWidth='3px'
          _hover={{ transform: 'scale(1.1)' }}
          animation={{
            lg: `${animation4} 1s ease`,
          }}
        >
          <Link
           href='https://firebasestorage.googleapis.com/v0/b/padel-1d48a.appspot.com/o/CVFacundo%20Aylan.pdf?alt=media&token=f8e2bd83-af19-4bd6-ac78-61e713180f75' 
           fontFamily='description'
           target='_blank'
           letterSpacing='3px'
           color='#ea63fe'
           fontSize='1.5rem'
           paddingTop='2%'
          >
            Ver cv
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default About;
