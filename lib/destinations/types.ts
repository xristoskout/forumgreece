import { Localized } from "../content";

export type GuideSection = {
  title: Localized;
  text: Localized;
};

export type GuideItem = {
  title: Localized;
  description: Localized;
};

export type GuideCategory = {
  intro?: Localized;
  items: GuideItem[];
  secret?: Localized;
};

export type DestinationGuide = {
  slug: string;
  seo: {
    metaTitle: Localized;
    metaDescription: Localized;
  };
  intro: {
    title: Localized;
    text: Localized[];
  };
  whyVisit: {
    title: Localized;
    reasons: GuideItem[];
  };
  bestTime: {
    title: Localized;
    intro: Localized;
    seasons: GuideItem[];
    secret: Localized;
  };
  howToGetThere: {
    title: Localized;
    methods: GuideItem[];
  };
  topAttractions: {
    title: Localized;
    items: GuideItem[];
  };
  areasAndFood: {
    title: Localized;
    beaches: GuideCategory;
    villages: GuideCategory;
    food: GuideCategory;
  };
  practicalTips: {
    title: Localized;
    tips: GuideCategory;
  };
  faq: {
    title: Localized;
    questions: { q: Localized; a: Localized }[];
  };
};
