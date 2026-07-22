import { useState } from 'react';
import { STANDALONE_HTML } from '../standaloneHTML';
import { Copy, Check, Eye, HelpCircle, Palette, Layout, Sparkles } from 'lucide-react';

export default function DesignSystemPanel() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'layout' | 'design' | 'html'>('layout');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(STANDALONE_HTML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const sectionsList = [
    {
      name: 'Hero Section',
      purpose: 'Capture attention, establish immediate host authority, embed the latest high-yield episode, and provide primary sponsor CTAs.',
      details: 'Large high-contrast display header utilizing a bold red accent. Interactive video placeholder simulates YouTube redirect. Visual hierarchy guides the eye directly to the core sponsorship CTA.'
    },
    {
      name: 'Social Proof Bar',
      purpose: 'Generate trust through high-density viewership statistics and prominent corporate partner endorsements.',
      details: 'Displays aggregated metrics (270k+ subs, 400+ episodes). Logo lists feature prominent Ethiopian networks (Safaricom, Dashen, Gebeya) with custom industry badges.'
    },
    {
      name: 'Episode Engine',
      purpose: 'Demonstrate deep repository of expert knowledge and drive searchability for high-intent business topics.',
      details: 'Search query state is bound to categories (Business, Tech, Culture, Finance). Dynamic modal provides a rapid extraction of actionable takeaways.'
    },
    {
      name: 'Alive Network Hub',
      purpose: 'Establish multi-channel presence and demonstrate cross-demographic subscriber capture.',
      details: 'Features specialized cards for sub-channels (Shorts, Main Point, Journey) to offer modular packages for corporate advertisers.'
    },
    {
      name: 'Guest Invite Proposals',
      purpose: 'Crowdsource guest candidates directly from the audience and collect strategic interview topics.',
      details: 'Interactive nomination form with category tags, self-nomination options, and real-time community upvoting shortlist.'
    },
    {
      name: 'Sponsorship Inquiry',
      purpose: 'Direct B2B monetization, offering dynamic campaign budgeting estimates and automatic lead generation.',
      details: 'Contains an interactive budget reach estimator that maps capital allocation directly to impressions, paired with a media-kit request form.'
    },
    {
      name: 'Capture Footer',
      purpose: 'Capture emails and convert passive viewers into permanent newsletter/Telegram subscribers.',
      details: 'High-contrast email registration block paired with quick-access links to Alive Telegram channel, bypassing slow email delivery.'
    }
  ];

  return (
    <div className="bg-black border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl" id="developer-specs">
      {/* Panel Tabs */}
      <div className="border-b border-neutral-800 bg-neutral-950 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-display font-extrabold text-lg text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FC0100]" />
            Developer & Design Inspector
          </h3>
          <p className="text-xs text-slate-400 font-light mt-0.5">
            Analyze the design specifications or export the single-file HTML prototype.
          </p>
        </div>

        <div className="flex gap-1 bg-black p-1 rounded-xl border border-neutral-800">
          <button
            onClick={() => setActiveTab('layout')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'layout' ? 'bg-[#FC0100] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layout className="w-3.5 h-3.5" /> Layout Map
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'design' ? 'bg-[#FC0100] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" /> Design Tokens
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'html' ? 'bg-[#FC0100] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" /> Export HTML
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8">
        
        {/* Layout Breakdown Tab */}
        {activeTab === 'layout' && (
          <div className="space-y-6">
            <div className="bg-[#FC0100]/5 border border-[#FC0100]/20 rounded-2xl p-5 space-y-2">
              <h4 className="text-sm font-bold text-[#FC0100]">Visual Layout Breakdown (Structure & Optimization)</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                The layout follows a progressive conversion funnel starting with <strong>Host Authority</strong> and progressing directly to <strong>Verified Engagement Metrics</strong>, <strong>Knowledge Discovery</strong>, <strong>Community Guest Proposals</strong>, <strong>Sponsorship Qualification</strong>, and finally <strong>Immediate Capture</strong>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectionsList.map((sec, index) => (
                <div key={index} className="p-5 rounded-xl border border-neutral-800 bg-neutral-950 space-y-2 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-black text-[10px] font-bold text-[#FC0100] flex items-center justify-center border border-neutral-800">
                      0{index + 1}
                    </span>
                    <h5 className="font-display font-bold text-sm text-white">{sec.name}</h5>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                    {sec.purpose}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {sec.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Design tokens Tab */}
        {activeTab === 'design' && (
          <div className="space-y-8">
            {/* Color Palette swatches */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Color Architecture</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                <div className="space-y-2">
                  <div className="h-16 rounded-xl bg-black border border-neutral-800 flex items-end p-2.5 shadow-md">
                    <span className="font-mono text-[10px] text-slate-400 font-bold">#000000</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Pure Black Canvas</h5>
                    <p className="text-[10px] text-slate-400 font-light mt-0.5">Primary dark canvassing & core backdrop.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-16 rounded-xl bg-neutral-950 border border-neutral-800 flex items-end p-2.5 shadow-md">
                    <span className="font-mono text-[10px] text-slate-400 font-bold">#0A0A0A</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Card Canvas</h5>
                    <p className="text-[10px] text-slate-400 font-light mt-0.5">Inner cards & interactive components background.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-16 rounded-xl bg-[#FC0100] border border-neutral-800 flex items-end p-2.5 shadow-md">
                    <span className="font-mono text-[10px] text-white font-black">#FC0100</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Alive Red Brand Accent</h5>
                    <p className="text-[10px] text-slate-400 font-light mt-0.5">Primary official brand color, highlights & CTAs.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-16 rounded-xl bg-[#F8FAFC] border border-neutral-800 flex items-end p-2.5 shadow-md">
                    <span className="font-mono text-[10px] text-slate-950 font-black">#F8FAFC</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">High Contrast Text</h5>
                    <p className="text-[10px] text-slate-400 font-light mt-0.5">Core typography for high legible output.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Typography scale pairings */}
            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-neutral-800">
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Heading Typography</h4>
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                  <p className="font-display font-bold text-lg text-white">Space Grotesk</p>
                  <p className="text-xs text-slate-400 font-light">
                    Geometric sans-serif with wide widths and stylized apertures. Excellent for displaying large statistics and primary headlines.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Body Typography</h4>
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                  <p className="font-sans font-medium text-lg text-white">Plus Jakarta Sans</p>
                  <p className="text-xs text-slate-400 font-light">
                    Highly readable geometric structure with modern details. Great for high-density summary paragraphs and form parameters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Standalone HTML tab */}
        {activeTab === 'html' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-white">Single-File CDN HTML Code</h4>
                <p className="text-xs text-slate-400 font-light">Ready to be saved as <code>index.html</code> and opened in any browser.</p>
              </div>
              <button
                onClick={handleCopy}
                className={`px-4 h-10 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#FC0100] hover:bg-red-600 text-white shadow-md'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Standalone HTML
                  </>
                )}
              </button>
            </div>

            <div className="relative rounded-xl border border-neutral-800 bg-black overflow-hidden">
              <pre className="p-5 text-xs text-slate-300 font-mono overflow-x-auto max-h-[280px]">
                <code>{STANDALONE_HTML}</code>
              </pre>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
