import React from 'react';
import { Grommet, Box, Text } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { Loading } from '../src/containers/loading';

function App() {
  return (
    <Grommet theme={hpe}>
      <Loading />
    </Grommet>
  );
}

export default App;
