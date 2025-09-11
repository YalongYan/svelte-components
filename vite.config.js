import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import path from 'path'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
// import { visualizer } from "rollup-plugin-visualizer"; // 打包分析
// import {injectInfoPlugin} from '@bbk47/vite-plugin-buildinfo';

const plugins = [
  svelte(), 
  // basicSsl(),
  nodePolyfills(),
  // injectInfoPlugin(),
];
if(process.env.NODE_ENV === 'prod'){
  plugins.push(visualizer({
    open: true, // 构建完成后自动打开分析报告
    filename: `./buildAnalysis/build-analysis-${+new Date()}.html`, // 生成的分析报告文件名
    gzipSize: true, // 收集 gzip 大小并显示
    brotliSize: true // 收集 brotli 大小并显示
  }))
}

// https://vitejs.dev/config/
export default defineConfig({
  // NODE_ENV 默认是 production , prod是专门打包分析的， 命令是：yarn build-analyze
  base: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? 'https://asset-slt.tuwan.com/' : '/',
  plugins:plugins,
  server:{
    host: 'localhost',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), 
      "assets": "./src/assets",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      }
    }
  },
  build: {
    minify: "terser",
    target: "chrome58",
    terserOptions: {
      mangle: {
          keep_classnames: /Room/,
      },
      compress: {
        // drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // 使用 contenthash 确保内容变化时 hash 一定会变
        // 每个文件单独的时间戳，确保强制更新，特别针对360浏览器缓存问题
        
        // 静态资源文件的命名（如 CSS, 图片, 字体等）
        assetFileNames: (assetInfo) => {
          const timestamp = Date.now();
          // 添加随机数增强缓存清除效果
          const random = Math.random().toString(36).slice(2, 7);
          return `assets/[name].${timestamp}.${random}.[hash].[ext]`;
        },
        
        // 主入口文件的命名（如 main.js, index.js）
        entryFileNames: (chunkInfo) => {
          const timestamp = Date.now();
          const random = Math.random().toString(36).slice(2, 7);
          return `assets/[name].${timestamp}.${random}.[hash].js`;
        },
        
        // 代码分割生成的 chunk 文件命名（如 vendor.js, 动态导入的模块等）
        // 包括: 1.动态导入 2.手动分割的代码块 3.共享模块
        chunkFileNames: (chunkInfo) => {
          const timestamp = Date.now();
          const random = Math.random().toString(36).slice(2, 7);
          return `assets/[name].${timestamp}.${random}.[hash].js`;
        },
        
        // https://blog.csdn.net/Mr__proto__/article/details/132280412
        manualChunks(id) { // 把node_modules下的包打包到 vendor.js中
          if (id.includes('node_modules')) {
            return 'vendor';  // 将所有来自 node_modules 的包打到 vendor.js 中
          }
        }
      },
    },
    sourcemap: true,
  },
})
