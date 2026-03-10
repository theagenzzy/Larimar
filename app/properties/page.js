'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allProperties } from '@/data/properties';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

const filterTypes = ['All', 'Luxury Apartment', 'Villa', 'Townhouse'];

export default function PropertiesPage() {
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
            <span className={styles.heroLabel}>Real Estate Portfolio</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className={styles.heroTitle}>Our Properties</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className={styles.heroSubtitle}>
              Explore a curated collection of luxury residences in the Caribbean&apos;s first smart
              city. From modern apartments to spacious villas, find the perfect property for your
              lifestyle or investment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter & Properties */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.filterBar}>
              {filterTypes.map((type) => (
                <button
                  key={type}
                  className={`${styles.filterBtn} ${activeFilter === type ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveFilter(type)}
                >
                  {type}
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
                            <span>{property.bedrooms} Beds</span>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>&#9650;</span>
                            <span>{property.bathrooms} Baths</span>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>&#9674;</span>
                            <span>{property.area}</span>
                          </div>
                        </div>
                        <div className={styles.propertyFooter}>
                          <span className={styles.propertyPrice}>{property.price}</span>
                          <span className={styles.viewDetails}>View Details</span>
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
              <h3 className={styles.emptyTitle}>No properties found</h3>
              <p className={styles.emptyText}>
                There are no properties matching the selected filter. Try selecting a different
                category.
              </p>
              <Button onClick={() => setActiveFilter('All')} variant="outlineDark" size="md">
                Show All Properties
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
            <h2 className={styles.ctaTitle}>Find Your Dream Property</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className={styles.ctaText}>
              Can&apos;t find exactly what you&apos;re looking for? Our team of experts is ready to
              help you find the perfect property that matches your needs and investment goals.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className={styles.ctaButtons}>
              <Button href="/contact" variant="gold" size="lg">
                Contact Our Team
              </Button>
              <Button href="/why-invest" variant="outline" size="lg">
                Why Invest
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
