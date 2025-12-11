export interface ModelData {
  id: string;
  name: string;
  image: string;
  description?: string;
  code?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  label: string;
  lines: string[];
}

export enum SectionId {
  HERO = 'hero',
  EYE_SPY = 'eye-spy',
  COLLECTIONS = 'collections',
  BIOGRAPHY = 'biography',
  CONTACT = 'contact',
}
