import { useState, FormEvent } from 'react';
import { 
  Plus, 
  Sparkles, 
  CheckCircle,
  Send
} from 'lucide-react';

const CATEGORIES = ['Tech & AI', 'Healthcare', 'Agriculture', 'Creative & Culture', 'Finance & FinTech', 'Manufacturing'];

export default function GuestInviteSection() {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestTitle || !company || !bio || !discussionTopics || !proposedBy) {
      return;
    }

    const newProposal = {
      id: `prop-user-${Date.now()}`,
      guestName,
      guestTitle,
      company,
      category,
      bio,
      discussionTopics,
      socialLink: socialLink || undefined,
      proposedBy,
      submitterEmail,
      isSelfNomination,
      dateAdded: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    };

    // Save proposal to localStorage
    const saved = localStorage.getItem('alive_guest_proposals');
    let proposalsList = [];
    if (saved) {
      try {
        proposalsList = JSON.parse(saved);
      } catch (err) {
        proposalsList = [];
      }
    }
    proposalsList.unshift(newProposal);
    localStorage.setItem('alive_guest_proposals', JSON.stringify(proposalsList));

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

  return (
    <div id="proposals" className="py-20 bg-black border-t border-neutral-900 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FC0100]/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FC0100]/10 border border-[#FC0100]/25 text-[#FC0100] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Audience Invitation Initiative
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Who Should <span className="text-[#FC0100]">Abrham Fantu</span> Interview Next?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Alive Podcast is built for and co-piloted by our audience. Submit a guest proposal below, explain the strategic value of their perspective, and our production team will evaluate your recommendation.
          </p>
        </div>

        {/* Centered Form Card */}
        <div className="max-w-2xl mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-sm shadow-xl">
          <div className="space-y-1.5 mb-8 pb-6 border-b border-neutral-800/80">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-[#FC0100]/10 border border-[#FC0100]/20 text-[#FC0100]">
                <Plus className="w-5 h-5" />
              </span>
              Invite Proposal Form
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Submit an executive, disruptor, or policy maker to the official shortlist.
            </p>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Guest Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Proposed Guest Name *
                </label>
                <input
                  required
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Kibret Abebe"
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20 transition-all"
                />
              </div>

              {/* Title & Company Row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Guest Title *
                  </label>
                  <input
                    required
                    type="text"
                    value={guestTitle}
                    onChange={(e) => setGuestTitle(e.target.value)}
                    placeholder="e.g. Founder & CEO"
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Company / Org *
                  </label>
                  <input
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Tebita Ambulance"
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] transition-all"
                  />
                </div>
              </div>

              {/* Category & Social Link Row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-[#FC0100] transition-all cursor-pointer"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Social Link / Website
                  </label>
                  <input
                    type="url"
                    value={socialLink}
                    onChange={(e) => setSocialLink(e.target.value)}
                    placeholder="e.g. https://linkedin.com/in/..."
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] transition-all"
                  />
                </div>
              </div>

              {/* Short Bio / Achievements */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Who is this guest? (Short Bio / Achievements) *
                </label>
                <textarea
                  required
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Briefly describe their impact, what company they built, or their regional commercial influence..."
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20 transition-all"
                ></textarea>
              </div>

              {/* Proposed Discussion Topics */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  What should Abrham discuss with them? *
                </label>
                <textarea
                  required
                  rows={3}
                  value={discussionTopics}
                  onChange={(e) => setDiscussionTopics(e.target.value)}
                  placeholder="List specific business strategies, policy barriers, tech insights, or stories they should uncover..."
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20 transition-all"
                ></textarea>
              </div>

              {/* Submitter Details */}
              <div className="pt-6 border-t border-neutral-800 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={proposedBy}
                      onChange={(e) => setProposedBy(e.target.value)}
                      placeholder="e.g. Yohannes A."
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Your Email (Confidential)
                    </label>
                    <input
                      type="email"
                      value={submitterEmail}
                      onChange={(e) => setSubmitterEmail(e.target.value)}
                      placeholder="e.g. yohannes@gmail.com"
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] transition-all"
                    />
                  </div>
                </div>

                {/* Self nomination toggle */}
                <div className="flex items-center gap-2.5 pt-1">
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
                className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FC0100] to-red-600 text-white font-bold hover:from-red-600 hover:to-red-700 text-sm transition-all shadow-md shadow-[#FC0100]/20 cursor-pointer"
              >
                <Send className="w-4 h-4" /> Submit Guest Proposal
              </button>
            </form>
          ) : (
            <div className="py-12 px-4 text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#FC0100]/15 text-[#FC0100] flex items-center justify-center text-3xl mx-auto border border-[#FC0100]/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-2xl text-white">Proposal Submitted!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <strong className="text-white">{proposedBy}</strong>! Your recommendation for <strong className="text-white">{guestName}</strong> ({company}) has been sent directly to the production team for review.
                </p>
              </div>
              <div className="pt-4 flex justify-center">
                <button
                  onClick={resetForm}
                  className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-semibold text-slate-300 border border-neutral-800 hover:text-white transition-colors cursor-pointer"
                >
                  Propose Another Guest
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

