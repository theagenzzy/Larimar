'use client';

import { useEffect, useState } from 'react';
import styles from './HeroCinematic.module.css';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroCinematic() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.backgroundInner} />
      </div>
      <div className={styles.overlay} />

      <div className={`${styles.content} ${isLoaded ? styles.loaded : ''}`}>
        <span className={styles.label}>{t('hero.label')}</span>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.subtitle}>
          {t('hero.subtitle')}
        </p>
        <div className={styles.ctas}>
          <Button href="/properties" variant="gold" size="lg">
            {t('hero.exploreProperties')}
          </Button>
          <Button href="/tour" variant="outline" size="lg">
            {t('hero.watchTour')}
          </Button>
        </div>
      </div>

      <button className={styles.scrollIndicator} onClick={handleScrollDown} aria-label="Scroll down">
        <span className={styles.scrollText}>{t('hero.scroll')}</span>
        <span className={styles.scrollArrow}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M10 16L4 10M10 16L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </section>
  );
}
