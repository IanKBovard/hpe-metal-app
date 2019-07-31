import styled from 'styled-components';
import { Box, Text, Heading, Button, TextInput } from 'grommet';
import { Add } from 'grommet-icons';

/* Layout and text */
export const SignupWrapper = styled(Box)`
  overflow-x: hidden;
`;

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
  max-width: 100%;
  font-size: 32px;
  font-weight: 900;
  line-height: 0.8em;
  margin: 0px;
  @media only screen and (min-width: 768px) {
    font-size: 78px;
  }
`;

export const InfoText = styled(Text)`
  font-size: 12px;
  font-weight: 300;
  line-height: 1em;
  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const TextContainer = styled(Box)`
  z-index: 100;
  text-align: center;
`;

/* Open form button */
export const AddButton = styled(Button)`
  background-color: #9060eb;
  border-radius: 50%;
  align-self: center;
  position: absolute;
  top: 270px;
  @media only screen and (min-width: 768px) {
    padding: 15px;
    top: 565px;
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    left: 157px;
  }
`;

export const AddIcon = styled(Add)`
  @media only screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

/* Form */
export const FormWrapper = styled(Box)`
  height: 480px;
  width: 360px;
  position: absolute;
  left: 0;
  right: 0;
  top: 140px;
  margin: auto;
  border-radius: 8%;
  z-index: 100;
  @media only screen and (min-width: 768px) {
    height: 500px;
    width: 650px;
    top: 300px;
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    height: 500px;
    top: 170px;
  }
`;

export const LegalText = styled(Text)`
  font-size: 12px;
  font-weight: 100;
  line-height: 1em;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
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
