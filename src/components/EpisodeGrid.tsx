import { useState, useMemo } from 'react';
import { EPISODES_DATA } from '../data';
import { Episode } from '../types';
import { Play, FileText, Search, Clock, ThumbsUp, X } from 'lucide-react';

export default function EpisodeGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);

  // Filter categories
  const categories = ['All', 'Business', 'Tech', 'Culture', 'Finance'];

  // Filtered list based on both search query and selected category
  const filteredEpisodes = useMemo(() => {
    return EPISODES_DATA.filter((ep) => {
      const matchesCategory = selectedCategory === 'All' || ep.category === selectedCategory;
      const cleanQuery = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !cleanQuery ||
        ep.title.toLowerCase().includes(cleanQuery) ||
        ep.guestName.toLowerCase().includes(cleanQuery) ||
        ep.guestTitle.toLowerCase().includes(cleanQuery) ||
        ep.summary.toLowerCase().includes(cleanQuery);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-8" id="episodes">
      {/* Filters & Search Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-slate-800/60">
        {/* Left Side: Stats / Info */}
        <div className="space-y-1">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Broadcasting Commercial Intel</h2>
          <p className="text-sm text-slate-400 font-light">
            Search guest insights, business model breakdowns, and key policy takeaways.
          </p>
        </div>

        {/* Right Side: Filters */}
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FC0100] text-white shadow-md shadow-[#FC0100]/20'
                  : 'bg-neutral-900 text-slate-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat === 'All' ? 'All Episodes' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input Box */}
      <div className="relative max-w-md">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search guests, titles, or summaries..."
          className="w-full bg-black border border-neutral-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#FC0100]/60 focus:ring-1 focus:ring-[#FC0100]/20 transition-all"
        />
      </div>

      {/* Empty State */}
      {filteredEpisodes.length === 0 && (
        <div className="text-center py-16 bg-neutral-950 rounded-2xl border border-dashed border-neutral-800">
          <p className="text-slate-400 text-sm">No episodes found matching "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-3 text-xs font-semibold text-[#FC0100] hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Grid of Episodes */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {filteredEpisodes.map((ep) => (
          <div
            key={ep.id}
            className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900/60 transition-all group shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${
                    ep.category === 'Tech'
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      : ep.category === 'Business'
                      ? 'bg-[#FC0100]/10 text-[#FC0100] border-[#FC0100]/20'
                      : ep.category === 'Culture'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}
                >
                  {ep.category}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {ep.duration}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#FC0100] transition-colors leading-snug">
                {ep.title}
              </h3>
              
              <p className="text-sm text-slate-400 mt-3 font-light leading-relaxed line-clamp-2">
                {ep.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
              {/* Guest Details */}
              <div className="flex items-center gap-3">
                <img
                  src={ep.guestAvatar}
                  alt={ep.guestName}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-neutral-800"
                />
                <div>
                  <p className="text-sm font-bold text-slate-200">{ep.guestName}</p>
                  <p className="text-[11px] text-slate-500 truncate max-w-[160px] sm:max-w-[200px]">
                    {ep.guestTitle}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveEpisode(ep)}
                className="text-xs font-bold text-[#FC0100] flex items-center gap-1 group-hover:underline cursor-pointer"
              >
                Intel Takeaways
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Episode Intel Takeaway Modal */}
      {activeEpisode && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveEpisode(null)}
        >
          <div
            className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveEpisode(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title / Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${
                    activeEpisode.category === 'Tech'
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      : activeEpisode.category === 'Business'
                      ? 'bg-[#FC0100]/10 text-[#FC0100] border-[#FC0100]/20'
                      : activeEpisode.category === 'Culture'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}
                >
                  {activeEpisode.category}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {activeEpisode.duration}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                {activeEpisode.title}
              </h3>

              <div className="flex items-center gap-3 pt-1">
                <img
                  src={activeEpisode.guestAvatar}
                  alt={activeEpisode.guestName}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-neutral-800"
                />
                <div>
                  <p className="text-xs font-bold text-slate-200">{activeEpisode.guestName}</p>
                  <p className="text-[10px] text-slate-400">{activeEpisode.guestTitle}</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2 border-t border-neutral-800 pt-4">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500">Brief Summary</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">{activeEpisode.summary}</p>
            </div>

            {/* Key Commercial Takeaways */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500">
                Key Commercial Takeaways
              </h4>
              <ul className="space-y-3">
                {activeEpisode.takeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                    <span className="text-[#FC0100] mt-1 flex-shrink-0">▪</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons inside Modal */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => setActiveEpisode(null)}
                className="px-5 h-11 rounded-lg text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 cursor-pointer transition-colors"
              >
                Close Insights
              </button>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 h-11 rounded-lg text-xs font-bold bg-[#FC0100] hover:bg-red-600 text-white flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#FC0100]/20 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Watch Full Interview
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
