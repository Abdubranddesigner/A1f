import { useState, useEffect, FormEvent } from 'react';
import { 
  Plus, 
  Search, 
  ThumbsUp, 
  Sparkles, 
  User, 
  Building2, 
  Mail, 
  Globe, 
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Filter
} from 'lucide-react';

interface Proposal {
  id: string;
  guestName: string;
  guestTitle: string;
  company: string;
  category: string;
  bio: string;
  discussionTopics: string;
  socialLink?: string;
  proposedBy: string;
  votes: number;
  isSelfNomination: boolean;
  dateAdded: string;
  isPreseeded?: boolean;
}

const PRESEEDED_PROPOSALS: Proposal[] = [
  {
    id: 'prop-1',
    guestName: 'Kibret Abebe',
    guestTitle: 'Founder & CEO',
    company: 'Tebita Ambulance',
    category: 'Healthcare',
    bio: 'Pioneered Ethiopia\'s first private ambulance and emergency response service, training thousands of medical technicians and serving remote areas.',
    discussionTopics: 'Social enterprise models, overcoming bureaucratic bottlenecks, and structuring pre-hospital emergency care in East Africa.',
    socialLink: 'https://tebitaambulance.com',
    proposedBy: 'Yared M.',
    votes: 342,
    isSelfNomination: false,
    dateAdded: 'July 10, 2026',
    isPreseeded: true
  },
  {
    id: 'prop-2',
    guestName: 'Ruhama Birhanu',
    guestTitle: 'Co-Founder & Lead Engineer',
    company: 'Addis Robotics Lab',
    category: 'Tech & AI',
    bio: 'Designs locally fabricated IoT hardware, micro-sensors, and agricultural drone setups configured for rugged local terrain.',
    discussionTopics: 'Building tech hardware in landlocked economies, hardware import substitution, and smart farming initiatives for teff crops.',
    socialLink: 'https://linkedin.com',
    proposedBy: 'Solomon K.',
    votes: 289,
    isSelfNomination: false,
    dateAdded: 'July 14, 2026',
    isPreseeded: true
  },
  {
    id: 'prop-3',
    guestName: 'Henok Kebede',
    guestTitle: 'Director of Trade',
    company: 'Kaffa Specialty Coffee Alliance',
    category: 'Agriculture',
    bio: 'Architect of a multi-cooperative trade pathway that bypasses legacy intermediaries to double the income share of thousands of smallholder farmers.',
    discussionTopics: 'Coffee price premiumization, decentralized blockchain ledgers in export supply chains, and brand storytelling for single-origin Kaffa beans.',
    socialLink: 'https://kaffaspecialty.org',
    proposedBy: 'Betty T.',
    votes: 215,
    isSelfNomination: false,
    dateAdded: 'July 16, 2026',
    isPreseeded: true
  },
  {
    id: 'prop-4',
    guestName: 'Feven Yohannes',
    guestTitle: 'Co-Founder & Creative Director',
    company: '2Bela Cosmetics',
    category: 'Creative & Culture',
    bio: 'Eritrean-Ethiopian diaspora entrepreneur who successfully commercialized premium East African botanical recipes in Nordstrom and Sephora.',
    discussionTopics: 'Translating ancient heritage cosmetics into global luxury consumer products, fundraising in California, and regional supply sourcing.',
    socialLink: 'https://2bela.com',
    proposedBy: 'Hiwot A.',
    votes: 198,
    isSelfNomination: false,
    dateAdded: 'July 18, 2026',
    isPreseeded: true
  }
];

const CATEGORIES = ['All', 'Tech & AI', 'Healthcare', 'Agriculture', 'Creative & Culture', 'Finance & FinTech', 'Manufacturing'];

