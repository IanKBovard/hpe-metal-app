import React from 'react';
import {Box} from 'grommet';

import SVG from '../../components/svg/index';
import {
  SignupLayout,
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
    <SignupLayout fill background="#1F2532">
      <StyledBox>
      <Box>
        <TitleText1>You need more metal in</TitleText1>
        <TitleText2>your life!</TitleText2>
        <InfoText margin={{ top: 'medium' }}>
          Just push the button to let the metal rain down!
        </InfoText>
      </Box>
        {svgNames.map(name => (
          <SVG name={name} />
        ))}
        <Box>
          <SVG name="button accent" />
        </Box>
      </StyledBox>
    </SignupLayout>
  );
};

export default Signup;
