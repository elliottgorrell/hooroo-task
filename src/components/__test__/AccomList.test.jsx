import React from 'react';
import { shallow } from '../../Enzyme';
import payload from '../../assets/dummyData';

import AccomList from '../AccomList';
import AccomResult from '../AccomResult';

const setup = () => {
  const wrapper = shallow(<AccomList />);

  return {
    wrapper,
  };
};

describe('AccomList', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper);
  });

  test('Contains our dummy data', () => {
    const { wrapper } = setup();
    const component = wrapper.instance();
    expect(component.state.results).toEqual(payload);
  });

  test('Loads 5 hotels on initial page load', () => {
    const { wrapper } = setup();
    expect(wrapper.find(AccomResult)).toHaveLength(5);
  });
});
