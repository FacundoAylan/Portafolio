import css from './skills_image/css.svg';
import html from './skills_image/html.svg';
import javascript from './skills_image/javascript.svg';
import react from './skills_image/react.svg';
import redux from './skills_image/redux.svg';
import chakraui from './skills_image/chakraui.svg';
import node from './skills_image/node.svg';
import express from './skills_image/express.svg';
import postgres from './skills_image/postgres.svg';
import python from './skills_image/python.svg'
import firebase from './skills_image/firebase.svg';
import git from './skills_image/git.svg';
import github from './skills_image/github.svg';
import linux from './skills_image/linux.svg';
import windows from './skills_image/windows.svg';
import skillBackground from'./skills_image/skills.png';
import { Box, Flex, Text, keyframes, ScaleFade, Image } from '@chakra-ui/react';
import CardSkills from './boxSkills';

const traslate = keyframes`
0%,100% { transform: scale(1); }
50% { transform: scale(1.1); }
`;
const animation = keyframes`
  from {
    transform:translateY(100%)
  }
  to {
    transform:translateY(0)
  }
`;
const animation2 = keyframes`
  from {
    transform:translateX(100%)
  }
  to {
    transform:translateX(0)
  }
`;
const animation3 = keyframes`
  from {
    transform:translateX(-100%)
  }
  to {
    transform:translateX(0)
  }
`;

const Skills = () => {
  const front = [
    { name: 'css', icon: css },
    { name: 'html', icon: html },
    { name: 'javascript', icon: javascript },
    { name: 'react js', icon: react },
    { name: 'redux', icon: redux },
    { name: 'react native', icon: react },
    { name: 'chakra ui', icon: chakraui },
  ];
  const back = [
    { name: 'node js', icon: node },
    { name: 'express', icon: express },
    { name: 'postgres', icon: postgres },
    {name: 'python', icon: python},
    { name: 'firebase', icon: firebase },
  ];
  const extra = [
    { name: 'git', icon: git },
    { name: 'git-hub', icon: github },
    { name: 'linux', icon: linux },
    { name: 'windows', icon: windows },
  ];

  return (
    <Box width="100%" height="100vh" overflow="hidden" position="relative">
      <Flex
        animation={`${animation} 1s ease`}
        position="absolute"
        width={{ base: '96%', sm: '98%', lg: '70%' }}
        height={{ base: '80%', sm: '86%', lg: '88%' }}
        left={{ base: '2%', sm: '1%', lg: '15%' }}
        top={{ base: '0', sm: '7%', lg: '10%' }}
        boxShadow="inset 0 0 10px 1px #0dfcf9"
        overflow="hidden"
        borderRadius={{ base: '12px', sm: '18px', lg: '18px' }}
        border="2px solid #0dfcf9"
        flexDirection="column"
        gap={{base:0,lg:3}}
        justifyContent="center"
        alignItems="center"
        padding="1%"
        backgroundColor='transparent'
      >
        <Image 
          src={skillBackground} 
          display={{base:'none',sm:'none',lg:'block'}}
          position='absolute'
          left='20%'
          bottom='-15%'
          animation={`${animation} 2s ease`}
        />
        <Box 
          width={{base:'100%',sm:'100%',lg:'35%'}}
          height='auto'
          position={{base:'none',lg:'absolute'}}
          top='4%'
          left='2%'
          borderRadius={{base:'0',lg:'8px'}}
          border={{lg:"4px solid #ab6d38"}}
          borderBottom={{base:'4px double #0dfcf9'}}
          overflow='hidden'
          padding={{lg:'4%'}}
          zIndex={100}
          backgroundColor={{lg:'#0c203b'}}
        >
          <Text
            textTransform="uppercase"
            color="#ea63fe"
            fontWeight="bold"
            fontSize={{base:'1rem',sm:'0.8rem',lg:"1rem"}}
            textAlign="center"
            animation={`${traslate} 1s ease infinite`}
          >
            Front-End
          </Text>
          <Flex
            flexWrap="wrap"
            flexDirection="row"
            width="100%"
            height="auto"
            justifyContent="center"
            animation={`${animation2} 2s ease`}
          >
            {front.map((icons, index) => {
              return (
                <CardSkills
                  key={index}
                  id={index}
                  name={icons.name}
                  icons={icons.icon}
                />
              );
            })}
          </Flex>
        </Box>
        <Box 
          width={{base:'100%',sm:'100%',lg:'40%'}}
          position={{base:'none',lg:'absolute'}}
          top='2%'
          right='2%'
          borderRadius={{base:'0',lg:'8px'}}
          border={{lg:"4px solid #ab6d38"}}
          borderBottom={{base:'4px double #0dfcf9'}}
          overflow='hidden'
          padding={{lg:'4%'}}
          backgroundColor={{lg:'#0c203b'}}
        >
          <Text
            textTransform="uppercase"
            color="#ea63fe"
            fontWeight="bold"
            fontSize={{base:'1rem',sm:'0.8rem',lg:"1rem"}}
            textAlign="center"
            animation={`${traslate} 1s ease infinite`}
          >
            Back-End
          </Text>
          <Flex
            flexDirection="row"
            width="100%"
            height="auto"
            justifyContent="center"
            padding="1%"
            animation={`${animation3} 2s ease`}
            gap={2}
          >
            {back.map((icons, index) => {
              return (
                <CardSkills key={index} name={icons.name} icons={icons.icon} />
              );
            })}
          </Flex>
        </Box>
        <Box 
          width={{base:'100%',sm:'100%',lg:'40%'}}
          position={{base:'none',lg:'absolute'}}
          top='40%'
          right='2%'
          borderRadius={{base:'0',lg:'8px'}}
          border={{lg:"4px solid #ab6d38"}}
          overflow='hidden'
          padding={{lg:'4%'}}
          backgroundColor={{lg:'#0c203b'}}
        >
          <Text
            textTransform="uppercase"
            color="#ea63fe"
            fontWeight="bold"
            fontSize={{base:'1rem',sm:'0.8rem',lg:"1rem"}}
            textAlign="center"
            animation={`${traslate} 1s ease infinite`}
          >
            Herramientas
          </Text>
          <Flex
            flexDirection="row"
            width="100%"
            height="auto"
            justifyContent="center"
            animation={`${animation} 2s ease`}
          >
            {extra.map((icons, index) => {
              return (
                <CardSkills key={index} name={icons.name} icons={icons.icon} />
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
