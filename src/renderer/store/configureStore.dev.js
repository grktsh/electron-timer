import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
);

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer,
  );
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }
  return store;
};

export default configureStore;
