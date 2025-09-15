# 🎨 点点组件库 (Svelte Components Library)

一个基于 **Svelte 4** 构建的现代化组件库，提供丰富的 UI 组件和优秀的开发体验。

## ⚠️ 重要说明

**本组件库使用 `new` 关键字实例化组件，而不是直接在模板中使用。**

```javascript
// ✅ 正确用法
const button = new Button({
  target: document.getElementById('container'),
  props: { text: 'Click me' }
});

// ❌ 错误用法
<Button text="Click me" />
```

## ✨ 特性

- 🚀 **现代化** - 基于 Svelte 4 最新特性
- 🎨 **美观** - 精心设计的视觉风格和动画效果
- 📱 **响应式** - 完美适配各种屏幕尺寸
- ♿ **可访问性** - 遵循 WCAG 标准，支持键盘导航
- 🔧 **可定制** - 丰富的配置选项和主题支持
- 📚 **文档完善** - 详细的组件文档和使用示例

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

### 使用

```javascript
import { Button, Card, Input } from 'svelte-components-v4';

// 在你的 Svelte 组件中使用
// 注意：需要使用 new 关键字实例化组件
const button = new Button({
  target: document.getElementById('button-container'),
  props: {
    variant: 'primary',
    text: 'Click me'
  }
});

const card = new Card({
  target: document.getElementById('card-container'),
  props: {
    variant: 'elevated',
    hoverable: true
  }
});

const input = new Input({
  target: document.getElementById('input-container'),
  props: {
    label: 'Username',
    placeholder: 'Enter your username'
  }
});
```

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
npm run build            # 构建应用（原有配置）
npm run build:lib        # 构建组件库（ES/CJS/UMD 格式）
npm run build:lib:local  # 本地构建组件库（无内存限制）
npm run localbuild       # 本地构建应用（无内存限制）
npm run build-analyze    # 构建并分析包大小

# 代码质量
npm run check           # 运行 Svelte 类型检查
npm run lint            # 运行代码检查
```

## 📦 发布到 NPM

### 1. 准备工作

确保你的 `package.json` 配置正确：

```json
{
  "name": "svelte-components-v4",
  "version": "1.0.0",
  "description": "A modern Svelte component library",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "keywords": ["svelte", "components", "ui", "library"],
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/svelte-components-v4.git"
  },
  "publishConfig": {
    "access": "public"
  }
}
```

### 2. 构建组件库

```bash
# 构建组件库（ES/CJS/UMD 格式）
npm run build:lib

# 检查构建结果
ls -la dist/
# 应该看到以下文件：
# - index.js      (CommonJS 格式，11.32 kB)
# - index.esm.js  (ES Module 格式，19.77 kB)
# - index.umd.js  (UMD 格式，11.56 kB)
# - style.css     (样式文件，6.03 kB)
```

### 3. 测试 UMD 格式

```bash
# 构建完成后，可以打开测试页面
open test-umd.html
# 或者在浏览器中访问 test-umd.html 文件
```

### 4. 发布到 NPM

```bash
# 登录 NPM（如果还没登录）
npm login

# 发布包
npm publish

# 或者发布 beta 版本
npm publish --tag beta
```

### 4. 版本管理

```bash
# 更新版本号
npm version patch    # 1.0.0 -> 1.0.1
npm version minor    # 1.0.0 -> 1.1.0
npm version major    # 1.0.0 -> 2.0.0

