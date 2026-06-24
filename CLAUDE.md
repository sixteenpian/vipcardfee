# 会员扣款项目

## 项目概述

会员自动扣款 H5 应用，面向移动端用户，支持会员开通、套餐选择、协议签署、支付及结果展示。

## 技术栈

- **框架**: React 18 + TypeScript
- **构建**: Vite 5
- **样式**: Tailwind CSS 3 + 自定义主题色（主橙色 `primary-500: #F97316`）
- **路由**: React Router DOM 6
- **状态管理**: Zustand
- **后端/数据库**: Supabase
- **移动端**: Capacitor（Android / iOS）
- **工具函数**: clsx + tailwind-merge

## 常用命令

```bash
npm run dev        # 启动开发服务器 (localhost:3000)
npm run build      # TypeScript 检查 + Vite 构建
npm run preview    # 预览构建产物 (localhost:3001)
npm run cap:sync   # 同步 Capacitor 原生项目
```

## 项目结构

```
src/
  main.tsx                 # 入口，挂载 BrowserRouter
  App.tsx                  # 路由定义
  index.css                # 全局样式 + Tailwind 引入
  mobile-preview.css       # 移动端预览样式
  pages/
    HomePage.tsx           # 首页
    SelectPlanPage.tsx     # 套餐选择页
    AgreementPage.tsx      # 服务协议页
    AutoDeductAgreementPage.tsx  # 自动扣款协议页
    PaymentPage.tsx        # 支付页
    PaymentResultPage.tsx  # 支付结果页
    MemberCenterPage.tsx   # 会员中心页
```

## 代码规范

- 使用函数组件 + Hooks，不用 class 组件
- 导入路径使用相对路径（`./pages/...`），不配置 `@/` 别名
- 样式以 Tailwind 原子类为主，避免自定义 CSS（特殊情况用 `mobile-preview.css`）
- TypeScript 严格模式开启，不允许未使用的变量/参数
- 文件命名：页面组件 `XxxPage.tsx`，工具文件 camelCase
- 路由在 `App.tsx` 中集中定义

## 设计规范

- 主色：橙色系（`primary-*`），按钮/强调色用 `primary-600`（深橙）
- 背景：`neutral-50`，文字：`neutral-900`（近黑）
- 移动端优先，`max-width: 480px` 居中布局

## 注意事项

- 开发服务器绑定 `host: true`，支持局域网访问（方便手机调试）
- Capacitor 相关依赖在 `devDependencies`，`cap:sync` 前确保已安装对应平台 SDK
- Supabase 配置需自行创建 `.env` 文件（未纳入版本控制）
