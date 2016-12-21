import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@kadira/storybook';

import App from '../App';
import mockStore from './mockStore';

const store = mockStore();

storiesOf('App', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      {getStory()}
    </Provider>
  ))
  .add('default', () => (
    <App />
  ));
