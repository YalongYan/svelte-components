

/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.stories.js",
    "../src/**/*.stories.mdx"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-essentials"
  ],
  "framework": {
    "name": "@storybook/svelte-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  "typescript": {
    "check": false,
    "reactDocgen": false
  }
};
export default config;