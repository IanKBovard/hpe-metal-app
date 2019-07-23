import React from 'react';
import { Add } from 'grommet-icons';
import SVG from '../../components/svg/index';
import {
  Layout,
  TitleText,
  InfoText,
  TextContainer,
  StyledButton,
} from './style';

const svgNames = ['Eye', 'Swords', 'Bird', 'Heart', 'Anchor'];
const svgNamesHover = [
  'Flower',
  'Skull-Yellow',
  'Lightning-Purple',
  'Guitar-Green',
  'Skull-Blue',
  'Lightning-Blue',
  'Skull-Red',
  'Lightning-Green',
  'Guitar-Purple',
];

const Signup = () => {
  return (
    <Layout background="#1F2532">
      <TextContainer align="center" alignSelf="center">
        <TitleText>You need more metal in</TitleText>
        <TitleText>your life!</TitleText>
        <InfoText margin={{ top: 'medium' }}>
          Just push the button to let the metal rain down!
        </InfoText>
      </TextContainer>
      {svgNamesHover.map(name => (
        <SVG name={name} />
      ))}
      <SVG name="Button-Accent" />
      <StyledButton
        color="#9060EB"
        primary
        icon={<Add size="large" color="#ffffff" />}
      />
    </Layout>
  );
};

export default Signup;
