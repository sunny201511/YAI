# YAI · AI Product Studio

> AI 不只是聊天。

YAI 是一个专注于 AI 产品工作室的官网，宣传 **AI 客服**、**AI 笔记** 以及后续可扩展的 AI 产品矩阵。

YAI 是一个专注于 AI 产品工作室的官网，宣传 **AI 客服**、**AI 笔记** 以及后续可扩展的 AI 产品矩阵。

## 技术栈

- **Vite 5** — 静态站点构建
- **React 19** + **TypeScript** — 组件与类型
- **React Router** — SPA 路由
- 纯 CSS 样式 — 无框架依赖，加载速度极快
- 部署于 **GitHub Pages**

## 开发

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 类型检查
npm run build

# 预览生产构建
npm run preview
```

## 部署

项目通过 GitHub Actions 自动构建并部署到 GitHub Pages。详见 `.github/workflows/deploy.yml`。

## 产品配置

所有产品信息统一定义在 `src/config/products.ts`：

- 产品名称、描述、状态
- 图标路径、封面图路径、截图路径
- Hero 区域标题、插钮文案、链接
- 功能列表、使用流程

> **图片资源完全独立于 React/TSX 代码。** 替换图片时只需替换 `public/images/<product>/*.png`，无需修改任何组件。

详情请参考 [IMAGE_ASSETS.md](./IMAGE_ASSETS.md)。
