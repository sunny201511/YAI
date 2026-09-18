export type ProductStatus = 'stable' | 'beta' | 'coming-soon';

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductStep = {
  title: string;
  description: string;
  image?: string;
};

export type ProductHero = {
  title: string;
  subtitle: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  image: string;
};

export type ProductConfig = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  status: ProductStatus;
  icon: string;
  cover: string;
  hero: ProductHero;
  screenshots: string[];
  features: ProductFeature[];
  steps: ProductStep[];
};

export type ProductsConfig = {
  [key: string]: ProductConfig;
};
