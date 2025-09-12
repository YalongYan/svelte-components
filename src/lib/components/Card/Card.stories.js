import Card from './Card.svelte';

export default {
  title: 'Card',
  component: Card
};

export const Default = {
  args: {
    children: 'Default Card Content'
  }
};

export const Elevated = {
  args: {
    variant: 'elevated',
    children: 'Elevated Card Content'
  }
};
