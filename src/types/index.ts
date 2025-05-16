export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  client?: string;
  year?: number;
  link?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  company: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    missionTitle: string;
    missionDescription: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    email: string;
    phone: string;
  };
  blog: {
    title: string;
    subtitle: string;
    posts: BlogPost[];
  };
}

export interface AdminCredentials {
  username: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

export interface LoginFormData {
  username: string;
  password: string;
}

// API Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system';
}