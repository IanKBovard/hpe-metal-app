import styled from 'styled-components';
import { Box, Text, Heading, Button } from 'grommet';

export const SignupLayout = styled(Box)`
  min-height: 700px;
  height: 100%;
`;

export const TitleText1 = styled(Heading)`
  position: absolute;
  font-size: 6vw;
  font-weight: 900;
  line-height: 0.8em;
  margin: 0px;
  z-index: 100;
  white-space: nowrap;
  top: 18%;
`;

export const TitleText2 = styled(Heading)`
  position: absolute;
  font-size: 6vw;
  font-weight: 900;
  line-height: 0.8em;
  margin: 0px;
  z-index: 100;
  white-space: nowrap;
  top: 28%;
`;

export const InfoText = styled(Text)`
  position: absolute;
  font-size: 2.5vw;
  font-weight: 200;
  line-height: 0.8em;
  z-index: 100;
  white-space: nowrap;
  top: 36%;
`;

export const StyledBox = styled(Box)`
  position: relative;
  padding-top: 56.25%;
`;

export const StyledButton = styled(Button)`
  box-shadow: 0px 3px 3px 3px black;
  border-radius: 50%;
`;
