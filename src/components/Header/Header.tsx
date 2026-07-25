import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Monitor scroll for header styling changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = (lang: 'vi' | 'en') => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const navItems = [
    { labelKey: 'nav_home' as const, href: '#home' },
    { labelKey: 'nav_about' as const, href: '#about' },
    { labelKey: 'nav_solutions' as const, href: '#solutions' },
    { labelKey: 'nav_projects' as const, href: '#projects' },
    { labelKey: 'nav_blog' as const, href: '#blog' },
    { labelKey: 'nav_contact' as const, href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center group">
          <img
            src={logoImg}
            alt="Kuodia Renovables Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs lg:text-sm font-display font-bold text-brand-navy/85 hover:text-brand-green transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-green after:transition-all hover:after:w-full"
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-700 cursor-pointer"
            >
              {language === 'vi' ? (
                <>
                  <span className="inline-block w-4 h-3 bg-red-600 relative overflow-hidden rounded-sm">
                    <span className="absolute inset-0 flex items-center justify-center text-[7px] text-yellow-400">★</span>
                  </span>
                  <span>VI</span>
                </>
              ) : (
                <>
                  <span className="inline-block w-4 h-3 bg-blue-800 relative overflow-hidden rounded-sm border border-slate-100">
                    <span className="absolute inset-0 bg-red-600 transform rotate-45 scale-x-150"></span>
                    <span className="absolute inset-0 bg-red-600 transform -rotate-45 scale-x-150"></span>
                  </span>
                  <span>EN</span>
                </>
              )}
              <ChevronDown className={`h-3 w-3 text-slate-500 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-28 bg-white border border-slate-150 rounded-lg shadow-lg overflow-hidden py-1">
                <button
                  onClick={() => toggleLanguage('vi')}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-xs font-medium hover:bg-slate-50 text-slate-700 transition-colors text-left cursor-pointer"
                >
                  <span className="inline-block w-4.5 h-3 bg-red-600 relative overflow-hidden rounded-sm">
                    <span className="absolute inset-0 flex items-center justify-center text-[7px] text-yellow-400">★</span>
                  </span>
                  <span>Tiếng Việt</span>
                </button>
                <button
                  onClick={() => toggleLanguage('en')}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-xs font-medium hover:bg-slate-50 text-slate-700 transition-colors text-left cursor-pointer"
                >
                  <span className="inline-block w-4.5 h-3 bg-blue-800 relative overflow-hidden rounded-sm border border-slate-100">
                    <span className="absolute inset-0 bg-red-600 transform rotate-45 scale-x-150"></span>
                    <span className="absolute inset-0 bg-red-600 transform -rotate-45 scale-x-150"></span>
                  </span>
                  <span>English</span>
                </button>
              </div>
            )}
          </div>

          {/* CTA Header Button */}
          <a
            href="#contact"
            className="bg-brand-navy hover:bg-brand-navy-dark text-white text-xs lg:text-sm font-display font-bold py-2.5 px-5 rounded-lg transition-all shadow-md shadow-brand-navy/15 hover:shadow-lg hover:shadow-brand-navy/25 cursor-pointer"
          >
            {t('nav_cta')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Mobile Lang Button */}
          <button
            onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700"
          >
            <Globe className="h-3.5 w-3.5 text-slate-500" />
            <span className="uppercase">{language === 'vi' ? 'VI' : 'EN'}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-navy hover:text-brand-green p-1.5 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bg-white border-b border-slate-200 shadow-xl py-4 px-6 space-y-4 flex flex-col z-35 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-display font-bold text-brand-navy/85 hover:text-brand-green py-2 border-b border-slate-50"
            >
              {t(item.labelKey)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-brand-navy text-white text-center font-display font-bold py-3 rounded-lg text-sm"
          >
            {t('nav_cta')}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
