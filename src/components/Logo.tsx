import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showBangla?: boolean;
  className?: string;
}

/**
 * Official NABOBI Academy Logo Component
 * Matches the official Brand Reference System:
 * - Antique Gold (#C9A962) Arabic Calligraphy Flourish & Diacritics
 * - Elegant Serif Typography "NABOBI"
 * - Spaced Sub-header "— ACADEMY —" with gold hairline rules
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showBangla = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const titleSizes = {
    sm: 'text-base tracking-wider',
    md: 'text-xl tracking-widest',
    lg: 'text-2xl sm:text-3xl tracking-widest',
  };

  const academySizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]',
  };

  return (
    <div
      data-logo="nabobi-academy-official-logo"
      className={`inline-flex items-center gap-3 select-none ${className}`}
    >
      {/* Official Logo Emblem Image */}
      <div className={`${iconSizes[size]} shrink-0 flex items-center justify-center overflow-hidden rounded-md`}>
        <img
          src="https://res.cloudinary.com/i6tswbzy/image/upload/v1791353552/WhatsApp_Image_2026-10-07_at_10.54.02_AM.jpg"
          alt="NABOBI Academy Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Typography: "NABOBI" + "— ACADEMY —" centered directly underneath + optional Bangla title */}
      <div className="flex items-center gap-2.5">
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <span
            className={`font-serif font-bold ${titleSizes[size]} ${
              isLight ? 'text-white' : 'text-[#0F3D32]'
            } font-['Cinzel',serif] tracking-wider`}
          >
            NABOBI
          </span>

          {/* — ACADEMY — with flanking horizontal lines centered directly under NABOBI */}
          <div className="flex items-center justify-center gap-1 mt-1 w-full">
            <span className="w-3 h-[1px] bg-[#D8B45E]" />
            <span
              className={`font-serif uppercase font-semibold ${academySizes[size]} text-[#D8B45E] font-['Cinzel',serif]`}
            >
              ACADEMY
            </span>
            <span className="w-3 h-[1px] bg-[#D8B45E]" />
          </div>
        </div>

        {showBangla && (
          <span
            className={`font-bold text-xs sm:text-sm ${
              isLight ? 'text-[#FBF7EC]' : 'text-[#0F3D32]'
            } border-l border-[#D8B45E]/40 pl-2.5 py-0.5 leading-tight select-none`}
          >
            নববী একাডেমি
          </span>
        )}
      </div>
    </div>
  );
};

