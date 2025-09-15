// 导入 Button 组件
import Button from './Button.svelte';

// 导出默认配置对象，这是 Storybook 的核心配置
export default {
  // 设置组件在 Storybook 侧边栏中的标题和分组
  // 格式：'分组名/组件名'，这里会显示为 Components > Button
  title: 'Components/Button',
  
  // 指定要测试的组件
  component: Button,
  
  // 参数配置，用于控制 Storybook 的行为和显示
  parameters: {
    // 文档相关配置
    docs: {
      description: {
        // 组件描述，会显示在自动生成的文档页面中
        component: '一个现代化的按钮组件，支持多种变体、尺寸和状态。'
      }
    }
  },
  
  // 参数类型定义，用于生成 Controls 面板和文档
  argTypes: {
    // 按钮文本属性
    text: {
      control: { type: 'text' },           // Controls 面板中的控件类型：文本输入框
      description: '按钮显示的文本',        // 参数描述，显示在文档中
      table: {                             // 文档表格配置
        type: { summary: 'string' },       // 参数类型
        defaultValue: { summary: "''" }    // 默认值
      }
    },
    
    // 按钮变体属性
    variant: {
      control: { type: 'select' },         // Controls 面板中的控件类型：下拉选择框
      options: ['primary', 'secondary', 'danger', 'success'], // 可选值
      description: '按钮的视觉变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    
    // 按钮尺寸属性
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '按钮的尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    
    // 禁用状态属性
    disabled: {
      control: { type: 'boolean' },        // Controls 面板中的控件类型：开关按钮
      description: '是否禁用按钮',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    
    // 加载状态属性
    loading: {
      control: { type: 'boolean' },
      description: '是否显示加载状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    
    // 块级按钮属性
    block: {
      control: { type: 'boolean' },
      description: '是否占满父容器宽度',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  
  // 标签配置，启用自动文档生成
  // 这会在侧边栏中自动生成一个 "Docs" 标签页
  tags: ['autodocs']
};

// 默认按钮示例 - 使用组件的默认属性
export const Default = {
  args: {
    text: 'Click me'  // 只设置文本，其他属性使用默认值
  }
};

// 主要按钮示例 - 展示 primary 变体
export const Primary = {
  args: {
    variant: 'primary',    // 设置为主要按钮样式
    text: 'Primary Button'
  }
};

// 次要按钮示例 - 展示 secondary 变体
export const Secondary = {
  args: {
    variant: 'secondary',  // 设置为次要按钮样式
    text: 'Secondary Button'
  }
};

// 危险按钮示例 - 展示 danger 变体
export const Danger = {
  args: {
    variant: 'danger',     // 设置为危险按钮样式（通常用于删除等操作）
    text: 'Danger Button'
  }
};

// 成功按钮示例 - 展示 success 变体
export const Success = {
  args: {
    variant: 'success',   // 设置为成功按钮样式（通常用于确认等操作）
    text: 'Success Button'
  }
};

// 小尺寸按钮示例 - 展示 small 尺寸
export const Small = {
  args: {
    size: 'small',        // 设置为小尺寸
    text: 'Small Button'
  }
};

// 大尺寸按钮示例 - 展示 large 尺寸
export const Large = {
  args: {
    size: 'large',        // 设置为大尺寸
    text: 'Large Button'
  }
};

// 加载状态按钮示例 - 展示 loading 状态
export const Loading = {
  args: {
    loading: true,        // 启用加载状态，会显示旋转的加载图标
    text: 'Loading Button'
  }
};

// 禁用状态按钮示例 - 展示 disabled 状态
export const Disabled = {
  args: {
    disabled: true,       // 禁用按钮，用户无法点击
    text: 'Disabled Button'
  }
};

// 块级按钮示例 - 展示 block 属性
export const Block = {
  args: {
    block: true,          // 按钮占满父容器的全部宽度
    text: 'Block Button'
  }
};
