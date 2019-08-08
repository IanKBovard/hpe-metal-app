import styled from 'styled-components';
import { Box, Button } from 'grommet';

export const CloseButton = styled(Button)`
  padding: 32px;
  align-self: flex-end;
`;
export const StyledButton = styled(Button)`
  font-size: 28px;
  font-weight: 900;
  padding: 15px 40px;
  border-radius: 50px;
`;

export const MapCard = styled(Box)`
  min-height: 425px;
  min-width: 425px;
  border-radius: 20px;
  overflow: hidden;
`;

export const DetailsCard = styled(Box)`
  min-height: 425px;
  min-width: 425px;
  border-radius: 20px;
  padding: 48px 48px 80px 48px;
  justify-content: between;
`;

export const ActionsBox = styled(Box)`
  font-size: 24px;
  font-weight: 900;
  padding: 15px 40px;
  border-radius: 50px;
  background-color: rgba(51, 51, 51, 0.1);
`;

export const CardScroll = styled(Box)`
  overflow-x: auto;
`;

export const Layout = styled(Box)`
  min-width: 900px;
  max-width: 2000px;
  left: 0;
  right: 0;
  margin: auto;
  position: relative;
`;
