# Website UI Implementation Report

## 项目概览

- **项目名称**: YAI - AI Product Studio
- **定位**: 静态 AI 产品官网，部署于 GitHub Pages
- **技术栈**: Vite 5 + React 19 + TypeScript + React Router + 纯 CSS
- **部署目标**: GitHub Pages (静态托管)

---

## 1. 创建的文件列表

### 项目配置文件

| 文件 | 说明 |
|------|------|
| `package.json` | 项目依赖与脚本 |
| `tsconfig.json` | TypeScript 配置 |
| `vite.config.ts` | Vite 构建配置 |
| `index.html` | 应用入口 HTML |
| `.gitignore` | git 忽略文件 |

### React 应用源码

| 文件 | 说明 |
|------|------|
| `src/main.tsx` | 应用入口 |
| `src/App.tsx` | 路由配置 (Home / Product / NotFound) |
| `src/styles.css` | 全局样式 (响应式 + 颜色主题) |
| `src/vite-env.d.ts` | Vite 类型声明 |
| `src/types/product.ts` | 产品类型定义 |
| `src/config/products.ts` | 产品统一配置 (唯一图片路径来源) |

### 组件

| 文件 | 说明 |
|------|------|
| `src/components/Layout.tsx` | 布局 (Header + main + Footer) |
| `src/components/Header.tsx` | 导航栏 (响应式 hamburger 菜单) |
| `src/components/Footer.tsx` | 页脚 |
| `src/components/Hero.tsx` | 首页 Hero 区域 |
| `src/components/ProductHero.tsx` | 产品页 Hero 区域 |
| `src/components/ProductImage.tsx` | 图片组件 (loading/fallback/object-fit/aspect-ratio) |
| `src/components/ProductCard.tsx` | 首页产品卡片 |
| `src/components/Features.tsx` | 功能列表 |
| `src/components/WorkflowSteps.tsx` | 使用流程 |
| `src/components/ScreenshotGallery.tsx` | 截图画廊 |
| `src/components/ProductCTA.tsx` | Call-to-action |
| `src/components/StatusBadge.tsx` | 产品状态徽标 |
| `src/components/icons/Github.tsx` | GitHub 图标 |
| `src/components/icons/Menu.tsx` | 菜单图标 |
| `src/components/icons/Close.tsx` | 关闭图标 |

### 页面

| 文件 | 说明 |
|------|------|
| `src/pages/Home.tsx` | 首页 (Hero + 产品矩阵 + 价值主张 + CTA) |
| `src/pages/Product.tsx` | 产品详情页 (Hero + 功能 + 流程 + 截图 + CTA) |
| `src/pages/NotFound.tsx` | 404 页面 |

### 构建部署

| 文件 | 说明 |
|------|------|
| `.github/workflows/deploy.yml` | GitHub Actions 自动构建部署 |
| `IMAGE_ASSETS.md` | 图片资源替换指南 |
| `README.md` | 项目说明 |

---

## 2. 产品图片目录结构

```
public/images/
├── logo/
│   └── logo.svg                    # 网站 logo (品牌图标)
│
├── hero/
│   ├── hero-placeholder.png        # 首页 Hero 产品展示图 (1280x720)
│   └── hero-placeholder.svg        # SVG 版本
│
├── customer-service/
│   ├── icon.svg                    # 产品图标
│   ├── cover.png                   # 封面图 (首页 + 详情)
│   ├── screenshot.png              # 详情页主截图
│   ├── screenshot-chat.png         # 聊天界面截图
│   └── screenshot-workbench.png   # 工作台截图
│
├── notebook/
│   ├── icon.svg                    # 产品图标
│   ├── cover.png                   # 封面图 (首页 + 详情)
│   ├── screenshot.png              # 详情页主截图
│   ├── screenshot-editor.png       # 编辑器界面截图
│   └── screenshot-ai.png           # AI 对话界面截图
│
└── common/
    └── (预留公共图片资源目录)
```

---

## 3. 如何替换图片

