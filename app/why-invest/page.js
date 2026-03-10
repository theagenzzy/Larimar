'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.css';

export default function WhyInvestPage() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: '\u{1F4C8}',
      color: '#6EC1E4',
      title: t('whyInvest.roiTitle'),
      description: t('whyInvest.roiDesc'),
    },
    {
      icon: '\u{1F6E1}\uFE0F',
      color: '#B79D52',
      title: t('whyInvest.insuredTitle'),
      description: t('whyInvest.insuredDesc'),
    },
    {
      icon: '\u{1F33F}',
      color: '#2ecc71',
      title: t('whyInvest.sustainableTitle'),
      description: t('whyInvest.sustainableDesc'),
    },
    {
      icon: '\u2708\uFE0F',
      color: '#9b59b6',
      title: t('whyInvest.connectivityTitle'),
      description: t('whyInvest.connectivityDesc'),
    },
    {
      icon: '\u{1F3E2}',
      color: '#004274',
      title: t('whyInvest.clerhpTitle'),
      description: t('whyInvest.clerhpDesc'),
    },
    {
      icon: '\u{1F4B0}',
      color: '#e67e22',
      title: t('whyInvest.taxBenefitsTitle'),
      description: t('whyInvest.taxBenefitsDesc'),
    },
  ];

  const investmentTiers = [
    {
      tier: t('whyInvest.studioApartment'),
      investment: '$150,000',
      year1: '$12,000 – $18,000',
      year5: '$72,000 – $108,000',
      roiLabel: '8–12%',
    },
    {
      tier: t('whyInvest.luxuryApartment'),
      investment: '$285,000',
      year1: '$22,800 – $34,200',
      year5: '$136,800 – $205,200',
      roiLabel: '8–12%',
      featured: true,
    },
    {
      tier: t('whyInvest.premiumVilla'),
      investment: '$450,000',
      year1: '$36,000 – $54,000',
      year5: '$216,000 – $324,000',
      roiLabel: '8–12%',
    },
  ];

  const comparisons = [
    { feature: t('whyInvest.projectedAnnualROI'), larimar: t('whyInvest.larimarValue1'), others: t('whyInvest.othersValue1') },
    { feature: t('whyInvest.taxExemptions'), larimar: t('whyInvest.larimarValue2'), others: t('whyInvest.othersValue2') },
    { feature: t('whyInvest.developerBacking'), larimar: t('whyInvest.larimarValue3'), others: t('whyInvest.othersValue3') },
    { feature: t('whyInvest.smartCityInfra'), larimar: t('whyInvest.larimarValue4'), others: t('whyInvest.othersValue4') },
    { feature: t('whyInvest.hospitalityPartners'), larimar: t('whyInvest.larimarValue5'), others: t('whyInvest.othersValue5') },
    { feature: t('whyInvest.insuranceCoverage'), larimar: t('whyInvest.larimarValue6'), others: t('whyInvest.othersValue6') },
  ];

  const partners = [
    { name: t('whyInvest.clerhpName'), role: t('whyInvest.clerhpRole') },
    { name: t('whyInvest.sonestaName'), role: t('whyInvest.sonestaRole') },
    { name: t('whyInvest.archipelagoName'), role: t('whyInvest.archipelagoRole') },
  ];

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <ScrollReveal>
            <span className={styles.heroLabel}>{t('whyInvest.heroLabel')}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className={styles.heroTitle}>{t('whyInvest.heroTitle')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className={styles.heroSubtitle}>
              {t('whyInvest.heroSubtitle')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>{t('whyInvest.sectionLabel1')}</span>
              <h2 className={styles.sectionTitle}>{t('whyInvest.sectionTitle1')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('whyInvest.sectionSubtitle1')}
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className={styles.highlightCard}>
                  <div
                    className={styles.highlightIcon}
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    <span>{item.icon}</span>
                  </div>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightDesc}>{item.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>{t('whyInvest.sectionLabel2')}</span>
              <h2 className={styles.sectionTitle}>{t('whyInvest.sectionTitle2')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('whyInvest.sectionSubtitle2')}
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.tiersGrid}>
            {investmentTiers.map((tier, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div
                  className={`${styles.tierCard} ${tier.featured ? styles.tierCardFeatured : ''}`}
                >
                  {tier.featured && <span className={styles.tierBadge}>{t('whyInvest.mostPopular')}</span>}
                  <h3 className={styles.tierName}>{tier.tier}</h3>
                  <div className={styles.tierPrice}>{tier.investment}</div>
                  <div className={styles.tierDivider} />
                  <div className={styles.tierRow}>
                    <span className={styles.tierLabel}>{t('whyInvest.annualReturn')}</span>
                    <span className={styles.tierValue}>{tier.year1}</span>
                  </div>
                  <div className={styles.tierRow}>
                    <span className={styles.tierLabel}>{t('whyInvest.fiveYearReturn')}</span>
                    <span className={styles.tierValue}>{tier.year5}</span>
                  </div>
                  <div className={styles.tierRow}>
                    <span className={styles.tierLabel}>{t('whyInvest.annualROI')}</span>
                    <span className={styles.tierRoi}>{tier.roiLabel}</span>
                  </div>
                  <Button
                    href="/contact"
                    variant={tier.featured ? 'gold' : 'outlineDark'}
                    size="md"
                  >
                    {t('whyInvest.getStarted')}
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>{t('whyInvest.sectionLabel3')}</span>
              <h2 className={styles.sectionTitle}>{t('whyInvest.sectionTitle3')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('whyInvest.sectionSubtitle3')}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className={styles.comparisonTable}>
              <div className={styles.comparisonHeader}>
                <div className={styles.comparisonHeaderCell}>{t('whyInvest.feature')}</div>
                <div className={styles.comparisonHeaderCell}>{t('whyInvest.larimarCity')}</div>
                <div className={styles.comparisonHeaderCell}>{t('whyInvest.otherInvestments')}</div>
              </div>
              {comparisons.map((row, index) => (
                <div key={index} className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>{row.feature}</div>
                  <div className={styles.comparisonLarimar}>
                    <span className={styles.checkIcon}>&#10003;</span> {row.larimar}
                  </div>
                  <div className={styles.comparisonOthers}>{row.others}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Market Data */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHeaderLight}>
              <span className={styles.sectionLabelLight}>{t('whyInvest.sectionLabel4')}</span>
              <h2 className={styles.sectionTitleLight}>{t('whyInvest.sectionTitle4')}</h2>
            </div>
          </ScrollReveal>
          <div className={styles.statsGrid}>
            <ScrollReveal delay={0}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={8} suffix="%" />
                </div>
                <div className={styles.statLabel}>{t('whyInvest.minimumROI')}</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={12} suffix="%" />
                </div>
                <div className={styles.statLabel}>{t('whyInvest.maximumROI')}</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={15} suffix="M+" />
                </div>
                <div className={styles.statLabel}>{t('whyInvest.touristsPerYear')}</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  $<AnimatedCounter value={7} suffix="B+" />
                </div>
                <div className={styles.statLabel}>{t('whyInvest.realEstateMarket')}</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust / Partners */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>{t('whyInvest.sectionLabel5')}</span>
              <h2 className={styles.sectionTitle}>{t('whyInvest.sectionTitle5')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('whyInvest.sectionSubtitle5')}
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.partnersGrid}>
            {partners.map((partner, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className={styles.partnerCard}>
                  <div className={styles.partnerLogo}>
                    <span className={styles.partnerInitial}>
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className={styles.partnerName}>{partner.name}</h3>
                  <p className={styles.partnerRole}>{partner.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <ScrollReveal>
            <h2 className={styles.ctaTitle}>{t('whyInvest.ctaTitle')}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className={styles.ctaText}>
              {t('whyInvest.ctaText')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className={styles.ctaButtons}>
              <Button href="/contact" variant="gold" size="lg">
                {t('whyInvest.scheduleConsultation')}
              </Button>
              <Button href="/properties" variant="outline" size="lg">
                {t('whyInvest.viewProperties')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
