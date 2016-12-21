import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps, mergeProps } from '../Reset';

jest.mock('react-redux', () => ({
  connect: jest.fn(component => component),
}));

it('should map state to disabled prop', () => {
  expect(mapStateToProps({ running: false, offset: 0 }).disabled).toBe(true);
  expect(mapStateToProps({ running: true, offset: 0 }).disabled).toBe(true);
  expect(mapStateToProps({ running: true, offset: 2 }).disabled).toBe(true);
  expect(mapStateToProps({ running: false, offset: 2 }).disabled).toBe(false);
});

it('should map dispatch to props', () => {
  expect(mapDispatchToProps().reset).toBeDefined();
});

it('should have onClick prop to dispatch reset action', () => {
  const reset = jest.fn();
  mergeProps({}, { reset }).onClick();
  expect(reset).toBeCalled();
});

it('should be connected', () => {
  expect(connect).toBeCalledWith(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  );
});
