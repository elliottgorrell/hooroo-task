import React from 'react';
import { shallow } from '../../Enzyme';

import AccomResult from '../AccomResult';

const setup = (propOverrides) => {
  const props = Object.assign({
    id: 'cxd650nuyo',
    title: 'Courtyard by Marriott Sydney-North Ryde',
    address: '7-11 Talavera Rd, North Ryde',
    image: 'https://unsplash.it/145/125/?random',
    rating: 4,
    ratingType: 'self',
    promotion: 'Exclusive Deal',
    name: 'Deluxe Balcony Room',
    price: 329,
    savings: 30,
    freeCancellation: true,
  }, propOverrides);

  const wrapper = shallow(<AccomResult {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('AccomResult Component', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test('When there is a discount we render a savings amount', () => {
    const { wrapper } = setup();
    expect(wrapper.exists('.saving')).toBeTruthy();
  });

  test('When the discount samount is 0 we don\'t render a savings amount', () => {
    const { wrapper } = setup({ savings: 0 });
    expect(wrapper.exists('.saving')).toBeFalsy();
  });

  test('The correct width is calculated from the rating (4 == 80%)', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.full-stars').props().style).toHaveProperty('width', '80%');
  });
});
