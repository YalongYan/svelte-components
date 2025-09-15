import Button from './Button.svelte';

export default {
  title: 'Button',
  component: Button
};

export const Default = {
  args: {
    text: 'Click me'
  }
};

export const Primary = {
  args: {
    variant: 'primary',
    text: 'Primary Button'
  }
};

export const Secondary = {
  args: {
    variant: 'secondary',
    text: 'Secondary Button'
  }
};
