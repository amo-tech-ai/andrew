import { ModelData, ContactInfo, SectionId } from './types';

export const NAVIGATION_ITEMS = [
  { label: 'EYE SPY', href: `#${SectionId.EYE_SPY}` },
  { label: 'COLLECTIONS', href: `#${SectionId.COLLECTIONS}` },
  { label: 'BIO', href: `#${SectionId.BIOGRAPHY}` },
  { label: 'CONTACT', href: `#${SectionId.CONTACT}` },
];

export const HERO_MODEL_IMG = "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1200&auto=format&fit=crop";

export const EYE_SPY_COLLECTION: ModelData[] = [
  {
    id: '1',
    name: 'NOVA OBSCURA',
    code: '170601B BLACK SHINY DIVE DRESS',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'LUMINOUS VOID',
    code: '182209C SILK ORGANZA GOWN',
    image: 'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'ASTRAL PLANE',
    code: '190411A STRUCTURED WOOL COAT',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'ECLIPSE PHASE',
    code: '200115D VELVET SCULPTED JACKET',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
  }
];

export const PAST_COLLECTIONS: ModelData[] = [
  {
    id: 'pc1',
    name: 'Madame de Pizan',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'pc2',
    name: 'Romanov Women',
    image: 'https://images.unsplash.com/photo-1529139574466-a302c27e811f?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'pc3',
    name: 'Modern Shipping',
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'pc4',
    name: 'Ice Moon of Europa',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop',
  }
];

export const BIO_IMAGE = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop";

export const CONTACT_DATA: ContactInfo[] = [
  {
    label: 'Europe / International',
    lines: ['365 St. John Street', 'London EC1V 4LB', 'United Kingdom', 'Tel: +44 (0)20 7713 1288', 'info@andrewmajtenyi.com']
  },
  {
    label: 'Canadian Press',
    lines: ['Christian Dare', 'Stylist Box', 'Tel: +1 647 466 1077', 'christian@stylistbox.com']
  },
  {
    label: 'Buyer Inquiries',
    lines: ['International Sales', 'Talent to Trend', '12-18 Passage Choiseul', '75002 Paris', 'miyoko@talent-to-trend.com']
  }
];
