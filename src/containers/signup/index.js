import React from 'react';
import {Box} from 'grommet';

import SVG from '../../components/svg/index';
import {
  Layout,
  TitleText1,
  TitleText2,
  InfoText,
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
      <TitleText1>You need more metal in</TitleText1>
      <TitleText2>your life!</TitleText2>
      <InfoText margin={{ top: 'medium' }}>
        Just push the button to let the metal rain down!
      </InfoText>
        {svgNamesHover.map(name => (
          <SVG name={name} />
        ))}
        <Box>
          <SVG name="Button-Accent" />
        </Box>
    </Layout>
  );
};

export default Signup;
