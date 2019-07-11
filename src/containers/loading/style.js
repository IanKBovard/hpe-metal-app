import styled from 'styled-components';
import { Box, Image, Text, Heading } from 'grommet';

export const HandDiv = styled(Image)`
  position:absolute;
  width: 30%;
  height: auto;
  right: 37%;  
  bottom: 0;
`;

export const AccentDiv = styled(Image)`
  position:absolute;
  width: 100%;
  height: auto;
  right: 0;  
  bottom: 0;
`;

export const AccentDivPink = styled(Image)`
  position:absolute;
  width: 100%;
  height: auto;
  right: 0;
  bottom: 0;
  mix-blend-mode: overlay;
`;

export const ImageDiv = styled(Box)`
  position: relative;
  padding-top: 56.25%;
`;

export const TitleText = styled(Heading)`
  font-size: 7vw;
  font-weight: 900;
  line-height: .8em;
  margin: 0px;
`;

export const InfoText = styled(Text)`
  font-size: 2.5vw;
  font-weight: 200;
  line-height: .8em;
`;

export const TextDiv = styled(Box)`
  white-space: nowrap;
`;