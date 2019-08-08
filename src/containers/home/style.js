import styled from 'styled-components';
import { Box, Button } from 'grommet';

export const Layout = styled(Box)`
  position: relative;
`;

export const Card = styled(Box)`
  width: 450px;
  min-width: 450px;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
`;

export const AddButton = styled(Button)`
  border-radius: 50%;
  background: #9060eb;
`;
