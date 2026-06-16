import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export interface Project {
  id: string;
  name: string;
  businessName: string;
  description: string;
  logo: string;
  heroImage: string;
  accentColor: string;
  services: Service[];
  aboutText: string;
  testimonials: Testimonial[];
  theme: 'light' | 'dark' | 'custom';
  fontFamily: string;
  serviceSectionTitle: string;
  serviceSectionSubtitle: string;
  serviceArea?: string;
}
