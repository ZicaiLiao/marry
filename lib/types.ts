export type Locale = "zh" | "en";

export type NavItem = {
  href: string;
  label: string;
};

export type StoryItem = {
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  location: string;
  season: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  highlights: string[];
  cta: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServicePackage = {
  title: string;
  priceNote: string;
  description: string;
  idealFor: string;
  includes: string[];
};

export type ServiceCaseStudy = {
  title: string;
  location: string;
  season: string;
  summary: string;
  deliverables: string[];
  result: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ToolItem = {
  title: string;
  description: string;
  status: string;
  href: string;
  highlights: string[];
};

export type TimelineStatus = "todo" | "progress" | "booked";

export type GuestStatus = "pending" | "confirmed" | "declined";

export type TimelineStage = {
  id: string;
  month: string;
  title: string;
  focus: string;
};

export type GuestItem = {
  id: string;
  name: string;
  side: string;
  status: GuestStatus;
  table: string;
  note: string;
};

export type SiteConfig = {
  brand: string;
  strapline: string;
  email: string;
  instagram: string;
  wechat: string;
  siteUrl: string;
  defaultOgImage: string;
};

export type LocaleContent = {
  localeLabel: string;
  meta: {
    title: string;
    description: string;
  };
  pageMeta: {
    home: {
      title: string;
      description: string;
      keywords: string[];
    };
    stories: {
      title: string;
      description: string;
      keywords: string[];
    };
    inspiration: {
      title: string;
      description: string;
      keywords: string[];
    };
    services: {
      title: string;
      description: string;
      keywords: string[];
    };
    tools: {
      title: string;
      description: string;
      keywords: string[];
    };
    about: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
  nav: NavItem[];
  home: {
    hero: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCta: string;
      primaryHref: string;
      secondaryCta: string;
      secondaryHref: string;
      stats: Array<{
        label: string;
        value: string;
      }>;
      visualQuote: string;
      visualBody: string;
    };
    proposition: {
      eyebrow: string;
      title: string;
      body: string;
      items: Array<{
        title: string;
        description: string;
        bullets: string[];
      }>;
    };
    featuredStories: {
      eyebrow: string;
      title: string;
      body: string;
    };
    services: {
      eyebrow: string;
      title: string;
      body: string;
    };
    tools: {
      eyebrow: string;
      title: string;
      body: string;
    };
    cta: {
      title: string;
      body: string;
      primaryCta: string;
      primaryHref: string;
      secondaryCta: string;
      secondaryHref: string;
    };
  };
  storiesPage: {
    eyebrow: string;
    title: string;
    body: string;
    spotlightEyebrow: string;
    spotlightTitle: string;
    spotlightBody: string;
  };
  inspirationPage: {
    eyebrow: string;
    title: string;
    body: string;
    themes: Array<{
      title: string;
      description: string;
    }>;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    body: string;
    processTitle: string;
    processBody: string;
    process: ServiceProcessStep[];
    packagesTitle: string;
    packagesBody: string;
    packages: ServicePackage[];
    casesTitle: string;
    casesBody: string;
    cases: ServiceCaseStudy[];
    faqTitle: string;
    faqBody: string;
    faqs: FAQItem[];
  };
  toolsPage: {
    eyebrow: string;
    title: string;
    body: string;
    checklist: {
      title: string;
      body: string;
      progressLabel: string;
      totalLabel: string;
      phaseLabel: string;
      doneLabel: string;
      emptyCurrency: string;
    };
    budget: {
      title: string;
      body: string;
      totalLabel: string;
      averageLabel: string;
      shareLabel: string;
      currencySymbol: string;
    };
    timeline: {
      title: string;
      body: string;
      monthLabel: string;
      noteLabel: string;
      summaryLabel: string;
      statuses: Record<TimelineStatus, string>;
    };
    guestManager: {
      title: string;
      body: string;
      addLabel: string;
      nameLabel: string;
      namePlaceholder: string;
      sideLabel: string;
      sidePlaceholder: string;
      statusLabel: string;
      tableLabel: string;
      tablePlaceholder: string;
      noteLabel: string;
      notePlaceholder: string;
      emptyLabel: string;
      totalLabel: string;
      confirmedLabel: string;
      pendingLabel: string;
      statuses: Record<GuestStatus, string>;
    };
    plannerSummary: {
      title: string;
      body: string;
      copyCta: string;
      copiedCta: string;
      resetCta: string;
    };
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    body: string;
    notes: Array<{
      label: string;
      title: string;
      description: string;
      href?: string;
    }>;
    form: {
      title: string;
      body: string;
      namesLabel: string;
      namesPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      cityLabel: string;
      cityPlaceholder: string;
      dateLabel: string;
      guestLabel: string;
      guestPlaceholder: string;
      budgetLabel: string;
      focusLabel: string;
      noteLabel: string;
      notePlaceholder: string;
      budgetOptions: string[];
      focusOptions: string[];
      saveLabel: string;
      clearLabel: string;
      submitLabel: string;
      sendingLabel: string;
      successMessage: string;
      errorMessage: string;
      unavailableMessage: string;
      mailtoLabel: string;
      draftHint: string;
      summaryTitle: string;
      summaryEmpty: string;
    };
  };
  footer: {
    title: string;
    note: string;
  };
  stories: StoryItem[];
  services: ServiceItem[];
  tools: ToolItem[];
  checklistGroups: Array<{
    id: string;
    title: string;
    items: Array<{
      id: string;
      task: string;
      note: string;
    }>;
  }>;
  budgetItems: Array<{
    id: string;
    label: string;
    tip: string;
    defaultAmount: number;
  }>;
  timelineStages: TimelineStage[];
};
