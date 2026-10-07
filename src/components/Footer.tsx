import React from 'react';
import { Logo } from './Logo';
import { PageRoute } from '../types';
import { Phone, ExternalLink, Globe, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute, targetId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" className="relative bg-academy-emerald text-[#FBF7EC] border-t border-[#C9A962]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#FBF7EC]/10">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-base text-[#FBF7EC]/90 leading-relaxed font-medium pt-2">
              রুকইয়াহ, হিজামা ও নেচারোপ্যাথিক কোর্সের নির্ভরযোগ্য প্ল্যাটফর্ম।
            </p>
            <p className="text-sm text-[#FBF7EC]/70 leading-relaxed">
              কোরআন-সুন্নাহভিত্তিক ট্রেইনিং ও প্র্যাকটিক্যাল লার্নিং। বিশুদ্ধ শারঈ জ্ঞানের আলোয় জীবন ও পরিবার সুরক্ষায় আধুনিক অনলাইন শিক্ষা।
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#C9A962]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>বিশুদ্ধ শরয়ী মানদণ্ড</span>
              </div>
              <span className="text-[#FBF7EC]/30">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>প্র্যাকটিক্যাল ট্রেইনিং</span>
              </div>
            </div>
          </div>

          {/* Col 2: Instructor Snapshot */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#C9A962] font-semibold font-['Cinzel',serif]">
              Instructor Profile (প্রশিক্ষক)
            </h4>
            <div className="bg-[#0A2922] p-5 rounded-xl border border-[#C9A962]/20 space-y-2.5">
              <div className="text-lg font-bold text-white">
                মো: ওয়াছিফুল ইসলাম
              </div>
              <div className="text-xs font-semibold text-[#C9A962] tracking-wide">
                দায়ী ও উস্তাদ
              </div>
              <p className="text-xs text-[#FBF7EC]/80 leading-relaxed">
                ২০১৪ সাল থেকে রুকইয়াহ শারঈয়্যাহ ও হিজামা-কাপিং থেরাপী নিয়ে কাজ করছেন।
              </p>
            </div>
          </div>

          {/* Col 3: Navigation Links & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#C9A962] font-semibold font-['Cinzel',serif]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FBF7EC]/80">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#C9A962] transition-colors py-1 cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Home (হোম)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/course')}
                  className="hover:text-[#C9A962] transition-colors py-1 cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Courses (কোর্সসমূহ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/', 'instructor')}
                  className="hover:text-[#C9A962] transition-colors py-1 cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Instructor (প্রশিক্ষক পরিচিতি)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/enroll')}
                  className="text-[#C9A962] font-medium hover:underline py-1 cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Enroll Now (ভর্তি ফরম)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>

            <div className="pt-3 border-t border-[#FBF7EC]/10 space-y-2 text-xs text-[#FBF7EC]/80">
              <a
                href="https://wa.me/8801347456436"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C9A962] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A962]" />
                <span>WhatsApp: 01347-456436</span>
              </a>

              <a
                href="https://www.facebook.com/nabobiacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C9A962] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C9A962]" />
                <span>facebook.com/nabobiacademy</span>
              </a>

              <div className="flex items-center gap-2 text-[#FBF7EC]/60">
                <Globe className="w-3.5 h-3.5 text-[#C9A962]" />
                <span>nabobiacademy.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBF7EC]/60">
          <div>
            © {new Date().getFullYear()} NABA – নববী একাডেমি (NABOBI Academy). সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="text-center sm:text-right text-[#FBF7EC]/50">
            কোরআন ও সুন্নাহর বিশুদ্ধ আলোকে শিক্ষাদান
          </div>
        </div>
      </div>
    </footer>
  );
};
