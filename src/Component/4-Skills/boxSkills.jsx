import { Box, Flex, Image, Text, border, keyframes } from "@chakra-ui/react";
import React from "react";

const CardSkills = ({name, icons}) => {
  
  return (
    <Flex 
      width={{base:'20%',lg:'18%' }}
      height='13vh' 
      overflow='hidden'
      borderRadius='8px'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      padding='1%'
      border='1px solid trasparent'
      _hover={{border:'1px solid #0dfcf9'}}
      gap={2}
    >
      <Image 
        src={icons} 
        key={name}
        alt={name}
        boxSize={{base:'3rem', sm:'1.5rem', lg:'3rem'}} 
        objectFit='cover'  
      />
      <Text 
        width='100%'
        textTransform='uppercase'
        color='#0dfcf9'
        fontWeight='bold'
        fontSize={{base:'0.6rem',lg:'0.8rem'}}
        textAlign='center'
      >
        {name}
      </Text>
    </Flex>
  )
}

export default CardSkills;