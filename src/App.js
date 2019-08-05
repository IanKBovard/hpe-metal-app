import React from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter, Route } from 'react-router-dom';
import { deepMerge } from 'grommet/utils';
import { hpe } from 'grommet-theme-hpe';

/* Pages */
import Loading from '../src/containers/loading';
import Signup from '../src/containers/signup';
import AddHost from '../src/containers/addHost';
import Home from '../src/containers/home';
import HostSummary from '../src/containers/hostSummary';

const hpeCustom = deepMerge(hpe, {
  formField: {
    border: {
      position: '',
    },
  },
  button: {
    border: {
      radius: '20px',
      width: '0px',
    },
    color: '#ffffff',
  },
});

function App() {
  return (
    <Grommet full theme={hpeCustom}>
      <BrowserRouter>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/add-host" component={AddHost} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/host-summary" component={HostSummary} />
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
