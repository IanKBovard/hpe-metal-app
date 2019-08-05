import React from 'react';
import { Box, Text, Anchor } from 'grommet';
import { MapLocation, ServerCluster, Network, Grow, Add } from 'grommet-icons';

import { Card, AddButton } from './style';
const Home = () => {
  return (
    <Box background="#1F2532" pad="96px" justify="center">
      <Box direction="row" gap="medium">
        <Card direction="column" background="#ffffff">
          <Box basis="1/2"></Box>
          <Box basis="1/2" pad="24px" direction="column" justify="between">
            <Box direction="column">
              <Anchor href="/host-summary">
                <Text size="42px" weight="bold">
                  Peart-1
                </Text>
              </Anchor>
              <Text weight={100}>bmserver-666-web1.las.sl.hpe.net</Text>
            </Box>
            <Box gap="10px">
              <CardDetails
                icon={<MapLocation size="small" />}
                text="HPE Las Veas Data Center"
              />
              <CardDetails
                icon={<ServerCluster size="small" />}
                text="HPE ProLiant M360 Gen10"
              />
              <CardDetails icon={<Grow size="small" />} text="Kick the tires" />
              <CardDetails icon={<Network size="small" />} text="Public" />
            </Box>
          </Box>
        </Card>
        <Box
          direction="row"
          gap="small"
          alignSelf="center"
          style={{ minWidth: '180px' }}
        >
          <AddButton
            href="/add-host"
            primary
            icon={<Add size="medium" color="#ffffff" />}
          />
          <Text alignSelf="center" size="large">
            Add Another
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const CardDetails = props => {
  return (
    <Box direction="row" gap="xsmall">
      {props.icon}
      <Text size="xsmall" weight={100}>
        {props.text}
      </Text>
    </Box>
  );
};
export default Home;
