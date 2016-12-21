import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@kadira/storybook';

import ActionBar from '../ActionBar';
import mockStore from './mockStore';

const store = mockStore();

storiesOf('ActionBar', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      {getStory()}
    </Provider>
  ))
  .add('default', () => (
    <ActionBar />
  ));
