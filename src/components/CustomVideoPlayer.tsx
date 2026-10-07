import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';

interface CustomVideoPlayerProps {
  className?: string;
}

export const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ className = '' }) => {
  const [playerMode, setPlayerMode] = useState<'html5' | 'cloudinary'>('html5');
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<number | null>(null);

  const mp4Url = 'https://res.cloudinary.com/i6tswbzy/video/upload/Naba_WEB.mp4';
  const posterUrl = 'https://res.cloudinary.com/i6tswbzy/video/upload/Naba_WEB.jpg';
  const cloudinaryEmbedUrl = 'https://player.cloudinary.com/embed/?cloud_name=i6tswbzy&public_id=Naba_WEB&player[fluid]=true&player[controls]=true';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setShowControls(true);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [playerMode]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        startControlsTimeout();
      }).catch(() => {
        // Autoplay policy fallback
      });
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const targetTime = parseFloat(e.target.value);
    video.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().then(() => setIsPlaying(true));
  };

  const startControlsTimeout = () => {
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2800);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (isPlaying) {
      startControlsTimeout();
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={`w-full max-w-[340px] sm:max-w-[360px] mx-auto select-none ${className}`}>
      
      {/* Player Mode Switcher (Sleek Pills) */}
      <div className="flex items-center justify-between gap-2 mb-2 px-1 text-xs">
        <span className="text-[#0F3D32] font-semibold text-[11px] tracking-wide flex items-center gap-1">
          <SlidersHorizontal className="w-3 h-3 text-[#D8B45E]" />
          <span>প্লেয়ার মোড:</span>
        </span>
        <div className="inline-flex rounded-lg bg-[#0F3D32]/10 p-0.5 border border-[#0F3D32]/15">
          <button
            type="button"
            onClick={() => {
              if (videoRef.current) videoRef.current.pause();
              setIsPlaying(false);
              setPlayerMode('html5');
            }}
            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
              playerMode === 'html5'
                ? 'bg-[#0F3D32] text-[#FBF7EC] shadow-xs'
                : 'text-[#0F3D32]/80 hover:text-[#0F3D32]'
            }`}
          >
            HTML5 Player
          </button>
          <button
            type="button"
            onClick={() => {
              if (videoRef.current) videoRef.current.pause();
              setIsPlaying(false);
              setPlayerMode('cloudinary');
            }}
            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
              playerMode === 'cloudinary'
                ? 'bg-[#0F3D32] text-[#FBF7EC] shadow-xs'
                : 'text-[#0F3D32]/80 hover:text-[#0F3D32]'
            }`}
          >
            Cloudinary Embed
          </button>
        </div>
      </div>

      {/* Main Video Device Frame */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D8B45E]/60 shadow-xl bg-black aspect-[9/16] group"
      >
        {playerMode === 'html5' ? (
          <>
            {/* HTML5 Native Video Tag */}
            <video
              ref={videoRef}
              src={mp4Url}
              poster={posterUrl}
              preload="metadata"
              playsInline
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            >
              <source src={mp4Url} type="video/mp4" />
              আপনার ব্রাউজার HTML5 ভিডিও প্লেয়ার সাপোর্ট করে না।
            </video>

            {/* Big Center Play Button Overlay (when paused) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/35 flex items-center justify-center cursor-pointer transition-opacity z-20 backdrop-blur-[1px]"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0F3D32]/90 border-2 border-[#D8B45E] flex items-center justify-center text-[#D8B45E] shadow-2xl transition-transform transform hover:scale-110 active:scale-95">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </div>
              </div>
            )}

            {/* Custom Control Bar */}
            <div
              className={`absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 z-30 ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Progress Slider Bar */}
              <div className="relative flex items-center mb-2.5">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="ভিডিও টাইমলাইন"
                  className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#D8B45E]"
                />
              </div>

              {/* Bottom Buttons Row */}
              <div className="flex items-center justify-between text-white text-xs">
                
                {/* Left Controls: Play/Pause, Replay, Time */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:bg-white/15 text-[#D8B45E] transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'পজ করুন' : 'প্লে করুন'}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleRestart}
                    className="p-1.5 rounded-lg hover:bg-white/15 text-white/80 transition-colors cursor-pointer"
                    title="শুরু থেকে দেখুন"
                    aria-label="শুরু থেকে দেখুন"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <span className="font-mono text-[11px] text-white/90">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Right Controls: Mute/Unmute, Fullscreen */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg hover:bg-white/15 text-[#D8B45E] transition-colors cursor-pointer"
                    aria-label={isMuted ? 'আনমিউট করুন' : 'মিউট করুন'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-lg hover:bg-white/15 text-white/90 transition-colors cursor-pointer"
                    aria-label="ফুলস্ক্রিন করুন"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </>
        ) : (
          /* Cloudinary Official Player Embed Mode */
          <iframe
            src={cloudinaryEmbedUrl}
            title="NABA নববী একাডেমি - ক্লাউডিনারি প্লেয়ার"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        )}
      </div>

      {/* Video Caption Note */}
      <div className="text-center mt-3">
        <span className="text-xs text-[#1E1E1E]/60 font-medium">
          * ক্লাউডিনারি হাই-ডেফিনিশন স্ট্রিমিং ও মসৃণ প্লেব্যাক
        </span>
      </div>

    </div>
  );
};
