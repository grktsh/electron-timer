import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Time from '../Time';

storiesOf('Time', module)
  .add('default', () => (
    <Time time={(60 * 60 * 1000) + (2 * 60 * 1000) + 3456} />
  ));
