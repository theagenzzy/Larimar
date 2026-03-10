import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'City Concept | Larimar City & Resort',
  description: 'Explore the smart city concept behind Larimar City & Resort — built on the pillars of technology, sustainability, and wellness for the future of Caribbean living.',
};

export default function CityConcept() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ScrollReveal>
            <p className={styles.heroSubtitle}>Building the Future Today</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className={styles.heroTitle}>City Concept</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className={styles.heroDivider} />
          </ScrollReveal>
        </div>
      </section>

      {/* Vision */}
      <section className={styles.vision}>
        <div className={styles.visionInner}>
          <ScrollReveal direction="left">
            <div className={styles.visionImageWrapper}>
              <img src="/images/slide-3.jpg" alt="Larimar City smart city vision" className={styles.visionImage} />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <p className={styles.visionLabel}>Our Vision</p>
              <h2 className={styles.visionTitle}>
                A Smart City Designed for People
              </h2>
              <p className={styles.visionText}>
                Larimar City &amp; Resort envisions a community where technology enhances human connection, where architecture promotes well-being, and where sustainability is not an afterthought but the foundation.
              </p>
              <p className={styles.visionText}>
                Every street, building, and green space has been conceived to create a harmonious balance between modern innovation and the natural beauty of the Dominican Republic. This is not just a place to live — it is a new way of living.
              </p>
              <p className={styles.visionText}>
                From AI-powered infrastructure to biophilic design, Larimar City sets a new standard for urban development in the Caribbean and beyond.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className={styles.pillars}>
        <div className={styles.pillarsInner}>
          <ScrollReveal>
            <p className={styles.pillarsLabel}>Foundation</p>
            <h2 className={styles.pillarsTitle}>The Three Pillars</h2>
            <p className={styles.pillarsSubtitle}>
              Larimar City is built on three fundamental pillars that guide every decision, from urban planning to architectural detail.
            </p>
          </ScrollReveal>
          <div className={styles.pillarsGrid}>
            <ScrollReveal delay={0}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarImagePlaceholder} style={{ backgroundImage: "url('/images/horizon-view.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className={`${styles.pillarAccent} ${styles.pillarAccentTech}`} />
                <div className={styles.pillarBody}>
                  <div className={`${styles.pillarIcon} ${styles.pillarIconTech}`}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <circle cx="12" cy="20" r="1" />
                    </svg>
                  </div>
                  <h3 className={styles.pillarTitle}>Technology</h3>
                  <p className={styles.pillarDescription}>
                    Larimar City integrates cutting-edge technology into its core infrastructure. From fiber-optic networks and 5G connectivity to IoT-enabled smart homes and AI-driven city management, technology is woven into the fabric of daily life. Residents benefit from automated home systems, intelligent energy grids, digital concierge services, and a city-wide platform that connects every aspect of the community.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarImagePlaceholder} style={{ backgroundImage: "url('/images/gallery-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className={`${styles.pillarAccent} ${styles.pillarAccentSustain}`} />
                <div className={styles.pillarBody}>
                  <div className={`${styles.pillarIcon} ${styles.pillarIconSustain}`}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                      <path d="M9 12c0-3 1.5-5 3-7 1.5 2 3 4 3 7a3 3 0 0 1-6 0z" />
                    </svg>
                  </div>
                  <h3 className={styles.pillarTitle}>Sustainability</h3>
                  <p className={styles.pillarDescription}>
                    Environmental responsibility is at the heart of Larimar City. The development features solar energy farms, rainwater harvesting systems, greywater recycling, and a comprehensive waste management program targeting zero-waste operations. Over 50% of the total area is dedicated to green spaces, parks, and nature reserves, creating a lush urban environment that coexists with the Caribbean ecosystem.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarImagePlaceholder} style={{ backgroundImage: "url('/images/slide-4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className={`${styles.pillarAccent} ${styles.pillarAccentWellness}`} />
                <div className={styles.pillarBody}>
                  <div className={`${styles.pillarIcon} ${styles.pillarIconWellness}`}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <h3 className={styles.pillarTitle}>Wellness</h3>
                  <p className={styles.pillarDescription}>
                    Designed with neuroarchitecture principles, Larimar City prioritizes mental and physical well-being. Spaces are crafted to reduce stress, enhance creativity, and foster social connection. The community includes world-class spa facilities, meditation gardens, jogging trails, and sports complexes, all surrounded by natural landscapes that promote a balanced and fulfilling lifestyle.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Innovation Features */}
      <section className={styles.innovation}>
        <div className={styles.innovationInner}>
          <ScrollReveal>
            <p className={styles.innovationLabel}>Smart Infrastructure</p>
            <h2 className={styles.innovationTitle}>Innovation at Every Level</h2>
          </ScrollReveal>
          <div className={styles.innovationGrid}>
            <ScrollReveal delay={0}>
              <div className={styles.innovationCard}>
                <div className={styles.innovationIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <circle cx="12" cy="20" r="1" />
                  </svg>
                </div>
                <h3 className={styles.innovationCardTitle}>IoT Infrastructure</h3>
                <p className={styles.innovationCardDesc}>
                  A city-wide network of sensors and connected devices that monitor air quality, traffic flow, energy usage, and public safety in real time.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.innovationCard}>
                <div className={styles.innovationIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2" />
                    <path d="M12 21v2" />
                    <path d="M4.22 4.22l1.42 1.42" />
                    <path d="M18.36 18.36l1.42 1.42" />
                    <path d="M1 12h2" />
                    <path d="M21 12h2" />
                    <path d="M4.22 19.78l1.42-1.42" />
                    <path d="M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <h3 className={styles.innovationCardTitle}>Renewable Energy</h3>
                <p className={styles.innovationCardDesc}>
                  Solar farms and clean energy systems power the city, reducing dependence on fossil fuels and cutting carbon emissions significantly.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.innovationCard}>
                <div className={styles.innovationIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </div>
                <h3 className={styles.innovationCardTitle}>Smart Waste Management</h3>
                <p className={styles.innovationCardDesc}>
                  Automated waste collection and sorting systems that maximize recycling rates and minimize environmental impact across the city.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className={styles.innovationCard}>
                <div className={styles.innovationIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className={styles.innovationCardTitle}>Home Automation</h3>
                <p className={styles.innovationCardDesc}>
                  Every residence features integrated smart home technology for lighting, climate, security, and entertainment — all controllable from a single app.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Green Initiatives */}
      <section className={styles.green}>
        <div className={styles.greenInner}>
          <ScrollReveal>
            <p className={styles.greenLabel}>Sustainability Commitment</p>
            <h2 className={styles.greenTitle}>Green Initiatives</h2>
            <p className={styles.greenSubtitle}>
              Larimar City is committed to setting the highest environmental standards for urban development in the Caribbean.
            </p>
          </ScrollReveal>
          <div className={styles.greenGrid}>
            <ScrollReveal delay={0}>
              <div className={styles.greenCard}>
                <div className={styles.greenIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div className={styles.greenValue}>
                  <AnimatedCounter value={40} suffix="%" />
                </div>
                <p className={styles.greenCardLabel}>Energy Reduction</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.greenCard}>
                <div className={styles.greenIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                    <path d="M9 12c0-3 1.5-5 3-7 1.5 2 3 4 3 7a3 3 0 0 1-6 0z" />
                  </svg>
                </div>
                <div className={styles.greenValue}>
                  <AnimatedCounter value={50} suffix="%+" />
                </div>
                <p className={styles.greenCardLabel}>Green Areas</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.greenCard}>
                <div className={styles.greenIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2" />
                    <path d="M12 21v2" />
                    <path d="M4.22 4.22l1.42 1.42" />
                    <path d="M18.36 18.36l1.42 1.42" />
                    <path d="M1 12h2" />
                    <path d="M21 12h2" />
                    <path d="M4.22 19.78l1.42-1.42" />
                    <path d="M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <div className={styles.greenValue}>100%</div>
                <p className={styles.greenCardLabel}>Solar Powered</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className={styles.greenCard}>
                <div className={styles.greenIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div className={styles.greenValue}>Zero</div>
                <p className={styles.greenCardLabel}>Waste Goal</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <ScrollReveal>
            <h2 className={styles.ctaTitle}>Invest in the Future</h2>
            <p className={styles.ctaText}>
              Discover why Larimar City &amp; Resort represents one of the most compelling investment opportunities in the Caribbean today.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/why-invest" variant="primary" size="lg">
                Why Invest
              </Button>
              <Button href="/contact" variant="outlineDark" size="lg">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
