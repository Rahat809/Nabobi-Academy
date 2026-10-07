import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageRoute } from '../types';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, targetId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (route: PageRoute, targetId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(route, targetId);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF7EC]/95 backdrop-blur-md border-b border-[#0F3D32]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F3D32] rounded-md transition-opacity hover:opacity-95"
            aria-label="NABA নববী একাডেমি হোম পেজ"
          >
            <Logo variant="dark" size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#1E1E1E]">
            <button
              onClick={() => handleNavClick('/')}
              className={`transition-colors py-1 hover:text-[#0F3D32] relative ${
                currentRoute === '/'
                  ? 'text-[#0F3D32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0F3D32]'
                  : 'text-[#1E1E1E]/80'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/course')}
              className={`transition-colors py-1 hover:text-[#0F3D32] relative ${
                currentRoute === '/course'
                  ? 'text-[#0F3D32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0F3D32]'
                  : 'text-[#1E1E1E]/80'
              }`}
            >
              Courses
            </button>

            <button
              onClick={() => handleNavClick('/', 'instructor')}
              className="text-[#1E1E1E]/80 hover:text-[#0F3D32] transition-colors py-1"
            >
              Instructor
            </button>

            <button
              onClick={() => handleNavClick('/', 'contact')}
              className="text-[#1E1E1E]/80 hover:text-[#0F3D32] transition-colors py-1"
            >
              Contact
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/8801347456436"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#0F3D32] font-medium inline-flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-[#0F3D32]/5 transition-colors"
              title="WhatsApp: 01347-456436"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C9A962]" />
              <span>01347-456436</span>
            </a>

            <button
              onClick={() => handleNavClick('/enroll')}
              className="bg-[#D8B45E] hover:bg-[#C8A44E] text-[#0A2922] font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-xs hover:shadow-md active:translate-y-px inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('/enroll')}
              className="bg-[#D8B45E] text-[#0A2922] font-bold text-xs px-3.5 py-2 rounded-lg cursor-pointer mr-1 shadow-xs"
            >
              Enroll
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#0F3D32] hover:bg-[#0F3D32]/5 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F3D32]"
              aria-label={mobileMenuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#0F3D32]/10 bg-[#FBF7EC] px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('/')}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                currentRoute === '/'
                  ? 'bg-[#0F3D32] text-white'
                  : 'text-[#1E1E1E] hover:bg-[#0F3D32]/5'
              }`}
            >
              Home (হোম)
            </button>
            <button
              onClick={() => handleNavClick('/course')}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                currentRoute === '/course'
                  ? 'bg-[#0F3D32] text-white'
                  : 'text-[#1E1E1E] hover:bg-[#0F3D32]/5'
              }`}
            >
              Courses (কোর্সসমূহ)
            </button>
            <button
              onClick={() => handleNavClick('/', 'instructor')}
              className="text-left px-4 py-3 rounded-lg text-base font-medium text-[#1E1E1E] hover:bg-[#0F3D32]/5 transition-colors"
            >
              Instructor (প্রশিক্ষক)
            </button>
            <button
              onClick={() => handleNavClick('/', 'contact')}
              className="text-left px-4 py-3 rounded-lg text-base font-medium text-[#1E1E1E] hover:bg-[#0F3D32]/5 transition-colors"
            >
              Contact (যোগাযোগ)
            </button>

            <div className="pt-3 mt-2 border-t border-[#0F3D32]/10 flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('/enroll')}
                className="w-full bg-[#D8B45E] hover:bg-[#C8A44E] text-[#0A2922] font-bold text-center py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-base cursor-pointer shadow-xs"
              >
                <span>Enroll Now (ভর্তি হোন)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/8801347456436"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-sm text-[#0F3D32] font-medium border border-[#0F3D32]/20 rounded-lg hover:bg-[#0F3D32]/5 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#C9A962]" />
                <span>WhatsApp: 01347-456436</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
