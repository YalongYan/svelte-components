import Input from './Input.svelte';

export default {
  title: 'Input',
  component: Input
};

export const Default = {
  args: {
    placeholder: 'Enter text...'
  }
};

export const WithLabel = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email'
  }
};
