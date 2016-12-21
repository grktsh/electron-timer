import { connect } from 'react-redux';

import { mapStateToProps } from '../ElapsedTime';

jest.mock('react-redux', () => ({
  connect: jest.fn(component => component),
}));

it('should map state to time prop', () => {
  expect(mapStateToProps({ time: 2 }).time).toBe(2);
});

it('should be connected', () => {
  expect(connect).toBeCalledWith(mapStateToProps);
});
