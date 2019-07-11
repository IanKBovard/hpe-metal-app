import React from 'react';
import { Box, Text } from 'grommet';
import { HandDiv, AccentDiv, ImageDiv } from './style';

const Loading = () => {
  return (
    <Box fill direction="row-responsive">
      <Box basis="1/3">TEXT GOES HERE!</Box>
      <ImageDiv basis="2/3">
        <AccentDiv src="./img/loading/metal-red.svg"/>
        <AccentDiv src="./img/loading/metal-pink.svg"/>
        <HandDiv src="./img/loading/metal-hand.svg"/>
        <AccentDiv src="./img/loading/metal-yellow.svg"/>
      </ImageDiv>
    </Box>
  );
}

export default Loading;