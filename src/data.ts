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
    id: 'ep-405',
    title: 'AI in East Africa: Building LLMs for Amharic & African Languages',
    guestName: 'Dr. Fitsum Gaim',
    guestTitle: 'AI Research Director & Co-Founder of Lesan AI',
    guestAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    videoType: 'Tech Deep-Dive & AI Special',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '1h 18m',
    publishedDate: 'July 20, 2026',
    category: 'Tech',
    views: '54K',
    likes: 4820,
    summary: 'Exploring indigenous AI developments, collecting low-resource African language corpora, and deploying localized NLP models for cross-border African commerce.',
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg',
    timestamps: [
      { time: '00:00', label: 'Intro & State of African AI' },
      { time: '14:20', label: 'Tokenization for Amharic & Ge\'ez Script' },
      { time: '38:45', label: 'Sovereign AI Compute & Regional Data Privacy' },
      { time: '1:02:10', label: 'Monetizing AI Micro-Services in East Africa' }
    ],
    takeaways: [
      'Why low-resource language models require novel tokenization strategies beyond standard Western LLMs.',
      'How localized machine translation unlocks cross-border eCommerce across the Horn of Africa.',
      'Strategies for building cost-efficient inference servers under strict bandwidth constraints.'
    ]
  },
  {
    id: 'ep-402',
    title: 'Building the Future of Ethiopian Payments & Digital Infrastructure',
    guestName: 'Israel Goytom',
    guestTitle: 'Co-founder & CTO of Chapa',
    guestAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
    videoType: 'Fintech & Digital Infrastructure',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '1h 24m',
    publishedDate: 'July 15, 2026',
    category: 'Tech',
    views: '45K',
    likes: 4200,
    summary: 'An inside look at how fintech platforms in Ethiopia are scaling up after the liberalisation of the national financial sector, handling heavy transaction traffic, and securing global integrations.',
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/office_ambient.ogg',
    timestamps: [
      { time: '00:00', label: 'The Genesis of Chapa Payment Gateway' },
      { time: '18:10', label: 'Architecting for High Throughput Peak Sales' },
      { time: '41:30', label: 'National Bank Regulations & Compliance' },
      { time: '1:10:05', label: 'Future of Interoperable Mobile Money' }
    ],
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
    thumbnailUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800',
    videoType: 'AgriTech & Commodity Trade',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '1h 48m',
    publishedDate: 'June 28, 2026',
    category: 'Business',
    views: '89K',
    likes: 7800,
    summary: 'The legendary agricultural economist shares her insights on setting up the Ethiopia Commodity Exchange (ECX), creating structured marketplaces, and her vision for the next phase of African trade.',
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg',
    timestamps: [
      { time: '00:00', label: 'Why Commodity Exchanges Matter' },
      { time: '22:15', label: 'Building Market Trust & Clearinghouses' },
      { time: '55:00', label: 'AgriTech Innovation & Smallholder Farmers' },
      { time: '1:25:30', label: 'Pan-African Free Trade (AfCFTA) Opportunities' }
    ],
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
    thumbnailUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
    videoType: 'Brand Story & Eco-Manufacturing',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '1h 12m',
    publishedDate: 'June 12, 2026',
    category: 'Culture',
    views: '62K',
    likes: 5100,
    summary: 'Bethlehem details the journey of taking traditional Ethiopian artisan skills to global markets, constructing local eco-friendly factories, and building an globally recognized brand.',
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/office_ambient.ogg',
    timestamps: [
      { time: '00:00', label: 'Story of Zenith Artisan Heritage' },
      { time: '15:40', label: 'Fair Wages & Community Profit Sharing' },
      { time: '39:20', label: 'E-commerce Logistics from Addis Ababa' },
      { time: '58:10', label: 'Sustaining Premium Brand Equity' }
    ],
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
    thumbnailUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    videoType: 'Macro Finance & VC Masterclass',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '1h 35m',
    publishedDate: 'May 20, 2026',
    category: 'Finance',
    views: '38K',
    likes: 3100,
    summary: 'An analytical discussion on the flow of foreign venture funding, domestic angel investment, and the real-world execution of the Startup Act in Ethiopia.',
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg',
    timestamps: [
      { time: '00:00', label: 'Macro Landscape of Horn Venture Capital' },
      { time: '21:00', label: 'Foreign Exchange FX Reforms & Valuations' },
      { time: '49:15', label: 'Creating Local SPVs and Holding Entities' },
      { time: '1:18:00', label: 'The 10-Year Outlook for Horn Startups' }
    ],
    takeaways: [
      'Unpacking current foreign exchange regulations and impact on equity investment.',
      'Creating local holding structures that accommodate international VC funds.',
      'Talent pipelines: Building high-performance local engineering squads.'
    ]
  },
  {
    id: 'ep-385',
    title: 'The Logistics Revolution: Cold Chains & Urban Delivery Networks',
    guestName: 'Semhal Gessesew',
    guestTitle: 'Founder & CEO of RIDE Ecosystems & Urban Mobility',
    guestAvatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    videoType: 'Urban Logistics & EV Mobility',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '1h 05m',
    publishedDate: 'May 02, 2026',
    category: 'Business',
    views: '71K',
    likes: 6400,
    summary: 'How urban logistics, electric vehicle adoption, and last-mile freight networks are transforming municipal commerce across fast-growing East African urban hubs.',
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/office_ambient.ogg',
    timestamps: [
      { time: '00:00', label: 'Addis Mobility Bottlenecks' },
      { time: '16:30', label: 'Transitioning Fleet to EV Batteries' },
      { time: '34:10', label: 'Last-Mile Freight & Cold Chain Storage' },
      { time: '52:00', label: 'Scaling Driver Partner Welfare' }
    ],
    takeaways: [
      'Why electric vehicle fleets are rapidly becoming cost-optimal under local fuel price changes.',
      'Building last-mile dispatch routing algorithms suited for rapidly evolving street mapping.',
      'The key role of driver-partner empowerment in urban transport stability.'
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
