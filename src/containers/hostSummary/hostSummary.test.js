import React from 'react';
import { shallow } from 'enzyme';
import HostSummary from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<HostSummary />, div);
});
