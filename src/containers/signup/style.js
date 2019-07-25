import styled from 'styled-components';
import { Box, Text, Heading, Anchor, TextInput, Button } from 'grommet';

export const Layout = styled(Box)`
  position: relative;
  padding-top: 56.25%;
`;

export const TitleText = styled(Heading)`
  font-size: 6vw;
  font-weight: 900;
  line-height: 0.8em;
  margin: 0px;
`;

export const InfoText = styled(Text)`
  font-size: 2.5vw;
  font-weight: 200;
  line-height: 0.9em;
`;

export const LegalText = styled(Text)`
  font-size: 1.5vw;
  font-weight: 200;
  line-height: 0.9em;
`;

export const CircleAnchor = styled(Anchor)`
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #9060eb;
  border-radius: 50%;
  width: 5.5%;
  height: 9.5%;
`;

export const TextContainer = styled(Box)`
  position: absolute;
  z-index: 100;
  top: 20%;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Input = styled(TextInput)`
  border: 2px solid #CCCCCC;
  border-radius: 4px;
  height: 55px;
`

export const InputCard = styled(TextInput)`
  border: 2px solid #CCCCCC;
  border-radius: 4px;
  height: 55px;
  text-align: center;
`

export const SubmitButton = styled(Button)`
  border-radius: 50px;
`