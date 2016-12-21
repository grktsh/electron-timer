import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps, mergeProps } from '../StartOrStop';

jest.mock('react-redux', () => ({
  connect: jest.fn(component => component),
}));

it('should map state to props', () => {
  expect(mapStateToProps({ running: false })).toEqual({
    running: false,
    children: 'Start',
    primary: true,
  });
  expect(mapStateToProps({ running: true })).toEqual({
    running: true,
    children: 'Stop',
    primary: true,
  });
});

it('should map dispatch to props', () => {
  expect(mapDispatchToProps().start).toBeDefined();
  expect(mapDispatchToProps().stop).toBeDefined();
});

it('should have onClick prop to dispatch start action if not running', () => {
  const start = jest.fn();
  mergeProps({ running: false }, { start }).onClick();
  expect(start).toBeCalled();
});

it('should have onClick prop to dispatch stop action if running', () => {
  const stop = jest.fn();
  mergeProps({ running: true }, { stop }).onClick();
  expect(stop).toBeCalled();
});

it('should be connected', () => {
  expect(connect).toBeCalledWith(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  );
});
