import styled from 'styled-components';
import { Box, Text, Heading, Anchor, TextInput, Button } from 'grommet';

export const Layout = styled(Box)`
  position: relative;
  max-height: 640px;
  max-width: 360px;
  min-height: 568px;
  min-width: 320px;
`;

export const TitleText = styled(Heading)`
  font-size: 8vw;
  font-weight: 900;
  line-height: 0.8em;
  margin: 0px;
`;

export const InfoText = styled(Text)`
  font-size: 4vw;
  font-weight: 200;
  line-height: 0.9em;
`;

export const LegalText = styled(Text)`
  font-size: 1vw;
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
  z-index: 100;
  text-align: center;
`;

export const Input = styled(TextInput)`
  border: 2px solid #cccccc;
  border-radius: 4px;
  height: 55px;
`;

export const InputCard = styled(TextInput)`
  border: 2px solid #cccccc;
  border-radius: 4px;
  height: 55px;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  border-radius: 50px;
`;
