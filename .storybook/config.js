import { configure } from '@kadira/storybook';

const loadStories = () => {
  const req = require.context('../src/renderer/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
