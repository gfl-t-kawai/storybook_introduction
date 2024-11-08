/** @type { import('@storybook/react-vite').StorybookConfig } */

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
  ],

  features: {
    postcss: false,
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
