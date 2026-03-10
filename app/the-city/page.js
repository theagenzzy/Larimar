import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'The City | Larimar City & Resort',
  description: 'Discover Larimar City & Resort — the first smart city in the Caribbean. Located in Punta Cana with over 30 million sqm of world-class living, green spaces, and innovation.',
};

export default function TheCityPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ScrollReveal>
            <p className={styles.heroSubtitle}>Larimar City &amp; Resort</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className={styles.heroTitle}>A Unique Destination</h1>
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
              <p className={styles.overviewLabel}>About the City</p>
              <h2 className={styles.overviewTitle}>
                The First Smart City in the Caribbean
              </h2>
              <p className={styles.overviewText}>
                Larimar City &amp; Resort is a visionary project located in the heart of Punta Cana, Dominican Republic. Spanning over 30 million square meters, it represents the most ambitious urban development in the Caribbean.
              </p>
              <p className={styles.overviewText}>
                Designed under the principles of neuroarchitecture, sustainability, and smart technology, Larimar City integrates residential, commercial, entertainment, and wellness spaces into a cohesive, future-ready community.
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
            <p className={styles.keyNumbersLabel}>Larimar in Numbers</p>
            <h2 className={styles.keyNumbersTitle}>Key Figures</h2>
          </ScrollReveal>
          <div className={styles.statsGrid}>
            <ScrollReveal delay={0}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={22000} suffix="+" />
                </div>
                <p className={styles.statLabel}>Residential Homes</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={50} suffix="%+" />
                </div>
                <p className={styles.statLabel}>Green Areas</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={3} suffix=" km" />
                </div>
                <p className={styles.statLabel}>Beachfront</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter value={18} suffix=" holes" />
                </div>
                <p className={styles.statLabel}>Golf Course</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <ScrollReveal>
            <p className={styles.sectionLabel}>What Makes Us Different</p>
            <h2 className={styles.sectionTitle}>City Features</h2>
            <p className={styles.sectionSubtitle}>
              Every element of Larimar City has been designed to elevate the quality of life for its residents and visitors.
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
                <h3 className={styles.featureTitle}>Smart Technology</h3>
                <p className={styles.featureDescription}>
                  IoT infrastructure, smart home automation, and connected services throughout the city for seamless digital living.
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
                <h3 className={styles.featureTitle}>Neuroarchitecture</h3>
                <p className={styles.featureDescription}>
                  Spaces designed based on neuroscience principles to promote well-being, creativity, and mental health.
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
                <h3 className={styles.featureTitle}>Wellness Living</h3>
                <p className={styles.featureDescription}>
                  Integrated wellness centers, yoga pavilions, spa facilities, and biophilic design for a healthy lifestyle.
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
                <h3 className={styles.featureTitle}>Sustainability</h3>
                <p className={styles.featureDescription}>
                  Solar energy systems, water recycling, green mobility, and eco-conscious building practices across the development.
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
                <h3 className={styles.featureTitle}>Entertainment</h3>
                <p className={styles.featureDescription}>
                  World-class dining, nightlife, a casino, a water park, and cultural venues that make every day extraordinary.
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
                <h3 className={styles.featureTitle}>Education &amp; Health</h3>
                <p className={styles.featureDescription}>
                  International schools, medical centers, and research institutions ensure access to top-tier education and healthcare.
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
            <p className={styles.masterplanLabel}>The Vision</p>
            <h2 className={styles.masterplanTitle}>A Masterplan Designed for the Future</h2>
            <p className={styles.masterplanText}>
              The Larimar City masterplan integrates residential neighborhoods, commercial districts, leisure areas, and natural reserves into a harmonious and walkable urban experience.
            </p>
            <Button href="/city-concept" variant="outline" size="lg">
              Explore the Concept
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <ScrollReveal>
            <h2 className={styles.ctaTitle}>Discover Your New Home</h2>
            <p className={styles.ctaText}>
              Explore the properties available at Larimar City &amp; Resort and find the perfect space for your lifestyle.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/properties" variant="primary" size="lg">
                View Properties
              </Button>
              <Button href="/contact" variant="outlineDark" size="lg">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
