import { RESET, START, STOP, TICK } from '../../actions';
import reducer, { initialState } from '..';

const runningState = {
  running: true,
  offset: 2,
  start: 3,
  time: 5,
};

const stoppedState = {
  running: false,
  offset: 2,
  start: 3,
  time: 5,
};

it('should return initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it('should handle START', () => {
  expect(reducer(initialState, { type: START, payload: 100 })).toEqual({
    running: true,
    offset: 0,
    start: 100,
    time: 0,
  });
});

it('should handle START if stopped', () => {
  expect(reducer(stoppedState, { type: START, payload: 100 })).toEqual({
    running: true,
    offset: 2,
    start: 100,
    time: 2,
  });
});

it('should handle STOP', () => {
  expect(reducer(runningState, { type: STOP, payload: 100 })).toEqual({
    ...runningState,
    running: false,
    offset: 2 + (100 - runningState.start),
    time: 2 + (100 - runningState.start),
  });
});

it('should handle RESET', () => {
  expect(reducer(runningState, { type: RESET })).toEqual(initialState);
});

it('should handle TICK if running', () => {
  expect(reducer(runningState, { type: TICK, payload: 100 })).toEqual({
    ...runningState,
    time: runningState.offset + (100 - runningState.start),
  });
});

it('should not handle TICK if not running', () => {
  expect(reducer(initialState, { type: TICK, payload: 100 })).toEqual(initialState);
  expect(reducer(stoppedState, { type: TICK, payload: 100 })).toEqual(stoppedState);
});
