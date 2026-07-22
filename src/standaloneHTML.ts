export const STANDALONE_HTML = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alive Podcast | High-Impact Ethiopian Media & Business Network</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                        display: ['"Space Grotesk"', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            bg: '#090D16',       /* Deep obsidian dark background */
                            card: '#121826',     /* Rich charcoal navy cards */
                            accent: '#F59E0B',   /* Vibrant amber gold */
                            accentHover: '#D97706',
                            textMuted: '#94A3B8',/* Slate grey muted text */
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #090D16;
        }
        ::-webkit-scrollbar-thumb {
            background: #1E293B;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #F59E0B;
        }
    </style>
</head>
<body class="bg-brand-bg text-slate-100 font-sans antialiased">

    <!-- HEADER / NAVIGATION -->
    <header class="border-b border-slate-800/60 sticky top-0 bg-brand-bg/85 backdrop-blur-md z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Brand Logo -->
            <a href="#" class="flex items-center gap-3 group">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent to-orange-600 flex items-center justify-center font-display font-bold text-xl text-brand-bg shadow-lg shadow-brand-accent/20 group-hover:scale-105 transition-transform">
                    A
                </div>
                <div>
                    <span class="font-display font-bold text-xl tracking-tight text-white group-hover:text-brand-accent transition-colors">ALIVE</span>
                    <span class="text-xs block text-brand-textMuted font-medium tracking-widest uppercase -mt-1">Podcast Network</span>
                </div>
            </a>

            <!-- Navigation Links -->
            <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
                <a href="#stats" class="hover:text-brand-accent transition-colors">Performance</a>
                <a href="#episodes" class="hover:text-brand-accent transition-colors">Episodes</a>
                <a href="#network" class="hover:text-brand-accent transition-colors">Our Network</a>
                <a href="#sponsor" class="hover:text-brand-accent transition-colors">Sponsorships</a>
            </nav>

            <!-- Sponsor Call-to-Action -->
            <div class="flex items-center gap-4">
                <a href="#sponsor" class="hidden sm:inline-flex items-center justify-center px-5 h-11 rounded-lg text-sm font-bold bg-gradient-to-r from-brand-accent to-orange-500 text-brand-bg hover:from-amber-400 hover:to-orange-400 shadow-md shadow-brand-accent/10 hover:shadow-brand-accent/20 transition-all hover:-translate-y-0.5">
                    Partner With Us
                </a>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative pt-8 pb-20 md:py-24 overflow-hidden border-b border-slate-800/50">
        <!-- Background light glows -->
        <div class="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-brand-accent/5 blur-[80px] md:blur-[140px] pointer-events-none"></div>
        <div class="absolute top-1/2 right-10 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-orange-600/5 blur-[100px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                <!-- Text Column (Lg: 7 cols) -->
                <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold tracking-wide uppercase">
                        <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        Ethiopia's Leading Business & Tech Podcast
                    </div>
                    <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                        Where Leaders Meet to Inspire <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-amber-400 to-orange-500">Ethiopian Enterprise</span>
                    </h1>
                    <p class="text-lg text-brand-textMuted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                        Hosted by <span class="text-white font-medium">Abrham Fantu</span>, Alive Podcast is the central platform for Ethiopian founders, visionaries, and corporate operators shaping tomorrow's East African economy.
                    </p>
                    
                    <!-- CTAs -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                        <a href="#sponsor" class="inline-flex items-center justify-center px-8 h-14 rounded-xl font-bold bg-gradient-to-r from-brand-accent to-orange-500 text-brand-bg hover:from-amber-400 hover:to-orange-400 shadow-xl shadow-brand-accent/20 transition-all hover:-translate-y-1">
                            Secure Core Sponsorship
                        </a>
                        <a href="#episodes" class="inline-flex items-center justify-center px-8 h-14 rounded-xl font-bold bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1">
                            Explore Recent Episodes
                        </a>
                    </div>

                    <!-- Host Quote Snippet -->
                    <div class="pt-6 border-t border-slate-800/60 max-w-lg mx-auto lg:mx-0">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 rounded-full bg-slate-800 border-2 border-brand-accent flex-shrink-0 flex items-center justify-center overflow-hidden">
                                <span class="text-brand-accent font-bold text-lg">AF</span>
                            </div>
                            <div>
                                <p class="text-xs text-brand-textMuted italic">"Our mission is simple: to create a high-quality platform where Ethiopian business intelligence is documented, analyzed, and broadcast globally."</p>
                                <p class="text-xs font-semibold text-white mt-1">— Abrham Fantu, Host & Executive Producer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Media Column (Lg: 5 cols) -->
                <div class="lg:col-span-5">
                    <div class="relative group">
                        <!-- Neon gradient background container outline -->
                        <div class="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-brand-accent via-orange-600 to-amber-400 opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                        
                        <div class="relative rounded-2xl border border-slate-700/60 bg-slate-900/40 overflow-hidden shadow-2xl">
                            <!-- Simulated Video Embed Frame / Live Showcase -->
                            <div class="aspect-video relative bg-slate-950 flex items-center justify-center group/player">
                                <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600" alt="Video cover" class="w-full h-full object-cover opacity-60">
                                
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                                
                                <!-- Play Button -->
                                <button onclick="playFeaturedVideo()" class="absolute w-16 h-16 rounded-full bg-brand-accent text-brand-bg flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer z-10 group-hover/player:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6 ml-1"><path d="M8 5v14l11-7z"/></svg>
                                </button>

                                <!-- Title overlay -->
                                <div class="absolute bottom-4 left-4 right-4 text-left z-10">
                                    <span class="text-[10px] uppercase tracking-wider bg-brand-accent/90 text-brand-bg font-bold px-2 py-0.5 rounded-md mb-1.5 inline-block">Featured Release</span>
                                    <h4 class="font-display font-bold text-sm sm:text-base text-white truncate">Israel Goytom (CTO Chapa) on building global payment gateways in Addis Ababa</h4>
                                </div>
                            </div>

                            <!-- Channel Badge details -->
                            <div class="p-5 border-t border-slate-800 bg-brand-card/90">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center font-bold text-lg text-white">YT</div>
                                        <div>
                                            <p class="text-sm font-bold text-white">Latest Episode Embed</p>
                                            <p class="text-xs text-brand-textMuted">Hosted on YouTube & Spotify</p>
                                        </div>
                                    </div>
                                    <a href="https://youtube.com" target="_blank" class="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1">
                                        View on YouTube
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SOCIAL PROOF & KEY METRICS BAR -->
    <section id="stats" class="bg-gradient-to-b from-slate-900 to-brand-bg py-12 border-b border-slate-800/50">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Metric Cards -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div class="p-6 rounded-2xl bg-brand-card/30 border border-slate-800/60 hover:border-slate-700/60 transition-colors">
                    <span class="block font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-accent tracking-tight">270K+</span>
                    <span class="text-xs uppercase font-bold tracking-widest text-slate-400 mt-2 block">YouTube Subscribers</span>
                </div>
                <div class="p-6 rounded-2xl bg-brand-card/30 border border-slate-800/60 hover:border-slate-700/60 transition-colors">
                    <span class="block font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">400+</span>
                    <span class="text-xs uppercase font-bold tracking-widest text-slate-400 mt-2 block">Produced Episodes</span>
                </div>
                <div class="p-6 rounded-2xl bg-brand-card/30 border border-slate-800/60 hover:border-slate-700/60 transition-colors">
                    <span class="block font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">10M+</span>
                    <span class="text-xs uppercase font-bold tracking-widest text-slate-400 mt-2 block">Aggregate Views</span>
                </div>
                <div class="p-6 rounded-2xl bg-brand-card/30 border border-slate-800/60 hover:border-slate-700/60 transition-colors">
                    <span class="block font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-accent tracking-tight">450K+</span>
                    <span class="text-xs uppercase font-bold tracking-widest text-slate-400 mt-2 block">Monthly Multi-Platform Reach</span>
                </div>
            </div>

            <!-- Trusted by Corporate Sponsors -->
            <div class="mt-16 text-center">
                <p class="text-xs font-bold tracking-widest uppercase text-slate-400 mb-8">Trusted by Elite Partners in East Africa</p>
                <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                    <div class="flex items-center gap-2 hover:opacity-100 transition-opacity">
                        <span class="text-lg font-display font-extrabold text-white">Safaricom</span>
                        <span class="text-[10px] text-brand-accent font-semibold px-2 py-0.5 rounded border border-brand-accent/20 bg-brand-accent/5">Telecom</span>
                    </div>
                    <div class="flex items-center gap-2 hover:opacity-100 transition-opacity">
                        <span class="text-lg font-display font-extrabold text-white">Dashen Bank</span>
                        <span class="text-[10px] text-orange-400 font-semibold px-2 py-0.5 rounded border border-orange-400/20 bg-orange-400/5">Fintech</span>
                    </div>
                    <div class="flex items-center gap-2 hover:opacity-100 transition-opacity">
                        <span class="text-lg font-display font-extrabold text-white">Gebeya</span>
                        <span class="text-[10px] text-yellow-400 font-semibold px-2 py-0.5 rounded border border-yellow-400/20 bg-yellow-400/5">Talent</span>
                    </div>
                    <div class="flex items-center gap-2 hover:opacity-100 transition-opacity">
                        <span class="text-lg font-display font-extrabold text-white">ALX Ethiopia</span>
                        <span class="text-[10px] text-blue-400 font-semibold px-2 py-0.5 rounded border border-blue-400/20 bg-blue-400/5">Edtech</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- EPISODE ENGINE SECTION -->
    <section id="episodes" class="py-20 bg-brand-bg relative">
        <div class="max-w-7xl mx-auto px-6">
            
            <!-- Section Header -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                <div>
                    <h2 class="font-display font-bold text-3xl sm:text-4xl text-white">Broadcasting Commercial & Tech Intel</h2>
                    <p class="text-brand-textMuted mt-2 font-light">Search and filter through over 400 long-form interviews with leading industry icons.</p>
                </div>
                
                <!-- Category Filters (Mobile overflow-x scrollable) -->
                <div class="flex flex-wrap gap-2 w-full md:w-auto">
                    <button onclick="filterEpisodes('All')" id="filter-all" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-brand-accent text-brand-bg border border-brand-accent shadow-md shadow-brand-accent/10">
                        All Episodes
                    </button>
                    <button onclick="filterEpisodes('Business')" id="filter-Business" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60">
                        Business
                    </button>
                    <button onclick="filterEpisodes('Tech')" id="filter-Tech" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60">
                        Technology
                    </button>
                    <button onclick="filterEpisodes('Culture')" id="filter-Culture" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60">
                        Brand & Culture
                    </button>
                    <button onclick="filterEpisodes('Finance')" id="filter-Finance" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60">
                        Investment
                    </button>
                </div>
            </div>

            <!-- Live Search input -->
            <div class="mb-8 relative max-w-md">
                <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.602z" /></svg>
                </span>
                <input type="text" id="search-input" onkeyup="searchEpisodes()" placeholder="Search guests, titles, or tags..." class="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/30 transition-colors">
            </div>

            <!-- Episodes Grid -->
            <div class="grid md:grid-cols-2 gap-8" id="episodes-grid">
                <!-- Episode 1 -->
                <div class="episode-card rounded-2xl border border-slate-800 bg-brand-card/40 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-brand-card/70 transition-all group" data-category="Tech">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wide">Technology</span>
                            <span class="text-xs font-mono text-brand-textMuted">1h 24m</span>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white group-hover:text-brand-accent transition-colors leading-snug">
                            Building the Future of Ethiopian Payments & Digital Infrastructure
                        </h3>
                        <p class="text-sm text-brand-textMuted mt-3 font-light line-clamp-2">
                            An inside look at how fintech platforms in Ethiopia are scaling up after the liberalisation of the national financial sector, handling heavy transaction traffic, and securing global integrations.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Israel Goytom" class="w-10 h-10 rounded-full object-cover border border-slate-700">
                            <div>
                                <p class="text-sm font-bold text-slate-200">Israel Goytom</p>
                                <p class="text-xs text-brand-textMuted">Co-founder & CTO of Chapa</p>
                            </div>
                        </div>
                        <button onclick="openModal('ep-402')" class="text-xs font-bold text-brand-accent flex items-center gap-1 group-hover:underline">
                            Intel Takeaways
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </button>
                    </div>
                </div>

                <!-- Episode 2 -->
                <div class="episode-card rounded-2xl border border-slate-800 bg-brand-card/40 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-brand-card/70 transition-all group" data-category="Business">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-wide">Business</span>
                            <span class="text-xs font-mono text-brand-textMuted">1h 48m</span>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white group-hover:text-brand-accent transition-colors leading-snug">
                            Commodity Exchanges & Modernizing Ethiopian Agriculture Networks
                        </h3>
                        <p class="text-sm text-brand-textMuted mt-3 font-light line-clamp-2">
                            The legendary agricultural economist shares her insights on setting up the Ethiopia Commodity Exchange (ECX), creating structured marketplaces, and her vision for the next phase of African trade.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Eleni Gabre-Madhin" class="w-10 h-10 rounded-full object-cover border border-slate-700">
                            <div>
                                <p class="text-sm font-bold text-slate-200">Dr. Eleni Gabre-Madhin</p>
                                <p class="text-xs text-brand-textMuted">Founder of ECX</p>
                            </div>
                        </div>
                        <button onclick="openModal('ep-398')" class="text-xs font-bold text-brand-accent flex items-center gap-1 group-hover:underline">
                            Intel Takeaways
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </button>
                    </div>
                </div>

                <!-- Episode 3 -->
                <div class="episode-card rounded-2xl border border-slate-800 bg-brand-card/40 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-brand-card/70 transition-all group" data-category="Culture">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase tracking-wide">Brand & Culture</span>
                            <span class="text-xs font-mono text-brand-textMuted">1h 12m</span>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white group-hover:text-brand-accent transition-colors leading-snug">
                            Ethical Footwear and Elevating Ethiopian Brands Globally
                        </h3>
                        <p class="text-sm text-brand-textMuted mt-3 font-light line-clamp-2">
                            Bethlehem details the journey of taking traditional Ethiopian artisan skills to global markets, constructing local eco-friendly factories, and building an globally recognized brand.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150" alt="Bethlehem Tilahun" class="w-10 h-10 rounded-full object-cover border border-slate-700">
                            <div>
                                <p class="text-sm font-bold text-slate-200">Bethlehem Tilahun Alemu</p>
                                <p class="text-xs text-brand-textMuted">Founder & CEO of soleRebels</p>
                            </div>
                        </div>
                        <button onclick="openModal('ep-395')" class="text-xs font-bold text-brand-accent flex items-center gap-1 group-hover:underline">
                            Intel Takeaways
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </button>
                    </div>
                </div>

                <!-- Episode 4 -->
                <div class="episode-card rounded-2xl border border-slate-800 bg-brand-card/40 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-brand-card/70 transition-all group" data-category="Finance">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wide">Investment</span>
                            <span class="text-xs font-mono text-brand-textMuted">1h 35m</span>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white group-hover:text-brand-accent transition-colors leading-snug">
                            Navigating Venture Capital & Startups in East Africa
                        </h3>
                        <p class="text-sm text-brand-textMuted mt-3 font-light line-clamp-2">
                            An analytical discussion on the flow of foreign venture funding, domestic angel investment, and the real-world execution of the Startup Act in Ethiopia.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" alt="Bernard Laurendeau" class="w-10 h-10 rounded-full object-cover border border-slate-700">
                            <div>
                                <p class="text-sm font-bold text-slate-200">Bernard Laurendeau</p>
                                <p class="text-xs text-brand-textMuted">Partner at Laurendeau & Assoc.</p>
                            </div>
                        </div>
                        <button onclick="openModal('ep-390')" class="text-xs font-bold text-brand-accent flex items-center gap-1 group-hover:underline">
                            Intel Takeaways
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ALIVE NETWORK HUB -->
    <section id="network" class="py-20 bg-slate-900/40 border-y border-slate-800/60 relative">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">Scaling Multi-Channel Capture</span>
                <h2 class="font-display font-bold text-3xl sm:text-4xl text-white mt-4">The Alive Media Ecosystem</h2>
                <p class="text-brand-textMuted mt-2 font-light">Spanning micro-educational, individual policy analysis, and personal developmental formats to engage every pocket of Ethiopian enterprise.</p>
            </div>

            <!-- Network Grid -->
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Shorts -->
                <div class="rounded-2xl border border-slate-800/80 bg-brand-card/70 p-8 hover:-translate-y-1 hover:border-red-500/30 transition-all flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center font-display font-extrabold text-white shadow-lg mb-6 text-xl">
                            ⚡
                        </div>
                        <h3 class="font-display font-bold text-xl text-white">Alive Shorts</h3>
                        <p class="text-xs text-red-400 font-semibold mt-1">@AliveShorts | 120K+ Subscribers</p>
                        <p class="text-sm text-brand-textMuted mt-4 leading-relaxed font-light">
                            Bite-sized high-impact entrepreneurial wisdom, golden takeaways, and sharp highlights from our primary interviews. Perfect for quick consumption.
                        </p>
                    </div>
                    <div class="mt-8 pt-4 border-t border-slate-800/60">
                        <a href="https://youtube.com" target="_blank" class="text-xs font-bold text-white hover:text-red-400 transition-colors flex items-center gap-1">
                            Subscribe to Shorts Network
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                        </a>
                    </div>
                </div>

                <!-- Main Point -->
                <div class="rounded-2xl border border-slate-800/80 bg-brand-card/70 p-8 hover:-translate-y-1 hover:border-blue-500/30 transition-all flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-display font-extrabold text-white shadow-lg mb-6 text-xl">
                            📌
                        </div>
                        <h3 class="font-display font-bold text-xl text-white">Main Point</h3>
                        <p class="text-xs text-blue-400 font-semibold mt-1">@MainPointEthiopia | 85K+ Subscribers</p>
                        <p class="text-sm text-brand-textMuted mt-4 leading-relaxed font-light">
                            Solo deep-dives where host Abrham Fantu breaks down critical regulatory news, national policy updates, financial reforms, and macroeconomic charts.
                        </p>
                    </div>
                    <div class="mt-8 pt-4 border-t border-slate-800/60">
                        <a href="https://youtube.com" target="_blank" class="text-xs font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-1">
                            Subscribe to Policy Network
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                        </a>
                    </div>
                </div>

                <!-- Journey -->
                <div class="rounded-2xl border border-slate-800/80 bg-brand-card/70 p-8 hover:-translate-y-1 hover:border-amber-500/30 transition-all flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center font-display font-extrabold text-white shadow-lg mb-6 text-xl">
                            🌅
                        </div>
                        <h3 class="font-display font-bold text-xl text-white">The Journey</h3>
                        <p class="text-xs text-amber-400 font-semibold mt-1">@TheJourneyEth | 65K+ Subscribers</p>
                        <p class="text-sm text-brand-textMuted mt-4 leading-relaxed font-light">
                            Personal stories and human struggles of top creative minds, showcasing the mental health, resilience, and quiet routines behind highly public success.
                        </p>
                    </div>
                    <div class="mt-8 pt-4 border-t border-slate-800/60">
                        <a href="https://youtube.com" target="_blank" class="text-xs font-bold text-white hover:text-amber-400 transition-colors flex items-center gap-1">
                            Subscribe to Journey Network
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CORPORATE SPONSORSHIP INQUIRY SECTION (WITH MEDIA KIT CALLOUT) -->
    <section id="sponsor" class="py-20 bg-brand-bg relative overflow-hidden">
        <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                <!-- Info Column (Lg: 5 cols) -->
                <div class="lg:col-span-5 space-y-6">
                    <span class="text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">Corporate Alignment</span>
                    <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                        Broadcast Your Brand to Ethiopian Business Leaders
                    </h2>
                    <p class="text-brand-textMuted leading-relaxed font-light">
                        Position your organization alongside the primary source of East African entrepreneurial intelligence. Alive Podcast reaches decision-makers: founders, policy advisers, developers, and regional leaders.
                    </p>

                    <!-- Interactive Sponsorship Estimator Mini-Widget -->
                    <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
                        <h4 class="font-display font-semibold text-white text-sm flex items-center gap-2">
                            <span>📊</span> Budget Reach Estimator
                        </h4>
                        <p class="text-xs text-brand-textMuted">Estimate the potential recurring impressions and reach across our full networks.</p>
                        
                        <div>
                            <label for="budget-slider" class="text-xs font-medium text-slate-300 flex justify-between mb-1.5">
                                <span>Monthly Advertising Budget:</span>
                                <span class="font-semibold text-brand-accent font-mono" id="budget-label">$1,500</span>
                            </label>
                            <input type="range" id="budget-slider" min="500" max="10000" step="250" value="1500" oninput="calculateSponsorReach(this.value)" class="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-accent">
                        </div>

                        <div class="grid grid-cols-2 gap-4 pt-3 border-t border-slate-800/80">
                            <div>
                                <span class="text-[10px] uppercase tracking-wider text-slate-400 block">Est. Impressions</span>
                                <span class="font-mono font-bold text-lg text-white" id="est-views">200K / month</span>
                            </div>
                            <div>
                                <span class="text-[10px] uppercase tracking-wider text-slate-400 block">Segment Options</span>
                                <span class="font-mono font-bold text-xs text-brand-accent" id="est-package">Segment Spotlight</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Column (Lg: 7 cols) -->
                <div class="lg:col-span-7">
                    <div class="p-8 rounded-2xl border border-slate-800 bg-brand-card/60 backdrop-blur-sm relative">
                        <h3 class="font-display font-bold text-2xl text-white">Sponsorship & Media Kit Inquiry</h3>
                        <p class="text-xs text-brand-textMuted mt-1 mb-8">Fill out the brief form below to receive our verified 2026 Media Kit (PDF) and initiate a booking conversation.</p>

                        <!-- Sponsorship Form -->
                        <form id="sponsorship-form" onsubmit="handleFormSubmit(event)" class="space-y-6">
                            <div class="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" for="comp-name">Company Name *</label>
                                    <input required type="text" id="comp-name" placeholder="e.g. Dashen Bank" class="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-accent transition-colors">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" for="contact-name">Your Full Name *</label>
                                    <input required type="text" id="contact-name" placeholder="e.g. Almaz Tesfaye" class="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-accent transition-colors">
                                </div>
                            </div>

                            <div class="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" for="contact-email">Professional Email *</label>
                                    <input required type="email" id="contact-email" placeholder="e.g. almaz@dashenbank.com" class="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-accent transition-colors">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" for="contact-phone">Phone Number</label>
                                    <input type="text" id="contact-phone" placeholder="e.g. +251 911 234567" class="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-accent transition-colors">
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" for="tier-select">Select Campaign Goal</label>
                                <select id="tier-select" class="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-brand-accent transition-colors">
                                    <option value="hero">Show Presenter (Title Sponsor)</option>
                                    <option value="segment">Segment Spotlight Sponsor ($1.5k/mo)</option>
                                    <option value="network">Full Network package (Multi-Channel)</option>
                                    <option value="undecided">Custom partnership (General brand alignment)</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" for="contact-notes">Inquiry / Campaign Description</label>
                                <textarea id="contact-notes" rows="3" placeholder="Tell us about your brand and what products/services you want to highlight to the Alive audience..." class="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-accent transition-colors"></textarea>
                            </div>

                            <button type="submit" class="w-full inline-flex items-center justify-center px-6 h-12 rounded-lg font-bold bg-gradient-to-r from-brand-accent to-orange-500 text-brand-bg hover:from-amber-400 hover:to-orange-400 shadow-md shadow-brand-accent/10 hover:shadow-brand-accent/20 cursor-pointer transition-all">
                                Send Inquiry & Access Media Kit PDF
                            </button>
                        </form>

                        <!-- Form Submission Success Overlay -->
                        <div id="form-success" class="hidden absolute inset-0 bg-slate-950/95 rounded-2xl flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                            <span class="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-3xl mb-4 border border-emerald-500/30">✓</span>
                            <h4 class="font-display font-bold text-xl text-white">Proposal & Media Kit Sent!</h4>
                            <p class="text-sm text-brand-textMuted mt-2 max-w-sm">
                                Thank you, <span class="text-white font-medium" id="success-name">partner</span>. We have automatically emailed our verified 2026 Media Kit to <span class="text-white font-medium" id="success-email">your address</span>. Host Abrham Fantu or a partnership coordinator will reach out within 24 business hours.
                            </p>
                            <button onclick="resetSponsorshipForm()" class="mt-6 px-4 py-2 rounded-lg bg-slate-800 text-xs font-bold text-slate-300 border border-slate-700/60 hover:text-white">
                                Submit Another Inquiry
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- EMAIL & TELEGRAM CAPTURE FOOTER -->
    <footer class="bg-slate-950 text-slate-400 py-16 border-t border-slate-800/80">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-12 gap-12 items-center">
                
                <!-- Left: Network summary (6 cols) -->
                <div class="md:col-span-6 space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-lg bg-brand-accent text-brand-bg flex items-center justify-center font-display font-extrabold text-sm">
                            A
                        </div>
                        <span class="font-display font-bold text-lg text-white tracking-tight">ALIVE NETWORK</span>
                    </div>
                    <p class="text-sm text-slate-400 font-light max-w-md">
                        Alive Podcast is registered under Fantu Media PLC. Empowering East African entrepreneurs and developers through world-class business content.
                    </p>
                    <p class="text-xs text-brand-textMuted">
                        © 2026 Fantu Media Group. All Rights Reserved. Made in Addis Ababa, Ethiopia.
                    </p>
                </div>

                <!-- Right: Newsletter form (6 cols) -->
                <div class="md:col-span-6 bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800/80">
                    <h4 class="font-display font-bold text-lg text-white">Subscribe to the Alive Intel Digest</h4>
                    <p class="text-xs text-brand-textMuted mt-1 mb-6 leading-relaxed">
                        Join 45,000+ subscribers who receive our detailed written guest takeaway breakdowns, regulatory deep-dives, and exclusive business alerts direct to email or Telegram.
                    </p>

                    <form id="newsletter-form" onsubmit="handleNewsletterSubmit(event)" class="space-y-3">
                        <div class="flex flex-col sm:flex-row gap-3">
                            <input required type="email" id="newsletter-email" placeholder="Enter your business email" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-accent">
                            <button type="submit" class="sm:w-auto w-full inline-flex items-center justify-center px-6 h-11 rounded-lg text-xs font-bold bg-brand-accent text-brand-bg hover:bg-amber-400 shrink-0 transition-colors cursor-pointer">
                                Subscribe Email
                            </button>
                        </div>
                    </form>

                    <!-- Newsletter success message -->
                    <div id="newsletter-success" class="hidden mt-4 text-xs text-emerald-400 font-semibold flex items-center gap-2">
                        <span>✓</span> Subscribed successfully! A confirmation code was sent to your inbox.
                    </div>

                    <!-- Direct Telegram channel button -->
                    <div class="mt-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span class="text-xs text-brand-textMuted font-medium">Or prefer instant mobile updates?</span>
                        <a href="https://t.me" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#229ED9]/15 border border-[#229ED9]/25 hover:bg-[#229ED9]/25 transition-all text-xs font-bold text-[#229ED9] uppercase tracking-wide">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15.8-1.53 6.36-2.23 9.44-.3.12-.66.19-1.02.19-.52 0-1.01-.16-1.42-.48l-2.43-1.74-1.27.91a.63.63 0 0 1-.39.14c-.11 0-.22-.03-.32-.08-.19-.11-.3-.32-.3-.55v-2.92l5.77-5.21c.25-.23-.05-.35-.38-.13L6.1 13.06l-2.61-.82c-.57-.18-.58-.57.12-.85l10.15-3.91c2.25-.87 3.32.2 2.88 1.32z"/></svg>
                            Join Alive Telegram Channel
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </footer>

    <!-- DETAIL / intel TAKEAWAYS MODAL -->
    <div id="takeaways-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm hidden items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl p-6 sm:p-8 relative shadow-2xl animate-scale-up" onclick="event.stopPropagation()">
            <!-- Close Button -->
            <button onclick="closeModal()" class="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <!-- Modal Content -->
            <div id="modal-content-area" class="space-y-6">
                <!-- Injected via JavaScript -->
            </div>
        </div>
    </div>

    <!-- JAVASCRIPT LOGIC -->
    <script>
        // EPISODES STATIC DATA FOR IN-BROWSER INTERACTION
        const EPISODES_DB = {
            'ep-402': {
                title: 'Building the Future of Ethiopian Payments & Digital Infrastructure',
                category: 'Technology',
                duration: '1h 24m',
                guest: 'Israel Goytom',
                title_role: 'Co-founder & CTO of Chapa',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
                summary: 'An inside look at how fintech platforms in Ethiopia are scaling up after the liberalisation of the national financial sector, handling heavy transaction traffic, and securing global integrations.',
                takeaways: [
                    'The transition from traditional cash transfers to open API banking in Ethiopia.',
                    'How to build highly available fintech architecture using regional cloud clusters.',
                    'Addressing the regulatory landscape and compliance requirements under National Bank guidelines.'
                ]
            },
            'ep-398': {
                title: 'Commodity Exchanges & Modernizing Ethiopian Agriculture Networks',
                category: 'Business',
                duration: '1h 48m',
                guest: 'Dr. Eleni Gabre-Madhin',
                title_role: 'Founder of ECX & Global Innovator',
                avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
                summary: 'The legendary agricultural economist shares her insights on setting up the Ethiopia Commodity Exchange (ECX), creating structured marketplaces, and her vision for the next phase of African trade.',
                takeaways: [
                    'The foundational mechanics of market price discovery and supply chain security.',
                    'Why modern soft commodities trading requires deep structural trust and fast payment clearing.',
                    'How technology can bridge the gap for rural smallholder cooperatives.'
                ]
            },
            'ep-395': {
                title: 'Ethical Footwear and Elevating Ethiopian Brands Globally',
                category: 'Brand & Culture',
                duration: '1h 12m',
                guest: 'Bethlehem Tilahun Alemu',
                title_role: 'Founder & CEO of soleRebels',
                avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
                summary: 'Bethlehem details the journey of taking traditional Ethiopian artisan skills to global markets, constructing local eco-friendly factories, and building an globally recognized brand.',
                takeaways: [
                    'Empowering local artisans by offering triple the average national wage with deep social care.',
                    'Marketing strategy: How soleRebels bypassed conventional retail distribution channels.',
                    'Managing global international logistics from the heart of Addis Ababa.'
                ]
            },
            'ep-390': {
                title: 'Navigating Venture Capital & Startups in East Africa',
                category: 'Investment',
                duration: '1h 35m',
                guest: 'Bernard Laurendeau',
                title_role: 'Managing Partner at Laurendeau & Associates',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
                summary: 'An analytical discussion on the flow of foreign venture funding, domestic angel investment, and the real-world execution of the Startup Act in Ethiopia.',
                takeaways: [
                    'Unpacking current foreign exchange regulations and impact on equity investment.',
                    'Creating local holding structures that accommodate international VC funds.',
                    'Talent pipelines: Building high-performance local engineering squads.'
                ]
            }
        };

        // 1. FILTER FUNCTION
        let currentFilter = 'All';
        function filterEpisodes(category) {
            currentFilter = category;
            
            // Update Filter buttons UI classes
            const categories = ['All', 'Business', 'Tech', 'Culture', 'Finance'];
            categories.forEach(cat => {
                const btn = document.getElementById('filter-' + cat);
                if (btn) {
                    if (cat === category) {
                        btn.className = "px-4 py-2 rounded-lg text-xs font-bold transition-all bg-brand-accent text-brand-bg border border-brand-accent shadow-md shadow-brand-accent/10";
                    } else {
                        btn.className = "px-4 py-2 rounded-lg text-xs font-bold transition-all bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60";
                    }
                }
            });

            executeCombinedFilterAndSearch();
        }

        // 2. SEARCH FUNCTION
        function searchEpisodes() {
            executeCombinedFilterAndSearch();
        }

        // Combined logic for robust local search
        function executeCombinedFilterAndSearch() {
            const query = document.getElementById('search-input').value.toLowerCase().trim();
            const cards = document.querySelectorAll('.episode-card');

            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const titleText = card.querySelector('h3').innerText.toLowerCase();
                const descText = card.querySelector('p').innerText.toLowerCase();
                const guestText = card.querySelector('.font-bold.text-slate-200').innerText.toLowerCase();

                // Check Category match
                let matchesCategory = false;
                if (currentFilter === 'All') {
                    matchesCategory = true;
                } else if (currentFilter === 'Business' && cardCategory === 'Business') {
                    matchesCategory = true;
                } else if (currentFilter === 'Tech' && cardCategory === 'Tech') {
                    matchesCategory = true;
                } else if (currentFilter === 'Culture' && cardCategory === 'Culture') {
                    matchesCategory = true;
                } else if (currentFilter === 'Finance' && cardCategory === 'Finance') {
                    matchesCategory = true;
                }

                // Check Search text match
                const matchesSearch = !query || 
                                      titleText.includes(query) || 
                                      descText.includes(query) || 
                                      guestText.includes(query);

                if (matchesCategory && matchesSearch) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }

        // 3. SPONSOR BUDGET REACH ESTIMATOR
        function calculateSponsorReach(value) {
            const valNum = parseInt(value);
            
            // Format budget text
            const budgetLabel = document.getElementById('budget-label');
            budgetLabel.innerText = '$' + valNum.toLocaleString();

            const viewsEl = document.getElementById('est-views');
            const pkgEl = document.getElementById('est-package');

            // Reach calculation metrics
            if (valNum < 1500) {
                viewsEl.innerText = Math.round(valNum * 125).toLocaleString() + " / month";
                pkgEl.innerText = "Segment Feature";
            } else if (valNum < 4000) {
                viewsEl.innerText = Math.round(valNum * 140).toLocaleString() + " / month";
                pkgEl.innerText = "Segment Spotlight";
            } else if (valNum < 7000) {
                viewsEl.innerText = Math.round(valNum * 155).toLocaleString() + " / month";
                pkgEl.innerText = "Show Presenter";
            } else {
                viewsEl.innerText = "800K+ / month";
                pkgEl.innerText = "Full Network Domination";
            }
        }

        // 4. FORMS SUBMISSIONS
        function handleFormSubmit(event) {
            event.preventDefault();
            const company = document.getElementById('comp-name').value;
            const email = document.getElementById('contact-email').value;

            document.getElementById('success-name').innerText = company;
            document.getElementById('success-email').innerText = email;

            // Show success overlay
            const overlay = document.getElementById('form-success');
            overlay.classList.remove('hidden');
        }

        function resetSponsorshipForm() {
            document.getElementById('sponsorship-form').reset();
            document.getElementById('form-success').classList.add('hidden');
        }

        function handleNewsletterSubmit(event) {
            event.preventDefault();
            document.getElementById('newsletter-success').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('newsletter-success').classList.add('hidden');
                document.getElementById('newsletter-form').reset();
            }, 4000);
        }

        // 5. TAKEAWAYS MODAL CONTROL
        function openModal(episodeId) {
            const epData = EPISODES_DB[episodeId];
            if (!epData) return;

            const modal = document.getElementById('takeaways-modal');
            const contentArea = document.getElementById('modal-content-area');

            // Format category color
            let catColorClass = "bg-blue-500/10 text-blue-400 border-blue-500/20";
            if (epData.category === 'Business') catColorClass = "bg-amber-500/10 text-amber-400 border-amber-500/20";
            if (epData.category === 'Brand & Culture') catColorClass = "bg-rose-500/10 text-rose-400 border-rose-500/20";
            if (epData.category === 'Investment') catColorClass = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

            let takeawaysListHTML = '';
            epData.takeaways.forEach(t => {
                takeawaysListHTML += \`<li class="flex items-start gap-2.5 text-sm text-slate-300 font-light">
                    <span class="text-brand-accent mt-0.5">▪</span>
                    <span>\${t}</span>
                </li>\`;
            });

            contentArea.innerHTML = \`
                <div class="flex items-center justify-between">
                    <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border \${catColorClass}">
                        \${epData.category}
                    </span>
                    <span class="text-xs font-mono text-brand-textMuted">\${epData.duration}</span>
                </div>

                <div class="space-y-2">
                    <h3 class="font-display font-bold text-2xl text-white leading-snug">\${epData.title}</h3>
                    <div class="flex items-center gap-3 pt-1">
                        <img src="\${epData.avatar}" alt="\${epData.guest}" class="w-9 h-9 rounded-full object-cover border border-slate-700">
                        <div>
                            <p class="text-xs font-bold text-slate-200">\${epData.guest}</p>
                            <p class="text-[10px] text-brand-textMuted">\${epData.title_role}</p>
                        </div>
                    </div>
                </div>

                <div class="space-y-2.5 border-t border-slate-800 pt-4">
                    <h4 class="text-xs uppercase font-bold tracking-wider text-slate-400">Brief Summary</h4>
                    <p class="text-sm text-brand-textMuted leading-relaxed font-light">\${epData.summary}</p>
                </div>

                <div class="space-y-3 pt-2">
                    <h4 class="text-xs uppercase font-bold tracking-wider text-slate-400">Key Commercial Takeaways</h4>
                    <ul class="space-y-2.5">
                        \${takeawaysListHTML}
                    </ul>
                </div>

                <div class="pt-4 border-t border-slate-800/60 flex justify-end gap-3">
                    <button onclick="closeModal()" class="px-5 h-10 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700/60 cursor-pointer transition-colors">
                        Close
                    </button>
                    <a href="https://youtube.com" target="_blank" class="px-5 h-10 rounded-lg text-xs font-bold bg-brand-accent text-brand-bg hover:bg-amber-400 flex items-center justify-center gap-1">
                        Listen to full episode
                    </a>
                </div>
            \`;

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Lock background scroll
        }

        function closeModal() {
            const modal = document.getElementById('takeaways-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = ''; // Unlock scroll
        }

        // Close on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        // Close modal when clicking outside background container
        document.getElementById('takeaways-modal').addEventListener('click', function() {
            closeModal();
        });

        // 6. VIDEO PLAYER INTERACTION
        function playFeaturedVideo() {
            alert('This video link is set to redirect to the live YouTube episode. In a production build, this loads the interactive iframe player natively.');
        }
    </script>
</body>
</html>
`;
