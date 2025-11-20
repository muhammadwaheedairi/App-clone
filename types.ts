export interface TestimonialData {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  content: string;
  source?: string; // e.g., 'Reflect Notes'
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}