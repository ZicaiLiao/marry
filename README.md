# Marry

一个基于 `Next.js 14` 的中英双语婚礼主题网站，定位为“婚礼内容展示 + 服务承接 + 轻量备婚工具”的平台型官网。

当前版本已经完成：

- 中英双语路由：`/zh`、`/en`
- 6 个一级页面：`Home`、`Stories`、`Inspiration`、`Services`、`Tools`、`About`
- 首页真实婚礼图片 Hero 视觉
- 服务页深化内容：
  - 服务模块
  - 合作流程
  - 套餐展示
  - 案例片段
  - FAQ
- 可用备婚工具：
  - `Wedding Checklist`
  - `Budget Planner`
  - `Timeline Planner`
  - `Guest Manager`
- 咨询表单：
  - 浏览器本地草稿保存
  - 真实后端提交接口 `/api/inquiry`
  - `Resend` 邮件服务接入
  - `mailto` 兜底入口

## Tech Stack

- `Next.js 14`
- `React 18`
- `TypeScript`
- App Router
- 静态内容数据驱动
- Resend HTTP API

## Getting Started

安装依赖：

```bash
npm install
```

复制环境变量模板：

```bash
cp .env.example .env.local
```

启动开发环境：

```bash
npm run dev
```

默认访问：

- [http://localhost:3000/zh](http://localhost:3000/zh)
- [http://localhost:3000/en](http://localhost:3000/en)

生产构建：

```bash
npm run build
npm run start
```

## Environment Variables

`Resend` 表单提交需要以下变量：

```env
RESEND_API_KEY=
RESEND_FROM_EMAIL="Marry <onboarding@resend.dev>"
RESEND_TO_EMAIL="hello@marrystudio.co"
```

说明：

- `RESEND_API_KEY`
  - Resend 后台生成的 API Key
- `RESEND_FROM_EMAIL`
  - 发件人地址
  - 本地测试可先用 `onboarding@resend.dev`
  - 正式环境建议替换成你已验证域名下的邮箱
- `RESEND_TO_EMAIL`
  - 接收咨询邮件的邮箱

如果没有配置 `RESEND_API_KEY`，前端会提示邮件服务尚未配置，并保留邮件兜底入口。

## Available Scripts

- `npm run dev`
  - 启动本地开发环境
- `npm run build`
  - 执行生产构建
- `npm run start`
  - 启动生产环境服务
- `npm run lint`
  - 执行 Next.js lint

## Project Structure

```text
app/
  [locale]/
    about/
    inspiration/
    services/
    stories/
    tools/
  api/
    inquiry/
  globals.css

components/
  cta-section.tsx
  hero.tsx
  inquiry-form.tsx
  planning-tools.tsx
  section-header.tsx
  service-card.tsx
  site-footer.tsx
  site-header.tsx
  site-shell.tsx
  story-card.tsx
  tool-preview-card.tsx

lib/
  i18n.ts
  site-data.ts
  types.ts

public/
  images/
```

## Content Architecture

内容和扩展入口主要集中在以下文件：

- [lib/site-data.ts](/Users/baiyi/Documents/Marry-demo/lib/site-data.ts)
  - 中英文站点文案
  - 首页、服务页、工具页、关于页结构化内容
  - 故事、服务、套餐、FAQ、预算、时间线等默认数据
- [lib/types.ts](/Users/baiyi/Documents/Marry-demo/lib/types.ts)
  - 统一类型定义
  - 包含 `Locale`、`ServicePackage`、`ServiceCaseStudy`、`GuestItem` 等模型
- [components/planning-tools.tsx](/Users/baiyi/Documents/Marry-demo/components/planning-tools.tsx)
  - 清单、预算、时间线、宾客管理工具实现
- [components/inquiry-form.tsx](/Users/baiyi/Documents/Marry-demo/components/inquiry-form.tsx)
  - 咨询表单前端交互与状态反馈
- [app/api/inquiry/route.ts](/Users/baiyi/Documents/Marry-demo/app/api/inquiry/route.ts)
  - Resend 邮件发送接口

如果你要继续加故事、服务、案例、FAQ 或工具入口，优先加数据，不需要重写页面结构。

## Pages

- `/zh`、`/en`
  - 首页，承接品牌定位、服务能力、工具预览与转化
- `/[locale]/stories`
  - 婚礼故事与情绪化内容页
- `/[locale]/inspiration`
  - 婚礼灵感与视觉主题页
- `/[locale]/services`
  - 服务介绍、流程、套餐、案例与 FAQ
- `/[locale]/tools`
  - 清单、预算、时间线与宾客管理工具
- `/[locale]/about`
  - 品牌介绍、联系信息与咨询表单

## Tool Behavior

### Wedding Checklist

- 按筹备阶段展示任务
- 支持勾选
- 刷新后保留状态

### Budget Planner

- 支持修改预算项金额
- 自动计算总额与占比
- 刷新后保留输入值

### Timeline Planner

- 按婚礼筹备节点展示关键阶段
- 支持状态切换与备注
- 刷新后保留内容

### Guest Manager

- 支持新增宾客
- 支持维护 RSVP 状态
- 支持记录桌位与备注
- 刷新后保留内容

## Inquiry Flow

咨询表单的处理流程如下：

1. 用户在前端填写表单
2. 草稿自动保存到本地浏览器
3. 点击发送后请求 `/api/inquiry`
4. 服务端调用 Resend API 发送结构化邮件
5. 若邮件服务未配置，可使用 `mailto` 方式继续联系

## Customization Notes

- 调整品牌语气、页面文案、服务套餐、FAQ、工具默认值：
  - 修改 [lib/site-data.ts](/Users/baiyi/Documents/Marry-demo/lib/site-data.ts)
- 调整视觉方向和样式系统：
  - 修改 [app/globals.css](/Users/baiyi/Documents/Marry-demo/app/globals.css)
- 替换首页图片资源：
  - 修改 `public/images/` 中的素材，或在 [components/hero.tsx](/Users/baiyi/Documents/Marry-demo/components/hero.tsx) 中调整布局
- 更换邮件服务目标地址：
  - 修改 `.env.local` 中的 `RESEND_FROM_EMAIL`、`RESEND_TO_EMAIL`
- 后续接 CMS：
  - 建议保持当前 `site-data.ts` 的结构，替换数据来源即可

## Current Status

当前仓库已经不只是 V1 展示页，而是一个具备基础转化能力的婚礼平台官网雏形，适合作为以下方向继续扩展：

- 婚礼品牌站
- 编辑式婚礼内容平台
- 备婚工具入口站
- 后续接 CMS / CRM / 表单服务的官网基础版
