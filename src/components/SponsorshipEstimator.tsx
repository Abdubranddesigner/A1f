import { useState, useMemo } from 'react';
import { SPONSOR_PACKAGES } from '../data';
import { SponsorPackage } from '../types';

interface SponsorshipEstimatorProps {
  onSelectPackage: (pkgName: string) => void;
}

export default function SponsorshipEstimator({ onSelectPackage }: SponsorshipEstimatorProps) {
  const [budget, setBudget] = useState<number>(2000);
  const [selectedPkg, setSelectedPkg] = useState<string>('pkg-segment');

  const stats = useMemo(() => {
    // Dynamic math for reach metrics
    const views = Math.round(budget * 135);
    let recommendation = SPONSOR_PACKAGES[1]; // Segment by default
    if (budget < 1200) {
      recommendation = {
        id: 'pkg-micro',
        name: 'Single Segment Feature',
        priceRange: 'Under $1,000 / month',
        reach: 'Up to 100,000 views/month',
        description: 'Perfect for smaller, agile brands wanting tactical promotions.',
        features: ['15-second quick shoutout', 'Description links included'],
        bestFor: 'Agile startups or community events.'
      };
    } else if (budget >= 1200 && budget < 3500) {
      recommendation = SPONSOR_PACKAGES[1]; // Segment Spotlight
    } else if (budget >= 3500 && budget < 6500) {
      recommendation = SPONSOR_PACKAGES[0]; // Show Presenter
    } else {
      recommendation = SPONSOR_PACKAGES[2]; // Full Network
    }

    return {
      estimatedImpressions: views.toLocaleString(),
      recommendedPackage: recommendation
    };
  }, [budget]);

  return (
    <div className="space-y-8 bg-neutral-950 rounded-2xl border border-neutral-800 p-6 md:p-8 hover:border-[#FC0100]/30 transition-all shadow-xl" id="sponsor-calc">
      <div className="space-y-2">
        <h3 className="font-display font-bold text-xl md:text-2xl text-white flex items-center gap-2">
          <span className="text-[#FC0100] text-lg">📊</span>
          Sponsor Reach Estimator
        </h3>
        <p className="text-sm text-slate-400 font-light">
          Slide the bar to estimate monthly reach and view our optimal tier alignment for your budget.
        </p>
      </div>

      {/* Budget Slider */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Monthly Marketing Budget</span>
          <span className="font-mono text-xl font-black text-[#FC0100] bg-[#FC0100]/10 px-3 py-1 rounded border border-[#FC0100]/25">
            ${budget.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min="500"
          max="10000"
          step="250"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-[#FC0100] focus:outline-none focus:ring-2 focus:ring-[#FC0100]/20"
        />
        <div className="flex justify-between text-[10px] text-slate-500 font-mono">
          <span>$500/mo</span>
          <span>$5,000/mo</span>
          <span>$10,000/mo+</span>
        </div>
      </div>

      {/* Dynamic Estimation Outputs */}
      <div className="grid grid-cols-2 gap-4 bg-black rounded-xl p-4 border border-neutral-800">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold mb-1">Est. Impressions</span>
          <span className="font-mono font-extrabold text-lg sm:text-xl text-white">
            {stats.estimatedImpressions} <span className="text-xs text-slate-500 font-light">/mo</span>
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold mb-1">Aligned Tier</span>
          <span className="font-sans font-bold text-sm sm:text-base text-[#FC0100] block truncate">
            {stats.recommendedPackage.name}
          </span>
        </div>
      </div>

      {/* Recommended Package Spotlight */}
      <div className="border-t border-neutral-800 pt-6 space-y-4">
        <div className="bg-black/60 border border-neutral-800 rounded-xl p-5 space-y-3">
          <div className="flex justify-between items-start gap-2">
            <div>
              <span className="text-[9px] font-bold text-[#FC0100] bg-[#FC0100]/10 px-2.5 py-0.5 rounded-full border border-[#FC0100]/25 uppercase tracking-wide">
                Optimal Alignment
              </span>
              <h4 className="font-display font-bold text-base text-white mt-1.5">{stats.recommendedPackage.name}</h4>
            </div>
            <span className="font-mono text-xs font-semibold text-slate-300">{stats.recommendedPackage.priceRange}</span>
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            {stats.recommendedPackage.description}
          </p>

          <div className="space-y-1.5">
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Core Deliverables:</p>
            <ul className="grid grid-cols-1 gap-1.5">
              {stats.recommendedPackage.features.slice(0, 3).map((f, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-center gap-2 font-light">
                  <span className="text-[#FC0100]">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => onSelectPackage(stats.recommendedPackage.name)}
            className="w-full h-10 mt-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-bold text-white border border-neutral-800 transition-colors cursor-pointer"
          >
            Apply For This Tier
          </button>
        </div>
      </div>
    </div>
  );
}

