'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.css';

export default function TheCityPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ScrollReveal>
            <p className={styles.heroSubtitle}>Larimar City &amp; Resort</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className={styles.heroTitle}>{t('theCity.pageTitle')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className={styles.heroDivider} />
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <ScrollReveal direction="left">
            <div>
              <p className={styles.overviewLabel}>{t('theCity.overviewLabel')}</p>
              <h2 className={styles.overviewTitle}>
                {t('theCity.overviewTitle')}
              </h2>
              <p className={styles.overviewText}>
                {t('theCity.overviewText1')}
              </p>
              <p className={styles.overviewText}>
                {t('theCity.overviewText2')}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className={styles.overviewImageWrapper}>
              <div className={styles.overviewImage} style={{ backgroundImage: 'url(/images/slide-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className={styles.overviewGoldAccent} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Numbers */}
      <section className={styles.keyNumbers}>
        <div className={styles.keyNumbersInner}>
          <ScrollReveal>
            <p className={styles.keyNumbersLabel}>{t('theCity.keyNumbersLabel')}</p>
            <h2 className={styles.keyNumbersTitle}>{t('theCity.keyNumbersTitle')}</h2>
          </ScrollReveal>
          <div className={styles.statsGrid}>
            <ScrollReveal delay={0}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={22000} suffix="+" />
                </div>
                <p className={styles.statLabel}>{t('theCity.residentialHomes')}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={50} suffix="%+" />
                </div>
                <p className={styles.statLabel}>{t('theCity.greenAreas')}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={3} suffix=" km" />
                </div>
                <p className={styles.statLabel}>{t('theCity.beachfront')}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={18} suffix=" holes" />
                </div>
                <p className={styles.statLabel}>{t('theCity.golfCourse')}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <ScrollReveal>
            <p className={styles.sectionLabel}>{t('theCity.featuresLabel')}</p>
            <h2 className={styles.sectionTitle}>{t('theCity.featuresTitle')}</h2>
            <p className={styles.sectionSubtitle}>
              {t('theCity.featuresSubtitle')}
            </p>
          </ScrollReveal>
          <div className={styles.featuresGrid}>
            <ScrollReveal delay={0}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                    <path d="M7 8h2m2 0h2" />
                    <circle cx="16" cy="10" r="1" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>{t('theCity.smartTechnology')}</h3>
                <p className={styles.featureDescription}>
                  {t('theCity.smartTechnologyDesc')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" />
                    <path d="M12 2c2.5 3 4 6.5 4 10" />
                    <path d="M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10" />
                    <path d="M2 12h10" />
                    <circle cx="19" cy="5" r="3" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>{t('theCity.neuroarchitecture')}</h3>
                <p className={styles.featureDescription}>
                  {t('theCity.neuroarchitectureDesc')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>{t('theCity.wellnessLiving')}</h3>
                <p className={styles.featureDescription}>
                  {t('theCity.wellnessLivingDesc')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                    <path d="M9 12c0-3 1.5-5 3-7 1.5 2 3 4 3 7a3 3 0 0 1-6 0z" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>{t('theCity.sustainabilityTitle')}</h3>
                <p className={styles.featureDescription}>
                  {t('theCity.sustainabilityDesc')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>{t('theCity.entertainment')}</h3>
                <p className={styles.featureDescription}>
                  {t('theCity.entertainmentDesc')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <path d="M8 7h8" />
                    <path d="M8 11h6" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>{t('theCity.educationHealth')}</h3>
                <p className={styles.featureDescription}>
                  {t('theCity.educationHealthDesc')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Masterplan */}
      <section className={styles.masterplan}>
        <div className={styles.masterplanBg} />
        <div className={styles.masterplanOverlay} />
        <div className={styles.masterplanContent}>
          <ScrollReveal>
            <p className={styles.masterplanLabel}>{t('theCity.masterplanLabel')}</p>
            <h2 className={styles.masterplanTitle}>{t('theCity.masterplanTitle')}</h2>
            <p className={styles.masterplanText}>
              {t('theCity.masterplanText')}
            </p>
            <Button href="/city-concept" variant="outline" size="lg">
              {t('theCity.exploreTheConcept')}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <ScrollReveal>
            <h2 className={styles.ctaTitle}>{t('theCity.ctaTitle')}</h2>
            <p className={styles.ctaText}>
              {t('theCity.ctaText')}
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/properties" variant="primary" size="lg">
                {t('theCity.viewProperties')}
              </Button>
              <Button href="/contact" variant="outlineDark" size="lg">
                {t('investment.contactUs')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
