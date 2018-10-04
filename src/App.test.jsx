import React from 'react';
import { shallow, render } from './Enzyme';

import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper);
});

it('renders whole DOM without crashing', () => {
  const wrapper = render(<App />);
  expect(wrapper);
});
