import React from 'react';
import { shallow } from 'enzyme';
import Loading from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Loading />, div);
});
