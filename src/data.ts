import { Episode, SubChannel, SponsorPackage } from './types';

export const PODCAST_STATS = {
  subscribers: '270K+',
  episodes: '400+',
  views: '10M+',
  monthlyReach: '450K+',
  audienceDemographics: {
    ageRange: '18-35 (78%)',
    regions: 'Ethiopia (72%), Diaspora (28% - USA, Europe, GCC)',
    professionals: '65% Entrepreneurs, Tech Experts, Professionals & Students'
  }
};

export const PAST_SPONSORS = [
  { name: 'Safaricom Ethiopia', logoText: 'Safaricom', industry: 'Telecom' },
  { name: 'Dashen Bank', logoText: 'Dashen Bank', industry: 'Fintech & Banking' },
  { name: 'ALX Ethiopia', logoText: 'ALX', industry: 'EdTech & Training' },
  { name: 'Gebeya Inc.', logoText: 'Gebeya', industry: 'Talent Network' },
  { name: 'Chapa', logoText: 'Chapa', industry: 'Payment Gateway' }
];

export const EPISODES_DATA: Episode[] = [
  {
    id: 'ep-402',
    title: 'Building the Future of Ethiopian Payments & Digital Infrastructure',
    guestName: 'Israel Goytom',
    guestTitle: 'Co-founder & CTO of Chapa',
    guestAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder or demo video
    duration: '1h 24m',
    publishedDate: 'July 15, 2026',
    category: 'Tech',
    views: '45K',
    likes: '4.2K',
    summary: 'An inside look at how fintech platforms in Ethiopia are scaling up after the liberalisation of the national financial sector, handling heavy transaction traffic, and securing global integrations.',
    takeaways: [
      'The transition from traditional cash transfers to open API banking in Ethiopia.',
      'How to build highly available fintech architecture using regional cloud clusters.',
      'Addressing the regulatory landscape and compliance requirements under National Bank guidelines.'
    ]
  },
  {
    id: 'ep-398',
    title: 'Commodity Exchanges & Modernizing Ethiopian Agriculture Networks',
    guestName: 'Dr. Eleni Gabre-Madhin',
    guestTitle: 'Founder of ECX & Global Innovator',
    guestAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '1h 48m',
    publishedDate: 'June 28, 2026',
    category: 'Business',
    views: '89K',
    likes: '7.8K',
    summary: 'The legendary agricultural economist shares her insights on setting up the Ethiopia Commodity Exchange (ECX), creating structured marketplaces, and her vision for the next phase of African trade.',
    takeaways: [
      'The foundational mechanics of market price discovery and supply chain security.',
      'Why modern soft commodities trading requires deep structural trust and fast payment clearing.',
      'How technology can bridge the gap for rural smallholder cooperatives.'
    ]
  },
  {
    id: 'ep-395',
    title: 'Ethical Footwear and Elevating Ethiopian Brands Globally',
    guestName: 'Bethlehem Tilahun Alemu',
    guestTitle: 'Founder & CEO of soleRebels',
    guestAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '1h 12m',
    publishedDate: 'June 12, 2026',
    category: 'Culture',
    views: '62K',
    likes: '5.1K',
    summary: 'Bethlehem details the journey of taking traditional Ethiopian artisan skills to global markets, constructing local eco-friendly factories, and building an globally recognized brand.',
    takeaways: [
      'Empowering local artisans by offering triple the average national wage with deep social care.',
      'Marketing strategy: How soleRebels bypassed conventional retail distribution channels.',
      'Managing global international logistics from the heart of Addis Ababa.'
    ]
  },
  {
    id: 'ep-390',
    title: 'Navigating Venture Capital & Startups in East Africa',
    guestName: 'Bernard Laurendeau',
    guestTitle: 'Managing Partner at Laurendeau & Associates',
    guestAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '1h 35m',
    publishedDate: 'May 20, 2026',
    category: 'Finance',
    views: '38K',
    likes: '3.1K',
    summary: 'An analytical discussion on the flow of foreign venture funding, domestic angel investment, and the real-world execution of the Startup Act in Ethiopia.',
    takeaways: [
      'Unpacking current foreign exchange regulations and impact on equity investment.',
      'Creating local holding structures that accommodate international VC funds.',
      'Talent pipelines: Building high-performance local engineering squads.'
    ]
  }
];

