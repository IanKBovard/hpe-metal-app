import React from 'react';
import { Anchor, Box } from 'grommet';

import SVG from '../../components/svg/index';
import {
  TitleText,
  InfoText,
  TextContainer,
  Layout,
} from './style';

const svgNames = ['Red-Accent', 'Pink-Accent', 'Hand', 'Yellow-Accent'];

const Loading = () => {
  return (
    <Layout fill background="#1F2532">
    <TextContainer>
      <TitleText>Get ready for</TitleText>
      <TitleText>something</TitleText>
      <TitleText>wicked</TitleText>
      <InfoText>Taking you to your server! Can't wait? No</InfoText>
      <InfoText>
        prob, take me to <Anchor label="my portal" />.
      </InfoText>
    </TextContainer>
        {svgNames.map(name => (
          <SVG name={name} />
        ))}
    </Layout>
  );
};

export default Loading;
