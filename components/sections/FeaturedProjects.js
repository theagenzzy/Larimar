'use client';

import Link from 'next/link';
import styles from './FeaturedProjects.module.css';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { properties } from '@/data/properties';

const propertyImages = [
  '/images/horizon-view.webp',
  '/images/slide-4.jpg',
  '/images/slide-2.jpg',
];

export default function FeaturedProjects() {
  const featured = properties.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>PROPERTIES</span>
            <h2 className={styles.title}>Find Your Dream Home</h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {featured.map((property, index) => (
            <ScrollReveal key={property.id} delay={index * 0.15}>
              <Link href={`/properties/${property.slug}`} className={styles.cardLink}>
                <Card className={styles.card}>
                  <div
                    className={styles.imageArea}
                    style={{ backgroundImage: `url(${propertyImages[index]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    <span className={styles.badge}>{property.type}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.propertyName}>{property.name}</h3>
                    <p className={styles.propertyDesc}>{property.description}</p>
                    <div className={styles.propertyMeta}>
                      <span>{property.bedrooms} Bed</span>
                      <span>{property.bathrooms} Bath</span>
                      <span>{property.area}</span>
                    </div>
                    <div className={styles.cardFooter}>
                      <span className={styles.price}>{property.price}</span>
                      <span className={styles.viewDetails}>View Details</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className={styles.viewAll}>
            <Button href="/properties" variant="gold" size="md">
              View All Properties
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