export default function GuestInviteSection() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [votedIds, setVotedIds] = useState<string[]>([]);
  
  // Form States
  const [guestName, setGuestName] = useState('');
  const [guestTitle, setGuestTitle] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('Tech & AI');
  const [bio, setBio] = useState('');
  const [discussionTopics, setDiscussionTopics] = useState('');
  const [socialLink, setSocialLink] = useState('');
  const [proposedBy, setProposedBy] = useState('');
  const [submitterEmail, setSubmitterEmail] = useState('');
  const [isSelfNomination, setIsSelfNomination] = useState(false);
  
  // Control States
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'votes' | 'recent'>('votes');
  
  // Load initial data
  useEffect(() => {
    const savedProposals = localStorage.getItem('alive_guest_proposals');
    const savedVotes = localStorage.getItem('alive_guest_voted_ids');
    
    if (savedProposals) {
      try {
        setProposals(JSON.parse(savedProposals));
      } catch (e) {
        setProposals(PRESEEDED_PROPOSALS);
      }
    } else {
      setProposals(PRESEEDED_PROPOSALS);
      localStorage.setItem('alive_guest_proposals', JSON.stringify(PRESEEDED_PROPOSALS));
    }
    
    if (savedVotes) {
      try {
        setVotedIds(JSON.parse(savedVotes));
      } catch (e) {
        setVotedIds([]);
      }
    }
  }, []);

  // Save updates helper
  const updateProposalsState = (updated: Proposal[]) => {
    setProposals(updated);
    localStorage.setItem('alive_guest_proposals', JSON.stringify(updated));
  };

  const handleVote = (id: string) => {
    if (votedIds.includes(id)) {
      // Remove vote
      const updatedVotes = votedIds.filter(vId => vId !== id);
      setVotedIds(updatedVotes);
      localStorage.setItem('alive_guest_voted_ids', JSON.stringify(updatedVotes));
      
      const updatedProps = proposals.map(p => {
        if (p.id === id) {
          return { ...p, votes: Math.max(0, p.votes - 1) };
        }
        return p;
      });
      updateProposalsState(updatedProps);
    } else {
      // Add vote
      const updatedVotes = [...votedIds, id];
      setVotedIds(updatedVotes);
      localStorage.setItem('alive_guest_voted_ids', JSON.stringify(updatedVotes));
      
      const updatedProps = proposals.map(p => {
        if (p.id === id) {
          return { ...p, votes: p.votes + 1 };
        }
        return p;
      });
      updateProposalsState(updatedProps);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestTitle || !company || !bio || !discussionTopics || !proposedBy) {
      return;
    }

    const newProposal: Proposal = {
      id: `prop-user-${Date.now()}`,
      guestName,
      guestTitle,
      company,
      category,
      bio,
      discussionTopics,
      socialLink: socialLink || undefined,
      proposedBy,
      votes: 1, // Automatic first vote from submitter
      isSelfNomination,
      dateAdded: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    };

    const updated = [newProposal, ...proposals];
    updateProposalsState(updated);
    
    // Automatically flag as voted for this newly added item too
    const updatedVotes = [...votedIds, newProposal.id];
    setVotedIds(updatedVotes);
    localStorage.setItem('alive_guest_voted_ids', JSON.stringify(updatedVotes));

    setFormSubmitted(true);
  };

  const resetForm = () => {
    setGuestName('');
    setGuestTitle('');
    setCompany('');
    setCategory('Tech & AI');
    setBio('');
    setDiscussionTopics('');
    setSocialLink('');
    setProposedBy('');
    setSubmitterEmail('');
    setIsSelfNomination(false);
    setFormSubmitted(false);
  };

  // Filter and sort items
  const filteredProposals = proposals.filter(p => {
    const matchesSearch = 
      p.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.guestTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.discussionTopics.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'votes') {
      return b.votes - a.votes;
    } else {
      // Simple date/id sort
      return b.id.localeCompare(a.id);
    }
  });

  return (
    <div id="proposals" className="py-20 bg-black border-t border-neutral-900 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FC0100]/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FC0100]/10 border border-[#FC0100]/25 text-[#FC0100] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Audience Invitation Initiative
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Who Should <span className="text-[#FC0100]">Abrham Fantu</span> Interview Next?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Alive Podcast is built for and co-piloted by our audience. Submit a guest proposal, explain the strategic value of their perspective, and let the community vote. We pitch directly to the top-voted figures.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Submission Form (5 Columns) */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm">
            <div className="space-y-1.5 mb-6">
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <span className="p-1 rounded-md bg-[#FC0100]/10 border border-[#FC0100]/20 text-[#FC0100]">
                  <Plus className="w-4 h-4" />
                </span>
                Invite Proposal Form
              </h3>
              <p className="text-xs text-slate-400 font-light">
                Submit an executive, disruptor, or policy maker to the official shortlist.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Guest Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Proposed Guest Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Kibret Abebe"
                    className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20"
                  />
                </div>

                {/* Title & Company Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Guest Title *
                    </label>
                    <input
                      required
                      type="text"
                      value={guestTitle}
                      onChange={(e) => setGuestTitle(e.target.value)}
                      placeholder="e.g. Founder & CEO"
                      className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Company / Org *
                    </label>
                    <input
                      required
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Tebita Ambulance"
                      className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100]"
                    />
                  </div>
                </div>

                {/* Category & Social Link Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-300 focus:outline-none focus:border-[#FC0100]"
                    >
                      {CATEGORIES.slice(1).map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Social Link / Website
                    </label>
                    <input
                      type="url"
                      value={socialLink}
                      onChange={(e) => setSocialLink(e.target.value)}
                      placeholder="e.g. https://linkedin.com/in/..."
                      className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100]"
                    />
                  </div>
                </div>

                {/* Short Bio / Achievements */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Who is this guest? (Short Bio / Achievements) *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Briefly describe their impact, what company they built, or their regional commercial influence..."
                    className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20"
                  ></textarea>
                </div>

                {/* Proposed Discussion Topics */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    What should Abrham discuss with them? *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={discussionTopics}
                    onChange={(e) => setDiscussionTopics(e.target.value)}
                    placeholder="List specific business strategies, policy barriers, tech insights, or stories they should uncover..."
                    className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20"
                  ></textarea>
                </div>

                {/* Submitter Details */}
                <div className="pt-4 border-t border-neutral-800 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={proposedBy}
                        onChange={(e) => setProposedBy(e.target.value)}
                        placeholder="e.g. Yohannes A."
                        className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Email (Confidential)
                      </label>
                      <input
                        type="email"
                        value={submitterEmail}
                        onChange={(e) => setSubmitterEmail(e.target.value)}
                        placeholder="e.g. yohannes@gmail.com"
                        className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100]"
                      />
                    </div>
                  </div>

                  {/* Self nomination toggle */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="self-nom"
                      checked={isSelfNomination}
                      onChange={(e) => setIsSelfNomination(e.target.checked)}
                      className="rounded border-neutral-800 bg-black text-[#FC0100] focus:ring-0 focus:ring-offset-0 cursor-pointer w-4 h-4"
                    />
                    <label htmlFor="self-nom" className="text-xs text-slate-400 select-none cursor-pointer">
                      I am nominating myself / My own company
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FC0100] to-red-600 text-white font-bold hover:from-red-600 hover:to-red-700 text-xs sm:text-sm transition-all shadow-md shadow-[#FC0100]/20 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Submit Guest Proposal
                </button>
              </form>
            ) : (
              <div className="py-12 px-4 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#FC0100]/15 text-[#FC0100] flex items-center justify-center text-3xl mx-auto border border-[#FC0100]/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xl text-white">Proposal Submitted!</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Thank you, <strong className="text-white">{proposedBy}</strong>! Your recommendation for <strong className="text-white">{guestName}</strong> ({company}) is now active on the community wishlist.
                  </p>
                  <p className="text-xs text-slate-500">
                    Your direct upvote was added automatically. Tell others to upvote to increase their chance of appearing on the podcast!
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={resetForm}
                    className="flex-1 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-semibold text-slate-300 border border-neutral-800 hover:text-white transition-colors cursor-pointer"
                  >
                    Propose Another Guest
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Community Feed & Voting Shortlist (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Filter & Search Bar */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Search Input */}
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-600">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search proposed guests, companies, key takeaways..."
                    className="w-full bg-black border border-neutral-800 rounded-lg pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#FC0100]"
                  />
                </div>
                
                {/* Sort Toggle */}
                <div className="flex items-center gap-1.5 bg-black rounded-lg p-1 border border-neutral-800 text-xs font-bold text-slate-400 shrink-0">
                  <button
                    onClick={() => setSortBy('votes')}
                    className={`px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors cursor-pointer ${sortBy === 'votes' ? 'bg-[#FC0100] text-white' : 'hover:text-white'}`}
                  >
                    <TrendingUp className="w-3.5 h-3.5" /> Popular
                  </button>
                  <button
                    onClick={() => setSortBy('recent')}
                    className={`px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors cursor-pointer ${sortBy === 'recent' ? 'bg-[#FC0100] text-white' : 'hover:text-white'}`}
                  >
                    New
                  </button>
                </div>
              </div>

              {/* Category Slider/Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-neutral-800">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-1 shrink-0">
                  <Filter className="w-3 h-3" /> Filter:
                </span>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all shrink-0 border cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#FC0100]/10 border-[#FC0100] text-[#FC0100]'
                        : 'bg-transparent border-neutral-800 text-slate-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Proposals List Card Feed */}
            <div className="space-y-4 max-h-[660px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-800">
              {filteredProposals.length > 0 ? (
                filteredProposals.map((prop) => {
                  const hasVoted = votedIds.includes(prop.id);
                  return (
                    <div 
                      key={prop.id}
                      className={`group p-5 sm:p-6 rounded-xl border transition-all ${
                        hasVoted 
                          ? 'bg-neutral-900/60 border-[#FC0100]/40 shadow-md shadow-[#FC0100]/5' 
                          : 'bg-neutral-950 border-neutral-800 hover:bg-neutral-900/40 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          {/* Name / Category */}
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#FC0100] transition-colors">
                              {prop.guestName}
                            </h4>
                            <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-black text-[#FC0100] border border-neutral-800">
                              {prop.category}
                            </span>
                            {prop.isSelfNomination && (
                              <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-[#FC0100]/10 text-[#FC0100] border border-[#FC0100]/20">
                                SELF-NOMINATED
                              </span>
                            )}
                          </div>
                          
                          {/* Title / Company */}
                          <p className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-slate-500" />
                            <span>{prop.guestTitle}</span>
                            <span className="text-slate-600">•</span>
                            <Building2 className="w-3.5 h-3.5 text-slate-500" />
                            <strong className="text-white">{prop.company}</strong>
                          </p>
                        </div>

                        {/* Interactive Vote Button */}
                        <button
                          onClick={() => handleVote(prop.id)}
                          className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all min-w-[56px] cursor-pointer ${
                            hasVoted 
                              ? 'bg-gradient-to-b from-[#FC0100] to-red-700 border-[#FC0100] text-white shadow-md shadow-[#FC0100]/20 scale-105' 
                              : 'bg-black border-neutral-800 text-slate-400 hover:text-white hover:border-neutral-700'
                          }`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${hasVoted ? 'fill-current stroke-white' : 'group-hover:scale-110 transition-transform'}`} />
                          <span className="text-xs font-black mt-1.5">{prop.votes}</span>
                          <span className="text-[8px] uppercase tracking-wider font-bold opacity-80">
                            {hasVoted ? 'Voted' : 'Vote'}
                          </span>
                        </button>
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-slate-400 font-light mt-3 leading-relaxed">
                        {prop.bio}
                      </p>

                      {/* Discussion Topics Segment */}
                      <div className="mt-4 p-3 bg-black rounded-lg border border-neutral-800 text-xs">
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                          Proposed Topics & Strategic Value:
                        </span>
                        <p className="text-slate-300 font-light leading-relaxed">
                          {prop.discussionTopics}
                        </p>
                      </div>

                      {/* Submitter & Links Footer */}
                      <div className="mt-4 pt-3 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-3 text-[10px]">
                        <span className="text-slate-500 font-light">
                          Proposed by <strong className="text-slate-400 font-medium">{prop.proposedBy}</strong> on {prop.dateAdded}
                        </span>

                        {prop.socialLink && (
                          <a
                            href={prop.socialLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[#FC0100] hover:underline font-semibold"
                          >
                            <Globe className="w-3 h-3" /> Website / Social Portfolio
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-16 border border-dashed border-neutral-800 rounded-xl bg-neutral-950 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-xl text-slate-500 mx-auto">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400">No proposals found</p>
                    <p className="text-xs text-slate-600 max-w-xs mx-auto mt-1">
                      Try adjusting your search criteria or be the first to propose a guest in this category!
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Pitching Target Notice */}
            <div className="p-4 rounded-xl bg-[#FC0100]/5 border border-[#FC0100]/15 text-xs text-slate-400 flex gap-3 items-start">
              <span className="text-base">📢</span>
              <div className="space-y-1">
                <span className="font-bold text-[#FC0100]">Shortlist Target Reached Alert:</span> Once a proposal achieves <strong className="text-white">200+ community votes</strong>, our research team automatically drafts an invitation dossier and schedules an outreach pitch to their executive office on behalf of the Alive Podcast Network.
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
