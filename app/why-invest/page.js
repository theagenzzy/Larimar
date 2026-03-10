import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Why Invest | Larimar City & Resort',
  description:
    'Discover why Larimar City & Resort is the smartest real estate investment in the Caribbean. High ROI, insured investment, and world-class partners.',
};

const highlights = [
  {
    icon: '📈',
    color: '#6EC1E4',
    title: 'High ROI (8-12%)',
    description:
      'Enjoy projected annual returns of 8-12% backed by a booming Caribbean tourism market and premium hospitality management.',
  },
  {
    icon: '🛡️',
    color: '#B79D52',
    title: 'Insured Investment',
    description:
      'Your investment is protected with comprehensive insurance coverage, ensuring peace of mind and financial security from day one.',
  },
  {
    icon: '🌿',
    color: '#2ecc71',
    title: 'Sustainable City',
    description:
      'A fully sustainable smart city with renewable energy, green infrastructure, and eco-friendly design certified by international standards.',
  },
  {
    icon: '✈️',
    color: '#9b59b6',
    title: 'Global Connectivity',
    description:
      'Located minutes from Punta Cana International Airport with direct flights from 80+ cities worldwide across North America, Europe, and Latin America.',
  },
  {
    icon: '🏢',
    color: '#004274',
    title: 'CLERHP Backed',
    description:
      'Developed by CLERHP Estructuras, a publicly traded company on the BME Growth market, guaranteeing transparency and corporate governance.',
  },
  {
    icon: '💰',
    color: '#e67e22',
    title: 'Tax Benefits — CONFOTUR',
    description:
      'Benefit from the Dominican Republic CONFOTUR law offering tax exemptions on property transfers, income tax, and import duties for up to 15 years.',
  },
];

const investmentTiers = [
  {
    tier: 'Studio Apartment',
    investment: '$150,000',
    year1: '$12,000 – $18,000',
    year5: '$72,000 – $108,000',
    roiLabel: '8–12%',
  },
  {
    tier: 'Luxury Apartment',
    investment: '$285,000',
    year1: '$22,800 – $34,200',
    year5: '$136,800 – $205,200',
    roiLabel: '8–12%',
    featured: true,
  },
  {
    tier: 'Premium Villa',
    investment: '$450,000',
    year1: '$36,000 – $54,000',
    year5: '$216,000 – $324,000',
    roiLabel: '8–12%',
  },
];

const comparisons = [
  { feature: 'Projected Annual ROI', larimar: '8–12%', others: '3–6%' },
  { feature: 'Tax Exemptions', larimar: 'Up to 15 years (CONFOTUR)', others: 'Limited or none' },
  { feature: 'Developer Backing', larimar: 'Publicly traded (CLERHP)', others: 'Private / unverified' },
  { feature: 'Smart City Infrastructure', larimar: 'Full smart city', others: 'Traditional builds' },
  { feature: 'Hospitality Partners', larimar: 'Sonesta & Archipelago', others: 'Varies' },
  { feature: 'Insurance Coverage', larimar: 'Comprehensive', others: 'Partial or none' },
];

const partners = [
  { name: 'CLERHP Estructuras', role: 'Developer — BME Growth Listed' },
  { name: 'Sonesta Hotels', role: 'Hospitality Management Partner' },
  { name: 'Archipelago International', role: 'Hotel Operations Partner' },
];

export default function WhyInvestPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <ScrollReveal>
            <span className={styles.heroLabel}>Investment Opportunity</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className={styles.heroTitle}>Why Invest in Larimar City</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className={styles.heroSubtitle}>
              Secure your future with projected 8–12% annual ROI in the Caribbean&apos;s first smart
              city, backed by a publicly traded developer and world-class hospitality partners.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Key Advantages</span>
              <h2 className={styles.sectionTitle}>Investment Highlights</h2>
              <p className={styles.sectionSubtitle}>
                Six compelling reasons why Larimar City stands apart as the premier Caribbean
                investment destination.
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
              <span className={styles.sectionLabel}>Projected Returns</span>
              <h2 className={styles.sectionTitle}>ROI Calculator</h2>
              <p className={styles.sectionSubtitle}>
                Explore projected returns across different investment tiers based on 8–12% annual
                ROI.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.tiersGrid}>
            {investmentTiers.map((tier, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div
                  className={`${styles.tierCard} ${tier.featured ? styles.tierCardFeatured : ''}`}
                >
                  {tier.featured && <span className={styles.tierBadge}>Most Popular</span>}
                  <h3 className={styles.tierName}>{tier.tier}</h3>
                  <div className={styles.tierPrice}>{tier.investment}</div>
                  <div className={styles.tierDivider} />
                  <div className={styles.tierRow}>
                    <span className={styles.tierLabel}>Annual Return</span>
                    <span className={styles.tierValue}>{tier.year1}</span>
                  </div>
                  <div className={styles.tierRow}>
                    <span className={styles.tierLabel}>5-Year Return</span>
                    <span className={styles.tierValue}>{tier.year5}</span>
                  </div>
                  <div className={styles.tierRow}>
                    <span className={styles.tierLabel}>Annual ROI</span>
                    <span className={styles.tierRoi}>{tier.roiLabel}</span>
                  </div>
                  <Button
                    href="/contact"
                    variant={tier.featured ? 'gold' : 'outlineDark'}
                    size="md"
                  >
                    Get Started
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
              <span className={styles.sectionLabel}>How We Compare</span>
              <h2 className={styles.sectionTitle}>Larimar City vs Other Caribbean Investments</h2>
              <p className={styles.sectionSubtitle}>
                See how Larimar City outperforms traditional Caribbean real estate investments across
                every key metric.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className={styles.comparisonTable}>
              <div className={styles.comparisonHeader}>
                <div className={styles.comparisonFeature}>Feature</div>
                <div className={styles.comparisonLarimar}>Larimar City</div>
                <div className={styles.comparisonOthers}>Other Investments</div>
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
              <span className={styles.sectionLabelLight}>Market Overview</span>
              <h2 className={styles.sectionTitleLight}>Dominican Republic Market Data</h2>
            </div>
          </ScrollReveal>
          <div className={styles.statsGrid}>
            <ScrollReveal delay={0}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={8} suffix="%" />
                </div>
                <div className={styles.statLabel}>Minimum Projected ROI</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={12} suffix="%" />
                </div>
                <div className={styles.statLabel}>Maximum Projected ROI</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={15} suffix="M+" />
                </div>
                <div className={styles.statLabel}>Tourists per Year</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  $<AnimatedCounter value={7} suffix="B+" />
                </div>
                <div className={styles.statLabel}>Real Estate Market</div>
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
              <span className={styles.sectionLabel}>Trusted Partners</span>
              <h2 className={styles.sectionTitle}>Backed by World-Class Partners</h2>
              <p className={styles.sectionSubtitle}>
                Larimar City is developed and managed by industry-leading companies with proven track
                records in construction, hospitality, and hotel operations.
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
            <h2 className={styles.ctaTitle}>Ready to Invest in Your Future?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className={styles.ctaText}>
              Contact our investment advisors to learn more about available properties and secure
              your place in the Caribbean&apos;s first smart city.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className={styles.ctaButtons}>
              <Button href="/contact" variant="gold" size="lg">
                Schedule a Consultation
              </Button>
              <Button href="/properties" variant="outline" size="lg">
                View Properties
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
