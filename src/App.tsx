import { useState, FormEvent } from 'react';
import { PODCAST_STATS, PAST_SPONSORS } from './data';
import EpisodeGrid from './components/EpisodeGrid';
import ChannelNetwork from './components/ChannelNetwork';
import SponsorshipEstimator from './components/SponsorshipEstimator';
import DesignSystemPanel from './components/DesignSystemPanel';
import GuestInviteSection from './components/GuestInviteSection';
import { 
  Play, 
  Send, 
  Youtube, 
  Instagram, 
  Twitter, 
  Check, 
  Mail, 
  Lock, 
  Sparkles, 
  Users, 
  Tv, 
  Briefcase, 
  ArrowUpRight 
} from 'lucide-react';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<string>('pkg-segment');
  const [sponsorCompany, setSponsorCompany] = useState('');
  const [sponsorName, setSponsorName] = useState('');
  const [sponsorEmail, setSponsorEmail] = useState('');
  const [sponsorPhone, setSponsorPhone] = useState('');
  const [sponsorGoal, setSponsorGoal] = useState('segment');
  const [sponsorNotes, setSponsorNotes] = useState('');
  const [sponsorSubmitted, setSponsorSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Simulated video state
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleSponsorSelect = (pkgName: string) => {
    setSelectedPackage(pkgName);
    // Align select dropdown in form
    if (pkgName.includes('Presenter')) setSponsorGoal('hero');
    else if (pkgName.includes('Spotlight')) setSponsorGoal('segment');
    else if (pkgName.includes('Network')) setSponsorGoal('network');
    else setSponsorGoal('undecided');

    // Scroll to form smoothly
    const formEl = document.getElementById('sponsorship-form-target');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSponsorSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!sponsorCompany || !sponsorEmail || !sponsorName) return;
    setSponsorSubmitted(true);
  };

  const resetSponsorForm = () => {
    setSponsorCompany('');
    setSponsorName('');
    setSponsorEmail('');
    setSponsorPhone('');
    setSponsorNotes('');
    setSponsorSubmitted(false);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans antialiased selection:bg-[#FC0100] selection:text-white">
      
      {/* 1. STICKY HEADER NAVIGATION */}
      <header className="border-b border-neutral-800/80 sticky top-0 bg-black/90 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FC0100] to-red-700 flex items-center justify-center font-display font-extrabold text-xl text-white shadow-lg shadow-[#FC0100]/20 group-hover:scale-105 transition-transform">
              A
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-[#FC0100] transition-colors">
                ALIVE
              </span>
              <span className="text-xs block text-slate-400 font-semibold tracking-widest uppercase -mt-1">
                Podcast Network
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-400">
            <a href="#performance" className="hover:text-[#FC0100] transition-colors">Performance</a>
            <a href="#episodes" className="hover:text-[#FC0100] transition-colors">Episodes</a>
            <a href="#network" className="hover:text-[#FC0100] transition-colors">Our Channels</a>
            <a href="#proposals" className="hover:text-[#FC0100] transition-colors">Invite Proposals</a>
            <a href="#sponsorships" className="hover:text-[#FC0100] transition-colors">Sponsorships</a>
          </nav>

          {/* CTA Sponsor button */}
          <div className="flex items-center gap-4">
            <a
              href="#sponsorships"
              className="px-5 py-2.5 rounded-lg text-xs font-extrabold bg-gradient-to-r from-[#FC0100] to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-[#FC0100]/25 transition-all cursor-pointer"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-8 pb-16 md:py-24 overflow-hidden border-b border-neutral-900">
        {/* Abstract lights background */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#FC0100]/10 blur-[90px] md:blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-red-800/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Copy / Action Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FC0100]/10 border border-[#FC0100]/30 text-[#FC0100] text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FC0100] animate-pulse"></span>
                Ethiopia's Premier Business & Tech Show
              </div>
              
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                Where Leaders Inspire{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC0100] via-red-500 to-rose-600">
                  Ethiopian Enterprise
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Hosted by <span className="text-white font-medium">Abrham Fantu</span>, Alive Podcast serves as the foundational media node documenting the growth and innovation strategies of East Africa's leading commercial pioneers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <a
                  href="#sponsorships"
                  className="inline-flex items-center justify-center px-8 h-14 rounded-xl font-bold bg-gradient-to-r from-[#FC0100] to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-xl shadow-[#FC0100]/20 hover:shadow-[#FC0100]/30 transition-all hover:-translate-y-0.5"
                >
                  Secure Core Sponsorship
                </a>
                <a
                  href="#episodes"
                  className="inline-flex items-center justify-center px-8 h-14 rounded-xl font-bold bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all hover:-translate-y-0.5"
                >
                  Explore Guest Library
                </a>
              </div>

              {/* Host Endorsement */}
              <div className="pt-6 border-t border-neutral-900 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 border border-[#FC0100] flex-shrink-0 flex items-center justify-center overflow-hidden font-display font-extrabold text-[#FC0100]">
                    AF
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 italic">
                      "We focus on heavy substance. Our network is designed to link forward-looking corporate brands with our highly active audience of decision-makers and doers."
                    </p>
                    <p className="text-[11px] font-bold text-white mt-1">
                      — Abrham Fantu, Executive Producer & Host
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Player Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-[#FC0100] to-red-800 opacity-25 blur-xl group-hover:opacity-40 transition-opacity"></div>
                
                <div className="relative rounded-2xl border border-neutral-800 bg-black/80 overflow-hidden shadow-2xl">
                  {/* Aspect ratio video block */}
                  <div className="aspect-video relative bg-black flex items-center justify-center overflow-hidden">
                    {!isVideoPlaying ? (
                      <>
                        <img
                          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600"
                          alt="Video Cover"
                          className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        <button
                          onClick={() => setIsVideoPlaying(true)}
                          className="absolute w-16 h-16 rounded-full bg-[#FC0100] text-white flex items-center justify-center shadow-2xl hover:scale-115 transition-all cursor-pointer z-10 hover:bg-white hover:text-[#FC0100]"
                        >
                          <Play className="w-6 h-6 ml-1 fill-current" />
                        </button>
                      </>
                    ) : (
                      <div className="w-full h-full bg-black flex flex-col items-center justify-center p-6 text-center space-y-4">
                        <span className="text-3xl">📡</span>
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-white">Connecting to Alive Broadcast...</p>
                          <p className="text-xs text-slate-500 font-light">
                            You are opening our verified YouTube channel link in a safe redirect.
                          </p>
                        </div>
                        <a
                          href="https://youtube.com"
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-lg bg-[#FC0100] text-xs font-bold text-white hover:bg-red-600 transition-colors"
                        >
                          Launch on YouTube
                        </a>
                        <button
                          onClick={() => setIsVideoPlaying(false)}
                          className="text-[10px] text-slate-500 hover:text-white underline mt-2 cursor-pointer"
                        >
                          Back to Poster Cover
                        </button>
                      </div>
                    )}

                    {/* Badge details */}
                    <div className="absolute bottom-4 left-4 right-4 text-left z-10 pointer-events-none">
                      <span className="text-[9px] uppercase tracking-wider bg-[#FC0100] text-white font-extrabold px-2 py-0.5 rounded-md mb-1.5 inline-block">
                        LATEST RELEASES
                      </span>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-white truncate shadow-sm">
                        Tech Liberalisation & Bank API Gateways in Ethiopia
                      </h4>
                    </div>
                  </div>

                  {/* Channel details card */}
                  <div className="p-5 border-t border-neutral-800 bg-neutral-950">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FC0100] flex items-center justify-center font-bold text-sm text-white shadow-md">
                          YT
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Abrham Fantu Channel</p>
                          <p className="text-[10px] text-slate-400">Updated weekly with local founders</p>
                        </div>
                      </div>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-bold text-[#FC0100] hover:underline flex items-center gap-1"
                      >
                        Visit YouTube <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF / METRICS BAR */}
      <section id="performance" className="bg-neutral-950 py-16 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-black border border-neutral-800 hover:border-[#FC0100]/40 transition-colors text-center">
              <span className="block font-display font-extrabold text-3xl sm:text-4xl text-[#FC0100] tracking-tight">
                {PODCAST_STATS.subscribers}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-2 block">
                YouTube Subscribers
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-neutral-800 hover:border-neutral-700 transition-colors text-center">
              <span className="block font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                {PODCAST_STATS.episodes}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-2 block">
                Episodes Produced
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-neutral-800 hover:border-neutral-700 transition-colors text-center">
              <span className="block font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                {PODCAST_STATS.views}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-2 block">
                Aggregate Views
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-neutral-800 hover:border-[#FC0100]/40 transition-colors text-center">
              <span className="block font-display font-extrabold text-3xl sm:text-4xl text-[#FC0100] tracking-tight">
                {PODCAST_STATS.monthlyReach}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-2 block">
                Monthly Multi-Channel Reach
              </span>
            </div>

          </div>

          {/* Trusted Sponsors Bar */}
          <div className="mt-16 text-center space-y-8">
            <p className="text-xs font-bold tracking-widest uppercase text-slate-500">
              Trusted by Top-Tier Regional Operators
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {PAST_SPONSORS.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-neutral-900 px-4 py-2 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors opacity-85 hover:opacity-100"
                >
                  <span className="text-sm font-display font-extrabold text-white tracking-tight">
                    {s.logoText}
                  </span>
                  <span className="text-[9px] font-semibold text-[#FC0100] bg-[#FC0100]/10 px-2 py-0.5 rounded border border-[#FC0100]/20">
                    {s.industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. EPISODE GRID SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <EpisodeGrid />
      </section>

      {/* 5. SUB-CHANNEL NETWORK */}
      <section className="py-20 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <ChannelNetwork />
        </div>
      </section>

      {/* 6. GUEST RECOMMENDATIONS & INVITE PROPOSALS */}
      <GuestInviteSection />

      {/* 7. SPONSORSHIP INQUIRY & CALCULATOR SECTION */}
      <section id="sponsorships" className="py-20 max-w-7xl mx-auto px-6 relative overflow-hidden">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Calculator Column (5 cols) */}
          <div className="lg:col-span-5">
            <SponsorshipEstimator onSelectPackage={handleSponsorSelect} />
          </div>

          {/* Inquiry Form Column (7 cols) */}
          <div className="lg:col-span-7" id="sponsorship-form-target">
            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-950 relative overflow-hidden backdrop-blur-sm">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold tracking-widest text-[#FC0100] uppercase">
                  B2B Channel Alignment
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Corporate Partnership Booking
                </h3>
                <p className="text-sm text-slate-400 font-light">
                  Submit details to receive our certified 2026 Media Kit (PDF) and schedule a discovery meeting with Abrham.
                </p>
              </div>

              {/* Connected React Form */}
              <form onSubmit={handleSponsorSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Company Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={sponsorCompany}
                      onChange={(e) => setSponsorCompany(e.target.value)}
                      placeholder="e.g. Safaricom Ethiopia"
                      className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Representative Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={sponsorName}
                      onChange={(e) => setSponsorName(e.target.value)}
                      placeholder="e.g. Almaz Kebede"
                      className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={sponsorEmail}
                      onChange={(e) => setSponsorEmail(e.target.value)}
                      placeholder="e.g. almaz@safaricom.et"
                      className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      value={sponsorPhone}
                      onChange={(e) => setSponsorPhone(e.target.value)}
                      placeholder="e.g. +251 911 00 0000"
                      className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Campaign Focus / Selected Package
                  </label>
                  <select
                    value={sponsorGoal}
                    onChange={(e) => setSponsorGoal(e.target.value)}
                    className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-[#FC0100]"
                  >
                    <option value="hero">Show Presenter (Title Sponsor)</option>
                    <option value="segment">Segment Spotlight Sponsor ($1,500/mo)</option>
                    <option value="network">Full Network Package (Multi-Channel)</option>
                    <option value="undecided">Unsure / Need custom consultation</option>
                  </select>
                  {selectedPackage && (
                    <p className="text-[11px] text-[#FC0100] font-medium mt-1.5 flex items-center gap-1">
                      <span>✓</span> Estimator suggested: <strong className="text-white">{selectedPackage}</strong>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Campaign Scope & Notes
                  </label>
                  <textarea
                    rows={3}
                    value={sponsorNotes}
                    onChange={(e) => setSponsorNotes(e.target.value)}
                    placeholder="Provide details on target markets, product timeline, or specific episode matches..."
                    className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100] focus:ring-1 focus:ring-[#FC0100]/20"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 h-12 rounded-lg font-bold bg-gradient-to-r from-[#FC0100] to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md shadow-[#FC0100]/20 cursor-pointer transition-all"
                >
                  Send Booking Request & Download Media Kit
                </button>
              </form>

              {/* Booking success overlay */}
              {sponsorSubmitted && (
                <div className="absolute inset-0 bg-black/95 rounded-2xl flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20">
                  <span className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-3xl mb-4 border border-emerald-500/30">
                    ✓
                  </span>
                  <h4 className="font-display font-bold text-xl text-white">Proposal Initiated!</h4>
                  <p className="text-sm text-slate-400 mt-2 max-w-sm leading-relaxed">
                    Thank you, <strong className="text-white">{sponsorName}</strong>. We have sent the verified 2026 Media Kit PDF to <strong className="text-white">{sponsorEmail}</strong> for <strong className="text-white">{sponsorCompany}</strong>.
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Abrham or a partnership liaison will contact you within 24 hours.
                  </p>
                  <button
                    onClick={resetSponsorForm}
                    className="mt-6 px-4 py-2 rounded-lg bg-neutral-900 text-xs font-semibold text-slate-300 border border-neutral-800 hover:text-white cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 8. DEVELOPER INSPECT PANEL SECTION */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <DesignSystemPanel />
        </div>
      </section>

      {/* 9. NEWSLETTER & SOCIAL CAPTURE FOOTER */}
      <footer className="bg-black border-t border-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Brand info) */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FC0100] text-white flex items-center justify-center font-display font-extrabold text-sm">
                  A
                </div>
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  ALIVE PODCAST NETWORK
                </span>
              </div>
              <p className="text-sm text-slate-400 font-light max-w-md leading-relaxed">
                Alive Podcast is a registered trademark of Fantu Media PLC. Documenting, analyzing, and scaling East African commercial intelligence outside traditional platforms.
              </p>
              <p className="text-xs text-slate-500 font-mono">
                © 2026 Fantu Media Group. Built in Addis Ababa, Ethiopia.
              </p>
            </div>

            {/* Right Column (Newsletter subscription box) */}
            <div className="md:col-span-6 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-4">
              <div className="space-y-1">
                <h4 className="font-display font-bold text-lg text-white">Subscribe to the Intel Digest</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Join 45,000+ local practitioners who receive written guest takeaways, regulatory alerts, and business data highlights.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    required
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your professional email"
                    className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#FC0100]"
                  />
                  <button
                    type="submit"
                    className="px-6 h-11 rounded-lg text-xs font-bold bg-[#FC0100] hover:bg-red-600 text-white shrink-0 transition-colors cursor-pointer"
                  >
                    Subscribe Email
                  </button>
                </div>
              </form>

              {newsletterSubscribed && (
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 animate-fade-in">
                  <span>✓</span> Thank you! A verification pin has been delivered to your email.
                </div>
              )}

              {/* Quick telegram access channel */}
              <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-medium">Or receive mobile alerts instantly?</span>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#229ED9]/15 border border-[#229ED9]/25 hover:bg-[#229ED9]/25 transition-all text-xs font-bold text-[#229ED9] uppercase tracking-wider"
                >
                  <span className="text-sm">💬</span> Join Alive Telegram Channel
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
