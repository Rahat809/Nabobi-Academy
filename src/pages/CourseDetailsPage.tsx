import React from 'react';
import { PageRoute } from '../types';
import { 
  Clock, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  UserCheck, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  Eye,
  Ghost,
  Wand2,
  Brain,
  ShieldCheck
} from 'lucide-react';
import { GoldCurveDivider, NaturalShadowOverlay } from '../components/BrandDecorations';

interface CourseDetailsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({ onNavigate }) => {
  const whatsappUrl = 'https://wa.me/8801347456436?text=' + encodeURIComponent('আসসালামু আলাইকুম, আমি বেসিক টু অ্যাডভান্স রুকইয়াহ কোর্স সম্পর্কে বিস্তারিত জানতে চাচ্ছি।');

  const curriculumItems = [
    {
      number: '01',
      title: 'বদনজর (Evil Eye)',
      description: 'এর প্রভাব, লক্ষণ ও সুন্নাহসম্মত চিকিৎসা।',
      icon: Eye,
      details: 'বদনজরের বাস্তবতা, হাদিসের দলীল, আক্রান্ত ব্যক্তির লক্ষণ এবং কুরআন-সুন্নাহ সমর্থিত বিশুদ্ধ রুকইয়াহ ও গোসলের নিয়ম।'
    },
    {
      number: '02',
      title: 'জিনের আসর (Jinn Possession)',
      description: 'জিনের প্রভাব বোঝা, আত্মরক্ষা ও প্রতিকার।',
      icon: Ghost,
      details: 'অদৃশ্য জগতের সঠিক আকিদাগত ধারণা, আসরের লক্ষণ সনাক্তকরণ, ঘরবাড়ি ও ব্যক্তির আত্মরক্ষামূলক মাসনূন রুকইয়াহ।'
    },
    {
      number: '03',
      title: 'জাদু (Sihr / Magic)',
      description: 'জাদুটোনার প্রকারভেদ, জাদুর লক্ষণ ও তা কাটানোর শরয়ী রুকইয়াহ।',
      icon: Wand2,
      details: 'কালো জাদুর শরয়ী পরিচয়, বাতিল তাবিজ ও কুফরি চেনার উপায় এবং সহীহ আয়াত ও দোয়ার মাধ্যমে জাদু ধ্বংসের পদ্ধতি।'
    },
    {
      number: '04',
      title: 'ওয়াসওয়াসা (Obsessive Whispers)',
      description: 'মানসিক ও শয়তানি ওয়াসওয়াসার পার্থক্য এবং তা থেকে মুক্তির উপায়।',
      icon: Brain,
      details: 'ওজুতে-নামাজে সংশয়, ঈমানি সন্দেহ এবং চিকিৎসাগত মানসিক সমস্যা ও আধ্যাত্মিক ওয়াসওয়াসার সূক্ষ্ম পার্থক্য বিশ্লেষণ।'
    },
    {
      number: '05',
      title: 'বাস্তব প্রয়োগ ও আমল',
      description: 'প্রতিদিনের মাসনূন দোয়া, প্রতিরক্ষামূলক আমল ও পানি/তেল পড়া সম্পর্কিত সঠিক নিয়ম।',
      icon: ShieldCheck,
      details: 'সকাল-সন্ধ্যার হিফাযতের আমল, রুকইয়াহর পানি ও তেল প্রস্তুতের বিশুদ্ধ শারঈ বিধান এবং পরিবারের সার্বক্ষণিক সুরক্ষা।'
    },
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* COURSE BANNER / HERO — 01 ACADEMY DEEP EMERALD */}
      <section className="relative bg-academy-emerald text-[#FBF7EC] pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        
        {/* Subtle decorative Antique Gold curve accent */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-20 pointer-events-none select-none">
          <svg viewBox="0 0 1440 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 140C400 220 800 60 1440 180"
              stroke="#C9A962"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          
          {/* Tag - Clean unboxed text (Zero-pill) */}
          <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A962] font-['Cinzel',serif] mb-4">
            অনলাইন কোর্স · রুকইয়াহ শারঈয়্যাহ স্পেশাল
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5 font-serif">
            বেসিক টু অ্যাডভান্স রুকইয়াহ কোর্স
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#FBF7EC]/90 leading-relaxed font-normal mb-10">
            কুরআন-সুন্নাহর আলোকে বুঝুন, যাচাই করুন ও প্রয়োগ শিখুন
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/enroll')}
              className="bg-[#D8B45E] hover:bg-[#C8A44E] text-[#0A2922] font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer inline-flex items-center gap-2"
            >
              <span>এখনই এনরোল করুন</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 text-white border border-[#C9A962]/40 font-medium text-base px-7 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <HelpCircle className="w-5 h-5 text-[#C9A962]" />
              <span>যেকোনো জিজ্ঞাসায় WhatsApp করুন</span>
            </a>
          </div>

        </div>

        {/* Bottom Gold Hairline Curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <GoldCurveDivider />
        </div>
      </section>

      {/* COURSE OVERVIEW — এক নজরে কোর্স (02 ACADEMY WARM IVORY) */}
      <section className="relative py-16 bg-academy-ivory border-b border-[#0F3D32]/10 overflow-hidden">
        <NaturalShadowOverlay />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0F3D32]/70 font-['Cinzel',serif] block mb-2">
              Key Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3D32]">
              এক নজরে কোর্স
            </h2>
            <div className="w-12 h-[1.5px] bg-[#C9A962] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="bg-white p-5 rounded-xl border border-[#0F3D32]/10 text-center shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0F3D32] text-[#C9A962] mx-auto flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#1E1E1E]/60 font-medium">সময়কাল</div>
              <div className="text-base font-bold text-[#0F3D32] mt-1">২ মাস</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#0F3D32]/10 text-center shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0F3D32] text-[#C9A962] mx-auto flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#1E1E1E]/60 font-medium">মোট দরস</div>
              <div className="text-base font-bold text-[#0F3D32] mt-1">৪৫টি ক্লাস</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#0F3D32]/10 text-center shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0F3D32] text-[#C9A962] mx-auto flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#1E1E1E]/60 font-medium">স্টাডি মেটেরিয়াল</div>
              <div className="text-base font-bold text-[#0F3D32] mt-1">PDF সাপোর্ট দেওয়া হবে</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#0F3D32]/10 text-center shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0F3D32] text-[#C9A962] mx-auto flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#1E1E1E]/60 font-medium">সাপোর্ট</div>
              <div className="text-base font-bold text-[#0F3D32] mt-1">দৈনিক Live Q&A সেশন</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#0F3D32]/10 text-center shadow-xs sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-[#0F3D32] text-[#C9A962] mx-auto flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#1E1E1E]/60 font-medium">প্রশিক্ষক</div>
              <div className="text-base font-bold text-[#0F3D32] mt-1">উস্তাদ ওয়াছিফুল ইসলাম</div>
            </div>

          </div>

        </div>
      </section>

      {/* WHO IS THIS COURSE FOR? — কোর্সটি কাদের জন্য? */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0F3D32]/70 font-['Cinzel',serif] block mb-2">
              Target Audience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F3D32]">
              কোর্সটি কাদের জন্য?
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C9A962] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#FBF7EC] rounded-xl p-7 border border-[#0F3D32]/10 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#0F3D32] text-[#C9A962] flex items-center justify-center mb-5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F3D32] mb-3">
                  সঠিক শরয়ী জ্ঞান অর্জন
                </h3>
                <p className="text-base text-[#1E1E1E]/85 leading-relaxed">
                  যারা বদনজর, জিনের আসর, জাদু বা ওয়াসওয়াসা সম্পর্কিত সঠিক শরয়ী জ্ঞান অর্জন করতে চান।
                </p>
              </div>
            </div>

            <div className="bg-[#FBF7EC] rounded-xl p-7 border border-[#0F3D32]/10 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#0F3D32] text-[#C9A962] flex items-center justify-center mb-5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F3D32] mb-3">
                  পরিবার ও আত্মরক্ষা
                </h3>
                <p className="text-base text-[#1E1E1E]/85 leading-relaxed">
                  যারা নিজেদের ও পরিবারকে ক্ষতিকর আধ্যাত্মিক প্রভাব থেকে সুরক্ষায় রুকইয়াহ শিখতে আগ্রহী।
                </p>
              </div>
            </div>

            <div className="bg-[#FBF7EC] rounded-xl p-7 border border-[#0F3D32]/10 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#0F3D32] text-[#C9A962] flex items-center justify-center mb-5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F3D32] mb-3">
                  সুন্নাহসম্মত আমল
                </h3>
                <p className="text-base text-[#1E1E1E]/85 leading-relaxed">
                  যারা কুসংস্কারমুক্ত হয়ে সুন্নাহ সমর্থিত উপায়ে আমল করতে চান।
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* COURSE CURRICULUM — কী কী শেখানো হবে */}
      <section className="relative py-20 bg-academy-ivory border-t border-[#0F3D32]/10 overflow-hidden">
        <NaturalShadowOverlay />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0F3D32]/70 font-['Cinzel',serif] block mb-2">
              Curriculum Modules
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F3D32]">
              কী কী শেখানো হবে
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C9A962] mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {curriculumItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.number}
                  className="bg-white rounded-xl p-6 sm:p-7 border border-[#0F3D32]/10 shadow-xs hover:border-[#C9A962]/70 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-2xl font-bold font-['Cinzel',serif] text-[#C9A962]">
                        {item.number}
                      </span>
                      <div className="p-2 rounded-lg bg-[#0F3D32]/5 text-[#0F3D32]">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-xl font-bold text-[#0F3D32]">
                        {item.number} — {item.title}
                      </h3>
                      <p className="text-base font-medium text-[#1E1E1E]/90 leading-snug">
                        {item.description}
                      </p>
                      <p className="text-sm text-[#1E1E1E]/70 pt-1 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SPECIAL TRIAL SECTION — বিশেষ সুবিধা (Warm Ivory + Antique Gold Highlight) */}
      <section className="py-16 bg-white border-t border-[#0F3D32]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#FBF7EC] border-2 border-[#C9A962] rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
            {/* Corner title */}
            <div className="flex items-center gap-2.5 text-[#0F3D32] mb-4">
              <Sparkles className="w-6 h-6 text-[#C9A962]" />
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                বিশেষ সুবিধা
              </h3>
            </div>

            <div className="w-full h-px bg-[#C9A962]/40 mb-5" />

            <p className="text-lg sm:text-xl text-[#1E1E1E] leading-relaxed font-normal">
              আপনি শুরুতেই পুরো ফি দেওয়া ছাড়াই কোর্সে প্রবেশ করতে পারবেন। রেজিষ্ট্রেশন করে ১০টি দরস দেখে ক্লাস এবং বিষয়বস্তুর মান যাচাই করুন,তারপর পূর্ণ কোর্সের সিদ্ধান্ত নিন
            </p>

            <div className="mt-6 pt-5 border-t border-[#0F3D32]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-[#0F3D32] font-semibold">
                ✓ কোনো আগাম বাধ্যতামূলক চাপ নেই · স্বচ্ছ শরয়ী পদ্ধতি
              </span>
              <button
                onClick={() => onNavigate('/enroll')}
                className="bg-[#0F3D32] hover:bg-[#0A2922] text-[#FBF7EC] text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>১০ দরসের ট্রায়ালে অংশ নিন</span>
                <ArrowRight className="w-4 h-4 text-[#C9A962]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* COURSE FEE — কোর্স ফি */}
      <section className="relative py-20 bg-academy-ivory border-t border-[#0F3D32]/10 overflow-hidden">
        <NaturalShadowOverlay />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          
          <div className="bg-white rounded-2xl border border-[#0F3D32]/10 shadow-sm p-8 sm:p-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0F3D32]/70 font-['Cinzel',serif] block mb-2">
              Enrollment Fee
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F3D32]">
              রেজিস্ট্রেশন ফি
            </h2>
            <p className="text-sm sm:text-base text-[#1E1E1E]/75 mt-2 font-medium font-[Arial,sans-serif]">
              (প্রথমে ১০ টি দরস দেখে সিদ্ধান্ত নিন)
            </p>

            {/* Exactly visible placeholder: ৳ [১০০] */}
            <div className="my-8 py-6 px-8 rounded-xl bg-[#FBF7EC] border border-[#C9A962]/60 inline-block shadow-xs">
              <div className="text-4xl sm:text-5xl font-black text-[#0F3D32] tracking-tight">
                ৳ [১০০]
              </div>
              <div className="text-xs text-[#1E1E1E]/65 mt-2 font-medium">
                * নির্ধারিত কোর্স ফি সংক্রান্ত তথ্যের জন্য
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <button
                onClick={() => onNavigate('/enroll')}
                className="w-full sm:w-auto bg-[#D8B45E] hover:bg-[#C8A44E] text-[#0A2922] font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>এখনই এনরোল করুন</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-white/80 text-[#0F3D32] border border-[#0F3D32]/25 font-semibold text-base px-7 py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>যেকোনো জিজ্ঞাসায় WhatsApp করুন</span>
              </a>
            </div>

            <p className="text-xs text-[#1E1E1E]/60 mt-6">
              WhatsApp হেল্পলাইন: 01347-456436
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
