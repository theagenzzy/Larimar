'use client';

import styles from './CTASection.module.css';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('cta.title')}</h2>
        <p className={styles.subtitle}>
          {t('cta.subtitle')}
        </p>
        <Button href="/contact" variant="secondary" size="lg">
          {t('cta.contactUsToday')}
        </Button>
      </div>
    </section>
  );
}
