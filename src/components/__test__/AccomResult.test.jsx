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
    expect(wrapper.find('.fullRatingIcons').props().style).toHaveProperty('width', '80%');
  });

  test('When rating type is "self" circles are displayed', () => {
    const { wrapper } = setup({ ratingType: 'self' });
    expect(wrapper.exists('.fullCircles')).toBeTruthy();
  });

  test('When rating type is "star" stars are displayed', () => {
    const { wrapper } = setup({ ratingType: 'star' });
    expect(wrapper.exists('.fullStars')).toBeTruthy();
  });

  test('A free cancellation message is shown when hotel has this offer', () => {
    const { wrapper } = setup();
    expect(wrapper.exists('.freeCancellation')).toBeTruthy();
  });

  test('A free cancellation message is shown when hotel has this offer', () => {
    const { wrapper } = setup({ freeCancellation: false });
    expect(wrapper.exists('.freeCancellation')).toBeFalsy();
  });

  test('When there is a Promotion of "Exclusive Deal" the relevant box is displayed over the hotel image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.promotionBox').text().trim()).toEqual('Exclusive Deal');
  });

  test('When there is a Promotion of "Red Hot" the relevant box is displayed over the hotel image', () => {
    const { wrapper } = setup({ promotion: 'Red Hot' });
    expect(wrapper.find('.promotionBox').text().trim()).toEqual('Red Hot');
  });

  test('When there is a Promotion of "Bonus Points" the relevant box is displayed over the hotel image', () => {
    const { wrapper } = setup({ promotion: 'Bonus Points' });
    expect(wrapper.find('.promotionBox').text().trim()).toEqual('Bonus Points');
  });

  test('When there is no Promotion no box is displayed over the hotel image', () => {
    const { wrapper } = setup({ promotion: undefined });
    expect(wrapper.exists('.promotionOverlay')).toBeFalsy();
  });
});
