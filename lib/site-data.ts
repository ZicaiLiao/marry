import { Locale, LocaleContent, SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  brand: "Marry",
  strapline: "Wedding stories, refined services, and planning essentials.",
  email: "hello@marrystudio.co",
  instagram: "@marry.editorial",
  wechat: "MarryStudio"
};

export const localeContent: Record<Locale, LocaleContent> = {
  zh: {
    localeLabel: "中文",
    meta: {
      title: "Marry 婚礼主题平台",
      description: "以浪漫叙事、婚礼灵感、服务展示与轻量工具为核心的中英双语婚礼主题网站。"
    },
    nav: [
      { href: "/zh", label: "首页" },
      { href: "/zh/stories", label: "故事" },
      { href: "/zh/inspiration", label: "灵感" },
      { href: "/zh/services", label: "服务" },
      { href: "/zh/tools", label: "工具" },
      { href: "/zh/about", label: "关于" }
    ],
    home: {
      hero: {
        eyebrow: "For the moments that become memory",
        title: "把爱与承诺，安放进值得被纪念的时刻",
        body:
          "Marry 以婚礼故事、视觉灵感、服务策划与轻量备婚工具，帮助你把一场婚礼从想象，慢慢长成真正有温度的现场。",
        primaryCta: "探索灵感",
        primaryHref: "/zh/inspiration",
        secondaryCta: "开始规划",
        secondaryHref: "/zh/tools",
        stats: [
          { label: "故事策划章节", value: "12+" },
          { label: "审美主题方向", value: "08" },
          { label: "备婚工具模块", value: "04" }
        ],
        visualQuote: "让一场婚礼不止好看，也足够像你们。",
        visualBody:
          "从仪式感到执行感，从照片里的光线到宾客到场时的心情，我们把婚礼理解为一种完整叙事。"
      },
      proposition: {
        eyebrow: "Brand Proposition",
        title: "不是模板化婚礼站，而是一座关于爱、审美与筹备体验的入口。",
        body:
          "首页同时承接婚礼氛围、服务能力与工具体验，让第一次到访的人既能被打动，也能马上知道下一步可以做什么。",
        items: [
          {
            title: "真实故事",
            description: "以电影感语言和节奏讲述新人关系、场地气氛与婚礼片段。",
            bullets: ["强调情绪线索", "适合照片叙事", "便于后续扩展专题内容"]
          },
          {
            title: "服务体验",
            description: "展示策划、视觉设计、流程统筹等能力，而不是冷冰冰的套餐罗列。",
            bullets: ["策划与创意", "影像与记录", "现场执行与统筹"]
          },
          {
            title: "轻量工具",
            description: "让备婚用户不只浏览内容，也能立即开始清单整理和预算规划。",
            bullets: ["可交互", "本地保存", "适合作为平台的第一步功能"]
          }
        ]
      },
      featuredStories: {
        eyebrow: "Featured Stories",
        title: "那些真正动人的婚礼，往往先有一条情绪线，而不是一张流程表。",
        body:
          "故事板块用于承接真实场景、誓言、空间与宾客情绪。即使没有大量图片，也可以用结构化内容建立氛围。"
      },
      services: {
        eyebrow: "Services",
        title: "把审美落地成执行，把喜欢变成被看见的现场。",
        body:
          "服务页不强调销售话术，而强调协作方式、专业判断与现场体验，适合后续补充咨询入口。"
      },
      tools: {
        eyebrow: "Planning Tools",
        title: "从浏览灵感，到开始准备，只需要一点点被好好组织。",
        body:
          "V1 先提供婚礼清单、预算、时间线与宾客管理，让网站在展示之外，真正具备留存价值。"
      },
      cta: {
        title: "如果你正在想象一场属于你们的婚礼，我们可以先从一个方向开始。",
        body:
          "先浏览故事和灵感，再用工具把筹备线索整理出来。等你准备好了，联系也可以很轻松。",
        primaryCta: "查看服务",
        primaryHref: "/zh/services",
        secondaryCta: "联系 Marry",
        secondaryHref: "/zh/about"
      }
    },
    storiesPage: {
      eyebrow: "Stories",
      title: "每一场婚礼都像一部短片，真正留下来的，是人与人之间的气味、光线与停顿。",
      body:
        "这一页展示 Marry 的故事型内容结构。它可以承载真实新人、主题婚礼、旅行婚礼或周年誓言，语气保持克制、缓慢、有画面感。",
      spotlightEyebrow: "Story Spotlight",
      spotlightTitle: "在海边交换誓言之前，他们先花了三个月决定，婚礼应该像一次温柔的晚宴。",
      spotlightBody:
        "婚礼不是简单的流程总和，而是你们如何被朋友记住，如何在那一天重新看见彼此。"
    },
    inspirationPage: {
      eyebrow: "Inspiration",
      title: "灵感不止是配色和花艺，更是空间、温度、音乐与节奏彼此相衬。",
      body:
        "这一页作为内容型画册，适合持续增加主题专栏。V1 先用几组静态专题建立审美方向，后续可扩展成编辑内容库。",
      themes: [
        { title: "庄园午后", description: "奶油白、黄铜、低饱和花束与长桌烛光。" },
        { title: "海边薄暮", description: "盐感空气、柔雾粉调、自然风线条与流动纱幕。" },
        { title: "城市晚宴", description: "深酒红、镜面金属、黑白摄影感与现代花艺。" },
        { title: "春日誓言", description: "薄荷绿、雾灰、轻盈面料与自然生长感。" }
      ]
    },
    servicesPage: {
      eyebrow: "Services",
      title: "我们不把婚礼做成同一种样子，而是陪你找到那场婚礼为什么非你们不可。",
      body:
        "服务页把方法、套餐边界、真实案例与常见问题放在同一个叙事里，帮助访客更快判断 Marry 是否适合自己。",
      processTitle: "合作节奏",
      processBody: "从第一次交流到婚礼落地，我们把抽象偏好翻译成可执行的视觉、预算和现场体验。",
      process: [
        {
          title: "认识你们与场景设定",
          description: "先理解关系状态、婚礼规模、城市与想要留下的感受，而不是先推一套现成答案。"
        },
        {
          title: "主题叙事与视觉提案",
          description: "把你们喜欢的气质、材质、音乐和空间感，整理成统一的婚礼方向。"
        },
        {
          title: "预算与供应商协同",
          description: "明确预算优先级，匹配适合的场地、影像、花艺与执行团队。"
        },
        {
          title: "现场统筹与最终落地",
          description: "把彩排、桌位、物料、时间线和现场联系人真正接起来，保证当日节奏稳定。"
        }
      ],
      packagesTitle: "服务套餐",
      packagesBody: "V1 先提供三种清晰协作方式，既保留高级感，也让服务边界足够明确。",
      packages: [
        {
          title: "Editorial Planning",
          priceNote: "适合中大型婚礼",
          description: "完整婚礼策划与视觉统筹，从前期方向到婚礼当天全程把控。",
          idealFor: "适合希望由一支团队统筹创意、预算、供应商与现场节奏的新人。",
          includes: ["整体概念与视觉提案", "预算结构与供应商协同", "流程设计、彩排与当天统筹"]
        },
        {
          title: "Design Direction",
          priceNote: "适合已有基础筹备",
          description: "聚焦婚礼美学与空间表达，让已有计划更完整、更统一。",
          idealFor: "适合已确定场地或主团队，但需要提升视觉语言与细节表达的新人。",
          includes: ["色板与材质方向", "花艺与纸品视觉建议", "现场重点区域设计说明"]
        },
        {
          title: "Planning Session",
          priceNote: "轻量咨询入口",
          description: "以一次高密度咨询帮助你理顺方向、预算和优先级。",
          idealFor: "适合刚开始筹备、仍在比较不同做法，想先把思路理顺的情侣。",
          includes: ["90 分钟策略沟通", "问题梳理与优先级建议", "会后行动摘要"]
        }
      ],
      casesTitle: "案例片段",
      casesBody: "不是用华丽词藻堆砌结果，而是把每场婚礼如何被组织出来，讲清楚。",
      cases: [
        {
          title: "海边薄暮晚宴",
          location: "舟山",
          season: "初夏",
          summary: "围绕盐感空气、丝缎纹理和长桌烛光，做出一场更偏晚宴感的海边婚礼。",
          deliverables: ["整体策划", "视觉与花艺方向", "宾客动线和晚宴流程"],
          result: "宾客抵达、日落仪式与晚宴衔接自然，婚礼照片呈现出稳定统一的薄暮色调。"
        },
        {
          title: "山谷誓言周末",
          location: "安吉",
          season: "夏末",
          summary: "把住宿、欢迎晚宴、婚礼正日和次日 brunch 组织成一个完整周末体验。",
          deliverables: ["周末时间线规划", "供应商协同", "伴手礼与住宿接待细节"],
          result: "婚礼不再只是当天的仪式，而是一场让亲友慢慢进入情绪的连续叙事。"
        }
      ],
      faqTitle: "常见问题",
      faqBody: "把最常被问到的预算、周期和合作方式先回答清楚，能让第一次咨询轻松很多。",
      faqs: [
        {
          question: "通常需要提前多久开始筹备？",
          answer: "如果是完整婚礼，建议至少提前 6 到 12 个月开始；目的地或旺季档期越热门，越值得更早启动。"
        },
        {
          question: "Marry 会提供固定报价吗？",
          answer: "我们会先根据规模、城市、服务范围给出匹配建议，再形成更准确的合作方案，而不是只发一张模板价目表。"
        },
        {
          question: "如果我已经订了场地或摄影，还能合作吗？",
          answer: "可以。设计统筹或咨询型合作非常适合已经完成部分预订、但仍希望整体气质更统一的新人。"
        },
        {
          question: "外地婚礼或旅行婚礼可以接吗？",
          answer: "可以，只要时间线和供应商协同条件合适，我们也会一起评估异地执行的可行性与预算结构。"
        }
      ]
    },
    toolsPage: {
      eyebrow: "Planning Tools",
      title: "把筹备这件事，从纷乱的信息里，整理回清楚而可执行的节奏。",
      body:
        "工具页为第一次具备真实功能的页面。所有勾选与预算输入都保存在浏览器本地，适合反复回来继续使用。",
      checklist: {
        title: "Wedding Checklist",
        body: "按阶段整理婚礼待办，让每一步都可见、可勾选、可回看。",
        progressLabel: "完成进度",
        totalLabel: "全部任务",
        phaseLabel: "筹备阶段",
        doneLabel: "已完成",
        emptyCurrency: "项"
      },
      budget: {
        title: "Budget Planner",
        body: "把预算拆解到关键类别，快速看见总额与各项占比。",
        totalLabel: "预算总额",
        averageLabel: "平均单项",
        shareLabel: "当前占比",
        currencySymbol: "¥"
      },
      timeline: {
        title: "Timeline Planner",
        body: "把婚礼前 12 个月的重要节点按节奏排开，知道这一阶段真正该推进什么。",
        monthLabel: "建议时间",
        noteLabel: "你的备注",
        summaryLabel: "当前状态",
        statuses: {
          todo: "未开始",
          progress: "进行中",
          booked: "已确认"
        }
      },
      guestManager: {
        title: "Guest Manager",
        body: "先把宾客名单、关系分组和回复状态整理起来，后面的桌位、住宿与接待会轻松很多。",
        addLabel: "添加宾客",
        nameLabel: "宾客姓名",
        namePlaceholder: "例如：Lily Zhang",
        sideLabel: "关系分组",
        sidePlaceholder: "例如：新娘朋友 / 家人 / 同事",
        statusLabel: "回复状态",
        tableLabel: "桌位 / 安排",
        tablePlaceholder: "例如：主桌 / 2 号桌 / 酒店接送",
        noteLabel: "备注",
        notePlaceholder: "饮食偏好、住宿安排、需要特别照顾的地方。",
        emptyLabel: "还没有添加宾客，可以先从最核心的家人和伴郎伴娘开始。",
        totalLabel: "总人数",
        confirmedLabel: "已确认",
        pendingLabel: "待回复",
        statuses: {
          pending: "待回复",
          confirmed: "已确认",
          declined: "无法出席"
        }
      },
      plannerSummary: {
        title: "Planning Snapshot",
        body: "自动汇总清单进度、预算体量、时间线重点与宾客状态，适合整理成一次讨论纪要。",
        copyCta: "复制摘要",
        copiedCta: "已复制",
        resetCta: "重置工具数据"
      }
    },
    aboutPage: {
      eyebrow: "About / Contact",
      title: "Marry 想做的，不只是把婚礼做得漂亮，而是让它被记得更久一点。",
      body:
        "这一页既承接品牌介绍，也承接真实咨询入口。你可以先整理基础信息，再直接把需求发到 Marry 的工作流里。",
      notes: [
        {
          label: "Email",
          title: "写信给我们",
          description: "适合咨询婚礼策划、影像记录或品牌合作。",
          href: "mailto:hello@marrystudio.co"
        },
        {
          label: "Instagram",
          title: "查看编辑式灵感",
          description: "浏览主题板、空间构图与现场细节的视觉片段。",
          href: "https://instagram.com/marry.editorial"
        },
        {
          label: "WeChat",
          title: "更轻松的初步沟通",
          description: "适合快速沟通时间、城市、婚礼规模和初步偏好。"
        },
        {
          label: "Promise",
          title: "保持克制而有回应",
          description: "我们会优先理解婚礼想表达的关系感，而不是先给你一份模板报价。"
        }
      ],
      form: {
        title: "咨询表单",
        body: "先把基础信息整理出来，再直接提交给 Marry；如果你更习惯邮件，也可以用下方的邮件入口作为备用方式。",
        namesLabel: "你们的称呼",
        namesPlaceholder: "例如：Luna & Chen",
        emailLabel: "联系邮箱",
        emailPlaceholder: "you@example.com",
        cityLabel: "婚礼城市",
        cityPlaceholder: "例如：上海 / 杭州 / 三亚",
        dateLabel: "预计日期",
        guestLabel: "宾客规模",
        guestPlaceholder: "例如：80 人左右",
        budgetLabel: "预算范围",
        focusLabel: "当前最想优先解决的事",
        noteLabel: "想告诉 Marry 的补充说明",
        notePlaceholder: "可以写下你们喜欢的婚礼气质、目前卡住的问题、想做成什么样的现场。",
        budgetOptions: ["20 万以内", "20 - 35 万", "35 - 50 万", "50 万以上", "还在评估"],
        focusOptions: ["整体策划", "场地与视觉方向", "摄影摄像", "预算梳理", "先聊聊整体方向"],
        saveLabel: "保存草稿",
        clearLabel: "清空内容",
        submitLabel: "发送咨询",
        sendingLabel: "发送中...",
        successMessage: "咨询已发送，我们会尽快回复你。",
        errorMessage: "发送失败，请稍后重试，或改用邮件方式联系。",
        unavailableMessage: "当前站点还没有配置邮件服务，请先设置 Resend 环境变量。",
        mailtoLabel: "生成咨询邮件",
        draftHint: "草稿会保存在当前浏览器，方便回来继续补充。",
        summaryTitle: "你将发送的重点",
        summaryEmpty: "填写左侧内容后，这里会自动整理成一份简洁摘要。"
      }
    },
    footer: {
      title: "Marry",
      note: "Wedding stories, refined services, and planning essentials."
    },
    stories: [
      {
        title: "山间誓言与雾色晨光",
        subtitle: "一场以静谧和陪伴为中心的小型山谷婚礼",
        summary:
          "他们把婚礼安排在夏末的山谷里，让风声、木桌与轻声交谈成为比花门更重要的布景。",
        tags: ["Mountain", "Intimate", "Editorial"],
        location: "安吉",
        season: "夏末"
      },
      {
        title: "晚宴之前，先让朋友慢慢抵达",
        subtitle: "关于迎宾节奏、微醺灯光和被照顾到的情绪",
        summary:
          "故事不是从仪式开始，而是从第一位宾客推门进来的那一刻开始。所有细节都在为那种松弛感服务。",
        tags: ["Reception", "Warm Light", "Host Mood"],
        location: "上海",
        season: "深秋"
      },
      {
        title: "海风、丝缎与一场缓慢的夜晚",
        subtitle: "把海边婚礼从清新浪漫，做成更有层次的薄暮叙事",
        summary:
          "不是拍照打卡式的海边，而是更贴近晚宴气息、盐雾空气与低饱和色彩的空间表达。",
        tags: ["Coast", "Twilight", "Texture"],
        location: "舟山",
        season: "初夏"
      }
    ],
    services: [
      {
        title: "婚礼整体策划",
        description: "从场景设定、流程组织到现场节奏，把抽象喜好转成完整婚礼叙事。",
        highlights: ["主题设定", "预算梳理", "流程编排"],
        cta: "了解策划方向"
      },
      {
        title: "视觉设计与空间氛围",
        description: "围绕请柬、花艺、材质、光感与桌面陈设，统一婚礼视觉语言。",
        highlights: ["视觉提案", "色板系统", "空间落地"],
        cta: "浏览视觉案例"
      },
      {
        title: "影像记录与内容编辑",
        description: "强调故事感与真实状态，让照片和影片既好看，也保留人物之间的关系张力。",
        highlights: ["照片叙事", "影片节奏", "内容选片"],
        cta: "查看记录方式"
      }
    ],
    tools: [
      {
        title: "Wedding Checklist",
        description: "按时间阶段整理待办，帮你从混乱的聊天记录里找回清晰的筹备节奏。",
        status: "Ready in V1",
        href: "/zh/tools",
        highlights: ["阶段勾选", "本地保存", "适合长期回访"]
      },
      {
        title: "Budget Planner",
        description: "快速录入核心预算项，直观看见重点支出和整体分配。",
        status: "Ready in V1",
        href: "/zh/tools",
        highlights: ["即时计算", "占比展示", "适合前期预估"]
      },
      {
        title: "Timeline Planner",
        description: "按月份梳理婚礼前的重要节点，把“该什么时候推进什么”这件事提前说清楚。",
        status: "Ready in V1",
        href: "/zh/tools",
        highlights: ["阶段推进", "备注整理", "适合沟通纪要"]
      },
      {
        title: "Guest Manager",
        description: "把宾客名单、回复状态和桌位安排先整理起来，为后续执行打好底。",
        status: "Ready in V1",
        href: "/zh/tools",
        highlights: ["名单录入", "RSVP 状态", "桌位备注"]
      }
    ],
    checklistGroups: [
      {
        id: "vision",
        title: "婚礼方向",
        items: [
          { id: "vision-1", task: "确认婚礼城市与季节", note: "先锁定时间与气候氛围" },
          { id: "vision-2", task: "整理你们都喜欢的婚礼画面", note: "用截图或关键词建立共识" },
          { id: "vision-3", task: "确定宾客规模范围", note: "大致决定空间和预算体量" }
        ]
      },
      {
        id: "vendors",
        title: "供应商与预算",
        items: [
          { id: "vendors-1", task: "初步分配预算优先级", note: "先分清最重视的部分" },
          { id: "vendors-2", task: "筛选策划或场地方向", note: "以风格和配合度为先" },
          { id: "vendors-3", task: "确认摄影摄像档期", note: "影像通常需要更早锁定" }
        ]
      },
      {
        id: "experience",
        title: "现场体验",
        items: [
          { id: "experience-1", task: "设计迎宾与入场节奏", note: "决定宾客第一感受" },
          { id: "experience-2", task: "确定誓言、致辞或特别环节", note: "让婚礼更像你们" },
          { id: "experience-3", task: "整理桌卡、伴手礼与提示物", note: "补足细节体验" }
        ]
      }
    ],
    budgetItems: [
      { id: "venue", label: "场地与餐饮", tip: "通常是预算最大头", defaultAmount: 68000 },
      { id: "planner", label: "策划与执行", tip: "决定整体协作和落地质量", defaultAmount: 22000 },
      { id: "visual", label: "花艺与视觉", tip: "影响空间氛围和照片质感", defaultAmount: 30000 },
      { id: "photo", label: "摄影摄像", tip: "记录婚礼当日的重要内容", defaultAmount: 26000 },
      { id: "dress", label: "礼服与造型", tip: "包含服装、妆发与配饰", defaultAmount: 18000 },
      { id: "guest", label: "宾客体验", tip: "伴手礼、住宿接待或交通安排", defaultAmount: 12000 }
    ],
    timelineStages: [
      { id: "twelve", month: "婚礼前 12 个月", title: "确定婚礼方向", focus: "先定城市、季节、宾客规模和整体语气。" },
      { id: "ten", month: "婚礼前 10 个月", title: "锁定场地和主团队", focus: "确认场地、策划或核心合作方，保证热门档期不被错过。" },
      { id: "eight", month: "婚礼前 8 个月", title: "建立预算结构", focus: "把重要预算项拆出来，确认哪些部分最值得投入。" },
      { id: "six", month: "婚礼前 6 个月", title: "推进视觉与影像", focus: "开始敲定花艺、平面物料和摄影摄像档期。" },
      { id: "three", month: "婚礼前 3 个月", title: "完成宾客与流程细化", focus: "把邀请、住宿、桌位和流程节点拉回到执行层。" },
      { id: "one", month: "婚礼前 1 个月", title: "统筹最终确认", focus: "确认彩排、物料、支付节点与当日联系人。" }
    ]
  },
  en: {
    localeLabel: "English",
    meta: {
      title: "Marry Wedding Platform",
      description:
        "A bilingual wedding-inspired platform shaped around editorial stories, refined services, and lightweight planning tools."
    },
    nav: [
      { href: "/en", label: "Home" },
      { href: "/en/stories", label: "Stories" },
      { href: "/en/inspiration", label: "Inspiration" },
      { href: "/en/services", label: "Services" },
      { href: "/en/tools", label: "Tools" },
      { href: "/en/about", label: "About" }
    ],
    home: {
      hero: {
        eyebrow: "For the moments that become memory",
        title: "Place love and promise inside a moment worth remembering.",
        body:
          "Marry brings together wedding stories, visual inspiration, thoughtful service framing, and practical planning tools so an imagined celebration can slowly become a lived one.",
        primaryCta: "Explore",
        primaryHref: "/en/inspiration",
        secondaryCta: "Start Planning",
        secondaryHref: "/en/tools",
        stats: [
          { label: "Story chapters", value: "12+" },
          { label: "Editorial themes", value: "08" },
          { label: "Planning tools", value: "04" }
        ],
        visualQuote: "A wedding should feel beautiful, but even more importantly, unmistakably yours.",
        visualBody:
          "From the hush before a vow to the mood guests carry home, we treat a wedding as a complete emotional narrative."
      },
      proposition: {
        eyebrow: "Brand Proposition",
        title: "Not a template invitation page, but a gateway into romance, taste, and the planning journey itself.",
        body:
          "The homepage is designed to hold atmosphere, service clarity, and usable tools at once, so visitors feel something and also know exactly where to go next.",
        items: [
          {
            title: "Real Stories",
            description: "Editorial storytelling that captures how a couple moves through a space, a promise, and a gathering.",
            bullets: ["Emotion-led pacing", "Built for photo narratives", "Easy to expand into features"]
          },
          {
            title: "Service Presence",
            description: "A warm presentation of planning, creative direction, and coordination instead of a cold grid of packages.",
            bullets: ["Concept and planning", "Image-making", "On-site flow and care"]
          },
          {
            title: "Light Tools",
            description: "Planning visitors can do more than browse. They can begin with structure the moment they arrive.",
            bullets: ["Interactive", "Saved locally", "Useful from day one"]
          }
        ]
      },
      featuredStories: {
        eyebrow: "Featured Stories",
        title: "The weddings people remember most usually begin with an emotional thread, not a spreadsheet.",
        body:
          "The stories section is meant to hold real scenes, vows, settings, and guest feeling. Even without a large image archive, the structure already creates mood."
      },
      services: {
        eyebrow: "Services",
        title: "Turn aesthetic instinct into execution, and private taste into a room people can step into.",
        body:
          "This section presents collaboration, judgment, and live experience first, while still leaving room for future inquiry flows."
      },
      tools: {
        eyebrow: "Planning Tools",
        title: "From collecting inspiration to taking action, it only takes a little structure.",
        body:
          "V1 begins with a checklist, budget planner, timeline view, and guest manager so the site offers something visitors can return to, not only admire."
      },
      cta: {
        title: "If you are imagining a wedding that feels deeply your own, begin with a direction.",
        body:
          "Browse stories and references, then use the tools to shape the planning path. Reaching out can stay beautifully simple.",
        primaryCta: "See Services",
        primaryHref: "/en/services",
        secondaryCta: "Contact Marry",
        secondaryHref: "/en/about"
      }
    },
    storiesPage: {
      eyebrow: "Stories",
      title: "Every wedding carries the rhythm of a short film. What lingers is light, scent, pauses, and the way people look at one another.",
      body:
        "This page is built for story-led content. It can hold real couples, themed celebrations, destination weddings, or vow renewals while keeping the tone restrained and cinematic.",
      spotlightEyebrow: "Story Spotlight",
      spotlightTitle: "Before exchanging vows by the sea, they spent three months deciding that the wedding should feel like a generous dinner party.",
      spotlightBody:
        "A wedding is never just a timeline. It is how your friends remember the room, and how the two of you see each other again inside it."
    },
    inspirationPage: {
      eyebrow: "Inspiration",
      title: "Inspiration is not only palette and florals. It is atmosphere, music, texture, and the pacing of a room.",
      body:
        "This page works like an editorial album. V1 uses a handful of static themes to establish direction, while leaving room for a richer content library later on.",
      themes: [
        { title: "Manor Afternoon", description: "Cream tones, brass details, low-saturation florals, and candlelit long tables." },
        { title: "Coastal Dusk", description: "Salt air, veiled blush tones, flowing textiles, and wind-shaped lines." },
        { title: "City Supper", description: "Bordeaux depth, mirrored metal, monochrome photography mood, and modern florals." },
        { title: "Spring Vows", description: "Mint gray, airy fabrics, and a sense of natural growth rather than decoration." }
      ]
    },
    servicesPage: {
      eyebrow: "Services",
      title: "We are not interested in making every wedding look the same. We are here to uncover why yours could belong to no one else.",
      body:
        "This page now brings together method, package framing, real case snapshots, and practical FAQs so visitors can quickly understand how Marry works.",
      processTitle: "How We Work",
      processBody:
        "From the first conversation to the wedding day itself, we translate taste and emotion into clear decisions, aligned budgets, and an atmosphere guests can actually feel.",
      process: [
        {
          title: "Getting to know the couple and the setting",
          description: "We begin with the relationship, guest scale, city, and emotional tone rather than forcing a ready-made formula."
        },
        {
          title: "Narrative concept and visual direction",
          description: "We shape references, materials, music, and spatial mood into a wedding language that feels coherent."
        },
        {
          title: "Budget alignment and vendor collaboration",
          description: "Budgets are structured around priorities so venue, imagery, florals, and logistics can support the same vision."
        },
        {
          title: "On-site coordination and final realization",
          description: "Run-of-show, rehearsal, guest flow, and final handoff are tied together so the day feels steady and intentional."
        }
      ],
      packagesTitle: "Packages",
      packagesBody:
        "V1 introduces three clear ways to work together, giving the site more substance without flattening the experience into a sales grid.",
      packages: [
        {
          title: "Editorial Planning",
          priceNote: "For full-scale celebrations",
          description: "A complete planning and creative-direction service from first concept to final coordination.",
          idealFor:
            "Best for couples who want one team to shape concept, budget priorities, vendors, and on-site rhythm together.",
          includes: ["Concept and visual narrative", "Budget structure and vendor alignment", "Timeline design, rehearsal, and wedding-day coordination"]
        },
        {
          title: "Design Direction",
          priceNote: "For couples with a planning base already in place",
          description: "A focused service for visual clarity, spatial mood, and elevated design cohesion.",
          idealFor:
            "Best for couples who already have a venue or core team, but want the wedding to feel more considered and unified.",
          includes: ["Palette and material direction", "Florals and paper styling guidance", "Design notes for key guest-facing areas"]
        },
        {
          title: "Planning Session",
          priceNote: "Lightweight strategic entry point",
          description: "A concentrated consultation to bring direction, budget logic, and immediate next steps into focus.",
          idealFor:
            "Best for couples in the early stages who want clarity before committing to a larger planning structure.",
          includes: ["90-minute strategy session", "Priority mapping and decision guidance", "A written summary of next actions"]
        }
      ],
      casesTitle: "Case Notes",
      casesBody:
        "Rather than describing beauty in the abstract, these snapshots show how a wedding is actually shaped from idea into experience.",
      cases: [
        {
          title: "Coastal Dusk Supper",
          location: "Zhoushan",
          season: "Early Summer",
          summary: "A sea-facing wedding built around salt air, silk textures, and the intimacy of a long-table evening.",
          deliverables: ["Full planning", "Visual and floral direction", "Guest flow and dinner pacing"],
          result: "Arrival, ceremony, sunset transition, and dinner all moved with calm continuity, while the imagery held a consistent dusk palette."
        },
        {
          title: "Valley Vow Weekend",
          location: "Anji",
          season: "Late Summer",
          summary: "A multi-day wedding weekend shaped to include lodging, welcome dinner, the ceremony day, and a quiet brunch goodbye.",
          deliverables: ["Weekend timeline planning", "Vendor coordination", "Guest gifting and hospitality details"],
          result: "The celebration felt like a sustained emotional arc instead of a single event confined to one afternoon."
        }
      ],
      faqTitle: "FAQ",
      faqBody: "A first conversation becomes much easier when the usual questions on timing, pricing, and scope are answered in advance.",
      faqs: [
        {
          question: "How early should we begin planning?",
          answer: "For a full wedding, six to twelve months ahead is a healthy window. Destination weddings or peak-season dates often benefit from starting even earlier."
        },
        {
          question: "Do you offer fixed package pricing from the start?",
          answer: "We usually begin with guest scale, city, and service scope, then shape a more accurate proposal instead of sending a generic price sheet too early."
        },
        {
          question: "Can we still work together if we already booked a venue or photographer?",
          answer: "Yes. Design-direction or consultation-based support works especially well for couples who already secured part of the team but want stronger cohesion."
        },
        {
          question: "Do you take destination weddings?",
          answer: "Yes, as long as the timeline, travel realities, and vendor coordination can support a thoughtful execution plan."
        }
      ]
    },
    toolsPage: {
      eyebrow: "Planning Tools",
      title: "Bring the planning process back from scattered notes into something calm, visible, and actionable.",
      body:
        "This is the first page with truly practical functionality. Checklist choices and budget values are stored locally so visitors can return anytime.",
      checklist: {
        title: "Wedding Checklist",
        body: "Organize your to-dos by phase so every step feels visible, trackable, and easy to revisit.",
        progressLabel: "Progress",
        totalLabel: "Total Tasks",
        phaseLabel: "Phases",
        doneLabel: "Completed",
        emptyCurrency: "tasks"
      },
      budget: {
        title: "Budget Planner",
        body: "Break your budget into core categories and instantly see totals and relative weight.",
        totalLabel: "Total Budget",
        averageLabel: "Average Item",
        shareLabel: "Current Share",
        currencySymbol: "$"
      },
      timeline: {
        title: "Timeline Planner",
        body: "Lay out the key milestones across the twelve months before the wedding so each season of planning has a clear purpose.",
        monthLabel: "Suggested Window",
        noteLabel: "Your Notes",
        summaryLabel: "Current Status",
        statuses: {
          todo: "Not Started",
          progress: "In Progress",
          booked: "Confirmed"
        }
      },
      guestManager: {
        title: "Guest Manager",
        body: "Organize names, guest circles, RSVP status, and table notes early so the hospitality side of planning stays calm later on.",
        addLabel: "Add guest",
        nameLabel: "Guest name",
        namePlaceholder: "For example: Lily Zhang",
        sideLabel: "Circle / Side",
        sidePlaceholder: "For example: Family / Bride's friends / Colleagues",
        statusLabel: "RSVP status",
        tableLabel: "Table / Plan",
        tablePlaceholder: "For example: Head table / Table 2 / Hotel transfer",
        noteLabel: "Notes",
        notePlaceholder: "Dietary notes, lodging details, or anything that needs extra care.",
        emptyLabel: "No guests added yet. Start with immediate family, the wedding party, or the friends you are planning around first.",
        totalLabel: "Total Guests",
        confirmedLabel: "Confirmed",
        pendingLabel: "Pending",
        statuses: {
          pending: "Pending",
          confirmed: "Confirmed",
          declined: "Declined"
        }
      },
      plannerSummary: {
        title: "Planning Snapshot",
        body: "A quick summary of checklist progress, budget scale, timeline focus points, and guest status you can reuse in planning conversations.",
        copyCta: "Copy summary",
        copiedCta: "Copied",
        resetCta: "Reset planner"
      }
    },
    aboutPage: {
      eyebrow: "About / Contact",
      title: "Marry is not only about making a wedding look beautiful. It is about helping it stay memorable for longer.",
      body:
        "This page introduces the platform and now includes a live inquiry path. Couples can organize the essentials first, then send them directly into Marry's workflow.",
      notes: [
        {
          label: "Email",
          title: "Write to us",
          description: "For wedding planning inquiries, image direction, or brand collaborations.",
          href: "mailto:hello@marrystudio.co"
        },
        {
          label: "Instagram",
          title: "Browse editorial references",
          description: "A visual stream of moodboards, spatial framing, and quiet wedding detail.",
          href: "https://instagram.com/marry.editorial"
        },
        {
          label: "WeChat",
          title: "A lighter first conversation",
          description: "Ideal for sharing date, city, guest count, and early preferences."
        },
        {
          label: "Promise",
          title: "Measured, thoughtful replies",
          description: "We start by understanding the relationship a wedding wants to express before we ever reduce it to a package."
        }
      ],
      form: {
        title: "Inquiry Form",
        body: "Gather the essential details first, then send them directly to Marry. If you prefer email, a mailto fallback is still available below.",
        namesLabel: "Your names",
        namesPlaceholder: "For example: Luna & Chen",
        emailLabel: "Contact email",
        emailPlaceholder: "you@example.com",
        cityLabel: "Wedding city",
        cityPlaceholder: "For example: Shanghai / Hangzhou / Sanya",
        dateLabel: "Preferred date",
        guestLabel: "Guest count",
        guestPlaceholder: "For example: around 80 guests",
        budgetLabel: "Budget range",
        focusLabel: "What needs the most help right now",
        noteLabel: "Anything else you want Marry to know",
        notePlaceholder: "Share the mood you love, what feels unresolved, or what you hope the celebration will become.",
        budgetOptions: ["Under $30k", "$30k - $50k", "$50k - $75k", "$75k+", "Still exploring"],
        focusOptions: ["Full planning", "Venue and visual direction", "Photo and film", "Budget shaping", "A first strategic conversation"],
        saveLabel: "Save draft",
        clearLabel: "Clear form",
        submitLabel: "Send inquiry",
        sendingLabel: "Sending...",
        successMessage: "Your inquiry has been sent. We will reply as soon as we can.",
        errorMessage: "Sending failed. Please try again shortly, or use the email fallback below.",
        unavailableMessage: "Email service is not configured yet. Please add the Resend environment variables first.",
        mailtoLabel: "Create inquiry email",
        draftHint: "This draft stays in the current browser so you can return and refine it later.",
        summaryTitle: "What your inquiry will cover",
        summaryEmpty: "Once you start filling the form, this area will shape the key talking points for your first note."
      }
    },
    footer: {
      title: "Marry",
      note: "Wedding stories, refined services, and planning essentials."
    },
    stories: [
      {
        title: "Vows in the Hills and Morning Mist",
        subtitle: "An intimate valley wedding built around stillness and companionship",
        summary:
          "They chose a late-summer valley where wind, wood tables, and low conversation mattered more than a decorative arch.",
        tags: ["Mountain", "Intimate", "Editorial"],
        location: "Anji",
        season: "Late Summer"
      },
      {
        title: "Let Guests Arrive Slowly Before Dinner",
        subtitle: "On welcome pacing, warm light, and making people feel gently held",
        summary:
          "The story does not begin with the ceremony. It begins the moment the first guest steps through the door, and every detail serves that ease.",
        tags: ["Reception", "Warm Light", "Host Mood"],
        location: "Shanghai",
        season: "Late Autumn"
      },
      {
        title: "Sea Air, Silk, and a Slow Evening",
        subtitle: "A coastal celebration with more dusk, texture, and depth than postcard sweetness",
        summary:
          "Not a beach wedding made for check-ins, but one shaped by dinner-party mood, salt haze, and quieter color.",
        tags: ["Coast", "Twilight", "Texture"],
        location: "Zhoushan",
        season: "Early Summer"
      }
    ],
    services: [
      {
        title: "Full Wedding Planning",
        description: "Translate instinct, taste, and practical needs into one coherent wedding narrative from start to finish.",
        highlights: ["Concept direction", "Budget shaping", "Flow design"],
        cta: "Explore planning"
      },
      {
        title: "Visual Direction and Atmosphere",
        description: "Unify invitation tone, floral styling, materials, light, and tabletop gestures into one language.",
        highlights: ["Visual proposals", "Palette systems", "Spatial realization"],
        cta: "Browse visual work"
      },
      {
        title: "Photography and Editorial Capture",
        description: "Image-making that keeps story and feeling intact, so documentation feels beautiful without losing intimacy.",
        highlights: ["Photo narrative", "Film pacing", "Content curation"],
        cta: "See capture style"
      }
    ],
    tools: [
      {
        title: "Wedding Checklist",
        description: "Shape your preparation by phase and regain clarity from scattered messages, screenshots, and tabs.",
        status: "Ready in V1",
        href: "/en/tools",
        highlights: ["Phase tracking", "Saved locally", "Built for return visits"]
      },
      {
        title: "Budget Planner",
        description: "Enter core spending categories and quickly understand priority, balance, and the size of the whole.",
        status: "Ready in V1",
        href: "/en/tools",
        highlights: ["Instant totals", "Share breakdown", "Useful for early planning"]
      },
      {
        title: "Timeline Planner",
        description: "Map the major milestones by month so everyone knows what should move forward, and when.",
        status: "Ready in V1",
        href: "/en/tools",
        highlights: ["Milestone planning", "Structured notes", "Useful for team syncs"]
      },
      {
        title: "Guest Manager",
        description: "Track names, RSVP progress, and seating notes before hospitality details start to spread across multiple chats.",
        status: "Ready in V1",
        href: "/en/tools",
        highlights: ["Guest list", "RSVP status", "Table notes"]
      }
    ],
    checklistGroups: [
      {
        id: "vision",
        title: "Wedding Direction",
        items: [
          { id: "vision-1", task: "Confirm the city and season", note: "Anchor the climate and overall mood first" },
          { id: "vision-2", task: "Collect images you both love", note: "Screenshots and keywords are enough to start" },
          { id: "vision-3", task: "Set a guest-count range", note: "This shapes both budget and venue direction" }
        ]
      },
      {
        id: "vendors",
        title: "Vendors and Budget",
        items: [
          { id: "vendors-1", task: "Rank budget priorities", note: "Decide what matters most before comparing quotes" },
          { id: "vendors-2", task: "Shortlist planner or venue options", note: "Style fit and collaboration matter early" },
          { id: "vendors-3", task: "Secure photo and film availability", note: "Strong teams often book out first" }
        ]
      },
      {
        id: "experience",
        title: "Guest Experience",
        items: [
          { id: "experience-1", task: "Design arrival and welcome flow", note: "It shapes the first feeling of the day" },
          { id: "experience-2", task: "Define vows, speeches, or a special ritual", note: "This is where the day becomes deeply personal" },
          { id: "experience-3", task: "Prepare cards, favors, and helpful cues", note: "Small objects often carry the warmest detail" }
        ]
      }
    ],
    budgetItems: [
      { id: "venue", label: "Venue and Catering", tip: "Usually the largest part of the budget", defaultAmount: 9800 },
      { id: "planner", label: "Planning and Coordination", tip: "This shapes collaboration and final quality", defaultAmount: 3200 },
      { id: "visual", label: "Florals and Styling", tip: "A major driver of atmosphere and image feel", defaultAmount: 4500 },
      { id: "photo", label: "Photo and Film", tip: "Captures what the day becomes afterward", defaultAmount: 3800 },
      { id: "dress", label: "Wardrobe and Beauty", tip: "Outfits, tailoring, hair, makeup, accessories", defaultAmount: 2600 },
      { id: "guest", label: "Guest Experience", tip: "Favors, lodging support, transport, or welcome details", defaultAmount: 1800 }
    ],
    timelineStages: [
      { id: "twelve", month: "12 months before", title: "Set the wedding direction", focus: "Define city, season, guest count, and the emotional tone of the day." },
      { id: "ten", month: "10 months before", title: "Secure venue and the core team", focus: "Lock in the venue and foundational collaborators before the most desirable dates disappear." },
      { id: "eight", month: "8 months before", title: "Shape the budget structure", focus: "Clarify where budget should stretch and where restraint will protect the bigger vision." },
      { id: "six", month: "6 months before", title: "Advance visual and image work", focus: "Move florals, printed materials, and photo or film bookings into real decisions." },
      { id: "three", month: "3 months before", title: "Refine guests and flow", focus: "Bring invitations, lodging, seating, and ceremony timing into execution detail." },
      { id: "one", month: "1 month before", title: "Confirm final logistics", focus: "Review rehearsal, materials, payment timing, and every point of contact for the day." }
    ]
  }
};

export function getLocaleContent(locale: Locale) {
  return localeContent[locale];
}