# 发布新版本
npm publish
```

## 🌐 部署 Storybook

### 方法一：使用 Storybook 官方服务

1. **构建 Storybook**
   ```bash
   npm run build-storybook
   ```

2. **部署到 Chromatic**
   ```bash
   # 安装 Chromatic
   npm install --save-dev chromatic
   
   # 部署
   npx chromatic --project-token=your-project-token
   ```

### 方法二：部署到 GitHub Pages

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **添加部署脚本到 package.json**
   ```json
   {
     "scripts": {
       "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"
     }
   }
   ```

3. **部署**
   ```bash
   npm run deploy-storybook
   ```

4. **访问**
   ```
   https://your-username.github.io/svelte-components-v4
   ```

### 方法三：部署到 Vercel

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **创建 vercel.json 配置**
   ```json
   {
     "buildCommand": "npm run build-storybook",
     "outputDirectory": "storybook-static",
     "framework": null
   }
   ```

3. **部署**
   ```bash
   vercel --prod
   ```

### 方法四：部署到 Netlify

1. **构建配置**
   在项目根目录创建 `netlify.toml`：
   ```toml
   [build]
     command = "npm run build-storybook"
     publish = "storybook-static"
   ```

2. **部署**
   - 连接 GitHub 仓库到 Netlify
   - 设置构建命令：`npm run build-storybook`
   - 设置发布目录：`storybook-static`

## 🔧 在其他项目中使用

### Svelte 项目中使用

1. **安装组件库**
   ```bash
   npm install svelte-components-v4
   ```

2. **在组件中导入使用**
   ```svelte
   <script>
     import { Button, Card, Input } from 'svelte-components-v4';
     import { onMount } from 'svelte';
     
     let username = '';
     let buttonComponent, cardComponent, inputComponent;
     
     onMount(() => {
       // 创建按钮组件
       buttonComponent = new Button({
         target: document.getElementById('login-button'),
         props: {
           variant: 'primary',
           text: '登录',
           block: true
         }
       });
       
       // 创建输入框组件
       inputComponent = new Input({
         target: document.getElementById('username-input'),
         props: {
           label: '用户名',
           placeholder: '请输入用户名',
           icon: '👤',
           iconPosition: 'left'
         }
       });
       
       // 创建卡片组件
       cardComponent = new Card({
         target: document.getElementById('login-card'),
         props: {
           variant: 'elevated',
           padding: 'large'
         }
       });
     });
     
     function handleClick() {
       console.log('Button clicked!');
     }
   </script>
   
   <div id="login-card">
     <h2>用户登录</h2>
     <div id="username-input"></div>
     <div id="login-button"></div>
   </div>
   ```

### 在浏览器中直接使用（UMD 格式）

1. **通过 CDN 引入**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <script src="https://unpkg.com/svelte-components-v4/dist/index.umd.js"></script>
     <script src="https://unpkg.com/svelte@4/dist/svelte.js"></script>
   </head>
   <body>
     <div id="app"></div>
     
     <script>
       // 使用全局变量 SvelteComponentsV4
       const { Button, Card, Input } = SvelteComponentsV4;
       
       // 创建 Svelte 应用
       const app = new Svelte.createApp({
         target: document.getElementById('app'),
         components: { Button, Card, Input },
         template: `
           <Card variant="elevated">
             <h2>Hello from UMD!</h2>
             <Button variant="primary" text="Click me" />
           </Card>
         `
       });
     </script>
   </body>
   </html>
   ```

2. **通过 jsDelivr CDN**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/svelte-components-v4/dist/index.umd.js"></script>
   ```

### 在 SvelteKit 项目中使用

1. **安装依赖**
   ```bash
   npm install svelte-components-v4
   ```

2. **在页面中使用**
   ```svelte
   <!-- src/routes/+page.svelte -->
   <script>
     import { Button, Card, Input } from 'svelte-components-v4';
     import { onMount } from 'svelte';
     
     let cardComponent, buttonComponent;
     
     onMount(() => {
       // 创建卡片组件
       cardComponent = new Card({
         target: document.getElementById('welcome-card'),
         props: {
           variant: 'elevated'
         }
       });
       
       // 创建按钮组件
       buttonComponent = new Button({
         target: document.getElementById('start-button'),
         props: {
           variant: 'primary',
           text: '开始使用'
         }
       });
     });
   </script>
   
   <main>
     <div id="welcome-card">
       <h1>欢迎使用点点组件库</h1>
       <div id="start-button"></div>
     </div>
   </main>
   ```

### 在 Vite + Svelte 项目中使用

1. **安装依赖**
   ```bash
   npm install svelte-components-v4
   ```

2. **配置 Vite**
   ```javascript
   // vite.config.js
   import { defineConfig } from 'vite';
   import { svelte } from '@sveltejs/vite-plugin-svelte';
   
   export default defineConfig({
     plugins: [svelte()],
     optimizeDeps: {
       include: ['svelte-components-v4']
     }
   });
   ```

3. **在组件中使用**
   ```svelte
   <script>
     import { Button, Card, Input } from 'svelte-components-v4';
     import { onMount } from 'svelte';
     
     let components = {};
     
     onMount(() => {
       // 创建组件实例
       components.button = new Button({
         target: document.getElementById('my-button'),
         props: {
           variant: 'primary',
           text: 'Click me'
         }
       });
       
       components.card = new Card({
         target: document.getElementById('my-card'),
         props: {
           variant: 'elevated',
           hoverable: true
         }
       });
     });
   </script>
   
   <div id="my-card">
     <h2>My Card</h2>
     <div id="my-button"></div>
   </div>
   ```

## 🎨 主题定制

组件库支持主题定制，你可以通过 CSS 变量来修改颜色：

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

## 📚 组件文档

访问我们的 Storybook 文档查看所有组件的详细使用说明：

- [在线文档](https://your-storybook-url.com)
- [本地开发](http://localhost:6006)

## 🤝 贡献指南

我们欢迎社区贡献！如果你有好的想法或发现了问题，请：

1. Fork 这个项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建一个 Pull Request

### 开发规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 和 Prettier 配置
- 为新组件编写 Storybook stories
- 确保所有测试通过

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- 项目地址：[GitHub Repository](https://github.com/your-username/svelte-components-v4)
- 问题反馈：[Issues](https://github.com/your-username/svelte-components-v4/issues)
- 文档地址：[Storybook](https://your-storybook-url.com)

---

**开始构建你的下一个 Svelte 项目吧！** 🚀