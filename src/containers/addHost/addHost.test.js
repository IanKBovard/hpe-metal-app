import React from 'react';
import { shallow } from 'enzyme';
import AddHost from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<AddHost />, div);
});