import React from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import Loading from '../src/containers/loading';
import Add from '../src/containers/add';

function App() {
  return (
    <Grommet full theme={hpe}>
      <Add />
    </Grommet>
  );
}

export default App;
