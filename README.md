# Marry

一个基于 `Next.js 14` 的中英双语婚礼主题网站，定位为婚礼内容展示与轻量备婚工具结合的官网型项目。

当前版本已经实现：

- 中英双语路由：`/zh`、`/en`
- 6 个一级页面：`Home`、`Stories`、`Inspiration`、`Services`、`Tools`、`About`
- 统一的内容数据层，便于后续继续扩展文案和页面
- 两个可用工具：
  - `Wedding Checklist`
  - `Budget Planner`
- 响应式首页与统一视觉系统

## Tech Stack

- `Next.js 14`
- `React 18`
- `TypeScript`
- App Router
- 纯静态内容数据驱动，无 CMS 依赖

## Getting Started

先安装依赖：

```bash
npm install
```

启动本地开发：

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

## Available Scripts

- `npm run dev`：启动本地开发环境
- `npm run build`：执行生产构建
- `npm run start`：启动生产环境服务
- `npm run lint`：执行 Next.js lint

## Project Structure

```text
app/
  [locale]/
    about/
    inspiration/
    services/
    stories/
    tools/
  globals.css
  layout.tsx
  page.tsx

components/
  cta-section.tsx
  hero.tsx
  language-switcher.tsx
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
```

## Content Architecture

项目内容主要集中在以下几个文件：

- [lib/site-data.ts](/Users/baiyi/Documents/Marry-demo/lib/site-data.ts)
  - 存放中英文站点文案
  - 存放故事、服务、工具、清单和预算默认数据
- [lib/types.ts](/Users/baiyi/Documents/Marry-demo/lib/types.ts)
  - 定义 `Locale`、`StoryItem`、`ServiceItem`、`ToolItem` 等类型
- [lib/i18n.ts](/Users/baiyi/Documents/Marry-demo/lib/i18n.ts)
  - 管理站点支持的语言与 locale 判断

如果你要改站点文案、菜单、故事卡片、服务项或工具默认值，优先修改 `lib/site-data.ts`。

## Pages

- `/zh`、`/en`
  - 首页，承接品牌定位、故事入口、服务展示和工具预览
- `/[locale]/stories`
  - 婚礼故事与情绪化内容页
- `/[locale]/inspiration`
  - 婚礼灵感与视觉主题页
- `/[locale]/services`
  - 服务介绍与合作节奏说明
- `/[locale]/tools`
  - 清单与预算工具页
- `/[locale]/about`
  - 品牌介绍与联系方式页

## Tool Behavior

### Wedding Checklist

- 按筹备阶段展示待办事项
- 支持前端勾选
- 刷新后会保留勾选状态

### Budget Planner

- 提供默认预算项
- 支持修改金额
- 自动计算总额与占比
- 刷新后会保留输入值

## Customization Notes

你后续如果想继续往下扩展，建议按下面的方式做：

- 换品牌语气或文案：修改 `lib/site-data.ts`
- 换视觉风格：修改 [app/globals.css](/Users/baiyi/Documents/Marry-demo/app/globals.css)
- 新增一级页面：在 `app/[locale]/` 下新增对应路由
- 新增工具模块：在 `components/` 中增加独立组件，并从 `tools/page.tsx` 接入
- 接入真实图片资源：可以先放到 `public/`，再替换目前的渐变占位视觉
- 接入表单或 CMS：建议作为下一阶段能力，不要把现有静态内容结构打散

## Current Status

当前仓库已经完成 V1 官网实现，适合作为以下方向的基础版本：

- 婚礼主题品牌站
- 新人婚礼内容站
- 备婚灵感与工具入口站

下一步比较适合继续补充：

- 真实图片与视觉素材
- 联系表单或咨询入口
- SEO 细化
- 时间线工具或更多备婚工具
- CMS 或后台内容管理能力
