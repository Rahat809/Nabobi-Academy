import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw
} from 'lucide-react';

interface CustomVideoPlayerProps {
  className?: string;
}

export const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ className = '' }) => {
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

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        startControlsTimeout();
      }).catch(() => {});
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

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
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
    }, 2400);
  };

  const handleUserActivity = () => {
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

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`w-full flex flex-col items-center justify-center select-none ${className}`}>
      
      {/* Explicit 3:4 Video Frame with Gold Border & Rounded Corners */}
      <div
        ref={containerRef}
        onMouseMove={handleUserActivity}
        onTouchStart={handleUserActivity}
        onMouseLeave={() => isPlaying && setShowControls(false)}
        style={{ aspectRatio: '3/4' }}
        className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] rounded-2xl sm:rounded-3xl border-2 border-[#c5a059] shadow-2xl shadow-[#0F3D32]/25 overflow-hidden bg-black [transform:translateZ(0)] isolate"
      >
        {/* HTML5 Native Video Tag - Clipped Cleanly with Object Cover */}
        <video
          ref={videoRef}
          src={mp4Url}
          poster={posterUrl}
          preload="metadata"
          playsInline
          onClick={togglePlay}
          style={{ aspectRatio: '3/4' }}
          className="w-full h-full object-cover rounded-2xl sm:rounded-3xl block cursor-pointer bg-black"
        >
          <source src={mp4Url} type="video/mp4" />
          আপনার ব্রাউজার HTML5 ভিডিও প্লেয়ার সাপোর্ট করে না।
        </video>

        {/* Center Play Button Overlay (when paused) */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-opacity z-20 backdrop-blur-[1px]"
            aria-label="ভিডিও প্লে করুন"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0F3D32]/90 border-2 border-[#c5a059] flex items-center justify-center text-[#c5a059] shadow-2xl transition-transform transform hover:scale-110 active:scale-95">
              <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
            </div>
          </div>
        )}

        {/* Clean, Non-Intrusive HTML5 Control Bar */}
        <div
          className={`absolute bottom-0 inset-x-0 pt-10 pb-3 px-3.5 sm:px-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 z-30 ${
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Custom Timeline Progress Bar */}
          <div className="relative flex items-center mb-2.5 group/seek">
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              aria-label="ভিডিও অগ্রগতি"
              className="w-full h-1 bg-white/25 rounded-full appearance-none cursor-pointer accent-[#c5a059] focus:outline-hidden"
              style={{
                background: `linear-gradient(to right, #c5a059 ${progressPercent}%, rgba(255,255,255,0.25) ${progressPercent}%)`
              }}
            />
          </div>

          {/* Bottom Controls Row: Play, Replay, Time, Volume, Fullscreen */}
          <div className="flex items-center justify-between text-white text-xs">
            
            {/* Left Controls: Play/Pause, Replay, Time */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="p-1 rounded-md hover:bg-white/15 text-[#c5a059] transition-colors cursor-pointer"
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
                className="p-1 rounded-md hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="শুরু থেকে দেখুন"
                aria-label="শুরু থেকে দেখুন"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <span className="font-mono text-[11px] text-white/90 tracking-tight">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Right Controls: Mute/Unmute, Fullscreen */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={toggleMute}
                className="p-1 rounded-md hover:bg-white/15 text-[#c5a059] transition-colors cursor-pointer"
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
                className="p-1 rounded-md hover:bg-white/15 text-white/90 hover:text-white transition-colors cursor-pointer"
                aria-label="ফুলস্ক্রিন করুন"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Video Caption Note */}
      <div className="text-center mt-3">
        <span className="text-xs text-[#1E1E1E]/60 font-medium">
          * ভিডিওটি সরাসরি প্লে করতে ট্যাপ বা ক্লিক করুন
        </span>
      </div>

    </div>
  );
};
