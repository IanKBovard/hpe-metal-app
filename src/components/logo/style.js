import styled from 'styled-components';
import { Box, Text } from 'grommet';

export const Layout = styled(Box)`
  padding: 32px;
  position: absolute;
  top: 0;
  left: 0;
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

export const LogoBox = styled(Box)`
  position: relative;
`;
