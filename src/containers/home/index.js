import React from 'react';
import { Box, Text, Button, Anchor } from 'grommet';
import { MapLocation, ServerCluster, Network, Grow, Add } from 'grommet-icons';

const Home = () => {
  return (
    <Box fill background="#1F2532" pad="96px" justify="center">
      <Box
        direction="row"
        gap="small"
        style={{
          minWidth: '400px',
          minHeight: '550px',
        }}
      >
        <Box
          direction="column"
          background="#ffffff"
          style={{
            minWidth: '400px',
            borderRadius: '10px',
          }}
          margin={{ bottom: 'medium' }}
        >
          <Box basis="1/2"></Box>
          <Box basis="1/2" pad="24px" direction="column" justify="between">
            <Box direction="column">
              <Anchor href="/host-summary">
                <Text size="42px" weight="bold">
                  Peart-1
                </Text>
              </Anchor>
              <Text weight="100">bmserver-666-web1.las.sl.hpe.net</Text>
            </Box>
            <Box gap="10px">
              <Box direction="row" gap="xsmall">
                <MapLocation size="small" />{' '}
                <Text size="xsmall" weight="100">
                  HPE Las Vegas Data Center
                </Text>
              </Box>
              <Box direction="row" gap="xsmall">
                <ServerCluster size="small" />{' '}
                <Text size="xsmall" weight="100">
                  HPE ProLiant M360 Gen10
                </Text>
              </Box>
              <Box direction="row" gap="xsmall">
                <Grow size="small" />{' '}
                <Text size="xsmall" weight="100">
                  Kick the tires
                </Text>
              </Box>
              <Box direction="row" gap="xsmall">
                <Network size="small" />{' '}
                <Text size="xsmall" weight="100">
                  Public
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box margin="large" direction="row" gap="small" alignSelf="center">
          <Button
            href="/add-host"
            primary
            color="#9060EB"
            icon={<Add size="medium" color="#ffffff" />}
            style={{ borderRadius: '50%' }}
          />
          <Text alignSelf="center" size="large">
            Add Another
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
