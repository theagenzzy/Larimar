'use client';

import styles from './AboutPreview.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const featureIcons = [
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
];

export default function AboutPreview() {
  const { t } = useLanguage();

  const features = [
    { icon: featureIcons[0], title: t('about.smartTech'), desc: t('about.smartTechDesc') },
    { icon: featureIcons[1], title: t('about.sustainability'), desc: t('about.sustainabilityDesc') },
    { icon: featureIcons[2], title: t('about.wellness'), desc: t('about.wellnessDesc') },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal direction="left" className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url(/images/slide-2.jpg)' }} />
            <div className={styles.imageAccent} />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2} className={styles.contentCol}>
          <span className={styles.label}>{t('about.label')}</span>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <p className={styles.description}>
            {t('about.description')}
          </p>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDesc}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Button href="/the-city" variant="gold" size="md">
            {t('about.discoverMore')}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
