import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Home />, div);
});
