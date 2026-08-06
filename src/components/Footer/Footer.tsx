import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { Mail, Phone, Globe } from 'lucide-react';
import logoFooterImg from '../../assets/logo-footer.png';

export const Footer: React.FC = () => {
  const { t, language } = useTranslation();

  const socialLinks = [
    {
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      href: '#',
      label: 'Facebook'
    },
    {
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
      href: '#',
      label: 'YouTube'
    },
    {
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: '#',
      label: 'Instagram'
    }
  ];

  const solutionsLinks = [
    'Aerothermal Heat Pumps',
    'Solar Energy',
    'Heat Recovery Systems',
    'VRF Technology',
    'Water Saving Solutions',
    'Hotel Energy Solutions',
    'Energy Audit'
  ];

  const aboutLinks = [
    { labelVi: 'Giới thiệu', labelEn: 'Introduction', labelEs: 'Introducción' },
    { labelVi: 'Sứ mệnh & Giá trị', labelEn: 'Mission & Values', labelEs: 'Misión y Valores' },
    { labelVi: 'Đội ngũ', labelEn: 'Our Team', labelEs: 'Nuestro Equipo' },
    { labelVi: 'Đối tác', labelEn: 'Partners', labelEs: 'Socios' }
  ];

  const resourcesLinks = [
    { labelVi: 'Blog', labelEn: 'Blog', labelEs: 'Blog' },
    { labelVi: 'Tài liệu kỹ thuật', labelEn: 'Technical Documents', labelEs: 'Documentos Técnicos' },
    { labelVi: 'FAQ', labelEn: 'FAQ', labelEs: 'FAQ' }
  ];

  return (
    <footer id="contact" className="bg-brand-navy-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Socials */}
          <div className="lg:col-span-1.5 space-y-5">
            <a href="#home" className="flex items-center group">
              <img src={logoFooterImg} alt="Kuodia Renovables Logo" className="h-14 w-auto object-contain -ml-5" />
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              {t('footer_desc')}
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-green hover:border-brand-green hover:text-white transition-all text-slate-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-display font-extrabold text-white tracking-widest uppercase">
              {t('footer_col_solutions')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {solutionsLinks.map((item, idx) => (
                <li key={idx}>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: About */}
          <div className="space-y-4">
            <h4 className="text-xs font-display font-extrabold text-white tracking-widest uppercase">
              {t('footer_col_about')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {aboutLinks.map((item, idx) => (
                <li key={idx}>
                  <a href="/about" className="hover:text-white transition-colors">
                    {language === 'vi' ? item.labelVi : language === 'es' ? item.labelEs : item.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-display font-extrabold text-white tracking-widest uppercase">
              {t('footer_col_resources')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {resourcesLinks.map((item, idx) => (
                <li key={idx}>
                  <a href="#blog" className="hover:text-white transition-colors">
                    {language === 'vi' ? item.labelVi : language === 'es' ? item.labelEs : item.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-4 lg:col-span-1.2">
            <h4 className="text-xs font-display font-extrabold text-white tracking-widest uppercase">
              {t('footer_col_contact')}
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              {/* <li className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-green-light flex-shrink-0" />
                <span className="leading-relaxed">
                  {t('footer_contact_address')}
                </span>
              </li> */}
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-brand-green-light flex-shrink-0" />
                <a href={`tel:${t('footer_contact_phone')}`} className="hover:text-white transition-colors">
                  {t('footer_contact_phone')}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-brand-green-light flex-shrink-0" />
                <a href={`mailto:${t('footer_contact_email')}`} className="hover:text-white transition-colors">
                  {t('footer_contact_email')}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Globe className="h-4 w-4 text-brand-green-light flex-shrink-0" />
                <a href="https://www.kuodia.vn" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {t('footer_contact_web')}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>{t('footer_copyright')}</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              {t('footer_privacy')}
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              {t('footer_terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
