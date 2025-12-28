
export interface GeneratedName {
  name: string;
  tagline: string;
  explanation: string;
}

export interface GeneratorParams {
  industry: string;
  keywords: string;
  tone: 'professional' | 'creative' | 'modern' | 'playful';
}

export enum PageRoute {
  Home = '/',
  Tool = '/tool',
  About = '/about',
  Privacy = '/privacy',
  Terms = '/terms',
  Contact = '/contact'
}
