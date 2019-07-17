import React from 'react';
import {Box} from 'grommet';

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

const Signup = () => {
  return (
    <AddLayout fill background="#1F2532">
      <StyledBox>
      <Box align="center">
        <TitleText1>You need more metal in</TitleText1>
        <TitleText2>your life!</TitleText2>
        <InfoText margin={{ top: 'medium' }}>
          Just push the button to let the metal rain down!
        </InfoText>
      </Box>
        {svgNames.map(name => (
          <SVG name={name} />
        ))}
        <Box align="center">
          <SVG name="button accent" />
        </Box>
      </StyledBox>
    </AddLayout>
  );
};

export default Signup;
