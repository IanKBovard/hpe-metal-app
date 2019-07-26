import React from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils';
import Loading from '../src/containers/loading';
import Signup from '../src/containers/signup';

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
      <Signup />
      {/*                   <Loading /> */}
    </Grommet>
  );
}

export default App;
