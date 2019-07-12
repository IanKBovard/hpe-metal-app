import styled from 'styled-components';
import { Box, Image, Text, Heading } from 'grommet';

export const HomeLayout = styled(Box)`
  min-height: 700px;
  overflow: hidden;
`;

export const Hand = styled(Image)`
  position: absolute;
  width: 20%;
  height: auto;
  right: 32%;  
  bottom: 0;
`;

export const Accent = styled(Image)`
  position: absolute;
  width: 80%;
  height: auto;
  right: 0;  
  bottom: 0;
`;

export const AccentPink = styled(Image)`
  position: absolute;
  width: 80%;
  height: auto;
  right: 0;
  bottom: 0;
  mix-blend-mode: overlay;
`;

export const StyledBox = styled(Box)`
  position: relative;
  padding-top: 56.25%;
`;

export const TitleText1 = styled(Heading)`
  position: absolute;
  font-size: 7vw;
  font-weight: 900;
  line-height: .8em;
  margin: 0px;
  top: 20%;
  left: 5%;
`;

export const TitleText2 = styled(Heading)`
  position: absolute;
  font-size: 7vw;
  font-weight: 900;
  line-height: .8em;
  margin: 0px;
  top: 29%;
  left: 5%;
`;

export const TitleText3 = styled(Heading)`
  position: absolute;
  font-size: 7vw;
  font-weight: 900;
  line-height: .8em;
  margin: 0px;
  top: 38%;
  left: 5%;
`;

export const InfoText1 = styled(Text)`
  position: absolute;
  font-size: 2.5vw;
  font-weight: 200;
  line-height: .8em;
  top: 50%;
  left: 5%;
`;

export const InfoText2 = styled(Text)`
  position: absolute;
  font-size: 2.5vw;
  font-weight: 200;
  line-height: .8em;
  top: 54%;
  left: 5%;
`;