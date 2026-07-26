import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../context/LanguageContext';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const isDarkPage = location.pathname.toLowerCase().startsWith('/industries');

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

  const toggleLanguage = (lang: 'vi' | 'en' | 'es') => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const navItems = [
    { labelKey: 'nav_home' as const, href: '/' },
    { labelKey: 'nav_about' as const, href: '/#about' },
    { labelKey: 'nav_solutions' as const, href: '/#solutions' },
    { labelKey: 'nav_industries' as const, href: '/industries' },
    { labelKey: 'nav_projects' as const, href: '/#projects' },
    { labelKey: 'nav_blog' as const, href: '/#blog' },
    { labelKey: 'nav_contact' as const, href: '/#contact' }
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
        <Link to="/" className="flex items-center group">
          <img
            src={logoImg}
            alt="Kuodia Renovables Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-xs lg:text-sm font-display font-bold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-green after:transition-all hover:after:w-full ${
                isScrolled
                  ? 'text-brand-navy/85 hover:text-brand-green'
                  : isDarkPage
                  ? 'text-white hover:text-brand-green'
                  : 'text-brand-navy/85 hover:text-brand-green'
              }`}
            >
              {t(item.labelKey)}
            </Link>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" className="w-4.5 h-3 rounded-sm flex-shrink-0">
                    <rect width="30" height="20" fill="#da291c"/>
                    <polygon points="15,4 16.2,8.2 20.6,8.2 17.1,10.8 18.4,15 15,12.4 11.6,15 12.9,10.8 9.4,8.2 13.8,8.2" fill="#ffcd00"/>
                  </svg>
                  <span>VI</span>
                </>
              ) : language === 'en' ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-4.5 h-3 rounded-sm border border-slate-100 flex-shrink-0">
                    <rect width="60" height="30" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#da291c" strokeWidth="4"/>
                    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#da291c" strokeWidth="6"/>
                  </svg>
                  <span>EN</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" className="w-4.5 h-3 rounded-sm border border-slate-100 flex-shrink-0">
                    <rect width="30" height="20" fill="#c60b1e"/>
                    <rect y="5" width="30" height="10" fill="#ffc400"/>
                    <circle cx="8" cy="10" r="2" fill="#c60b1e" opacity="0.75"/>
                  </svg>
                  <span>ES</span>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" className="w-4.5 h-3 rounded-sm flex-shrink-0">
                    <rect width="30" height="20" fill="#da291c"/>
                    <polygon points="15,4 16.2,8.2 20.6,8.2 17.1,10.8 18.4,15 15,12.4 11.6,15 12.9,10.8 9.4,8.2 13.8,8.2" fill="#ffcd00"/>
                  </svg>
                  <span>Tiếng Việt</span>
                </button>
                <button
                  onClick={() => toggleLanguage('en')}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-xs font-medium hover:bg-slate-50 text-slate-700 transition-colors text-left cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-4.5 h-3 rounded-sm border border-slate-100 flex-shrink-0">
                    <rect width="60" height="30" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#da291c" strokeWidth="4"/>
                    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#da291c" strokeWidth="6"/>
                  </svg>
                  <span>English</span>
                </button>
                <button
                  onClick={() => toggleLanguage('es')}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-xs font-medium hover:bg-slate-50 text-slate-700 transition-colors text-left cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" className="w-4.5 h-3 rounded-sm border border-slate-100 flex-shrink-0">
                    <rect width="30" height="20" fill="#c60b1e"/>
                    <rect y="5" width="30" height="10" fill="#ffc400"/>
                    <circle cx="8" cy="10" r="2" fill="#c60b1e" opacity="0.75"/>
                  </svg>
                  <span>Español</span>
                </button>
              </div>
            )}
          </div>

          {/* CTA Header Button */}
          <Link
            to="/#contact"
            className="bg-brand-navy hover:bg-brand-navy-dark text-white text-xs lg:text-sm font-display font-bold py-2.5 px-5 rounded-lg transition-all shadow-md shadow-brand-navy/15 hover:shadow-lg hover:shadow-brand-navy/25 cursor-pointer"
          >
            {t('nav_cta')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Mobile Lang Button */}
          <button
            onClick={() => setLanguage(language === 'vi' ? 'en' : language === 'en' ? 'es' : 'vi')}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 cursor-pointer"
          >
            <Globe className="h-3.5 w-3.5 text-slate-500" />
            <span className="uppercase">{language}</span>
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
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-display font-bold text-brand-navy/85 hover:text-brand-green py-2 border-b border-slate-50"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-brand-navy text-white text-center font-display font-bold py-3 rounded-lg text-sm"
          >
            {t('nav_cta')}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
