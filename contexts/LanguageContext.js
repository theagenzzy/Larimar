'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from '@/translations/en';
import es from '@/translations/es';

const translations = { en, es };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('larimar-lang');
    if (saved === 'es' || saved === 'en') {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  const changeLocale = useCallback((lang) => {
    setLocale(lang);
    localStorage.setItem('larimar-lang', lang);
  }, []);

  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[locale];
    for (const k of keys) {
      value = value?.[k];
    }
    if (value !== undefined) return value;
    // Fallback to English
    let fallback = translations.en;
    for (const k of keys) {
      fallback = fallback?.[k];
    }
    return fallback || key;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function getLocalized(obj, field, locale) {
  if (locale === 'en') return obj[field];
  return obj[`${field}_es`] || obj[field];
}
