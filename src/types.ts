export interface Episode {
  id: string;
  title: string;
  guestName: string;
  guestTitle: string;
  guestAvatar: string;
  youtubeId: string;
  duration: string;
  publishedDate: string;
  category: 'Business' | 'Tech' | 'Culture' | 'Finance';
  views: string;
  likes: string;
  summary: string;
  takeaways: string[];
  audioUrl?: string;
}

export interface SubChannel {
  id: string;
  name: string;
  handle: string;
  subscribers: string;
  description: string;
  iconType: 'shorts' | 'point' | 'journey';
  accentColor: string;
  youtubeUrl: string;
}

export interface SponsorBenefit {
  metric: string;
  label: string;
}

export interface SponsorPackage {
  id: string;
  name: string;
  priceRange: string;
  reach: string;
  description: string;
  features: string[];
  bestFor: string;
}
