export interface Profile {
  name: string;
  role: string;
  location: string;
  available: boolean;
  email: string;
  avatarUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  iconUrl?: string;
  link?: string;
}

export interface Product {
  id: string;
  title: string;
  tag?: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
  rating?: number;
}
