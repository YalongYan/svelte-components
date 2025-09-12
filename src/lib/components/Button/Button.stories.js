import Button from './Button.svelte';

export default {
  title: 'Button',
  component: Button
};

export const Default = {
  args: {
    children: 'Click me'
  }
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
};
