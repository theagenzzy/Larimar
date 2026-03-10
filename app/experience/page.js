'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.css';

const galleryItems = [
  { height: 320, image: '/images/farallon.jpg' },
  { height: 400, image: '/images/slide-2.jpg' },
  { height: 280, image: '/images/gallery-2.jpg' },
  { height: 360, image: '/images/slide-3.jpg' },
  { height: 300, image: '/images/gallery-3.jpg' },
  { height: 380, image: '/images/gallery-4.jpg' },
  { height: 340, image: '/images/horizon-view.webp' },
  { height: 260, image: '/images/slide-4.jpg' },
  { height: 420, image: '/images/slide-5.jpg' },
];

export default function ExperiencePage() {
  const { t } = useLanguage();

  const experiences = [
    {
      label: t('experience.recreationLabel'),
      title: t('experience.golfTitle'),
      desc: t('experience.golfDesc'),
      image: '/images/golf-country-club.webp',
      features: [
        t('experience.golfFeature1'),
        t('experience.golfFeature2'),
        t('experience.golfFeature3'),
        t('experience.golfFeature4'),
        t('experience.golfFeature5'),
      ],
    },
    {
      label: t('experience.waterfrontLabel'),
      title: t('experience.beachTitle'),
      desc: t('experience.beachDesc'),
      image: '/images/gallery-2.jpg',
      features: [
        t('experience.beachFeature1'),
        t('experience.beachFeature2'),
        t('experience.beachFeature3'),
        t('experience.beachFeature4'),
        t('experience.beachFeature5'),
      ],
    },
    {
      label: t('experience.wellbeingLabel'),
      title: t('experience.wellnessTitle'),
      desc: t('experience.wellnessDesc'),
      image: '/images/slide-4.jpg',
      features: [
        t('experience.wellnessFeature1'),
        t('experience.wellnessFeature2'),
        t('experience.wellnessFeature3'),
        t('experience.wellnessFeature4'),
        t('experience.wellnessFeature5'),
      ],
    },
    {
      label: t('experience.lifestyleLabel'),
      title: t('experience.diningTitle'),
      desc: t('experience.diningDesc'),
      image: '/images/gallery-3.jpg',
      features: [
        t('experience.diningFeature1'),
        t('experience.diningFeature2'),
        t('experience.diningFeature3'),
        t('experience.diningFeature4'),
        t('experience.diningFeature5'),
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ScrollReveal>
            <span className={styles.heroLabel}>{t('experience.label')}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className={styles.heroTitle}>{t('experience.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className={styles.heroSubtitle}>
              {t('experience.subtitle')}
            </p>
          </ScrollReveal>
        </div>
        <div className={styles.heroScroll}>
          <span>{t('experience.explore')}</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* Experience Sections */}
      {experiences.map((exp, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <section
            key={exp.title}
            className={`${styles.experienceSection} ${styles[`experienceBg${index}`]}`}
          >
            <div className={`${styles.experienceInner} ${isReversed ? styles.experienceReversed : ''}`}>
              <ScrollReveal direction={isReversed ? 'right' : 'left'}>
                <div
                  className={styles.experienceImage}
                  style={{ backgroundImage: 'url(' + exp.image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
              </ScrollReveal>

              <ScrollReveal direction={isReversed ? 'left' : 'right'} delay={0.15}>
                <div>
                  <p className={styles.experienceLabel}>{exp.label}</p>
                  <h2 className={styles.experienceTitle}>{exp.title}</h2>
                  <p className={styles.experienceDesc}>{exp.desc}</p>
                  <ul className={styles.featureList}>
                    {exp.features.map((feature) => (
                      <li key={feature} className={styles.featureItem}>
                        <span className={styles.featureIcon}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* Virtual Tour CTA */}
      <section className={styles.virtualTour}>
        <div className={styles.virtualTourInner}>
          <ScrollReveal>
            <div className={styles.virtualTourIcon}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className={styles.virtualTourTitle}>{t('experience.virtualTourTitle')}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className={styles.virtualTourText}>
              {t('experience.virtualTourText')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <Button href="/contact" variant="gold" size="lg">
              {t('experience.startVirtualTour')}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{t('experience.galleryLabel')}</p>
            <h2 className={styles.sectionTitle}>{t('experience.galleryTitle')}</h2>
            <p className={styles.sectionSubtitle}>
              {t('experience.gallerySubtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className={styles.galleryItem}>
                <div
                  className={styles.galleryPlaceholder}
                  style={{
                    height: item.height,
                    backgroundImage: 'url(' + item.image + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 'var(--radius-lg)',
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <ScrollReveal>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>{t('experience.ctaTitle')}</h2>
            <p className={styles.ctaText}>
              {t('experience.ctaText')}
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contact" variant="primary" size="lg">
                {t('experience.getInTouch')}
              </Button>
              <Button href="/properties" variant="outlineDark" size="lg">
                {t('experience.exploreProperties')}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
