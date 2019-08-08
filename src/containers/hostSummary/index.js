import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, Heading, Image } from 'grommet';
import {
  MapLocation,
  ServerCluster,
  Network,
  Analytics,
  Close,
} from 'grommet-icons';
import Logo from '../../components/logo/index';
import {
  Layout,
  CloseButton,
  StyledButton,
  MapCard,
  DetailsCard,
  ActionsBox,
  CardScroll,
} from './style';

const HostSummary = () => {
  return (
    <Layout background="#1F2532">
      <Logo />
      <CloseButton
        href="/home"
        plain
        icon={<Close size="large" color="#9060EB" />}
      />
      <Box direction="column" pad="96px" gap="48px">
        <Box direction="row" justify="between" align="start">
          <Box direction="column">
            <Heading weight="bold" margin="0px" size="68px">
              Peart-1
            </Heading>
            <Text size="large">bmserver666-web1.las.sl.hpe.net</Text>
          </Box>
          <StyledButton label="Actions" primary color="#9060EB" />
        </Box>
        <CardScroll
          direction="row"
          justify="between"
          gap="medium"
          pad={{ bottom: '48px' }}
        >
          <MapCard>
            <Image fit="cover" src="./img/test/map-example.svg" />
          </MapCard>
          <DetailsCard pad="48px" background="#A2423D">
            <Text size="28px" margin={{ bottom: '56px' }}>
              Server Info
            </Text>
            <Box height="100%" justify="between">
              <CardDetails
                icon={<MapLocation />}
                text="HPE Las Vegas Data Center"
              />
              <CardDetails
                icon={<ServerCluster />}
                text="HPE ProLiant M360 Gen10"
              />
              <CardDetails icon={<Analytics />} text="Small Machine Size" />
              <CardDetails icon={<Network />} text="2 Connections" />
            </Box>
          </DetailsCard>
          <DetailsCard background="#00739D" justify="between">
            <Text size="28px" weight={100}>
              Utilization
            </Text>
            <Text size="150px" weight={100}>
              6%
            </Text>
            <Text>265MB of 1TB used</Text>
            <Text>1,000 IOPs Average @256KiB</Text>
            <Text>2% avg. CPU Usage / Max 68% 30m ago</Text>
          </DetailsCard>
          <DetailsCard background="#FF9700" justify="between">
            <Box>
              <Text size="28px" weight={100}>
                Cost (billed on 6/1)
              </Text>
              <Text size="76px" weight={100}>
                $48.00
              </Text>
            </Box>
            <Box>
              <Text size="28px" weight={100}>
                Value
              </Text>
              <Text size="76px" weight={100}>
                Okay
              </Text>
            </Box>
            <ActionsBox alignSelf="start">
              <Button plain label="Optimize" />
            </ActionsBox>
          </DetailsCard>
        </CardScroll>
        <Box direction="column" gap="30px">
          <Text size="64px" weight="bold">
            Summary
          </Text>
          <Box gap="12px">
            <Box height="1px" background="rgba(255,255,255,0.5)" />
            <SummaryDetails title="Description" details="My First Server!" />
            <SummaryDetails title="Tenant ID" details="Tenant ID" />
            <SummaryDetails
              title="Created"
              details="2019-05-29T18:30:05.284Z"
            />
            <SummaryDetails
              title="Modified"
              details="2019-05-30T14:27:08.503Z"
            />
            <SummaryDetails title="State" details="Ready" />
            <SummaryDetails title="Step" details="null" />
            <SummaryDetails title="Elapsed" details="1 day" />
            <SummaryDetails title="Comm Status" details="Ok" />
            <SummaryDetails title="Progress" details="100%" />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

const CardDetails = props => {
  return (
    <Box direction="row" gap="xsmall">
      {props.icon} <Text>{props.text}</Text>
    </Box>
  );
};

const SummaryDetails = props => {
  return (
    <Box gap="12px">
      <Box direction="row" justify="between">
        <Text>{props.title}</Text>
        <Text weight="bold">{props.details}</Text>
      </Box>
      <Box height="1px" background="rgba(255,255,255,0.1)" />
    </Box>
  );
};

CardDetails.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
};

SummaryDetails.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
};

export default HostSummary;
