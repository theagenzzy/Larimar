'use client';

import { useParams } from 'next/navigation';
import { allProperties } from '@/data/properties';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './page.module.css';
import { useState } from 'react';

export default function PropertyDetailPage() {
  const { slug } = useParams();
  const property = allProperties.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className={styles.notFound}>
        <h1>Property Not Found</h1>
        <p>The property you are looking for does not exist.</p>
        <Button href="/properties" variant="primary" size="lg">Back to Properties</Button>
      </div>
    );
  }

  return (
    <main className={styles.page}>
      {/* ── Hero: Full-width image with overlay ── */}
      <section className={styles.hero} style={{ backgroundImage: `url(${property.gallery[0]})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <ScrollReveal>
            <span className={styles.heroBadge}>{property.type}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className={styles.heroTitle}>{property.name}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className={styles.heroMeta}>
              <span className={styles.heroLocation}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {property.location}
              </span>
              <span className={styles.heroDivider} />
              <span className={styles.heroPrice}>{property.price}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className={styles.heroScroll}>
              <span>Explore</span>
              <div className={styles.heroScrollLine} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className={styles.statsStrip}>
        <div className={styles.statsInner}>
          {[
            { value: property.bedrooms, label: 'Bedrooms' },
            { value: property.bathrooms, label: 'Bathrooms' },
            { value: property.area, label: 'Living Area' },
            ...property.highlights,
          ].map((item, i, arr) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>{item.value}</span>
                <span className={styles.statLabel}>{item.label}</span>
              </div>
              {i < arr.length - 1 && <div className={styles.statDivider} />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Vision / Story ── */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <ScrollReveal direction="left">
              <div className={styles.storyContent}>
                <span className={styles.label}>The Vision</span>
                <h2 className={styles.storyTitle}>{property.name}</h2>
                <p className={styles.storyText}>{property.longDescription}</p>
                <div className={styles.storyActions}>
                  <Button href="/contact" variant="gold" size="lg">Request Information</Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className={styles.storyImageGrid}>
                <div className={styles.storyImageMain} style={{ backgroundImage: `url(${property.gallery[1]})` }} />
                <div className={styles.storyImageSmall} style={{ backgroundImage: `url(${property.gallery[2]})` }} />
                <div className={styles.storyImageSmall} style={{ backgroundImage: `url(${property.gallery[3]})` }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Immersive Gallery ── */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryMain} style={{ backgroundImage: `url(${property.gallery[activeImage]})` }}>
            <div className={styles.galleryCounter}>{activeImage + 1} / {property.gallery.length}</div>
          </div>
          <div className={styles.galleryNav}>
            {property.gallery.map((img, i) => (
              <button
                key={i}
                className={`${styles.galleryThumb} ${i === activeImage ? styles.galleryThumbActive : ''}`}
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1}`}
              >
                <div className={styles.galleryThumbInner} style={{ backgroundImage: `url(${img})` }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features & Amenities ── */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.featureHeader}>
              <span className={styles.label}>Lifestyle</span>
              <h2 className={styles.featureTitle}>Features &amp; Amenities</h2>
            </div>
          </ScrollReveal>
          <div className={styles.featuresGrid}>
            {property.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className={styles.featureText}>{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investment Highlights ── */}
      <section className={styles.investSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.investHeader}>
              <span className={styles.labelLight}>Smart Investment</span>
              <h2 className={styles.investTitle}>Why This Property</h2>
              <p className={styles.investSubtitle}>
                A premium investment opportunity in the Caribbean&apos;s most ambitious smart city development.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.investGrid}>
            {property.highlights.map((h, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.investCard}>
                  <span className={styles.investValue}>{h.value}</span>
                  <span className={styles.investLabel}>{h.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.ctaCard}>
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Interested in {property.name}?</h2>
                <p className={styles.ctaText}>
                  Schedule a private consultation or virtual tour. Our investment advisors are ready to guide you through every step.
                </p>
                <div className={styles.ctaButtons}>
                  <Button href="/contact" variant="gold" size="lg">Schedule a Visit</Button>
                  <Button href="/properties" variant="outlineDark" size="lg">All Properties</Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
