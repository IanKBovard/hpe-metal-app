import React from 'react';
import { Box, Anchor } from 'grommet';
import { Hand, Accent, StyledBox, AccentPink, TitleText1, TitleText2, TitleText3, InfoText1, InfoText2, HomeLayout } from './style';

const Loading = () => {
  return (
    <HomeLayout fill background="#1F2532">
    <StyledBox>
      <TitleText1>Get ready for</TitleText1>
      <TitleText2>something</TitleText2>
      <TitleText3>wicked</TitleText3>
      <InfoText1>Taking you to your server! Can't wait? No</InfoText1>
      <InfoText2>prob, take me to <Anchor label="my portal"/>.</InfoText2>
        <Accent src="./img/loading/metal-red.svg"/>
        <AccentPink src="./img/loading/metal-pink.svg"/>
        <Hand src="./img/loading/metal-hand.svg"/>
        <Accent src="./img/loading/metal-yellow.svg"/>
      </StyledBox>
    </HomeLayout>
  );
}

export default Loading;