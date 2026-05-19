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
          { label: "备婚工具模块", value: "02" }
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
          "V1 先提供婚礼清单和预算规划器，让网站在展示之外，真正具备留存价值。"
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
        "服务模块强调协作关系、审美判断与执行细节。页面结构已经为后续真实案例、报价方式与咨询表单预留空间。",
      processTitle: "合作节奏",
      process: ["认识你们与场景设定", "主题叙事与视觉提案", "预算与供应商协同", "现场统筹与最终落地"]
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
      }
    },
    aboutPage: {
      eyebrow: "About / Contact",
      title: "Marry 想做的，不只是把婚礼做得漂亮，而是让它被记得更久一点。",
      body:
        "这一页既承接品牌介绍，也承接轻量联系入口。V1 不做复杂表单，但会明确告诉访客如何继续对话。",
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
      ]
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
        title: "Timeline Notes",
        description: "为后续扩展预留的时间线模块，用于整理拍摄、彩排和宾客到场节奏。",
        status: "Coming Soon",
        href: "/zh/tools",
        highlights: ["模块预留", "适配后续版本", "不影响当前结构"]
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
          { label: "Planning tools", value: "02" }
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
          "V1 begins with a checklist and a budget planner so the site offers something visitors can return to, not only admire."
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
        "The services section is centered on collaboration, aesthetic discernment, and execution detail, with clear room to grow into inquiries and real casework later.",
      processTitle: "How We Work",
      process: [
        "Getting to know the couple and the setting",
        "Narrative concept and visual direction",
        "Budget alignment and vendor collaboration",
        "On-site coordination and final realization"
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
      }
    },
    aboutPage: {
      eyebrow: "About / Contact",
      title: "Marry is not only about making a wedding look beautiful. It is about helping it stay memorable for longer.",
      body:
        "This page introduces the platform and keeps the contact path light. V1 does not need a full inquiry system to make the next step feel clear.",
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
      ]
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
        title: "Timeline Notes",
        description: "A reserved module for future releases, built to eventually hold rehearsal, photo, and guest flow timing.",
        status: "Coming Soon",
        href: "/en/tools",
        highlights: ["Reserved slot", "Future-ready", "No impact on current structure"]
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
    ]
  }
};

export function getLocaleContent(locale: Locale) {
  return localeContent[locale];
}
