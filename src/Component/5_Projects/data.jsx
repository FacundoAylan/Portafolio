import imagen1 from './image/image_1.png';
import imagen2 from './image/image_2.png';
import imagen3 from './image/image_3.png';
import imagen4 from './image/image_4.png';
import imagen5 from './image/image_5.png';
import imagen6 from './image/image_6.png';
import imagen7 from './image/image_7.png';
import css from '../4_Skills/skills_image/css.svg';
import react from '../4_Skills/skills_image/react.svg';
import redux from '../4_Skills/skills_image/redux.svg';
import chakraui from '../4_Skills/skills_image/chakraui.svg';
import node from '../4_Skills/skills_image/node.svg';
import express from '../4_Skills/skills_image/express.svg';
import postgres from '../4_Skills/skills_image/postgres.svg';
import python from '../4_Skills/skills_image/python.svg'
import firebase from '../4_Skills/skills_image/firebase.svg';
import tailwind from '../4_Skills/skills_image/tailwindcss.svg';
import next from '../4_Skills/skills_image/next-js.svg';

export const slides = [
  {
    image: imagen4,
    title: 'Cursort',
    subtitle: 'FullStack',
    content: `Es una app en la cual estoy trabajando aun .`,
    rightSubtitle: [
      {name:'Next js',icon:next},
      {name:'tailwind css', icon:tailwind},
    ],
    github:'https://github.com/FacundoAylan/CurSort',
    video:'https://player.vimeo.com/video/940176559?h=4325dfd2bc'
  },
  {
    image: imagen7,
    title: 'Harmoni wisch',
    subtitle: 'Fullstack',
    content: `Aplición web para el manejo de reserva de lavaderos de auto`,
    rightSubtitle: [
      {name:'React js',icon:react}, 
      {name:'chakra ui', icon:chakraui},
      {name:'Python',icon:python},
      {name:'firebase', icon:firebase}
    ],
    github:'https://github.com/FacundoAylan/lavadero',
    video:'https://player.vimeo.com/video/919405266?h=c46cdc3062'
  },
  {
    image: imagen6,
    title: 'Mind my emotion',
    subtitle: 'FontEnd',
    content: `Aplición movil de ayuda psicológica pensado para niños y jovenes`,
    rightSubtitle: [
      {name:'React Native',icon:react}, 
      {name:'Python',icon:python},
      {name:'firebase', icon:firebase}
    ],
    github:'https://github.com/FacundoAylan/mindMyEmotions',
    video:'https://player.vimeo.com/video/918885871?h=f12eefdd28'
  },
  {
    image: imagen3,
    title: 'Weather',
    subtitle: 'FrontEnd',
    content: `Aplición web  en las cual vas a poder consultar el clima de tu cuidad`,
    rightSubtitle: [{name:'React js',icon:react},{name:'css', icon:css}],
    github:'https://github.com/FacundoAylan/weather',
    video:'https://player.vimeo.com/video/918882766?h=66465acb78'
  },
  // {
  //   image: imagen2,
  //   title: 'Padel club',
  //   subtitle: 'Full-Stack',
  //   rightSubtitle: 'React Native',
  //   github:'https://github.com/FacundoAylan/dashboard',
  //   video:''
  // },
  {
    image: imagen5,
    title: 'Videogamer',
    subtitle: 'FullStack',
    content: `Aplición web, donde podras ver informacion de tus juegos`,
    rightSubtitle: [{name:'React js',icon:react},{name:'redux',icon:redux}, {name:'node js',icon:node},{name:'postgres', icon:postgres}],
    github:'https://github.com/FacundoAylan/VideoGamerPi',
    video:''
  },

];
