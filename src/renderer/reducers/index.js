import { RESET, START, STOP, TICK } from '../actions';

const initialState = {
  running: false,
  offset: 0,
  start: 0,
  time: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        running: true,
        start: action.payload,
        time: state.offset,
      };
    case STOP:
      return {
        ...state,
        running: false,
        offset: state.offset + (action.payload - state.start),
        time: state.offset + (action.payload - state.start),
      };
    case TICK:
      return !state.running ? state : {
        ...state,
        time: state.offset + (action.payload - state.start),
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export { initialState };
export default rootReducer;
