import styled from 'styled-components';
import { Box, Text, Heading } from 'grommet';

export const Layout = styled(Box)`
  position: relative;
  min-height: 320px;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    min-height: 900px;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 56.25%;
  }
`;

export const TitleText = styled(Heading)`
  font-size: 12vw;
  font-weight: 900;
  line-height: 0.8em;
  margin: 0px;
  @media only screen and (min-width: 1024px) {
    font-size: 8vw;
  }
`;

export const InfoText = styled(Text)`
  font-size: 4vw;
  font-weight: 200;
  line-height: 0.8em;
  @media only screen and (min-width: 1024px) {
    font-size: 2.5vw;
  }
`;

export const TextContainer = styled(Box)`
  z-index: 100;
  top: 5%;
  position: absolute;
  align-self: center;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    top: 15%;
    align-self: auto;
    align-items: start;
  }
`;
