import React from 'react';
import { Image } from 'grommet';
import { Layout, HeadingText, IconBox, IconClip } from './style';

const UserIcon = () => {
  return (
    <Layout direction="row">
      <IconBox direction="row" gap="10px">
        <HeadingText color="#ffffff" weight="bold">
          Megaman
        </HeadingText>
        <IconClip>
          <Image width="50px" height="50px" src="./img/test/megaman.jpg" />
        </IconClip>
      </IconBox>
    </Layout>
  );
};

export default UserIcon;
