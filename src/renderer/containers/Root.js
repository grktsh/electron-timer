import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import App from '../components/App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object,
};

export default Root;
