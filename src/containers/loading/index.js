import React from 'react';
import { Box, Text } from 'grommet';
import { ImageDiv } from './style';

const Loading = () => {
  return (
    <Box fill direction="row-responsive">
      <Box basis="1/3">TEXT GOES HERE!</Box>
      <Box basis="2/3" justify="end" align="center">
        <ImageDiv  width="large" height="xxlarge" background="url(./img/loading/metal-hand.svg)"/>
      </Box>
    </Box>
  );
}

export default Loading;