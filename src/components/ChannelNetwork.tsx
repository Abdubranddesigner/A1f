import { SUB_CHANNELS } from '../data';
import { Youtube, Zap, BookOpen, Compass } from 'lucide-react';

export default function ChannelNetwork() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'shorts':
        return <Zap className="w-5 h-5 text-[#FC0100]" />;
      case 'point':
        return <BookOpen className="w-5 h-5 text-blue-400" />;
      case 'journey':
        return <Compass className="w-5 h-5 text-rose-400" />;
      default:
        return <Youtube className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="space-y-12" id="network">
      {/* Network Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-bold tracking-widest text-[#FC0100] bg-[#FC0100]/10 px-3 py-1 rounded-full border border-[#FC0100]/25 uppercase">
          Capturing Multiple Niches
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
          The Alive Media Network
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed font-light">
          Spanning micro-education, macroeconomic policies, and mental resilience, our specialized sub-channels ensure maximum coverage of the East African enterprise landscape.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {SUB_CHANNELS.map((ch) => (
          <div
            key={ch.id}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-8 hover:border-neutral-700 hover:-translate-y-1 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              {/* Card top branding */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-neutral-800">
                  {getIcon(ch.iconType)}
                </div>
                <span className="text-xs font-bold font-mono text-slate-500">
                  {ch.subscribers} Subs
                </span>
              </div>

              {/* Title & Handle */}
              <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FC0100] transition-colors">
                {ch.name}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-1">{ch.handle}</p>

              {/* Description */}
              <p className="text-sm text-slate-400 mt-4 leading-relaxed font-light">
                {ch.description}
              </p>
            </div>

            {/* Action footer */}
            <div className="mt-8 pt-5 border-t border-neutral-800">
              <a
                href={ch.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-slate-300 hover:text-[#FC0100] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                Explore Channel
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

