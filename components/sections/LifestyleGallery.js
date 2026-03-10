'use client';

import styles from './LifestyleGallery.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const lifestyleItemsData = [
  { id: 1, categoryKey: 'lifestyle.golf', image: '/images/golf-country-club.webp', span: 'tall' },
  { id: 2, categoryKey: 'lifestyle.beach', image: '/images/gallery-2.jpg', span: 'normal' },
  { id: 3, categoryKey: 'lifestyle.wellness', image: '/images/slide-4.jpg', span: 'normal' },
  { id: 4, categoryKey: 'lifestyle.dining', image: '/images/gallery-3.jpg', span: 'normal' },
  { id: 5, categoryKey: 'lifestyle.pool', image: '/images/farallon.jpg', span: 'normal' },
  { id: 6, categoryKey: 'lifestyle.nature', image: '/images/slide-3.jpg', span: 'tall' },
];

export default function LifestyleGallery() {
  const { t } = useLanguage();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>{t('lifestyle.label')}</span>
            <h2 className={styles.title}>{t('lifestyle.title')}</h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {lifestyleItemsData.map((item, index) => (
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
                  <span className={styles.categoryLabel}>{t(item.categoryKey)}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
