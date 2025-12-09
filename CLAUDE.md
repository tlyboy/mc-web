# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 开发命令

```bash
pnpm dev      # 启动开发服务器
pnpm build    # TypeScript 类型检查 + Vite 构建
pnpm preview  # 预览构建产物
```

## 技术栈

- **构建工具**: Vite (使用 rolldown-vite)
- **框架**: React 19 + TypeScript
- **样式**: Tailwind CSS v4
- **状态管理**: Immer + use-immer
- **React 编译器**: 启用 babel-plugin-react-compiler
- **图标**: @egoist/tailwindcss-icons + @iconify-json/carbon

## 项目架构

- `src/main.tsx` - 应用入口
- `src/App.tsx` - 根组件
- `src/layouts/` - 布局组件 (Default 包含 ThemeProvider)
- `src/components/` - UI 组件
  - `theme-provider.tsx` - 主题上下文 (dark/light/system)
  - `mode-toggle.tsx` - 深色模式切换按钮 (带 View Transitions API 动画)

## 路径别名

`@/` 映射到 `./src/`

## 样式约定

- 使用 Tailwind CSS v4 语法
- 深色模式通过 `.dark` 类控制，使用 `@custom-variant dark`
- 图标使用 `i-carbon-*` 类名
- 预定义组件类: `.btn`, `.icon-btn`
