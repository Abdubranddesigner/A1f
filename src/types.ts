export interface EpisodeTimestamp {
  time: string;
  label: string;
}

export interface Episode {
  id: string;
  title: string;
  guestName: string;
  guestTitle: string;
  guestAvatar: string;
  thumbnailUrl?: string;
  videoType?: string;
  youtubeId: string;
  duration: string;
  publishedDate: string;
  category: 'Business' | 'Tech' | 'Culture' | 'Finance';
  views: string;
  likes: number | string;
  summary: string;
  takeaways: string[];
  audioUrl?: string;
  timestamps?: EpisodeTimestamp[];
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
