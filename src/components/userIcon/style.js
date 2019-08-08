import styled from 'styled-components';
import { Box, Text } from 'grommet';

export const Layout = styled(Box)`
  padding: 32px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  z-index: 100;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeadingText = styled(Text)`
  left: 0;
  right: 0;
  margin: auto;
`;

export const IconBox = styled(Box)`
  position: relative;
`;

export const IconClip = styled(Box)`
  clip-path: circle(25px at center);
`;
