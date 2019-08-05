import React from 'react';
import { Box, Text, Button, Heading } from 'grommet';
import {
  MapLocation,
  ServerCluster,
  Network,
  Analytics,
  Close,
} from 'grommet-icons';

const HostSummary = () => {
  return (
    <Box background="#1F2532" style={{minWidth: '900px'}}>
      <Button
        margin="medium"
        alignSelf="end"
        href="/home"
        plain
        icon={<Close size="large" color="#9060EB" />}
      />
      <Box
        direction="column"
        pad={{ top: '96px', left: '96px', right: '96px', bottom: '0px' }}
      >
        <Box
          direction="row"
          justify="between"
          align="start"
          style={{ minHeight: '200px', minWidth: '900px' }}
        >
          <Box direction="column">
            <Heading weight="bold" margin="0px" size="68px">
              Peart-1
            </Heading>
            <Text size="large">bmserver666-web1.las.sl.hpe.net</Text>
          </Box>
          <Button
            label="Actions"
            primary
            color="#9060EB"
            style={{
              fontSize: '28px',
              fontWeight: '900',
              padding: '15px 40px',
              borderRadius: '50px',
            }}
          />
        </Box>
        <Box
          direction="row"
          justify="between"
          gap="medium"
          style={{ minHeight: '450px', minWidth: '900px', overflowX: 'scroll' }}
        >
          <Box
            height="425px"
            width="425px"
            background="#FFFFFF"
            style={{ minWidth: '425px', borderRadius: '20px' }}
          ></Box>
          <Box
            pad={{ top: '48px', bottom: '60px', left: '48px', right: '48px' }}
            height="425px"
            width="425px"
            background="#A2423D"
            style={{ minWidth: '425px', borderRadius: '20px' }}
          >
            <Text size="28px" margin={{ bottom: '56px' }}>
              Server Info
            </Text>
            <Box height="100%" justify="between">
              <Box direction="row" gap="xsmall">
                <MapLocation /> <Text>HPE Las Vegas Data Center</Text>
              </Box>
              <Box direction="row" gap="xsmall">
                <ServerCluster /> <Text>HPE ProLiant M360 Gen10</Text>
              </Box>
              <Box direction="row" gap="xsmall">
                <Analytics /> <Text>Small Machine Size</Text>
              </Box>
              <Box direction="row" gap="xsmall">
                <Network /> <Text>2 Connections</Text>
              </Box>
            </Box>
          </Box>
          <Box
            height="425px"
            width="425px"
            background="#00739D"
            pad={{ top: '48px', bottom: '60px', left: '48px', right: '48px' }}
            style={{ minWidth: '425px', borderRadius: '20px' }}
            justify="between"
          >
            <Text size="28px" weight="100">
              Utilization
            </Text>
            <Text size="150px" weight="100">
              6%
            </Text>
            <Text>265MB of 1TB used</Text>
            <Text>1,000 IOPs Average @256KiB</Text>
            <Text>2% avg. CPU Usage / Max 68% 30m ago</Text>
          </Box>
          <Box
            height="425px"
            width="425px"
            background="#FF9700"
            style={{ minWidth: '425px', borderRadius: '20px' }}
            pad={{ top: '48px', bottom: '60px', left: '48px', right: '48px' }}
            justify="between"
          >
            <Box>
              <Text size="28px" weight="100">
                Cost (billed on 6/1)
              </Text>
              <Text size="76px" weight="100">
                $48.00
              </Text>
            </Box>
            <Box>
              <Text size="28px" weight="100">
                Value
              </Text>
              <Text size="76px" weight="100">
                Okay
              </Text>
            </Box>
            <Box
              background="rgba(51,51,51,0.1)"
              alignSelf="start"
              style={{
                fontSize: '24px',
                fontWeight: '900',
                padding: '15px 40px',
                borderRadius: '50px',
              }}
            >
              <Button
                plain
                color="#333333"
                label="Optimize"
                alignSelf="start"
              />
            </Box>
          </Box>
        </Box>
        <Box direction="column" width>
          <Text size="64px" weight="bold" margin={{ bottom: '40px' }}>
            Summary
          </Text>
          <Box gap="small">
            <Box height="1px" background="rgba(255,255,255,0.5)" />
            <Box direction="row" justify="between">
              <Text>Description</Text>
              <Text weight="bold">My First Server!</Text>
            </Box>
            <Box height="1px" background="rgba(255,255,255,0.1)" />
            <Box direction="row" justify="between">
              <Text>Tenant ID</Text>
              <Text weight="bold">Tenant ID</Text>
            </Box>
            <Box height="1px" background="rgba(255,255,255,0.1)" />
            <Box direction="row" justify="between">
              <Text>Created</Text>
              <Text weight="bold">2019-05-29T18:30:05.284Z</Text>
            </Box>
            <Box height="1px" background="rgba(255,255,255,0.1)" />
            <Box direction="row" justify="between">
              <Text>Modified</Text>
              <Text weight="bold">2019-05-30T14:27:08.503Z</Text>
            </Box>
            <Box height="1px" background="rgba(255,255,255,0.1)" />
            <Box direction="row" justify="between">
              <Text>State</Text>
              <Text weight="bold">Ready</Text>
            </Box>
            <Box height="1px" background="rgba(255,255,255,0.1)" />
            <Box direction="row" justify="between">
              <Text>Step</Text>
              <Text weight="bold">null</Text>
            </Box>
            <Box height="1px" background="rgba(255,255,255,0.1)" />
            <Box direction="row" justify="between">
              <Text>Elapsed</Text>
              <Text weight="bold">1 day</Text>
            </Box>
            <Box height="1px" background="rgba(255,255,255,0.1)" />
            <Box direction="row" justify="between">
              <Text>Comm Status</Text>
              <Text weight="bold">Ok</Text>
            </Box>
            <Box height="1px" background="rgba(255,255,255,0.1)" />
            <Box direction="row" justify="between">
              <Text>Progress</Text>
              <Text weight="bold">100%</Text>
            </Box>
            <Box height="1px" background="rgba(255,255,255,0.1)" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HostSummary;
