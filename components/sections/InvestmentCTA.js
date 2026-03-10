'use client';

import styles from './InvestmentCTA.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function InvestmentCTA() {
  const { t } = useLanguage();
  return (
    <section className={styles.section}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.divider} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className={styles.title}>{t('investment.title')}</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className={styles.subtitle}>
            {t('investment.subtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className={styles.divider} />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className={styles.ctas}>
            <Button href="/investment" variant="gold" size="lg">
              {t('investment.whyInvest')}
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              {t('investment.contactUs')}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
