import Input from './Input.svelte';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: '一个功能丰富的输入框组件，支持多种类型、状态和图标。'
      }
    }
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      description: '输入框的值',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    placeholder: {
      control: { type: 'text' },
      description: '占位符文本',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: '输入框类型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' }
      }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '输入框尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined'],
      description: '输入框变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    readonly: {
      control: { type: 'boolean' },
      description: '是否只读',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    required: {
      control: { type: 'boolean' },
      description: '是否必填',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    error: {
      control: { type: 'boolean' },
      description: '是否显示错误状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    success: {
      control: { type: 'boolean' },
      description: '是否显示成功状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    label: {
      control: { type: 'text' },
      description: '标签文本',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    helperText: {
      control: { type: 'text' },
      description: '帮助文本',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    errorText: {
      control: { type: 'text' },
      description: '错误文本',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    icon: {
      control: { type: 'text' },
      description: '图标（支持 emoji 或文本）',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: '图标位置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' }
      }
    }
  },
  tags: ['autodocs']
};

export const Default = {
  args: {
    placeholder: 'Enter text...'
  }
};

export const WithLabel = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username'
  }
};

export const WithIcon = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    icon: '🔍',
    iconPosition: 'left'
  }
};

export const Password = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    icon: '🔒',
    iconPosition: 'right'
  }
};

export const Email = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    icon: '📧',
    iconPosition: 'left'
  }
};

export const Error = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    error: true,
    errorText: 'Username is required'
  }
};

export const Success = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    success: true,
    helperText: 'Email format is valid'
  }
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
};

export const Required = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true
  }
};

export const Small = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size input',
    size: 'small'
  }
};

export const Large = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size input',
    size: 'large'
  }
};