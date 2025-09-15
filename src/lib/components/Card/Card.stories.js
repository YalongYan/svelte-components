import Card from './Card.svelte';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: '一个灵活的卡片组件，支持多种样式变体和交互效果。'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
      description: '卡片的视觉变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: '卡片的内边距',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    hoverable: {
      control: { type: 'boolean' },
      description: '是否支持悬浮效果',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    clickable: {
      control: { type: 'boolean' },
      description: '是否可点击',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  tags: ['autodocs']
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

export const Outlined = {
  args: {
    variant: 'outlined',
    children: 'Outlined Card Content'
  }
};

export const Hoverable = {
  args: {
    hoverable: true,
    children: 'Hoverable Card Content'
  }
};

export const Clickable = {
  args: {
    clickable: true,
    children: 'Clickable Card Content'
  }
};

export const LargePadding = {
  args: {
    padding: 'large',
    children: 'Card with large padding'
  }
};

export const NoPadding = {
  args: {
    padding: 'none',
    children: 'Card with no padding'
  }
};
