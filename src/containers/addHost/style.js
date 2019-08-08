import styled from 'styled-components';
import { Box, Heading, Text } from 'grommet';

/* SVG */
export const RockinText = styled(Heading)`
  max-width: 100%;
  font-size: 7.5vw;
  font-weight: 900;
  line-height: 0.8em;
  margin: auto;
  z-index: 100;
`;
export const SVGWrapper = styled(Box)`
  width: 0%;
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    width: 55%;
  }
`;
/* Form */
export const FormWrapper = styled(Box)`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  @media only screen and (min-width: 768px) {
    width: 45%;
  }
`;

export const TitleText = styled(Heading)`
  max-width: 100%;
  font-size: 36px;
  font-weight: 900;
  line-height: 0.8em;
  margin: 0px;
`;

export const InfoText = styled(Text)`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.2em;
`;

export const LegalText = styled(Text)`
  font-size: 12px;
  font-weight: 100;
  line-height: 1.1em;
`;

export const Layout = styled(Box)`
  position: relative;
  height: 100%;
  min-height: 1024px;
`;
