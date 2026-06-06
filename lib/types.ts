export type Localized = {
  en: string;
  el: string;
};

export type LocalizedList = {
  en: string[];
  el: string[];
};

export type Category = {
  title: Localized;
  description: Localized;
  emoji: string;
  href?: string;
  featured?: boolean;
};

export type Destination = {
  slug: string;
  name: string;
  region: Localized;
  blurb: Localized;
  image: string;
  overview: Localized;
  highlights: LocalizedList;
  seo?: {
    title: Localized;
    description: Localized;
  };
  guideLinks?: {
    href: string;
    label: Localized;
  }[];
  featured?: boolean;
};

export type GuideSection = {
  title: Localized;
  content: Localized;
};

export type GuideCard = {
  slug: string;
  title: Localized;
  description: Localized;
  image: string;
  overview: Localized;
  points: LocalizedList;
  sections?: GuideSection[];
  tips?: LocalizedList;
  faq?: HotelFAQ[];
};

export type HotelFAQ = {
  q: Localized;
  a: Localized;
};

export type HotelCard = {
  slug: string;
  name: string;
  place: string;
  info: Localized;
  image: string;
  badge?: string;
  overview: Localized;
  features: LocalizedList;
  description?: Localized;
  services?: LocalizedList;
  story?: Localized;
  perfectFor?: LocalizedList;
  practicalInfo?: LocalizedList;
  mapQuery?: string;
  mapIframe?: string;
  galleryImages?: string[];
  phone?: string;
  email?: string;
  website?: string;
  youtube?: string;
  featuredBusinesses?: string[];
  sections?: GuideSection[];
  faq?: HotelFAQ[];
  seo?: {
    title: Localized;
    description: Localized;
  };
};

export type FoodCard = {
  slug: string;
  title: Localized;
  place: string;
  info: Localized;
  image: string;
  overview: Localized;
  specialties: LocalizedList;
  sections?: TourSection[];
  metaTitle?: Localized;
  metaDescription?: Localized;
  keywords?: LocalizedList;
};

export type TourSection = {
  title: Localized;
  text: Localized;
};

export type TourItem = {
  slug: string;
  image: string;
  place: string;
  title: Localized;
  info: Localized;
  cta?: Localized;
  description: Localized;
  overview: Localized;
  highlights: LocalizedList;
  included: LocalizedList;
  perfectFor: LocalizedList;
  sections: TourSection[];
};

export type BlogPost = {
  slug: string;
  title: Localized;
  excerpt: Localized;
  body: Localized;
  image: string;
  author: string;
  publishedDate: string;
  category: Localized;
  tags: string[];
  featured?: boolean;
  seo?: {
    title: Localized;
    description: Localized;
  };
};

export type CommunityCard = {
  title: Localized;
  description: Localized;
  href: string;
};