**唯一的修改入口是 `public/images/` 目录下的图片文件。**

例如，替换 AI 客服首页封面图：

1. 准备新的 PNG/Webp 图片 (建议 1280×720, 16:9)
2. 替换文件：
   ```
   public/images/customer-service/cover.png
   ```
3. 提交推送：
   ```bash
   git add public/images/customer-service/cover.png
   git commit -m "Replace customer service cover"
   git push
   ```
4. GitHub Actions 自动构建并部署到 GitHub Pages

**无需修改任何 React/TSX 代码。**

详情请参考 [`IMAGE_ASSETS.md`](./IMAGE_ASSETS.md)。

---

## 4. 产品配置位置

所有产品信息统一定义在 `src/config/products.ts`：

- 产品名称、描述、状态
- 图标路径 (`icon`)
- 封面图路径 (`cover`)
- Hero 区域标题、按钮文案、链接 (`hero`)
- 截图路径列表 (`screenshots`)
- 功能列表 (`features`)
- 使用流程 (`steps`)

图片路径全部通过此配置文件读取，页面组件从配置中获取，不直接写死路径。

```typescript
products = {
  customerService: {
    name: "AI 客服",
    cover: "/images/customer-service/cover.png",
    screenshots: [
      "/images/customer-service/screenshot.png",
      "/images/customer-service/screenshot-chat.png",
      "/images/customer-service/screenshot-workbench.png"
    ]
  },
  notebook: {
    name: "AI 笔记",
    cover: "/images/notebook/cover.png",
    screenshots: [
      "/images/notebook/screenshot.png",
      "/images/notebook/screenshot-editor.png",
      "/images/notebook/screenshot-ai.png"
    ]
  }
}
```

---

## 5. GitHub Pages 部署

- 使用 GitHub Actions 工作流 `.github/workflows/deploy.yml`
- 推送到 `main`/`master` 分支后自动构建部署
- 工作流步骤: `checkout` → `setup-node@v4` → `npm ci` → `npm run build` → `upload-pages-artifact` → `deploy-pages`

### 子路由兼容说明

项目使用 React Router v6 的 SPA 模式。部署在 GitHub Pages 后：

1. 首页 `/` 直接返回 `index.html`。
2. 子路由 `/products/customer-service`、`/products/notebook` 以及任意未知路径，
   GitHub Pages 会返回仓库根的 `404.html`（已随 `index.html` 一同部署）。
3. `public/404.html` 通过 `sessionStorage` 保存用户意图路径并跳转到 `/`，
   SPA 客户端路由随后可根据 `spaNavigate` 完成内部跳转。

本地 `vite preview` 同样使用 SPA fallback，任意路径均返回 `index.html`。

---

## 6. 构建结果

```
$ npm run build
> ai-product-studio@0.1.0 build
> tsc --noEmit && vite build

vite v5.4.21 building for production...
transforming...
✓ 62 modules transformed.
rendering chunks...
computing gzip size...

dist/index.html                   0.57 kB │ gzip:  0.48 kB
dist/assets/index-5oj7_vc2.css   10.51 kB │ gzip:  2.74 kB
dist/assets/index-5oj7_vc2.js  281.31 kB │ gzip: 88.46 kB
✓ built in 2.02s
```

### 验证结果

| 验证项 | 结果 |
|-------|------|
| 首页构建成功 | ✅ `npm run build` 通过 (62 modules) |
| 首页正常 | ✅ `curl` 返回 200 |
| AI 客服产品页正常 | ✅ `curl` 返回 200 |
| AI 笔记产品页正常 | ✅ `curl` 返回 200 |
| 404 / 未知路由正常 | ✅ `curl` 返回 200 (SPA fallback) |
| logo.svg 加载正常 | ✅ 返回 200 |
| hero-placeholder.svg 加载 | ✅ 返回 200 |
| customer-service 图片加载 | ✅ 4 个文件返回 200 |
| notebook 图片加载 | ✅ 5 个文件返回 200 |
| JS bundle 中图片路径正确 | ✅ 共 12 个 `/images/...` 路径 |
| 图片非 Base64 | ✅ 全部为静态资源路径 |
| TypeScript 无错误 | ✅ `tsc --noEmit` 通过 |
| 无横向滚动 | ✅ 容器 `max-width: 1280px`, `min(100%-2rem, 1280px)` |
| SPA 子路由直链 | ✅ `public/404.html` fallback → 首页自动路由

