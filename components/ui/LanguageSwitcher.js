'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { locale, setLocale, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.btn} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => setLocale('en')}
        aria-label="English"
      >
        EN
      </button>
<button
        className={`${styles.btn} ${locale === 'es' ? styles.active : ''}`}
        onClick={() => setLocale('es')}
        aria-label="Español"
      >
        ES
      </button>
    </div>
  );
}
