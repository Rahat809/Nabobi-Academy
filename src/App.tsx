import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { EnrollPage } from './pages/EnrollPage';

export default function App() {
  const getInitialRoute = (): PageRoute => {
    const path = window.location.pathname;
    if (path.startsWith('/course')) return '/course';
    if (path.startsWith('/enroll')) return '/enroll';
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/course')) {
        setCurrentRoute('/course');
      } else if (path.startsWith('/enroll')) {
        setCurrentRoute('/enroll');
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: PageRoute, targetId?: string) => {
    setCurrentRoute(route);
    if (window.location.pathname !== route) {
      window.history.pushState({}, '', route);
    }

    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7EC] text-[#1E1E1E]">
      {/* Sticky Header */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentRoute === '/' && <HomePage onNavigate={handleNavigate} />}
        {currentRoute === '/course' && <CourseDetailsPage onNavigate={handleNavigate} />}
        {currentRoute === '/enroll' && <EnrollPage onNavigate={handleNavigate} />}
      </main>

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
