'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.css';

const galleryImages = [
  '/images/slide-2.jpg',
  '/images/slide-3.jpg',
  '/images/slide-4.jpg',
  '/images/gallery-4.jpg',
  '/images/horizon-view.webp',
  '/images/gallery-1.jpg',
];

const galleryItems = [
  { height: 320, image: galleryImages[0] },
  { height: 420, image: galleryImages[1] },
  { height: 280, image: galleryImages[2] },
  { height: 380, image: galleryImages[3] },
  { height: 300, image: galleryImages[4] },
  { height: 360, image: galleryImages[5] },
];

function ProgressBar({ label, value }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <div className={styles.progressItem} ref={ref}>
      <div className={styles.progressHeader}>
        <span className={styles.progressLabel}>{label}</span>
        <span className={styles.progressValue}>{value}%</span>
      </div>
      <div className={styles.progressBarTrack}>
        <div
          className={`${styles.progressBarFill} ${animated ? styles.progressBarFillAnimated : ''}`}
          style={{ width: animated ? `${value}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function PhaseOnePage() {
  const { t } = useLanguage();

  const amenities = [
    {
      title: t('phase1.artificialBeach'),
      desc: t('phase1.artificialBeachDesc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20c2-2 4-3 6-3s4 1 6 3 4 3 6 3" />
          <path d="M2 16c2-2 4-3 6-3s4 1 6 3 4 3 6 3" />
          <circle cx="12" cy="6" r="3" />
          <path d="M12 9v3" />
        </svg>
      ),
    },
    {
      title: t('phase1.swimmingPools'),
      desc: t('phase1.swimmingPoolsDesc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20" />
          <path d="M2 16c1.5-1 3-2 5-2s3.5 1 5 2 3 2 5 2 3.5-1 5-2" />
          <path d="M8 8V4a2 2 0 0 1 4 0v4" />
          <path d="M16 8V6a2 2 0 0 0-4 0" />
        </svg>
      ),
    },
    {
      title: t('phase1.golfCourse'),
      desc: t('phase1.golfCourseDesc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 18V2l7 4-7 4" />
          <path d="M8 22c-2.2 0-4-1-4-2s1.8-2 4-2 4 1 4 2-1.8 2-4 2z" />
        </svg>
      ),
    },
    {
      title: t('phase1.mediterraneanPromenade'),
      desc: t('phase1.mediterraneanPromenadeDesc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l4-4 4 4v14" />
          <path d="M15 21V10l4-3v14" />
          <path d="M9 9v.01M9 13v.01M9 17v.01" />
        </svg>
      ),
    },
    {
      title: t('phase1.healthCenter'),
      desc: t('phase1.healthCenterDesc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4c0 3 4 6 4 6s4-3 4-6a4 4 0 0 0-4-4z" />
          <path d="M12 8v4M10 10h4" />
          <path d="M4 20h16" />
          <path d="M8 20v-4a4 4 0 0 1 8 0v4" />
        </svg>
      ),
    },
    {
      title: t('phase1.sportsFacilities'),
      desc: t('phase1.sportsFacilitiesDesc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M4.93 4.93c4 5.02 4 9.12 0 14.14" />
          <path d="M19.07 4.93c-4 5.02-4 9.12 0 14.14" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: t('phase1.shoppingDining'),
      desc: t('phase1.shoppingDiningDesc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 8v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8l-3-6z" />
          <path d="M3 8h18" />
          <path d="M16 12a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      title: t('phase1.greenParks'),
      desc: t('phase1.greenParksDesc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V8" />
          <path d="M5 12c0-4 3-8 7-8s7 4 7 8" />
          <path d="M7 16c0-3 2.5-6 5-6s5 3 5 6" />
          <path d="M3 22h18" />
        </svg>
      ),
    },
  ];

  const progressData = [
    { label: t('phase1.construction'), value: 75 },
    { label: t('phase1.infrastructure'), value: 90 },
    { label: t('phase1.landscaping'), value: 60 },
    { label: t('phase1.smartSystems'), value: 45 },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ScrollReveal>
            <span className={styles.heroLabel}>{t('phase1.label')}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className={styles.heroTitle}>{t('phase1.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className={styles.heroSubtitle}>{t('phase1.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <ScrollReveal direction="left">
            <div className={styles.overviewImage} style={{ backgroundImage: 'url(/images/gallery-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <p className={styles.overviewLabel}>{t('phase1.aboutLabel')}</p>
              <h2 className={styles.overviewTitle}>{t('phase1.aboutTitle')}</h2>
              <p className={styles.overviewText}>
                {t('phase1.aboutText1')}
              </p>
              <p className={styles.overviewText}>
                {t('phase1.aboutText2')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Amenities */}
      <section className={styles.amenities}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{t('phase1.amenitiesLabel')}</p>
            <h2 className={styles.sectionTitle}>{t('phase1.amenitiesTitle')}</h2>
            <p className={styles.sectionSubtitle}>
              {t('phase1.amenitiesSubtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.amenitiesGrid}>
          {amenities.map((amenity, i) => (
            <ScrollReveal key={amenity.title} delay={i * 0.08}>
              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>{amenity.icon}</div>
                <h3 className={styles.amenityTitle}>{amenity.title}</h3>
                <p className={styles.amenityDesc}>{amenity.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{t('phase1.timelineLabel')}</p>
            <h2 className={styles.sectionTitle}>{t('phase1.timelineTitle')}</h2>
            <p className={styles.sectionSubtitle}>
              {t('phase1.timelineSubtitle')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className={styles.timelineTrack}>
            <div className={styles.timelineLine}>
              <div className={styles.timelineLineFill} />
            </div>

            <div className={`${styles.timelineCard} ${styles.timelineCardActive}`}>
              <p className={styles.timelineYears}>{t('phase1.phase1Years')}</p>
              <div className={styles.timelineDot} />
              <h3 className={styles.timelineName}>{t('phase1.phase1Name')}</h3>
              <p className={styles.timelineDesc}>{t('phase1.phase1Desc')}</p>
              <span className={`${styles.timelineStatus} ${styles.statusInProgress}`}>{t('phase1.inProgress')}</span>
            </div>

            <div className={`${styles.timelineCard} ${styles.timelineCardSelling}`}>
              <p className={styles.timelineYears}>{t('phase1.phase2Years')}</p>
              <div className={styles.timelineDot} />
              <h3 className={styles.timelineName}>{t('phase1.phase2Name')}</h3>
              <p className={styles.timelineDesc}>{t('phase1.phase2Desc')}</p>
              <span className={`${styles.timelineStatus} ${styles.statusSelling}`}>{t('phase1.selling')}</span>
            </div>

            <div className={styles.timelineCard}>
              <p className={styles.timelineYears}>{t('phase1.phase3Years')}</p>
              <div className={styles.timelineDot} />
              <h3 className={styles.timelineName}>{t('phase1.phase3Name')}</h3>
              <p className={styles.timelineDesc}>{t('phase1.phase3Desc')}</p>
              <span className={`${styles.timelineStatus} ${styles.statusUpcoming}`}>{t('phase1.upcoming')}</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Progress */}
      <section className={styles.progress}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{t('phase1.progressLabel')}</p>
            <h2 className={styles.sectionTitle}>{t('phase1.progressTitle')}</h2>
            <p className={styles.sectionSubtitle}>
              {t('phase1.progressSubtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.progressGrid}>
          {progressData.map((item) => (
            <ScrollReveal key={item.label} delay={0.1}>
              <ProgressBar label={item.label} value={item.value} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{t('phase1.galleryLabel')}</p>
            <h2 className={styles.sectionTitle}>{t('phase1.galleryTitle')}</h2>
            <p className={styles.sectionSubtitle}>
              {t('phase1.gallerySubtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
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
            <h2 className={styles.ctaTitle}>{t('phase1.ctaTitle')}</h2>
            <p className={styles.ctaText}>
              {t('phase1.ctaText')}
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/properties" variant="primary" size="lg">
                {t('phase1.viewProperties')}
              </Button>
              <Button href="/contact" variant="outlineDark" size="lg">
                {t('phase1.contactSales')}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
