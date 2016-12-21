import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/Root.dev';
import configureStore from './store/configureStore.dev';

const store = configureStore();

const root = document.getElementById('root');
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
    root,
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers/Root.dev', render);
}
