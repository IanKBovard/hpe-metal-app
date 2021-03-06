import React from 'react';
import { Anchor } from 'grommet';

import SVG from '../../components/svg/index';
import { TitleText, InfoText, TextContainer, Layout } from './style';

const svgNames = ['Red-Accent', 'Pink-Accent', 'Hand', 'Yellow-Accent'];

const Loading = () => {
  return (
    <Layout fill background="#1F2532">
      <TextContainer margin="medium">
        <TitleText>Get ready for</TitleText>
        <TitleText>something</TitleText>
        <TitleText>wicked</TitleText>
        <InfoText margin={{ top: 'small' }}>
          Taking you to your server! Can't wait? No
        </InfoText>
        <InfoText>
          prob, take me to <Anchor href="/signup" label="my portal" />.
        </InfoText>
      </TextContainer>
      {svgNames.map((name, index) => (
        <SVG key={index} name={name} />
      ))}
    </Layout>
  );
};

export default Loading;
