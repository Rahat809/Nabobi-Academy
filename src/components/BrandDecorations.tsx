import React from 'react';

/**
 * Visual elements based directly on the NABOBI Academy Background System:
 * - 01 Deep Emerald with subtle gold curve
 * - 02 Warm Ivory with natural soft shadows
 * - 03 Emerald → Ivory Editorial curve separator
 * - Subtle Antique Gold hairline accents
 */

export const GoldCurveDivider: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = '',
  flipped = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-8 sm:h-12 text-[#D8B45E] ${flipped ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 24C360 48 720 0 1080 32C1260 48 1380 16 1440 24"
          stroke="#D8B45E"
          strokeWidth="1.5"
          strokeOpacity="0.85"
        />
        <path
          d="M0 28C360 52 720 4 1080 36C1260 52 1380 20 1440 28"
          stroke="#D8B45E"
          strokeWidth="0.75"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
};

export const NaturalShadowOverlay: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40 mix-blend-multiply ${className}`}
      aria-hidden="true"
    >
      {/* Soft botanical leaf shadow effect using organic SVG paths */}
      <svg
        className="absolute -top-12 -right-12 w-96 h-96 blur-xl text-black/15"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M220 40 C 260 90, 310 120, 380 140 C 320 180, 260 210, 240 280 C 200 240, 170 200, 100 180 C 140 140, 180 100, 220 40 Z" />
        <path d="M120 120 C 150 160, 200 190, 260 210 C 210 240, 170 270, 150 330 C 120 290, 90 260, 30 240 C 70 210, 100 170, 120 120 Z" opacity="0.6" />
      </svg>
    </div>
  );
};

export const EmeraldIvorySplitHero: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Background 03: Emerald → Ivory Editorial curve */}
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        {/* Deep Emerald on top/left transitioning */}
        <path
          d="M0 0H1440V460C1180 560 880 340 500 520C240 640 90 710 0 760V0Z"
          fill="#0F3D32"
        />
        {/* Antique Gold hairline boundary stroke */}
        <path
          d="M0 760C90 710 240 640 500 520C880 340 1180 560 1440 460"
          stroke="#C9A962"
          strokeWidth="3"
        />
        <path
          d="M0 764C90 714 240 644 500 524C880 344 1180 564 1440 464"
          stroke="#C9A962"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
};