export const SUB_CHANNELS: SubChannel[] = [
  {
    id: 'ch-shorts',
    name: 'Alive Shorts',
    handle: '@AliveShorts',
    subscribers: '120K+',
    description: 'Bite-sized high-impact entrepreneurial wisdom, golden takeaways, and sharp highlights from our primary interviews.',
    iconType: 'shorts',
    accentColor: 'from-[#FF3B30] to-[#E0241B]',
    youtubeUrl: 'https://youtube.com'
  },
  {
    id: 'ch-mainpoint',
    name: 'Main Point with Abrham',
    handle: '@MainPointEthiopia',
    subscribers: '85K+',
    description: 'Solo deep-dives where host Abrham Fantu breaks down critical news, business models, and national financial regulatory policies.',
    iconType: 'point',
    accentColor: 'from-[#007AFF] to-[#0056B3]',
    youtubeUrl: 'https://youtube.com'
  },
  {
    id: 'ch-journey',
    name: 'The Journey Podcast',
    handle: '@TheJourneyEth',
    subscribers: '65K+',
    description: 'Focusing on personal development, mental resilience, and behind-the-scenes struggles of top Ethiopian creators and builders.',
    iconType: 'journey',
    accentColor: 'from-[#FFCC00] to-[#CC9900]',
    youtubeUrl: 'https://youtube.com'
  }
];

export const SPONSOR_PACKAGES: SponsorPackage[] = [
  {
    id: 'pkg-hero',
    name: 'Show Presenter (Title Sponsor)',
    priceRange: 'Contact for Custom Proposal',
    reach: '450,000+ views/month',
    description: 'The highest integration level. Your brand is featured as the primary presenter of the main show, integrated seamlessly into host introductions.',
    features: [
      '60-second host-read mid-roll with visual graphics',
      'Primary logo watermarked on video stream',
      'Pinned YouTube comment link & video description top link',
      'Exclusive category buyout (no competitors allowed)',
      'Newsletter and Telegram channel primary features'
    ],
    bestFor: 'Major Telecoms, Banks, FinTechs, and Tech Giants looking to dominate market share.'
  },
  {
    id: 'pkg-segment',
    name: 'Segment Spotlight Sponsor',
    priceRange: '$1,500 / Month (3 Month Min)',
    reach: '200,000+ views/month',
    description: 'Sponsor a dedicated segment (e.g., "The Tech Minute" or "Ethiopian Market Watch") where your service directly solves the problems discussed.',
    features: [
      '30-second co-host or guest-integrated sponsor read',
      'Logo on screen overlay during segment duration',
      'Dedicated link inside descriptions',
      '1 dedicated social media short post integration'
    ],
    bestFor: 'Growing platforms, SaaS products, and local training programs seeking high-intent users.'
  },
  {
    id: 'pkg-network',
    name: 'Full Network Package',
    priceRange: 'Premium Integration Plan',
    reach: '800,000+ aggregate views/month',
    description: 'Dominate the entire Alive brand eco-system, distributing ads across Alive Shorts, Main Point, and The Journey.',
    features: [
      'Multi-channel custom read scripts (shorts, clips, and long-form)',
      'Logo displays across all 3 secondary channels',
      'Dedicated sponsor segment in all media sub-channels',
      'Bi-weekly newsletter and Telegram banner integrations'
    ],
    bestFor: 'Conglomerates, FMCG, and modern educational programs targeting active Ethiopian youth.'
  }
];
