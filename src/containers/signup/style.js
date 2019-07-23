import styled from 'styled-components';
import { Box, Text, Heading, Button } from 'grommet';

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
  line-height: 0.8em;
`;

export const StyledButton = styled(Button)`
  box-shadow: 0px 3px 3px 3px black;
  border-radius: 50%;
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TextContainer = styled(Box)`
  position: absolute;
  z-index: 100;
  top: 20%;
  left: 0;
  right: 0;
  margin: auto
`;
