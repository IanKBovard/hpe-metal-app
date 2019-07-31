import React from 'react';
import { Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { SignupWrapper } from './containers/signup/style';
import { hpe } from 'grommet-theme-hpe';

import Loading from '../src/containers/loading';
import Signup from '../src/containers/signup';
import AddHost from '../src/containers/addHost';

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
      {/*      
      <AddHost />
      <Loading /> 
    */}
      <SignupWrapper fill background="#1F2532" align="center">
        <Signup />
      </SignupWrapper>
    </Grommet>
  );
}

export default App;
