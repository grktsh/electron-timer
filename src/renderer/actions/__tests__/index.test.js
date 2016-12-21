import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { RESET, START, STOP, TICK, reset, start, stop } from '..';
import useFakePerformance from './useFakePerformance';

jest.useFakeTimers();
useFakePerformance([1000, 2000]);

const mockStore = configureMockStore([thunk]);

it('should create an action to stop', () => {
  expect(stop()).toEqual({ type: STOP, payload: 1000 });
});

it('should create an action to reset', () => {
  expect(reset()).toEqual({ type: RESET });
});

it('should create TICK action periodically after START action', () => {
  const store = mockStore({ running: true });
  store.dispatch(start());

  expect(store.getActions()).toEqual([
    { type: START, payload: 1000 },
  ]);
  expect(setTimeout.mock.calls.length).toBe(1);
  expect(setTimeout.mock.calls[0][1]).toBe(0);

  store.clearActions();
  jest.runOnlyPendingTimers();

  expect(store.getActions()).toEqual([
    { type: TICK, payload: 2000 },
  ]);
  expect(setTimeout.mock.calls.length).toBe(2);
  expect(setTimeout.mock.calls[1][1]).toBe(200);
});

it('should not create TICK action if not running', () => {
  const store = mockStore({ running: false });
  store.dispatch(start());

  store.clearActions();
  jest.runOnlyPendingTimers();

  expect(store.getActions()).toEqual([]);
});
