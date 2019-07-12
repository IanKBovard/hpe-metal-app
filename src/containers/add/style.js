import styled from 'styled-components';
import { Box, Image, Text, Heading, Button } from 'grommet';

export const AddLayout = styled(Box)`
  min-height: 700px;
  overflow: hidden;
  width: 100%;
`;

export const TitleText1 = styled(Heading)`
  position: absolute;
  font-size: 6vw;
  font-weight: 900;
  line-height: .8em;
  margin: 0px;
  z-index: 100;
  white-space: nowrap;
  top: 18%;
`;

export const TitleText2 = styled(Heading)`
  position: absolute;
  font-size: 6vw;
  font-weight: 900;
  line-height: .8em;
  margin: 0px;
  z-index: 100;
  white-space: nowrap;
  top: 28%;
`;

export const InfoText = styled(Text)`
  position: absolute;
  font-size: 2.5vw;
  font-weight: 200;
  line-height: .8em;
  z-index: 100;
  white-space: nowrap;
  top: 36%;
`;

export const Flower = styled(Image)`
  position: absolute;
  width: 15%;
  height: auto;
  left: 18%;  
  top: -14%;
`;

export const SkullYellow = styled(Image)`
  position: absolute;
  width: 10%;
  height: auto;
  right: 28%;  
  top: -4%;
`;

export const LightningPurple = styled(Image)`
  position: absolute;
  width: 10%;
  height: auto;
  left: 35%;  
  top: 5%;
`;

export const GuitarGreen = styled(Image)`
  position: absolute;
  width: 20%;
  height: auto;
  left: 11%;  
  bottom: 28%;
`;

export const SkullBlue = styled(Image)`
  position: absolute;
  width: 9%;
  height: auto;
  left: 32%;  
  bottom: 20%;
`;

export const LightningBlue = styled(Image)`
  position: absolute;
  width: 10%;
  height: auto;
  right: 28%;  
  bottom: 30%;
`;

export const SkullRed = styled(Image)`
  position: absolute;
  width: 10%;
  height: auto;
  right: 16%;  
  bottom: 15%;
`;

export const LightningGreen = styled(Image)`
  position: absolute;
  width: 10%;
  height: auto;
  left: 29%;  
  bottom: -30%;
`;

export const GuitarPurple = styled(Image)`
  position: absolute;
  width: 20%;
  height: auto;
  right: 20%;  
  bottom: -42%;
`;

export const Eye = styled(Image)`
  position: absolute;
  width: 10%;
  height: auto;
  right: 33%;  
  top: 1%;
`;

export const Swords = styled(Image)`
  position: absolute;
  width: 15%;
  height: auto;
  left: 28%;  
  top: 15%;
`;

export const Bird = styled(Image)`
  position: absolute;
  width: 15%;
  height: auto;
  right: 25%;  
  top: 35%;
`;

export const Heart = styled(Image)`
  position: absolute;
  width: 15%;
  height: auto;
  left: 20%;  
  bottom: 5%;
`;

export const Anchor = styled(Image)`
  position: absolute;
  width: 15%;
  height: auto;
  right: 34%;  
  bottom: -20%;
`;

export const StyledBox = styled(Box)`
  position: relative;
  padding-top: 56.25%;
`;

export const StyledButton = styled(Button)`
  box-shadow: 0px 3px 3px 3px black;
  border-radius: 50%;
`;