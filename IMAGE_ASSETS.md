# 图片资源替换指南

## 原则

官网中所有的“系统界面 / 产品截图 / 产品 Mockup / 产品展示图”都是**静态资源路径**，
写在 `src/config/products.ts` 中，而**不**硬编码在 React 组件内部。

这意味着未来需要更换图片时，**只需替换 `public/images/` 目录下的对应文件**，
即可立即生效，无需修改任何 `.tsx` 文件。

---

## 目录结构

```
public/images/
├── logo/
│   └── logo.svg                  # 网站 logo
│
├── hero/
│   └── hero-placeholder.png      # 首页 Hero 区域产品展示图
│
├── customer-service/
│   ├── icon.svg                  # 产品图标
│   ├── cover.png                 # 首页/详情封面图
│   ├── screenshot.png            # 详情页主截图
│   ├── screenshot-chat.png       # 聊天界面截图
│   └── screenshot-workbench.png  # 工作台截图
│
├── notebook/
│   ├── icon.svg                  # 产品图标
│   ├── cover.png                 # 首页/详情封面图
│   ├── screenshot.png            # 详情页主截图
│   ├── screenshot-editor.png     # 编辑器界面截图
│   └── screenshot-ai.png         # AI 对话界面截图
│
└── common/
    └── ...                       # 公共图片资源
```

---

## 如何替换图片

### 例 1：替换 AI 客服首页封面图

1. 准备新的 PNG/WebP 图片。
2. 替换文件：
   ```
   public/images/customer-service/cover.png
   ```
3. 提交并推送：
   ```bash
   git add public/images/customer-service/cover.png
   git commit -m "Replace AI customer service cover image"
   git push
   ```
4. GitHub Actions 会自动构建并部署到 GitHub Pages。

> 无需修改任何 React/TSX 代码！

### 例 2：替换 AI 笔记聊天截图

替换文件：
```
public/images/notebook/screenshot-ai.png
```

---

## 图片命名规范

统一使用 **英文小写 + kebab-case**：

- ✅ `cover.png`
- ✅ `screenshot.png`
- ✅ `screenshot-chat.png`
- ✅ `screenshot-workbench.png`
- ✅ `screenshot-editor.png`
- ✅ `screenshot-ai.png`
- ✅ `icon.svg`
- ✅ `logo.svg`

避免使用：

- ❌ `客服首页最终版.png`
- ❌ `图片1.png`
- ❌ `new-new.png`
- ❌ `test2.png`

---

## 图片尺寸建议

为了保证未来替换真实截图时布局不变，建议保持以下尺寸比例：

| 图片类型         | 建议尺寸       | 比例  |
|------------------|---------------|-------|
| `cover.png`      | 1280 × 720    | 16:9  |
| `screenshot*.png`| 1280 × 720    | 16:9  |
| `hero-placeholder.png` | 1280 × 720 | 16:9  |
| `icon.svg`       | 64 × 64       | 1:1   |
| `logo.svg`       | 64 × 64       | 1:1   |

> 即使未来尺寸不一致，`ProductImage` 组件会通过 `object-fit: cover/contain`
> 自动适配，保证：
> - 页面布局不变
> - 图片比例自动适配
> - 圆角保持
> - 阴影保持
> - hover 动画保持
> - 不出现图片变形或页面溢出

---

## 图片组件

所有产品图片通过 `src/components/ProductImage.tsx` 加载，支持：

- `loading="lazy"` — 缓加载
- `onError` — 加载失败时显示 fallback
- `object-fit: cover / contain` — 自动适配图片比例
- `aspect-ratio` — 固定宽高比，防止布局抖动
- 响应式尺寸

---

## GitHub Pages 部署

1. 推送到 `main` 分支。
2. GitHub Actions 自动运行：
   - `npm install`
   - `npm run build`
   - 部署 `dist/` 到 GitHub Pages
3. 访问部署后的站点即可看到新图片。
