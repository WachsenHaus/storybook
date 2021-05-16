// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

// .storybook/preview.js

import '../src/index.css'; //👈 The app's CSS file goes here

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  options: {
    storySort: {
      order: ['Intro', 'component'],
    },
  },
};
