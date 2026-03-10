'use client';

import styles from './InvestmentCTA.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function InvestmentCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.divider} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className={styles.title}>Invest in the Future of Caribbean Living</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className={styles.subtitle}>
            Secure your investment in one of the most promising real estate developments 
            in the Caribbean. With projected ROI of up to 12% annually and guaranteed 
            rental income programs, Larimar City offers both lifestyle and financial security.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className={styles.divider} />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className={styles.ctas}>
            <Button href="/investment" variant="gold" size="lg">
              Why Invest
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
