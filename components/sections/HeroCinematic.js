'use client';

import { useEffect, useState } from 'react';
import styles from './HeroCinematic.module.css';
import Button from '@/components/ui/Button';

export default function HeroCinematic() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.backgroundInner} />
      </div>
      <div className={styles.overlay} />

      <div className={`${styles.content} ${isLoaded ? styles.loaded : ''}`}>
        <span className={styles.label}>FIRST SMART CITY IN THE CARIBBEAN</span>
        <h1 className={styles.title}>Discover Paradise in Punta Cana</h1>
        <p className={styles.subtitle}>
          Experience luxury living in the most ambitious urban development in the Caribbean. 
          A fusion of smart technology, sustainable design, and tropical elegance.
        </p>
        <div className={styles.ctas}>
          <Button href="/properties" variant="gold" size="lg">
            Explore Properties
          </Button>
          <Button href="/tour" variant="outline" size="lg">
            Watch Tour
          </Button>
        </div>
      </div>

      <button className={styles.scrollIndicator} onClick={handleScrollDown} aria-label="Scroll down">
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollArrow}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M10 16L4 10M10 16L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </section>
  );
}
