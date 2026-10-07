import React from 'react';
import { PageRoute } from '../types';
import { InstructorSection } from '../components/InstructorSection';
import { FeaturedVideoSection } from '../components/FeaturedVideoSection';
import { 
  ArrowRight, 
  BookOpen, 
  Clock, 
  FileText, 
  HelpCircle, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  BookMarked
} from 'lucide-react';
import { GoldCurveDivider, NaturalShadowOverlay } from '../components/BrandDecorations';

interface HomePageProps {
  onNavigate: (route: PageRoute, targetId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const whatsappUrl = 'https://wa.me/8801347456436?text=' + encodeURIComponent('আসসালামু আলাইকুম, আমি নববী একাডেমির কোর্স সম্পর্কে জানতে যোগাযোগ করছি।');

  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION — 01 ACADEMY DEEP EMERALD (Primary Background) */}
      <section className="relative bg-academy-emerald text-[#FBF7EC] pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        
        {/* Subtle decorative Antique Gold curve accent line in background */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-25 pointer-events-none select-none">
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M-50 220C300 290 600 80 1000 180C1250 240 1400 120 1500 140"
              stroke="#C9A962"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          
          {/* Scholarly subtitle / kicker: Clean text with dot separators (Zero-Pill) */}
          <div className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D8B45E] font-['Cinzel',serif]">
            <span>QUR’AN</span>
            <span className="text-[#D8B45E]/50">·</span>
            <span>SUNNAH</span>
            <span className="text-[#D8B45E]/50">·</span>
            <span>STRUCTURED LEARNING</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 font-serif">
            NABOBI ACADEMY
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FBF7EC] mt-5 leading-[1.45] sm:leading-[1.4] lg:leading-[1.35] font-['Hind_Siliguri',sans-serif]">
              কুরআন-সুন্নাহর আলোকে রুকইয়াহ শারইয়্যাহ শেখার একটি নির্ভরযোগ্য প্ল্যাটফর্ম
            </span>
          </h1>

          {/* Sub-heading */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#FBF7EC]/90 leading-relaxed font-normal mb-10">
            দলিলভিত্তিক জ্ঞান • কাঠামোবদ্ধ প্রশিক্ষণ • প্র্যাকটিক্যাল লার্নিং
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => {
                const el = document.getElementById('featured-course');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onNavigate('/course');
                }
              }}
              className="w-full sm:w-auto bg-[#D8B45E] hover:bg-[#C8A44E] text-[#0A2922] font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-98 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>কোর্সসমূহ দেখুন</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-[#C9A962]/40 font-medium text-base px-7 py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 text-[#C9A962]" />
              <span>WhatsApp যোগাযোগ</span>
            </a>
          </div>

          {/* Quick Academy Indicators */}
          <div className="mt-14 pt-8 border-t border-[#FBF7EC]/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-[#FBF7EC]/80">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C9A962]" />
              <span>সহীহ শরয়ী মানদণ্ড</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C9A962]" />
              <span>দায়ী ও উস্তাদ</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C9A962]" />
              <span>১০ দরসের ট্রায়াল সুযোগ</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C9A962]" />
              <span>দৈনিক সরাসরি প্রশ্নোত্তর</span>
            </div>
          </div>

        </div>

        {/* Transition Divider: Antique Gold Curve dividing into Ivory */}
        <div className="absolute bottom-0 left-0 right-0">
          <GoldCurveDivider />
        </div>
      </section>

      {/* FEATURED COURSE SECTION — 03 EMERALD → IVORY EDITORIAL (Combined Layout) */}
      <section id="featured-course" className="relative py-20 bg-academy-ivory scroll-mt-16 overflow-hidden">
        {/* Soft natural botanical shadow overlay */}
        <NaturalShadowOverlay />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0F3D32]/70 font-['Cinzel',serif] block mb-2">
              Featured Program
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F3D32]">
              আমাদের বিশেষায়িত কোর্স
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C9A962] mx-auto mt-4" />
          </div>

          {/* Featured Course Card: 03 Emerald → Ivory Editorial Split */}
          <div className="bg-white rounded-2xl border border-[#0F3D32]/12 shadow-sm overflow-hidden hover:border-[#C9A962]/70 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Signature Deep Emerald with gold hairline boundary */}
              <div className="lg:col-span-5 bg-academy-emerald text-[#FBF7EC] p-8 sm:p-10 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#C9A962]/30">
                <div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-[#C9A962] font-['Cinzel',serif] mb-3">
                    অনলাইন লাইভ ব্যাচ
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4 font-serif">
                    অনলাইন বেসিক টু অ্যাডভান্স রুকইয়াহ কোর্স
                  </h3>
                  <div className="w-12 h-0.5 bg-[#C9A962] mb-6" />
                  <p className="text-sm text-[#FBF7EC]/85 leading-relaxed">
                    কুরআন ও সুন্নাহর বিশুদ্ধ আলোকে বদনজর, জিনের আসর, জাদু ও ওয়াসওয়াসা সনাক্তকরণ ও শরয়ী সমাধানের পূর্ণাঙ্গ কোর্স।
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#FBF7EC]/15">
                  <div className="text-xs text-[#C9A962] font-semibold mb-1">
                    কোর্স প্রশিক্ষক
                  </div>
                  <div className="text-base font-semibold text-white">
                    উস্তাদ ওয়াছিফুল ইসলাম
                  </div>
                  <div className="text-xs text-[#FBF7EC]/70 mt-0.5">
                    দায়ী ও উস্তাদ
                  </div>
                </div>
              </div>

              {/* Right Column: Warm Ivory Clean Editorial */}
              <div className="lg:col-span-7 bg-[#FBF7EC]/40 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#0F3D32] mb-3">
                    কোর্স বিবরণী
                  </h4>
                  <p className="text-base text-[#1E1E1E]/85 leading-relaxed">
                    কুরআন ও সুন্নাহর বিশুদ্ধ আলোকে আত্মরক্ষা ও সুন্নাহসম্মত চিকিৎসা পদ্ধতির পূর্ণাঙ্গ প্রশিক্ষণ।
                  </p>

                  {/* Highlights Grid */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-[#0F3D32]/8 flex items-center gap-3.5 shadow-xs">
                      <div className="p-2.5 rounded-lg bg-[#0F3D32] text-[#C9A962] shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[#1E1E1E]/60 font-medium">লাইভ ক্লাস</div>
                        <div className="text-sm font-bold text-[#0F3D32]">৪৫টি লাইভ দরস</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#0F3D32]/8 flex items-center gap-3.5 shadow-xs">
                      <div className="p-2.5 rounded-lg bg-[#0F3D32] text-[#C9A962] shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[#1E1E1E]/60 font-medium">কোর্সের ব্যাপ্তি</div>
                        <div className="text-sm font-bold text-[#0F3D32]">২ মাস মেয়াদী</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#0F3D32]/8 flex items-center gap-3.5 shadow-xs">
                      <div className="p-2.5 rounded-lg bg-[#0F3D32] text-[#C9A962] shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[#1E1E1E]/60 font-medium">স্টাডি মেটেরিয়াল</div>
                        <div className="text-sm font-bold text-[#0F3D32]">PDF সাপোর্ট ও নোট</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#0F3D32]/8 flex items-center gap-3.5 shadow-xs">
                      <div className="p-2.5 rounded-lg bg-[#0F3D32] text-[#C9A962] shrink-0">
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[#1E1E1E]/60 font-medium">সরাসরি সমাধান</div>
                        <div className="text-sm font-bold text-[#0F3D32]">দৈনিক Live Q&A</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-6 border-t border-[#0F3D32]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs sm:text-sm text-[#1E1E1E]/75">
                    প্রথম ১০ দরস দেখে যাচাইয়ের বিশেষ সুযোগ রয়েছে।
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => onNavigate('/course')}
                      className="w-full sm:w-auto bg-[#0F3D32] hover:bg-[#0A2922] text-[#FBF7EC] font-semibold text-sm px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>কোর্সের বিস্তারিত দেখুন</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A962]" />
                    </button>
                    <button
                      onClick={() => onNavigate('/enroll')}
                      className="w-full sm:w-auto bg-[#D8B45E] hover:bg-[#C8A44E] text-[#0A2922] font-semibold text-sm px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>এনরোল করুন</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURED VERTICAL VIDEO SECTION */}
      <FeaturedVideoSection onNavigate={onNavigate} />

      {/* WHY JOIN THIS COURSE — 02 ACADEMY WARM IVORY (Clean Editorial) */}
      <section className="py-20 bg-white border-t border-[#0F3D32]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0F3D32]/70 font-['Cinzel',serif] block mb-2">
              Course Values & Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F3D32]">
              কেন এই কোর্সে অংশগ্রহণ করবেন?
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C9A962] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 01 */}
            <div className="bg-[#FBF7EC] rounded-xl p-8 border border-[#0F3D32]/10 hover:border-[#C9A962] transition-colors duration-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold font-['Cinzel',serif] text-[#C9A962]">
                  01
                </span>
                <ShieldCheck className="w-6 h-6 text-[#0F3D32]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3D32] mb-3">
                কুরআন-সুন্নাহ ভিত্তিক শরয়ী জ্ঞান
              </h3>
              <p className="text-base text-[#1E1E1E]/80 leading-relaxed">
                কোনো কুসংস্কার বা শিরকি পদ্ধতি নয়, সম্পূর্ণ সহীহ দলীলভিত্তিক শিক্ষা।
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-[#FBF7EC] rounded-xl p-8 border border-[#0F3D32]/10 hover:border-[#C9A962] transition-colors duration-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold font-['Cinzel',serif] text-[#C9A962]">
                  02
                </span>
                <BookMarked className="w-6 h-6 text-[#0F3D32]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3D32] mb-3">
                যাচাই ও প্রয়োগ শেখা
              </h3>
              <p className="text-base text-[#1E1E1E]/80 leading-relaxed">
                নিজের ও পরিবারের সুরক্ষা নিশ্চিত করতে বাস্তবমুখী আত্মরক্ষা ও চিকিৎসা পদ্ধতি।
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-[#FBF7EC] rounded-xl p-8 border border-[#0F3D32]/10 hover:border-[#C9A962] transition-colors duration-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold font-['Cinzel',serif] text-[#C9A962]">
                  03
                </span>
                <Sparkles className="w-6 h-6 text-[#C9A962]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3D32] mb-3">
                ঝুঁকিমুক্ত ট্রায়াল সুযোগ
              </h3>
              <p className="text-base text-[#1E1E1E]/80 leading-relaxed">
                প্রথম ১০টি দরস দেখে সন্তুষ্ট হয়ে তবেই পূর্ণাঙ্গ কোর্সে ভর্তির চূড়ান্ত সিদ্ধান্ত নেওয়ার সুযোগ।
              </p>
            </div>

            {/* Card 04 */}
            <div className="bg-[#FBF7EC] rounded-xl p-8 border border-[#0F3D32]/10 hover:border-[#C9A962] transition-colors duration-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold font-['Cinzel',serif] text-[#C9A962]">
                  04
                </span>
                <HelpCircle className="w-6 h-6 text-[#0F3D32]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3D32] mb-3">
                সরাসরি সাপোর্ট
              </h3>
              <p className="text-base text-[#1E1E1E]/80 leading-relaxed">
                প্রতিটি বিষয়ভিত্তিক সংশয় দূর করতে নিয়মিত লাইভ প্রশ্নোত্তরের সুবিধা।
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INSTRUCTOR SECTION — Integrated Scholar Profile */}
      <InstructorSection />

      {/* ACADEMY INTRODUCTION — 01 ACADEMY DEEP EMERALD */}
      <section className="py-16 bg-academy-emerald text-[#FBF7EC] border-t border-[#C9A962]/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A962] font-['Cinzel',serif]">
            About The Academy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            NABA – নববী একাডেমি
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A962] mx-auto" />
          <p className="text-lg sm:text-xl font-medium text-[#FBF7EC] pt-2">
            রুকইয়াহ, হিজামা ও নেচারোপ্যাথিক কোর্সের নির্ভরযোগ্য প্ল্যাটফর্ম।
          </p>
          <p className="text-base text-[#FBF7EC]/80">
            কোরআন-সুন্নাহভিত্তিক ট্রেইনিং ও প্র্যাকটিক্যাল লার্নিং।
          </p>
        </div>
      </section>

      {/* FINAL CTA SECTION — 02 ACADEMY WARM IVORY */}
      <section className="py-20 bg-academy-ivory border-t border-[#0F3D32]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0F3D32] leading-tight mb-8 font-serif">
            আপনার ঈমানি সচেতনতা ও আত্মরক্ষায় প্রথম পদক্ষেপ নিন আজই।
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onNavigate('/enroll')}
              className="w-full sm:w-auto bg-[#D8B45E] hover:bg-[#C8A44E] text-[#0A2922] font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>কোর্সে এনরোল করুন</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-white/80 text-[#0F3D32] border border-[#0F3D32]/20 font-semibold text-base px-6 py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-[#0F3D32]" />
              <span>WhatsApp-এ সরাসরি কথা বলুন</span>
            </a>
          </div>

          <p className="text-xs text-[#1E1E1E]/60 mt-6">
            ভর্তি সংক্রান্ত যেকোনো তথ্যে কল বা মেসেজ করুন: 01347-456436
          </p>

        </div>
      </section>

    </div>
  );
};
