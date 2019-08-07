import React from 'react';
import { Text } from 'grommet';
import MetalLogo from '../svg/MetalLogo';
import { Layout, HeadingText, LogoBox } from './style';

const Logo = () => {
  return (
    <Layout direction="row">
      <LogoBox direction="row" gap="10px">
        <MetalLogo />
        <HeadingText color="#ffffff" weight="bold">
          HPE <Text weight="normal"> Metal</Text>
        </HeadingText>
      </LogoBox>
    </Layout>
  );
};

export default Logo;
