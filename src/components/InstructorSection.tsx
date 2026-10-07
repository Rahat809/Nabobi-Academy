import React from 'react';
import { Award, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { NaturalShadowOverlay } from './BrandDecorations';

export const InstructorSection: React.FC = () => {
  return (
    <section id="instructor" className="relative py-20 bg-academy-ivory border-t border-[#0F3D32]/10 scroll-mt-20 overflow-hidden">
      {/* Subtle natural shadow overlay as defined in 02 Clean Editorial */}
      <NaturalShadowOverlay />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#0F3D32]/70 font-['Cinzel',serif] block mb-2">
            Scholarly Guidance & Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F3D32] tracking-tight">
            কোর্স ইনস্ট্রাক্টর
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C9A962] mx-auto mt-4" />
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-[#0F3D32]/12 shadow-sm p-8 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Subtle Antique Gold hairline top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9A962]" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Portrait / Real Photo */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-56 sm:w-52 sm:h-64 rounded-2xl bg-[#1E1E1E] p-1 border border-[#D8B45E]/70 shadow-md overflow-hidden">
                <img
                  src="https://res.cloudinary.com/i6tswbzy/image/upload/v1791354842/WhatsApp_Image_2026-10-07_at_12.05.58_PM.jpg"
                  alt="উস্তাদ ওয়াছিফুল ইসলাম | Wasif ul Islam"
                  className="w-full h-full object-cover object-top rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Below the Box: Name, English subtitle & Title */}
              <div className="mt-4 text-center">
                <div className="text-base sm:text-lg font-bold text-[#0F3D32]">
                  উস্তাদ ওয়াছিফুল ইসলাম
                </div>
                <div className="text-xs text-[#C9A962] font-['Cinzel',serif] tracking-widest mt-0.5">
                  Wasif ul Islam
                </div>
                <div className="mt-2 text-sm font-semibold text-[#0F3D32]">
                  দায়ী ও উস্তাদ
                </div>
              </div>
            </div>

            {/* Scholar Details & Bio */}
            <div className="md:col-span-7 space-y-5 text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3D32]">
                  উস্তাদ ওয়াছিফুল ইসলাম
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#C9A962] mt-1 font-serif">
                  ইসলামী গবেষক ও অভিজ্ঞ রুকইয়াহ বিশেষজ্ঞ
                </p>
              </div>

              <div className="w-full h-px bg-[#0F3D32]/10" />

              <p className="text-[#1E1E1E]/90 text-base leading-relaxed">
                কুরআন ও সুন্নাহর আলোকে বিশুদ্ধ রুকইয়াহ চর্চা ও প্রসারে নিবেদিতপ্রাণ শিক্ষক। দীর্ঘ অভিজ্ঞতার আলোকে সহজ ভাষায় জটিল বিষয়গুলো শিক্ষার্থীদের সামনে উপস্থাপন করে থাকেন।
              </p>

              {/* Verified Experience Callout */}
              <div className="bg-[#FBF7EC] border border-[#C9A962]/40 rounded-xl p-4.5 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#0F3D32] text-[#C9A962] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F3D32]">
                    বাস্তব অভিজ্ঞতা ও প্র্যাকটিস
                  </h4>
                  <p className="text-sm text-[#1E1E1E]/80 mt-0.5 leading-normal">
                    ২০১৪ সাল থেকে রুকইয়াহ শারঈয়্যাহ ও হিজামা-কাপিং থেরাপী নিয়ে কাজ করছেন।
                  </p>
                </div>
              </div>

              {/* Scholarly Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#1E1E1E]/85">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F3D32]" />
                  <span>শিরক ও কুসংস্কারমুক্ত পদ্ধতি</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0F3D32]" />
                  <span>সরাসরি প্রশ্নোত্তর ও পরামর্শ</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

