import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from '../../store/configureStore';
import Root from '../Root';

const store = configureStore();

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root store={store} />, div);
});
