import React from 'react';
import { Anchor, Box } from 'grommet';

import SVG from '../../components/svg/index';
import {
  TitleText1,
  TitleText2,
  TitleText3,
  InfoText1,
  InfoText2,
  Layout,
} from './style';

const svgNames = ['red accent', 'pink accent', 'hand', 'yellow accent'];

const Loading = () => {
  return (
      <Layout background="#1F2532">
        <TitleText1>Get ready for</TitleText1>
        <TitleText2>something</TitleText2>
        <TitleText3>wicked</TitleText3>
        <InfoText1>Taking you to your server! Can't wait? No</InfoText1>
        <InfoText2>
          prob, take me to <Anchor label="my portal" />.
        </InfoText2>
        {svgNames.map(name => (
         <Box><SVG name={name} /></Box>
        ))}
      </Layout>
  );
};

export default Loading;
