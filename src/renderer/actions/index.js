export const RESET = 'RESET';
export const START = 'START';
export const STOP = 'STOP';
export const TICK = 'TICK';

export const start = () => (dispatch, getState) => {
  dispatch({ type: START, payload: performance.now() });

  const tick = () => {
    const { running } = getState();
    if (!running) {
      return;
    }
    dispatch({ type: TICK, payload: performance.now() });
    setTimeout(tick, 200);
  };
  setTimeout(tick, 0);
};

export const stop = () => ({ type: STOP, payload: performance.now() });
export const reset = () => ({ type: RESET });

export default {
  start,
  stop,
  reset,
};
