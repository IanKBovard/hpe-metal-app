import React from 'react';
import { Grommet, grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { SignupWrapper } from './containers/signup/style';

import Loading from '../src/containers/loading';
import Signup from '../src/containers/signup';
import AddHost from '../src/containers/addHost';

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
{/*       <SignupWrapper fill background="#1F2532" align="center">
        <Signup />
      </SignupWrapper>
      <AddHost />
    */}
      <Loading /> 
    </Grommet>
  );
}

export default App;
