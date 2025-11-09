export type ServiceCategory = "seitai" | "esthe" | "pulse" | "campaign";

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  price: number;
  originalPrice?: number;
  duration: number;
  description: string;
  features: string[];
  benefits: string[];
  targetSymptoms: string[];
  isPopular?: boolean;
  isLimitedTime?: boolean;
  order: number;
}

export interface Review {
  id: string;
  name: string;
  age: number;
  occupation: string;
  rating: number;
  comment: string;
  beforeSymptoms: string[];
  afterEffects: string[];
  serviceUsed: string[];
  date: string;
  photoPermission: boolean;
  beforeAfterPhotos?: {
    before: string;
    after: string;
  };
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  qualifications: string[];
  experience: number;
  photo: string;
  message: string;
  specialties: string[];
  order: number;
}

export type BlogCategory = "posture" | "health" | "beauty" | "selfcare" | "salon-news";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  featuredImage?: string;
  author: string;
  readTime: number;
  isPublished: boolean;
}

export type FAQCategory = "service" | "reservation" | "payment" | "ai-diagnosis" | "access" | "other";

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  order: number;
  isFrequent: boolean;
}

export interface BusinessHours {
  [key: string]: {
    open: string;
    close: string;
    isHoliday: boolean;
  };
}

export interface SalonInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  businessHours: BusinessHours;
  regularHolidays: string[];
  specialHolidays?: string[];
  access: {
    nearestStation: string;
    walkingTime: number;
    directions: string[];
  };
  parking: {
    available: boolean;
    capacity?: number;
    fee?: string;
    nearbyParking?: string[];
  };
  socialMedia: {
    line?: string;
    instagram?: string;
  };
  googleMapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
