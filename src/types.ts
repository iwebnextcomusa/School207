export type NavPage = 'home' | 'about' | 'academics' | 'admissions' | 'teachers' | 'gallery' | 'news' | 'contact';

export interface Teacher {
  id: string;
  name: string;
  role: string;
  department: 'science' | 'mathematics' | 'languages' | 'social_studies' | 'sports' | 'arts';
  qualification: string;
  experience: string;
  email: string;
  image: string;
  bio: string;
  awards?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Notice' | 'Achievement' | 'Academic' | 'Sports' | 'General';
  summary: string;
  content: string;
  image: string;
  isImportant?: boolean;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string; // ISO date format YYYY-MM-DD
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'labs' | 'sports' | 'events' | 'cultural';
  imageUrl: string;
  caption: string;
}

export interface AcademicProgram {
  id: string;
  level: string;
  grades: string;
  description: string;
  subjects: string[];
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'admissions' | 'academics' | 'general' | 'facilities';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  year?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
