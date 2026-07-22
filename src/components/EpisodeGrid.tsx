import React, { useState, useEffect, useRef } from 'react';
import { EPISODES_DATA } from '../data';
import { Episode } from '../types';
import {
  Play,
  Pause,
  Clock,
  ThumbsUp,
  X,
  Plus,
  Edit3,
  Trash2,
  Bookmark,
  Share2,
  Copy,
  Check,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Headphones,
  Video
} from 'lucide-react';

export default function EpisodeGrid() {
  // Episode state backed by localStorage
  const [episodes, setEpisodes] = useState<Episode[]>(() => {
    try {
      const saved = localStorage.getItem('alive_episodes_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return EPISODES_DATA;
  });

  // Saved/Bookmarked state
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('alive_episode_bookmarks');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return ['ep-405'];
  });

  // Likes state mapping episode ID -> likes count
  const [likedMap, setLikedMap] = useState<Record<string, { count: number; userLiked: boolean }>>(() => {
    try {
      const saved = localStorage.getItem('alive_episode_likes');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    const initial: Record<string, { count: number; userLiked: boolean }> = {};
    EPISODES_DATA.forEach((ep) => {
      const numLikes = typeof ep.likes === 'number' ? ep.likes : parseInt(String(ep.likes).replace(/[^0-9]/g, '')) * 1000 || 4000;
      initial[ep.id] = { count: numLikes, userLiked: false };
    });
    return initial;
  });

  // Modals & Active Selections
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null); // Insights Modal
  const [watchEpisode, setWatchEpisode] = useState<Episode | null>(null);   // YouTube Video Modal
  const [shareEpisode, setShareEpisode] = useState<Episode | null>(null);   // Share Modal
  const [editingEpisode, setEditingEpisode] = useState<Partial<Episode> | null>(null); // Add/Edit Modal
  const [isNewEpisode, setIsNewEpisode] = useState(false);

  // Audio Player State
  const [playingEpisode, setPlayingEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Feedback Toasts
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedTakeaways, setCopiedTakeaways] = useState(false);

  // Audio element ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('alive_episodes_v2', JSON.stringify(episodes));
  }, [episodes]);

  useEffect(() => {
    localStorage.setItem('alive_episode_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('alive_episode_likes', JSON.stringify(likedMap));
  }, [likedMap]);

  // Toast handler
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Toggle bookmark
  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (bookmarks.includes(id)) {
      setBookmarks((prev) => prev.filter((item) => item !== id));
      showToast('Removed from saved reading queue');
    } else {
      setBookmarks((prev) => [...prev, id]);
      showToast('Saved to your listening queue');
    }
  };

  // Toggle Like
  const handleLike = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLikedMap((prev) => {
      const current = prev[id] || { count: 4000, userLiked: false };
      const newUserLiked = !current.userLiked;
      const newCount = newUserLiked ? current.count + 1 : Math.max(0, current.count - 1);
      return {
        ...prev,
        [id]: { count: newCount, userLiked: newUserLiked }
      };
    });
  };

  // Handle Play Audio
  const handlePlayAudio = (ep: Episode, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (playingEpisode?.id === ep.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setPlayingEpisode(ep);
      setIsPlaying(true);
    }
  };

  // Audio Playback Effects
  useEffect(() => {
    if (playingEpisode && audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [playingEpisode, isPlaying, playbackRate]);

  // Share Episode (Native Share API with fallback to pre-filled modal)
  const handleShareEpisode = async (ep: Episode, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const shareMessage = `🎙️ Listen to "${ep.title}" featuring ${ep.guestName} on Alive Podcast Network!`;
    const shareUrl = `https://alivepodcast.et/episodes/${ep.id}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Alive Podcast: ${ep.title}`,
          text: shareMessage,
          url: shareUrl,
        });
        showToast('Shared successfully!');
        return;
      } catch (err: any) {
        if (err.name === 'AbortError') return; // User cancelled
      }
    }
    setShareEpisode(ep);
  };

  // Open Create Modal
  const handleOpenCreateModal = () => {
    setIsNewEpisode(true);
    setEditingEpisode({
      id: `ep-${Date.now().toString().slice(-4)}`,
      title: '',
      guestName: '',
      guestTitle: '',
      guestAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '1h 15m',
      publishedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      category: 'Tech',
      views: '12K',
      likes: 120,
      summary: '',
      takeaways: ['Key strategic takeaway 1', 'Key strategic takeaway 2'],
      audioUrl: 'https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg',
      timestamps: [
        { time: '00:00', label: 'Episode Introduction' },
        { time: '15:00', label: 'Core Discussion & Industry Impact' }
      ]
    });
  };

  // Open Edit Modal
  const handleOpenEditModal = (ep: Episode, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsNewEpisode(false);
    setEditingEpisode({ ...ep });
  };

  // Save Episode changes
  const handleSaveEpisode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEpisode || !editingEpisode.title || !editingEpisode.guestName) return;

    const fullEp = editingEpisode as Episode;

    if (isNewEpisode) {
      setEpisodes((prev) => [fullEp, ...prev]);
      setLikedMap((prev) => ({
        ...prev,
        [fullEp.id]: { count: typeof fullEp.likes === 'number' ? fullEp.likes : 100, userLiked: false }
      }));
      showToast('New episode published successfully!');
    } else {
      setEpisodes((prev) => prev.map((item) => (item.id === fullEp.id ? fullEp : item)));
      if (activeEpisode?.id === fullEp.id) setActiveEpisode(fullEp);
      showToast('Episode updated successfully!');
    }

    setEditingEpisode(null);
  };

  // Delete Episode
  const handleDeleteEpisode = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (window.confirm('Are you sure you want to delete this episode?')) {
      setEpisodes((prev) => prev.filter((item) => item.id !== id));
      if (activeEpisode?.id === id) setActiveEpisode(null);
      if (playingEpisode?.id === id) setPlayingEpisode(null);
      showToast('Episode deleted');
    }
  };

  // Restore Default Episodes
  const handleRestoreDefaults = () => {
    if (window.confirm('Reset all episodes back to standard default broadcast directory?')) {
      setEpisodes(EPISODES_DATA);
      localStorage.removeItem('alive_episodes_v2');
      showToast('Episodes restored to default state');
    }
  };

  // Copy Takeaways Text
  const handleCopyTakeaways = (ep: Episode) => {
    const text = `🎙️ ${ep.title}\nGuest: ${ep.guestName} (${ep.guestTitle})\n\nSummary:\n${ep.summary}\n\nKey Commercial Takeaways:\n${ep.takeaways.map((t, i) => `${i + 1}. ${t}`).join('\n')}\n\nListen on Alive Podcast Network`;
    navigator.clipboard.writeText(text);
    setCopiedTakeaways(true);
    setTimeout(() => setCopiedTakeaways(false), 2500);
    showToast('Intel Takeaways copied to clipboard!');
  };

  // Audio Progress format helper
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="space-y-8 relative" id="episodes">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-[#FC0100] text-white px-4 py-3 rounded-xl shadow-2xl font-semibold text-xs flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hidden Audio Element */}
      {playingEpisode && (
        <audio
          ref={audioRef}
          src={playingEpisode.audioUrl || 'https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg'}
          onTimeUpdate={() => {
            if (audioRef.current) setAudioProgress(audioRef.current.currentTime);
          }}
          onLoadedMetadata={() => {
            if (audioRef.current) setAudioDuration(audioRef.current.duration);
          }}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-neutral-800">
        {/* Left Side: Info */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FC0100]/10 border border-[#FC0100]/25 text-[#FC0100] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Broadcast Catalogue
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Broadcasting Commercial Intel</h2>
          <p className="text-sm text-slate-400 font-light">
            Explore guest insights, business model breakdowns, audio briefings, and key policy takeaways.
          </p>
        </div>
      </div>

      {/* Empty State */}
      {episodes.length === 0 && (
        <div className="text-center py-16 bg-neutral-950 rounded-2xl border border-dashed border-neutral-800 space-y-3">
          <p className="text-slate-400 text-sm">No episodes in the catalogue.</p>
        </div>
      )}

      {/* Grid of Episodes */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {episodes.map((ep) => {
          const likesInfo = likedMap[ep.id] || { count: 4000, userLiked: false };

          return (
            <div
              key={ep.id}
              className="rounded-2xl border transition-all p-5 sm:p-6 flex flex-col justify-between group shadow-sm hover:shadow-xl relative bg-neutral-950 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60"
            >
              <div>
                {/* Video Thumbnail Display */}
                <div
                  onClick={() => setWatchEpisode(ep)}
                  className="relative aspect-video w-full rounded-xl overflow-hidden mb-4 bg-neutral-900 group/thumb cursor-pointer border border-neutral-800"
                >
                  <img
                    src={ep.thumbnailUrl || `https://img.youtube.com/vi/${ep.youtubeId}/hqdefault.jpg`}
                    alt={ep.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300 brightness-90 group-hover/thumb:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Video Type Descriptor Badge (Top-Left) */}
                  {ep.videoType && (
                    <div className="absolute top-2.5 left-2.5 bg-black/85 backdrop-blur-md border border-neutral-700/80 px-2.5 py-1 rounded-lg text-[11px] font-bold text-white flex items-center gap-1.5 shadow-md">
                      <Video className="w-3.5 h-3.5 text-[#FC0100]" />
                      <span>{ep.videoType}</span>
                    </div>
                  )}

                  {/* Duration Badge (Bottom-Right) */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-slate-200 font-bold border border-neutral-800 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {ep.duration}
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FC0100] text-white flex items-center justify-center shadow-lg shadow-[#FC0100]/40 group-hover/thumb:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Top Metadata */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    Published {ep.publishedDate} • {ep.views} views
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setActiveEpisode(ep)}
                  className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#FC0100] transition-colors leading-snug cursor-pointer"
                >
                  {ep.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-400 mt-3 font-light leading-relaxed line-clamp-2">
                  {ep.summary}
                </p>

                {/* Action Buttons: Watch and Share ONLY */}
                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-neutral-800/60">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setWatchEpisode(ep);
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-[#FC0100] hover:bg-red-600 text-white flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-[#FC0100]/20"
                  >
                    <Video className="w-4 h-4" /> Watch
                  </button>

                  <button
                    onClick={(e) => handleShareEpisode(ep, e)}
                    className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-slate-200 border border-neutral-800 text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
                    title="Share Episode"
                  >
                    <Share2 className="w-4 h-4 text-[#FC0100]" /> Share
                  </button>
                </div>
              </div>

              {/* Guest & Footer Stats */}
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                {/* Guest Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={ep.guestAvatar}
                    alt={ep.guestName}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-neutral-800"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-200">{ep.guestName}</p>
                    <p className="text-[11px] text-slate-500 truncate max-w-[140px] sm:max-w-[180px]">
                      {ep.guestTitle}
                    </p>
                  </div>
                </div>

                {/* Right Side: Like & Intel Details Button */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => handleLike(ep.id, e)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      likesInfo.userLiked
                        ? 'bg-[#FC0100]/20 border-[#FC0100] text-[#FC0100]'
                        : 'bg-black border-neutral-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${likesInfo.userLiked ? 'fill-current' : ''}`} />
                    <span>{likesInfo.count.toLocaleString()}</span>
                  </button>

                  <button
                    onClick={() => setActiveEpisode(ep)}
                    className="text-xs font-bold text-[#FC0100] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Intel <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Persistent Audio Player Dock (Bottom) */}
      {playingEpisode && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 border-t border-neutral-800 backdrop-blur-md px-4 py-3 shadow-2xl animate-slide-up">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Episode Meta */}
            <div className="flex items-center gap-3 w-full md:w-1/3">
              <img
                src={playingEpisode.guestAvatar}
                alt={playingEpisode.guestName}
                className="w-11 h-11 rounded-lg object-cover border border-neutral-800 shrink-0"
              />
              <div className="truncate">
                <p className="text-xs font-bold text-white truncate">{playingEpisode.title}</p>
                <p className="text-[10px] text-slate-400 truncate">{playingEpisode.guestName} • {playingEpisode.guestTitle}</p>
              </div>
            </div>

            {/* Center: Audio Controls & Scrubber */}
            <div className="flex flex-col items-center gap-1.5 w-full md:w-2/3">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    if (audioRef.current) audioRef.current.currentTime -= 15;
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Rewind 15s"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-[#FC0100] hover:bg-red-600 text-white flex items-center justify-center shadow-lg shadow-[#FC0100]/30 transition-all cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>

                <button
                  onClick={() => {
                    if (audioRef.current) audioRef.current.currentTime += 15;
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Forward 15s"
                >
                  <RotateCw className="w-4 h-4" />
                </button>

                {/* Speed toggle */}
                <button
                  onClick={() => {
                    const rates = [1, 1.25, 1.5, 2];
                    const next = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
                    setPlaybackRate(next);
                  }}
                  className="px-2 py-1 rounded bg-black border border-neutral-800 text-[10px] font-mono font-bold text-slate-300 hover:text-white cursor-pointer ml-2"
                >
                  {playbackRate}x
                </button>
              </div>

              {/* Scrubber Bar */}
              <div className="flex items-center gap-3 w-full max-w-md text-[10px] font-mono text-slate-500">
                <span>{formatTime(audioProgress)}</span>
                <input
                  type="range"
                  min="0"
                  max={audioDuration || 100}
                  value={audioProgress}
                  onChange={(e) => {
                    const time = Number(e.target.value);
                    setAudioProgress(time);
                    if (audioRef.current) audioRef.current.currentTime = time;
                  }}
                  className="flex-1 h-1 bg-black rounded appearance-none cursor-pointer accent-[#FC0100]"
                />
                <span>{formatTime(audioDuration)}</span>
              </div>
            </div>

            {/* Right: Mute & Close */}
            <div className="flex items-center gap-3 justify-end hidden md:flex">
              <button
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => {
                  setPlayingEpisode(null);
                  setIsPlaying(false);
                }}
                className="text-slate-500 hover:text-white transition-colors cursor-pointer ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Episode Intel Takeaways Modal */}
      {activeEpisode && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveEpisode(null)}
        >
          <div
            className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-2xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveEpisode(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors cursor-pointer p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title & Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {activeEpisode.duration} • Published {activeEpisode.publishedDate}
                </span>
                <button
                  onClick={(e) => handleShareEpisode(activeEpisode, e)}
                  className="px-3 py-1 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-slate-300 border border-neutral-800 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#FC0100]" /> Share
                </button>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                {activeEpisode.title}
              </h3>

              {/* Guest Profile Box */}
              <div className="flex items-center gap-4 p-3 bg-black rounded-xl border border-neutral-800">
                <img
                  src={activeEpisode.guestAvatar}
                  alt={activeEpisode.guestName}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-neutral-800 shrink-0"
                />
                <div>
                  <p className="text-sm font-bold text-slate-200">{activeEpisode.guestName}</p>
                  <p className="text-xs text-slate-400">{activeEpisode.guestTitle}</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2 border-t border-neutral-800 pt-4">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500">Brief Executive Summary</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">{activeEpisode.summary}</p>
            </div>

            {/* Key Takeaways */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Key Commercial Takeaways
                </h4>
                <button
                  onClick={() => handleCopyTakeaways(activeEpisode)}
                  className="text-xs font-bold text-[#FC0100] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  {copiedTakeaways ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedTakeaways ? 'Copied Notes!' : 'Copy Takeaways'}
                </button>
              </div>

              <ul className="space-y-3">
                {activeEpisode.takeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed bg-black/40 p-3 rounded-xl border border-neutral-800/80">
                    <span className="text-[#FC0100] font-bold mt-0.5 flex-shrink-0">0{i + 1}.</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chapter Timestamps if present */}
            {activeEpisode.timestamps && activeEpisode.timestamps.length > 0 && (
              <div className="space-y-3 pt-2 border-t border-neutral-800">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500">Chapter Timestamps</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {activeEpisode.timestamps.map((ts, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setActiveEpisode(null);
                        setWatchEpisode(activeEpisode);
                      }}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-black border border-neutral-800 hover:border-[#FC0100]/50 transition-colors cursor-pointer text-xs"
                    >
                      <span className="font-mono font-bold text-[#FC0100] bg-[#FC0100]/10 px-2 py-0.5 rounded border border-[#FC0100]/20">
                        {ts.time}
                      </span>
                      <span className="text-slate-300 truncate font-light">{ts.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Footer */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap gap-3 justify-between items-center">
              <button
                onClick={(e) => handlePlayAudio(activeEpisode, e)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-slate-200 border border-neutral-800 flex items-center gap-2 cursor-pointer"
              >
                <Headphones className="w-4 h-4 text-[#FC0100]" /> Listen Audio Stream
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setActiveEpisode(null);
                    setWatchEpisode(activeEpisode);
                  }}
                  className="px-5 h-11 rounded-xl text-xs font-bold bg-[#FC0100] hover:bg-red-600 text-white flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#FC0100]/20 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" /> Watch Full Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* YouTube Video Player Modal */}
      {watchEpisode && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setWatchEpisode(null)}
        >
          <div
            className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-4xl p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#FC0100] uppercase tracking-wider block mb-1">
                  Episode Stream
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                  {watchEpisode.title}
                </h3>
              </div>
              <button
                onClick={() => setWatchEpisode(null)}
                className="text-slate-500 hover:text-white transition-colors cursor-pointer p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-neutral-800 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${watchEpisode.youtubeId}?autoplay=1`}
                title={watchEpisode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>

            {/* Guest details & Link out */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-neutral-800">
              <div className="flex items-center gap-3">
                <img
                  src={watchEpisode.guestAvatar}
                  alt={watchEpisode.guestName}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-800"
                />
                <div>
                  <p className="text-sm font-bold text-slate-200">{watchEpisode.guestName}</p>
                  <p className="text-xs text-slate-400">{watchEpisode.guestTitle}</p>
                </div>
              </div>

              <a
                href={`https://youtube.com/watch?v=${watchEpisode.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                Open on YouTube <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {shareEpisode && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShareEpisode(null)}
        >
          <div
            className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-md p-6 relative shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#FC0100]" /> Share Episode
              </h3>
              <button
                onClick={() => setShareEpisode(null)}
                className="text-slate-500 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Custom Pre-filled Message Display */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Pre-filled Share Message & Link
              </label>
              <div className="p-3.5 bg-black rounded-xl border border-neutral-800 text-xs text-slate-300 font-light leading-relaxed space-y-2">
                <p>🎙️ Listen to <strong className="text-white">"{shareEpisode.title}"</strong> featuring <span className="text-slate-200 font-semibold">{shareEpisode.guestName}</span> on Alive Podcast Network!</p>
                <p className="font-mono text-[#FC0100] text-[11px] truncate">https://alivepodcast.et/episodes/{shareEpisode.id}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const text = `🎙️ Listen to "${shareEpisode.title}" featuring ${shareEpisode.guestName} on Alive Podcast Network!\nhttps://alivepodcast.et/episodes/${shareEpisode.id}`;
                    navigator.clipboard.writeText(text);
                    setCopiedLink(true);
                    setTimeout(() => setCopiedLink(false), 2000);
                    showToast('Message & link copied!');
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#FC0100] hover:bg-red-600 text-white text-xs font-bold cursor-pointer transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#FC0100]/20"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  {copiedLink ? 'Copied Message & Link!' : 'Copy Message & Link'}
                </button>
              </div>
            </div>

            {/* Social Share Shortcuts with custom message */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-800">
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(`https://alivepodcast.et/episodes/${shareEpisode.id}`)}&text=${encodeURIComponent(`🎙️ Listen to "${shareEpisode.title}" featuring ${shareEpisode.guestName} on Alive Podcast Network!`)}`}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 text-xs font-bold text-center transition-colors"
              >
                Telegram
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`🎙️ Listen to "${shareEpisode.title}" featuring ${shareEpisode.guestName} on Alive Podcast Network!`)}&url=${encodeURIComponent(`https://alivepodcast.et/episodes/${shareEpisode.id}`)}`}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/30 text-sky-400 text-xs font-bold text-center transition-colors"
              >
                Twitter / X
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`🎙️ Listen to "${shareEpisode.title}" featuring ${shareEpisode.guestName} on Alive Podcast Network!\nhttps://alivepodcast.et/episodes/${shareEpisode.id}`)}`}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold text-center transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit Episode Modal */}
      {editingEpisode && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setEditingEpisode(null)}
        >
          <div
            className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#FC0100]/10 border border-[#FC0100]/20 text-[#FC0100]">
                  <Edit3 className="w-4 h-4" />
                </span>
                {isNewEpisode ? 'Publish New Episode' : 'Edit Episode Metadata'}
              </h3>
              <button
                onClick={() => setEditingEpisode(null)}
                className="text-slate-500 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEpisode} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Episode Title *
                </label>
                <input
                  type="text"
                  required
                  value={editingEpisode.title || ''}
                  onChange={(e) => setEditingEpisode({ ...editingEpisode, title: e.target.value })}
                  placeholder="e.g. Scaling Ethiopian Agricultural Tech Networks"
                  className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#FC0100]"
                />
              </div>

              {/* Guest Details */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Guest Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingEpisode.guestName || ''}
                    onChange={(e) => setEditingEpisode({ ...editingEpisode, guestName: e.target.value })}
                    placeholder="e.g. Bethlehem Tilahun"
                    className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#FC0100]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Guest Title & Company
                  </label>
                  <input
                    type="text"
                    value={editingEpisode.guestTitle || ''}
                    onChange={(e) => setEditingEpisode({ ...editingEpisode, guestTitle: e.target.value })}
                    placeholder="e.g. Founder & CEO of soleRebels"
                    className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#FC0100]"
                  />
                </div>
              </div>

              {/* Category, Duration, YouTube ID */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Category
                  </label>
                  <select
                    value={editingEpisode.category || 'Tech'}
                    onChange={(e) => setEditingEpisode({ ...editingEpisode, category: e.target.value as any })}
                    className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#FC0100]"
                  >
                    <option value="Tech">Tech</option>
                    <option value="Business">Business</option>
                    <option value="Culture">Culture</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={editingEpisode.duration || '1h 20m'}
                    onChange={(e) => setEditingEpisode({ ...editingEpisode, duration: e.target.value })}
                    className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#FC0100]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    YouTube ID
                  </label>
                  <input
                    type="text"
                    value={editingEpisode.youtubeId || 'dQw4w9WgXcQ'}
                    onChange={(e) => setEditingEpisode({ ...editingEpisode, youtubeId: e.target.value })}
                    className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#FC0100]"
                  />
                </div>
              </div>

              {/* Avatar Image URL */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Guest Avatar URL
                </label>
                <input
                  type="text"
                  value={editingEpisode.guestAvatar || ''}
                  onChange={(e) => setEditingEpisode({ ...editingEpisode, guestAvatar: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#FC0100]"
                />
              </div>

              {/* Summary */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Executive Summary
                </label>
                <textarea
                  rows={3}
                  value={editingEpisode.summary || ''}
                  onChange={(e) => setEditingEpisode({ ...editingEpisode, summary: e.target.value })}
                  placeholder="Provide an overview of the discussion..."
                  className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#FC0100]"
                ></textarea>
              </div>

              {/* Key Takeaways (One per line) */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Key Takeaways (One point per line)
                </label>
                <textarea
                  rows={3}
                  value={editingEpisode.takeaways?.join('\n') || ''}
                  onChange={(e) => setEditingEpisode({ ...editingEpisode, takeaways: e.target.value.split('\n').filter(Boolean) })}
                  placeholder="Takeaway 1&#10;Takeaway 2&#10;Takeaway 3"
                  className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#FC0100]"
                ></textarea>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-neutral-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingEpisode(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-slate-300 border border-neutral-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#FC0100] hover:bg-red-600 text-white shadow-md shadow-[#FC0100]/20 cursor-pointer"
                >
                  {isNewEpisode ? 'Publish Episode' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
