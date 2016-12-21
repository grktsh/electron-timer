import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import App from '../components/App';
import DevTools from './DevTools';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object,
};

export default Root;
