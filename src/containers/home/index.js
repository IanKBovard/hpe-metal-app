import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Anchor, Image } from 'grommet';
import { MapLocation, ServerCluster, Network, Grow, Add } from 'grommet-icons';
import Logo from '../../components/logo/index';
import UserIcon from '../../components/userIcon/index';
import { Card, AddButton, Layout } from './style';

const Home = () => {
  return (
    <Layout>
      <Logo />
      <UserIcon />
      <Box
        background="#1F2532"
        pad={{ top: '124px', left: '96px', right: '96px', bottom: '96px' }}
        justify="center"
      >
        <Box direction="row" gap="medium">
          <Card direction="column" background="#ffffff">
            <Box basis="1/2">
              <Image fit="cover" src="./img/test/map-example.svg" />
            </Box>
            <Box basis="1/2" pad="24px" direction="column" justify="between">
              <Box direction="column">
                <Anchor href="/host-summary" alignSelf="start">
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
                <CardDetails
                  icon={<Grow size="small" />}
                  text="Kick the tires"
                />
                <CardDetails icon={<Network size="small" />} text="Public" />
              </Box>
            </Box>
          </Card>
          <Card direction="column" background="#ffffff">
            <Box basis="1/2">
              <Image fit="cover" src="./img/test/map-example.svg" />
            </Box>
            <Box basis="1/2" pad="24px" direction="column" justify="between">
              <Box direction="column">
                <Anchor href="/host-summary" alignSelf="start">
                  <Text size="42px" weight="bold">
                    Peart-2
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
                <CardDetails
                  icon={<Grow size="small" />}
                  text="Kick the tires"
                />
                <CardDetails icon={<Network size="small" />} text="Public" />
              </Box>
            </Box>
          </Card>
          <Card direction="column" background="#ffffff">
            <Box basis="1/2">
              <Image fit="cover" src="./img/test/map-example.svg" />
            </Box>
            <Box basis="1/2" pad="24px" direction="column" justify="between">
              <Box direction="column">
                <Anchor href="/host-summary" alignSelf="start">
                  <Text size="42px" weight="bold">
                    Peart-3
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
                <CardDetails
                  icon={<Grow size="small" />}
                  text="Kick the tires"
                />
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
    </Layout>
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

CardDetails.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
};
export default Home;
