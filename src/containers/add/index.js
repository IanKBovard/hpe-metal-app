import React from 'react';
import { AddLayout, StyledBox, TitleText1, TitleText2, InfoText, Flower, SkullYellow, LightningPurple, GuitarGreen, SkullBlue, LightningBlue, SkullRed, LightningGreen, GuitarPurple, Eye, Swords, Bird, Heart, Anchor, ButtonRay, StyledButton } from './style'

const Add = () => {
  return (
    <AddLayout fill background="#1F2532">
      <StyledBox>
        <TitleText1 alignSelf="center">You need more metal in</TitleText1>
        <TitleText2 alignSelf="center">your life!</TitleText2>
        <InfoText alignSelf="center" margin={{ top: 'medium' }}>Just push the button to let the metal rain down!</InfoText>
        <Flower src="./img/add/flower.svg" />
        <SkullYellow src="./img/add/skull-yellow.svg" />
        <LightningPurple src="./img/add/lightning-purple.svg" />
        <GuitarGreen src="./img/add/guitar-green.svg" />
        <SkullBlue src="./img/add/skull-blue.svg" />
        <LightningBlue src="./img/add/lightning-blue.svg" />
        <SkullRed src="./img/add/skull-red.svg" />
        <LightningGreen src="./img/add/lightning-green.svg" />
        <GuitarPurple src="./img/add/guitar-purple.svg" />
{/*         <Eye src="./img/add/eye.svg" />
        <Swords src="./img/add/swords.svg" />
        <Bird src="./img/add/bird.svg" />
        <Heart src="./img/add/heart.svg" />
        <Anchor src="./img/add/anchor.svg" /> */}
        <ButtonRay alignSelf="center" src="./img/add/button-ray.svg" />
      </StyledBox>
    </AddLayout>
  );
}

export default Add;