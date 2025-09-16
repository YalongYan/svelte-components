# 🎨 Svelte Components V4

一个基于 **Svelte 4** 构建的现代化组件库，提供丰富的 UI 组件和优秀的开发体验。采用源码分发策略，确保最佳性能和开发体验。

## ✨ 特性

- 🚀 **现代化** - 基于 Svelte 4 最新特性
- 🎨 **美观** - 精心设计的视觉风格和动画效果
- 📱 **响应式** - 完美适配各种屏幕尺寸
- ♿ **可访问性** - 遵循 WCAG 标准，支持键盘导航
- 🔧 **可定制** - 丰富的配置选项和主题支持
- 📚 **文档完善** - 详细的组件文档和使用示例
- ⚡ **高性能** - 源码分发，支持 treeshaking 和按需加载
- 🔧 **易集成** - 直接在 Svelte 模板中使用，无需额外配置
- 🎯 **零配置样式** - 样式完全集成，无需单独引入 CSS 文件

## 📦 组件列表

### 基础组件

- **Button** - 按钮组件，支持多种变体和状态
- **Input** - 输入框组件，功能丰富且易于使用
- **Card** - 卡片组件，灵活的布局容器

### 即将推出

- **Modal** - 模态框组件
- **Toast** - 消息提示组件
- **Dropdown** - 下拉菜单组件
- **Table** - 表格组件

## 🚀 快速开始

### 安装

```bash
npm install svelte-components-v4
```

### 在 Svelte 项目中使用

```svelte
<script>
  import { Button, Card, Input } from 'svelte-components-v4';
</script>

<!-- 直接在模板中使用组件 -->
<!-- 样式会自动包含，无需单独引入 CSS 文件 -->
<Button text="Click me" variant="primary" />
<Card variant="elevated" hoverable>
  <h3>Hello World</h3>
  <p>这是一个卡片组件的内容</p>
</Card>
<Input label="Username" placeholder="Enter your username" />
```

### 💡 重要提示：无需引入 CSS

**本组件库的样式已完全集成到组件中，无需单独引入任何 CSS 文件！**

- ✅ **零配置** - 导入组件即可使用，样式自动包含
- ✅ **无冲突** - 每个组件的样式都有唯一作用域，不会影响其他样式
- ✅ **按需加载** - 只包含实际使用组件的样式，支持 treeshaking
- ✅ **自动优化** - Svelte 编译器会自动优化样式

### 在普通 HTML 项目中使用

```html
<!DOCTYPE html>
<html>
<head>
  <title>使用 Svelte 组件库</title>
</head>
<body>
  <div id="app"></div>
  
  <script type="module">
    import { Button, Card } from 'svelte-components-v4';
    
    // 创建按钮
    const button = new Button({
      target: document.getElementById('app'),
      props: {
        text: 'Click me',
        variant: 'primary'
      }
    });
    
    // 创建卡片
    const card = new Card({
      target: document.getElementById('app'),
      props: {
        variant: 'elevated',
        hoverable: true
      }
    });
  </script>
</body>
</html>
```

## 📚 组件文档

### Button 组件

一个现代化的按钮组件，支持多种变体、尺寸和状态。

```svelte
<script>
  import { Button } from 'svelte-components-v4';
</script>

<!-- 基础用法 -->
<Button text="Click me" />

<!-- 不同变体 -->
<Button text="Primary" variant="primary" />
<Button text="Secondary" variant="secondary" />
<Button text="Success" variant="success" />
<Button text="Danger" variant="danger" />

<!-- 不同尺寸 -->
<Button text="Small" size="small" />
<Button text="Medium" size="medium" />
<Button text="Large" size="large" />

<!-- 状态 -->
<Button text="Loading" loading />
<Button text="Disabled" disabled />
<Button text="Block" block />
```

**Props:**

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `text` | `string` | `''` | 按钮显示的文本 |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | 按钮变体 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `loading` | `boolean` | `false` | 是否显示加载状态 |
| `block` | `boolean` | `false` | 是否占满容器宽度 |

### Card 组件

一个灵活的卡片组件，支持多种样式变体和交互效果。

```svelte
<script>
  import { Card } from 'svelte-components-v4';
</script>

<!-- 基础用法 -->
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

<!-- 不同变体 -->
<Card variant="elevated">
  <h3>Elevated Card</h3>
  <p>This card has elevation</p>
</Card>

<Card variant="outlined">
  <h3>Outlined Card</h3>
  <p>This card has an outline</p>
</Card>

<!-- 交互效果 -->
<Card hoverable clickable>
  <h3>Interactive Card</h3>
  <p>Hover and click effects enabled</p>
</Card>
```

