import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

it('should set flat prop to true', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.prop('flat')).toBe(true);
});

it('should pass primary prop', () => {
  const wrapper = shallow(<Button primary />);
  expect(wrapper.prop('primary')).toBe(true);
});

it('should pass accent prop', () => {
  const wrapper = shallow(<Button accent />);
  expect(wrapper.prop('accent')).toBe(true);
});

it('should handle click event', () => {
  const handleClick = jest.fn();
  const wrapper = shallow(<Button onClick={handleClick} />);
  wrapper.simulate('click');
  expect(handleClick).toBeCalled();
});
