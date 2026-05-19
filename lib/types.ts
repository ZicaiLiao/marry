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

export type ToolItem = {
  title: string;
  description: string;
  status: string;
  href: string;
  highlights: string[];
};

export type SiteConfig = {
  brand: string;
  strapline: string;
  email: string;
  instagram: string;
  wechat: string;
};

export type LocaleContent = {
  localeLabel: string;
  meta: {
    title: string;
    description: string;
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
    process: string[];
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
};