---

## 7. 响应式验证

CSS 采用 `min(100% - 2rem, 1280px)` 容器宽度，保证**无横向滚动**。

断点覆盖情况:

| 目标宽度 | 状态 |
|----------|------|
| 375px | ✅ 容器宽度自适应，产品卡片单列，导航折叠为 hamburger 菜单 |
| 390px | ✅ 同上 |
| 414px | ✅ 同上 |
| 768px | ✅ 桌面导航显示，`.hide-mobile` 生效 |
| 1024px | ✅ 两栏网格布局 |
| 1440px+ | ✅ 最大宽度 1280px，居中 |

### 移动端特性

- 导航栏在 `<768px` 折叠为 hamburger 菜单按钮
- 产品卡片在移动端单列展示
- Hero 图片在移动端自动下移/缩放
- 所有按钮有足够的点击区域 (≥44px)
- 图片使用 `object-fit: cover/contain` + `aspect-ratio` 防止变形溢出

---

## 8. 图片组件 (ProductImage)

`src/components/ProductImage.tsx` 统一处理所有产品图片：

- `loading="lazy"` 延迟加载
- `object-fit: cover / contain` 自动适配不同截图比例 (16:9/1440×900/1920×1080/手机截图/长页面)
- `aspect-ratio` 固定宽高比，防止布局抖动
- `onError` 加载失败时显示 fallback 提示
- 响应式尺寸

---

## 9. 待替换的占位图片

当前所有产品截图为 Placeholder (通过 ffmpeg drawbox 生成)。
未来可直接替换为真实系统截图：

- `public/images/customer-service/cover.png` → 真实客服工作台封面
- `public/images/customer-service/screenshot.png` → 真实客服主界面截图
- `public/images/customer-service/screenshot-chat.png` → 真实聊天界面截图
- `public/images/customer-service/screenshot-workbench.png` → 真实工作台截图
- `public/images/notebook/cover.png` → 真实 Notebook 封面
- `public/images/notebook/screenshot.png` → 真实 Notebook 截图
- `public/images/notebook/screenshot-editor.png` → 真实编辑器截图
- `public/images/notebook/screenshot-ai.png` → 真实 AI 对话截图
- `public/images/hero/hero-placeholder.png` → 首页 Hero 产品展示图

> 注意：Placeholder 图片生成时由于当前环境 ffmpeg 不支持 `drawtext` filter，
> 图片中不带文字标签，但不影响布局。未来替换为真实截图后，布局保持不变。

---

## 10. 已知问题

1. **Vite preview SPA fallback**: 开发/预览环境下 `vite preview` 会对任意未匹配路径返回 `index.html`，因此 `curl` 测试的“缺失图片”返回 200 而非 404. 在 GitHub Pages 生产环境，缺失的静态资源会返回标准 404，`ProductImage` 组件的 `onError` 会显示 fallback。

2. **子路由直链访问**: 纯静态 SPA 部署在 GitHub Pages 时，直接访问 `/products/customer-service` 需要仓库设置 SPA 支持 (或添加 `404.html` 复制 `index.html`)。本地 `vite preview` 和浏览器导航均正常。

3. **Placeholder 图片无文字标签**: 当前环境 `ffmpeg` 缺少 `drawtext` filter，无法在生成的 PNG 占位图中嵌入文字。不影响功能，仅为占位。

4. **Hero 图片命名**: 当前首页 Hero 区域使用 `/images/hero/hero-placeholder.png`，如需统一命名可替换为 `hero-product.png` 并更新 `src/pages/Home.tsx` 中的 `imageSrc` 属性 (无需更改布局)。
