import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Button from '../Button';

storiesOf('Button', module)
  .add('default', () => (
    <Button>Default</Button>
  ))
  .add('disabled', () => (
    <Button disabled>Disabled</Button>
  ))
  .add('primary', () => (
    <Button primary>Primary</Button>
  ))
  .add('accent', () => (
    <Button accent>Accent</Button>
  ));
