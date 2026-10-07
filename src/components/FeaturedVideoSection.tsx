import React from 'react';
import { PageRoute } from '../types';
import { Play, ArrowRight, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { NaturalShadowOverlay } from './BrandDecorations';
import { CustomVideoPlayer } from './CustomVideoPlayer';

interface FeaturedVideoSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const FeaturedVideoSection: React.FC<FeaturedVideoSectionProps> = ({ onNavigate }) => {
  const whatsappUrl = 'https://wa.me/8801347456436?text=' + encodeURIComponent('আসসালামু আলাইকুম, আমি ভিডিওটি দেখে নববী একাডেমির কোর্স সম্পর্কে জানতে চাচ্ছি।');

  return (
    <section className="relative py-20 bg-white border-t border-[#0F3D32]/10 overflow-hidden">
      <NaturalShadowOverlay />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#D8B45E] font-['Cinzel',serif] mb-2">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Featured Video Preview · ভিডিও পরিচিতি</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F3D32] tracking-tight font-serif">
            ভিডিওতে কোর্স সম্পর্কে জানুন
          </h2>
          <div className="w-16 h-[1.5px] bg-[#D8B45E] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-[#1E1E1E]/80 mt-3 max-w-xl mx-auto">
            উস্তাদ ওয়াছিফুল ইসলামের মুখ থেকে কোর্সের মূল বিষয়বস্তু ও বিশুদ্ধ রুকইয়াহর প্রয়োজনীয়তা সম্পর্কে সংক্ষেপে জেনে নিন।
          </p>
        </div>

        {/* Video & Info Showcase Card */}
        <div className="bg-[#FBF7EC] rounded-2xl border border-[#0F3D32]/10 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Custom Responsive HTML5 Video Player Frame */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <CustomVideoPlayer />
            </div>

            {/* Right: Editorial Highlights & Action Points */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D8B45E] font-['Cinzel',serif] block mb-1">
                  Course Highlights
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3D32] leading-tight font-serif">
                  কুরআন ও সুন্নাহর বিশুদ্ধ রুকইয়াহ চর্চা
                </h3>
                <p className="text-base text-[#1E1E1E]/85 leading-relaxed mt-3">
                  আধ্যাত্মিক জটিলতা, বদনজর, জিনের আসর কিংবা ওয়াসওয়াসার প্রতিকারে কুসংস্কারমুক্ত সহীহ শারঈ সমাধান অর্জন করুন ঘরে বসেই।
                </p>
              </div>

              {/* Key Highlights List */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#0F3D32]/8 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#0F3D32] text-[#D8B45E] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F3D32]">
                      সহীহ শারঈ মূলনীতি
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1E1E1E]/75 mt-0.5 leading-normal">
                      কোনো ভ্রান্ত তাবিজ বা শিরকি পন্থা নয়; সম্পূর্ণ কুরআন ও সহীহ হাদিস সমর্থিত জ্ঞান।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#0F3D32]/8 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#0F3D32] text-[#D8B45E] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F3D32]">
                      বাস্তব প্রয়োগ ও নিয়মিত দিকনির্দেশনা
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1E1E1E]/75 mt-0.5 leading-normal">
                      দৈনন্দিন মাসনূন দোয়া ও আত্মরক্ষার প্র্যাকটিক্যাল নিয়ম এবং লাইভ প্রশ্নোত্তর সুবিধা।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#0F3D32]/8 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#0F3D32] text-[#D8B45E] shrink-0 mt-0.5">
                    <Play className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F3D32]">
                      ঝুঁকিমুক্ত ১০ দরসের ট্রায়াল
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1E1E1E]/75 mt-0.5 leading-normal">
                      রেজিস্ট্রেশন করে প্রথম ১০টি ক্লাস দেখে সন্তুষ্ট হয়ে তবেই পূর্ণাঙ্গ কোর্সের চূড়ান্ত সিদ্ধান্ত নিন।
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3.5">
                <button
                  onClick={() => onNavigate('/enroll')}
                  className="w-full sm:w-auto bg-[#D8B45E] hover:bg-[#C8A44E] text-[#0A2922] font-bold text-base px-7 py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>কোর্সে এনরোল করুন</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#0F3D32] border border-[#0F3D32]/20 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#D8B45E]" />
                  <span>WhatsApp-এ সরাসরি কথা বলুন</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
