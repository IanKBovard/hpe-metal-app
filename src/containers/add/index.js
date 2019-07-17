import React from 'react';

import SVG from '../../components/svg/index';
import {
  AddLayout,
  StyledBox,
  TitleText1,
  TitleText2,
  InfoText,
} from './style';

const svgNames = ['eye', 'swords', 'bird', 'heart', 'anchor'];
const svgNamesHover = [
  'flower',
  'skull yellow',
  'lightning purple',
  'guitar green',
  'skull blue',
  'lightning blue',
  'skull red',
  'lightning green',
  'guitar purple',
];

const Add = () => {
  return (
    <AddLayout fill background="#1F2532">
      <StyledBox>
        <TitleText1 alignSelf="center">You need more metal in</TitleText1>
        <TitleText2 alignSelf="center">your life!</TitleText2>
        <InfoText alignSelf="center" margin={{ top: 'medium' }}>
          Just push the button to let the metal rain down!
        </InfoText>
        {svgNames.map(name => (
          <SVG name={name} />
        ))}
        <SVG name="button accent" />
      </StyledBox>
    </AddLayout>
  );
};

export default Add;
