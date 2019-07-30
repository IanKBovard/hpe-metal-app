import styled from 'styled-components';
import { Box, Text, Heading, TextInput, Button } from 'grommet';
import { Add, Info } from 'grommet-icons';

export const Layout = styled(Box)`
  position: relative;
  max-height: 640px;
  min-height: 640px;
  max-width: 360px;
  min-width: 360px;
  @media only screen and (min-width: 768px) {
    max-width: 1024px;
    min-width: 1024px;
    max-height: 1024px;
    min-height: 1024px;
  }
`;

export const TitleText = styled(Heading)`
  font-size: 26px;
  font-weight: 900;
  line-height: 0.8em;
  margin: 0px;
  @media only screen and (min-width: 768px) {
    font-size: 78px;
  }
`;

export const InfoText = styled(Text)`
  font-size: 14px;
  font-weight: 200;
  line-height: 0.9em;
  @media only screen and (min-width: 768px) {
    font-size: 42px;
  }
`;

export const TextContainer = styled(Box)`
  z-index: 100;
  text-align: center;
`;

export const LegalText = styled(Text)`
  font-size: 1vw;
  font-weight: 200;
  line-height: 0.9em;
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

export const AddButton = styled(Button)`
  background-color: #9060eb;
  border-radius: 50%;
  align-self: center;
  position: absolute;
  top: 280px;
  @media only screen and (min-width: 768px) {
    padding: 30px;
    top: 590px;
  }
`;

export const AddIcon = styled(Add)`
  @media only screen and (min-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;
