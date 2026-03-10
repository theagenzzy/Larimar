'use client';

import styles from './LifestyleGallery.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

const lifestyleItems = [
  { id: 1, category: 'Golf', image: '/images/golf-country-club.webp', span: 'tall' },
  { id: 2, category: 'Beach', image: '/images/gallery-2.jpg', span: 'normal' },
  { id: 3, category: 'Wellness', image: '/images/slide-4.jpg', span: 'normal' },
  { id: 4, category: 'Dining', image: '/images/gallery-3.jpg', span: 'normal' },
  { id: 5, category: 'Pool', image: '/images/farallon.jpg', span: 'normal' },
  { id: 6, category: 'Nature', image: '/images/slide-3.jpg', span: 'tall' },
];

export default function LifestyleGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>LIFESTYLE</span>
            <h2 className={styles.title}>Live The Caribbean Dream</h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {lifestyleItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={index * 0.1}
              className={`${styles.gridItem} ${item.span === 'tall' ? styles.gridItemTall : ''}`}
            >
              <div
                className={styles.imageCard}
                style={{ backgroundImage: 'url(' + item.image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className={styles.hoverOverlay}>
                  <span className={styles.categoryLabel}>{item.category}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
