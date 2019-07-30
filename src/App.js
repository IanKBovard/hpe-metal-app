import React from 'react';
import { Grommet, Box } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils';
import Loading from '../src/containers/loading';
import Signup from '../src/containers/signup';
import { SignupWrapper } from './containers/signup/style';
const hpeCustom = deepMerge(hpe, {
  formField: {
    border: {
      position: '',
    },
  },
});
function App() {
  return (
    <Grommet full theme={hpeCustom}>
      {/*     <Box full align="center">
      <Signup/>
    </Box> */}
      <Loading />
    </Grommet>
  );
}

export default App;
