import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';
import type { TranslationType } from '../data/translations';

export type Language = 'vi' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationType) => string;
  /** Trả về '' nếu vi (no prefix), '/en' hoặc '/es' nếu khác */
  langPrefix: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  /** Lang được truyền từ URL route (App.tsx). Mặc định 'vi'. */
  initialLang?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  initialLang = 'vi',
}) => {
  const [language, setLanguageState] = useState<Language>(initialLang);

  // Sync khi URL thay đổi (ví dụ navigate giữa /en và /)
  useEffect(() => {
    setLanguageState(initialLang);
  }, [initialLang]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: keyof TranslationType): string => {
    return translations[language][key] || translations['en'][key] || '';
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const langPrefix = language === 'vi' ? '' : `/${language}`;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, langPrefix }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
