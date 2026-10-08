import React from 'react';

interface ResponsiveYouTubePlayerProps {
  className?: string;
  videoId?: string;
}

export const CustomVideoPlayer: React.FC<ResponsiveYouTubePlayerProps> = ({ 
  className = '',
  videoId = 'MUTSZNM1OZg'
}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <div className={`w-full flex flex-col items-center justify-center select-none ${className}`}>
      
      {/* Responsive YouTube Player Container: Styled with 9:16 aspect ratio, smooth rounded corners, gold border, and deep shadow */}
      <div
        style={{ aspectRatio: '9/16' }}
        className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] rounded-2xl sm:rounded-3xl border-2 border-[#c5a059] shadow-2xl shadow-[#0F3D32]/25 overflow-hidden bg-black [transform:translateZ(0)] isolate"
      >
        <iframe
          src={embedUrl}
          title="NABA নববী একাডেমি - রুকইয়াহ কোর্স পরিচিতি ভিডিও"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full border-0 block"
        />
      </div>

      {/* Video Caption Note */}
      <div className="text-center mt-3">
        <span className="text-xs text-[#1E1E1E]/60 font-medium">
          * ভিডিওটি সরাসরি দেখতে প্লে বাটনে ট্যাপ বা ক্লিক করুন
        </span>
      </div>

    </div>
  );
};
