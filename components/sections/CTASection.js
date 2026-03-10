'use client';

import styles from './CTASection.module.css';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Start Your Caribbean Journey?</h2>
        <p className={styles.subtitle}>
          Connect with our team to explore available properties, schedule a tour, 
          or learn about investment opportunities at Larimar City.
        </p>
        <Button href="/contact" variant="secondary" size="lg">
          Contact Us Today
        </Button>
      </div>
    </section>
  );
}
