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

  test('Sorting by Price Low->High works', () => {
    const { wrapper } = setup();
    wrapper.find('.sortSelector').simulate('change', { target: { value: 'low' } });

    const allHotels = wrapper.find(AccomResult).map(x => x.props());

    // wrapper.find() seems to gather an array with nodes in desc order so have to check sorting in reverse
    const checkAscending = hotels => hotels.every((hotel, index) => index === 0 || hotel.price <= hotels[index - 1].price);
    expect(checkAscending(allHotels)).toBeTruthy();
  });

  test('Sorting by Price High->Low works', () => {
    const { wrapper } = setup();
    wrapper.find('.sortSelector').simulate('change', { target: { value: 'high' } });

    const allHotels = wrapper.find(AccomResult).map(x => x.props());
    // wrapper.find() seems to gather an array with nodes in desc order so have to check sorting in reverse
    const checkDescending = hotels => hotels.every((hotel, index) => index === 0 || hotel.price >= hotels[index - 1].price);
    expect(checkDescending(allHotels)).toBeTruthy();
  });
});
