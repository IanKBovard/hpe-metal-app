import React from 'react';
import { shallow } from 'enzyme';
import Signup from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Signup />, div);
});