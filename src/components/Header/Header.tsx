import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../context/LanguageContext';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { createPortal } from 'react-dom';
import logoImg from '../../assets/logo.png';

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  const isDarkPage = location.pathname.toLowerCase().startsWith('/solutions');

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
    { labelKey: 'nav_about' as const, href: '/about' },
    {
      labelKey: 'nav_solutions' as const,
      href: '#solutions',
      dropdownItems: [
        { labelKey: 'sol_hotel' as const, href: '/solutions/hotel' },
        { labelKey: 'sol_farm' as const, href: '/solutions/farm' },
        { labelKey: 'sol_industrie' as const, href: '/solutions/industrie' },
        { labelKey: 'sol_residential' as const, href: '/solutions/residential' },
      ]
    },
    { labelKey: 'nav_projects' as const, href: '/#projects' },
    { labelKey: 'nav_blog' as const, href: '/#blog' },
    { labelKey: 'nav_contact' as const, href: '/#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          (isScrolled || isDarkPage)
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logoImg}
            alt="Kuodia Renovables Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              (isScrolled || isDarkPage) ? 'h-16 md:h-20' : 'h-20 md:h-24'
            }`}
          />
        </Link>
 
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-7">
          {navItems.map((item) => {
            const isContact = item.href === '/#contact';
            if (item.dropdownItems) {
              return (
                <div
                  key={item.href}
                  className="relative group py-2"
                >
                  <button
                    className="flex items-center space-x-1 text-xs lg:text-sm font-display font-bold text-brand-navy/85 hover:text-brand-green transition-colors cursor-pointer"
                  >
                    <span>{t(item.labelKey)}</span>
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-100 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.dropdownItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="block px-4 py-2.5 text-xs lg:text-sm font-sans font-bold text-brand-navy/80 hover:text-brand-green hover:bg-slate-50 transition-colors"
                      >
                        {t(subItem.labelKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                to={isContact ? '#' : item.href}
                onClick={(e) => {
                  if (isContact) {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent("open-contact-mascot"));
                  }
                }}
                className="text-xs lg:text-sm font-display font-bold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-green after:transition-all hover:after:w-full text-brand-navy/85 hover:text-brand-green"
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>
 
        {/* Action Controls */}
        <div className="hidden xl:flex items-center space-x-4">
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
        <div className="flex xl:hidden items-center space-x-3">
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
    </header>

      {/* Mobile Menu Drawer (Rendered at body root via React Portal to bypass backdrop-filter containment block limitations) */}
      {isMobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div className="xl:hidden fixed inset-0 bg-white z-50 flex flex-col p-6 overflow-y-auto animate-fade-in">
          {/* Top Row: Logo + Language select + Close X button */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            {/* Logo */}
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
              <img
                src={logoImg}
                alt="Kuodia Renovables Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Language Selector + Close button */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setLanguage(language === 'vi' ? 'en' : language === 'en' ? 'es' : 'vi')}
                className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 cursor-pointer"
              >
                <Globe className="h-3.5 w-3.5 text-slate-500" />
                <span className="uppercase">{language}</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-navy hover:text-brand-green p-1.5 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-grow py-8 space-y-4 flex flex-col">
            {navItems.map((item) => {
              const isContact = item.href === '/#contact';
              if (item.dropdownItems) {
                return (
                  <div key={item.href} className="flex flex-col border-b border-slate-50 py-1">
                    <button
                      onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                      className="flex items-center justify-between w-full text-sm font-display font-bold text-brand-navy/85 hover:text-brand-green py-3 uppercase tracking-wider text-left cursor-pointer"
                    >
                      <span>{t(item.labelKey)}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileSolutionsOpen && (
                      <div className="pl-4 pb-2 flex flex-col space-y-2.5 bg-slate-50/50 rounded-xl p-2.5 mt-1 border border-slate-100">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs font-sans font-bold text-brand-navy/70 hover:text-brand-green py-2 block"
                          >
                            {t(subItem.labelKey)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  to={isContact ? '#' : item.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (isContact) {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent("open-contact-mascot"));
                    }
                  }}
                  className="text-sm font-display font-bold text-brand-navy/85 hover:text-brand-green py-3 border-b border-slate-50 uppercase tracking-wider"
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-6 border-t border-slate-100">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-contact-mascot"));
              }}
              className="w-full block bg-brand-navy text-white text-center font-display font-bold py-3.5 rounded-xl text-sm shadow-md shadow-brand-navy/15 uppercase tracking-wider cursor-pointer"
            >
              {t('nav_cta')}
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Header;