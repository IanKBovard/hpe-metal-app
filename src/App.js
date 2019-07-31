import React from 'react';
import { Grommet, Box, grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils';
import Loading from '../src/containers/loading';
import Signup from '../src/containers/signup';
import { SignupWrapper } from './containers/signup/style';
const grommetCustom = deepMerge(grommet, {
  formField: {
    border: {
      position: '',
    },
  },
});
function App() {
  return (
    <Grommet full theme={grommetCustom}>
    <Box fill background="#1F2532" align="center" style={{overflowX: 'hidden'}}>
      <Signup/>
    </Box>
      {/*                          <Loading /> */}
    </Grommet>
  );
}

export default App;
