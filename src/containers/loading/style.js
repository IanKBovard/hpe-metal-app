import styled from 'styled-components';
import { Box, Text, Heading } from 'grommet';

export const Layout = styled(Box)`
  position: relative;
  padding-top: 56.25%;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    overflow: hidden;
  }
`;

export const TitleText = styled(Heading)`
  font-size: 7vw;
  font-weight: 900;
  line-height: 0.8em;
  margin: 0px;
`;

export const InfoText = styled(Text)`
  font-size: 2.5vw;
  font-weight: 200;
  line-height: 0.8em;
`;

export const TextContainer = styled(Box)`
  position: absolute;
  top: 20%;
`;