**Props:**

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `variant` | `'default' \| 'elevated' \| 'outlined'` | `'default'` | 卡片变体 |
| `padding` | `'small' \| 'medium' \| 'large' \| 'none'` | `'medium'` | 内边距大小 |
| `hoverable` | `boolean` | `false` | 是否显示悬停效果 |
| `clickable` | `boolean` | `false` | 是否可点击 |

### Input 组件

一个功能丰富的输入框组件，支持标签、占位符和验证。

```svelte
<script>
  import { Input } from 'svelte-components-v4';
</script>

<!-- 基础用法 -->
<Input placeholder="Enter text..." />

<!-- 带标签 -->
<Input label="Username" placeholder="Enter your username" />

<!-- 不同尺寸 -->
<Input size="small" placeholder="Small input" />
<Input size="large" placeholder="Large input" />

<!-- 状态 -->
<Input disabled placeholder="Disabled input" />
<Input error="This field is required" placeholder="Input with error" />
```

**Props:**

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `label` | `string` | `''` | 输入框标签 |
| `placeholder` | `string` | `''` | 占位符文本 |
| `value` | `string` | `''` | 输入值 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `error` | `string` | `''` | 错误信息 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 输入框尺寸 |

## 🛠️ 开发指南

### 环境要求

- Node.js 20.12.2 或更高版本
- npm 或 yarn

### 本地开发

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd svelte-components-v4
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **启动 Storybook**
   ```bash
   npm run storybook
   ```

### 可用脚本

```bash
# 开发相关
npm run dev              # 启动开发服务器
npm run storybook        # 启动 Storybook 开发服务器
npm run build-storybook  # 构建 Storybook 静态文件

# 构建相关
npm run build            # 构建应用
npm run localbuild       # 本地构建应用（无内存限制）
npm run build-analyze    # 构建并分析包大小

# 代码质量
npm run check           # 运行 Svelte 类型检查
```

## 📦 发布到 NPM

### 组件库架构

本组件库采用 **源码分发** 策略：

- **无需构建** - 直接发布 `.svelte` 源码文件
- **高性能** - 消费项目的 Svelte 编译器会进行优化
- **Treeshaking** - 只打包实际使用的组件
- **类型安全** - 完整的 TypeScript 支持

### 发布流程

1. **更新版本号**
   ```bash
   npm version patch  # 或 minor, major
   ```

2. **直接发布**
   ```bash
   npm publish
   ```

### package.json 配置

```json
{
  "name": "svelte-components-v4",
  "version": "1.5.0",
  "main": "src/lib/index.js",
  "module": "src/lib/index.js",
  "svelte": "src/lib/index.js",
  "exports": {
    "./package.json": {
      "types": "./package.json",
      "svelte": "./package.json"
    },
    ".": {
      "types": "./src/lib/index.js",
      "svelte": "./src/lib/index.js",
      "default": "./src/lib/index.js"
    }
  },
  "files": [
    "src",
    "README.md"
  ],
  "peerDependencies": {
    "svelte": "^4.0.0"
  }
}
```

## 🎯 最佳实践

### 在 Svelte 项目中使用

```svelte
<script>
  import { Button, Card, Input } from 'svelte-components-v4';
  
  let username = '';
  let showCard = false;
  
  function handleClick() {
    showCard = !showCard;
  }
</script>

<!-- 无需引入任何 CSS 文件，样式自动包含 -->
<Input 
  bind:value={username} 
  label="Username" 
  placeholder="Enter your username" 
/>

<Button 
  text="Toggle Card" 
  variant="primary" 
  on:click={handleClick} 
/>

{#if showCard}
  <Card variant="elevated" hoverable>
    <h3>Hello, {username}!</h3>
    <p>Welcome to our application.</p>
  </Card>
{/if}
```

### 🚫 常见错误

**❌ 错误做法：**
```javascript
// 不需要这样做
import 'svelte-components-v4/dist/styles.css'; // 不存在这样的文件
```

**✅ 正确做法：**
```svelte
<script>
  import { Button } from 'svelte-components-v4';
  // 样式自动包含，无需额外操作
</script>
```

### 样式定制

组件库使用 CSS 变量，便于主题定制：

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --success-color: #10b981;
  --danger-color: #ef4444;
  --warning-color: #f59e0b;
  --info-color: #3b82f6;
}
```

## 🤝 贡献指南

我们欢迎社区贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发规范

- 使用 TypeScript 进行类型定义
- 遵循 Svelte 官方风格指南
- 编写完整的组件文档
- 添加 Storybook stories
- 确保代码通过所有测试

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [Svelte 官网](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [Storybook](https://storybook.js.org/)
- [组件库文档](https://your-storybook-url.com)

## 📞 支持

如果你遇到任何问题或有建议，请：

- 提交 [Issue](https://github.com/your-username/svelte-components-v4/issues)
- 查看 [文档](https://your-storybook-url.com)
- 参与 [讨论](https://github.com/your-username/svelte-components-v4/discussions)

---

**Happy Coding! 🚀**