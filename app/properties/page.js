'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allProperties } from '@/data/properties';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.css';

const filterKeys = ['all', 'luxuryApartment', 'villa', 'townhouse'];
const filterTypeValues = ['All', 'Luxury Apartment', 'Villa', 'Townhouse'];

export default function PropertiesPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProperties =
    activeFilter === 'All'
      ? allProperties
      : allProperties.filter((p) => p.type === activeFilter);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <ScrollReveal>
            <span className={styles.heroLabel}>{t('properties.heroLabel')}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className={styles.heroTitle}>{t('properties.heroTitle')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className={styles.heroSubtitle}>
              {t('properties.heroSubtitle')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter & Properties */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.filterBar}>
              {filterKeys.map((key, index) => (
                <button
                  key={key}
                  className={`${styles.filterBtn} ${activeFilter === filterTypeValues[index] ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveFilter(filterTypeValues[index])}
                >
                  {t(`properties.${key}`)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {filteredProperties.length > 0 ? (
            <div className={styles.propertiesGrid}>
              {filteredProperties.map((property, index) => (
                <ScrollReveal key={property.id} delay={index * 0.08}>
                  <Link href={`/properties/${property.slug}`} className={styles.propertyCardLink}>
                    <div className={styles.propertyCard}>
                      <div
                        className={styles.propertyImage}
                        style={{ backgroundImage: `url(${property.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                      >
                        <span className={styles.propertyBadge}>{property.type}</span>
                        <div className={styles.propertyImageOverlay}>
                          <span className={styles.propertyImageText}>{property.name}</span>
                        </div>
                      </div>
                      <div className={styles.propertyBody}>
                        <h3 className={styles.propertyName}>{property.name}</h3>
                        <p className={styles.propertyDesc}>{property.description}</p>
                        <div className={styles.propertyMeta}>
                          <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>&#9632;</span>
                            <span>{property.bedrooms} {t('properties.beds')}</span>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>&#9650;</span>
                            <span>{property.bathrooms} {t('properties.baths')}</span>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>&#9674;</span>
                            <span>{property.area}</span>
                          </div>
                        </div>
                        <div className={styles.propertyFooter}>
                          <span className={styles.propertyPrice}>{property.price}</span>
                          <span className={styles.viewDetails}>{t('properties.viewDetails')}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>&#128269;</div>
              <h3 className={styles.emptyTitle}>{t('properties.noProperties')}</h3>
              <p className={styles.emptyText}>
                {t('properties.noPropertiesText')}
              </p>
              <Button onClick={() => setActiveFilter('All')} variant="outlineDark" size="md">
                {t('properties.showAll')}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <ScrollReveal>
            <h2 className={styles.ctaTitle}>{t('properties.ctaTitle')}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className={styles.ctaText}>
              {t('properties.ctaText')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className={styles.ctaButtons}>
              <Button href="/contact" variant="gold" size="lg">
                {t('properties.contactOurTeam')}
              </Button>
              <Button href="/why-invest" variant="outline" size="lg">
                {t('properties.whyInvest')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
