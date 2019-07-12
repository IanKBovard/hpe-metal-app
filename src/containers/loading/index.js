import React from 'react';
import { Box, Anchor } from 'grommet';
import { HandDiv, AccentDiv, ImageDiv, AccentDivPink, TitleText, TextDiv, InfoText, HomeLayout } from './style';

const Loading = () => {
  return (
    <HomeLayout fill direction="row-responsive" background="#1F2532" pad={{ top: 'xlarge', left: 'xlarge' }}>
      <TextDiv basis="1/4" direction="column" pad={{ top: 'xlarge'}}>
        <Box>
          <TitleText>Get ready for</TitleText>
          <TitleText>something</TitleText>
          <TitleText>wicked</TitleText>
        </Box>
        <Box margin={{ top: 'large' }}>
          <InfoText>Taking you to your server! Can't wait? No</InfoText>
          <InfoText>prob, take me to <Anchor label="my portal"/>.</InfoText>
        </Box>
      </TextDiv>
      <ImageDiv basis="3/4">
        <AccentDiv src="./img/loading/metal-red.svg"/>
        <AccentDivPink src="./img/loading/metal-pink.svg"/>
        <HandDiv src="./img/loading/metal-hand.svg"/>
        <AccentDiv src="./img/loading/metal-yellow.svg"/>
      </ImageDiv>
    </HomeLayout>
  );
}

export default Loading;