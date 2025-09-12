

/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-actions"
  ],
  "framework": {
    "name": "@storybook/svelte-vite",
    "options": {}
  }
};
export default config;