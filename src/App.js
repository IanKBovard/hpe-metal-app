import React from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import Loading from '../src/containers/loading';
import Signup from '../src/containers/signup';

function App() {
  return (
    <Grommet full theme={hpe}>
      <Signup />
      {/*       <Loading /> */}
    </Grommet>
  );
}

export default App;
