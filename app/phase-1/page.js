'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

const amenities = [
  {
    title: 'Artificial Beach',
    desc: 'A stunning 3km crystal-clear lagoon beach, designed for year-round tropical enjoyment.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20c2-2 4-3 6-3s4 1 6 3 4 3 6 3" />
        <path d="M2 16c2-2 4-3 6-3s4 1 6 3 4 3 6 3" />
        <circle cx="12" cy="6" r="3" />
        <path d="M12 9v3" />
      </svg>
    ),
  },
  {
    title: 'Swimming Pools',
    desc: 'Multiple resort-style pools with infinity edges, lap lanes, and dedicated children areas.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" />
        <path d="M2 16c1.5-1 3-2 5-2s3.5 1 5 2 3 2 5 2 3.5-1 5-2" />
        <path d="M8 8V4a2 2 0 0 1 4 0v4" />
        <path d="M16 8V6a2 2 0 0 0-4 0" />
      </svg>
    ),
  },
  {
    title: '18-Hole Golf Course',
    desc: 'Championship-level course set across 60 hectares of sculpted Caribbean landscape.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 18V2l7 4-7 4" />
        <path d="M8 22c-2.2 0-4-1-4-2s1.8-2 4-2 4 1 4 2-1.8 2-4 2z" />
      </svg>
    ),
  },
  {
    title: 'Mediterranean Promenade',
    desc: 'A scenic waterfront boulevard lined with shops, cafes, and lush gardens.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l4-4 4 4v14" />
        <path d="M15 21V10l4-3v14" />
        <path d="M9 9v.01M9 13v.01M9 17v.01" />
      </svg>
    ),
  },
  {
    title: 'Health Center',
    desc: 'A state-of-the-art medical and wellness facility with specialists and modern equipment.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4c0 3 4 6 4 6s4-3 4-6a4 4 0 0 0-4-4z" />
        <path d="M12 8v4M10 10h4" />
        <path d="M4 20h16" />
        <path d="M8 20v-4a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: 'Sports Facilities',
    desc: 'Tennis courts, padel courts, basketball, jogging tracks, and multisport areas.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M4.93 4.93c4 5.02 4 9.12 0 14.14" />
        <path d="M19.07 4.93c-4 5.02-4 9.12 0 14.14" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Shopping & Dining',
    desc: 'A vibrant commercial district featuring international cuisine and boutique retail.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 8v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8l-3-6z" />
        <path d="M3 8h18" />
        <path d="M16 12a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: 'Green Parks',
    desc: 'Expansive landscaped parks, botanical gardens, and nature trails throughout the community.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" />
        <path d="M5 12c0-4 3-8 7-8s7 4 7 8" />
        <path d="M7 16c0-3 2.5-6 5-6s5 3 5 6" />
        <path d="M3 22h18" />
      </svg>
    ),
  },
];

const progressData = [
  { label: 'Construction', value: 75 },
  { label: 'Infrastructure', value: 90 },
  { label: 'Landscaping', value: 60 },
  { label: 'Smart Systems', value: 45 },
];

const galleryImages = [
  '/images/slide-2.jpg',
  '/images/slide-3.jpg',
  '/images/slide-4.jpg',
  '/images/gallery-4.jpg',
  '/images/horizon-view.webp',
  '/images/gallery-1.jpg',
];

const galleryItems = [
  { height: 320, image: galleryImages[0] },
  { height: 420, image: galleryImages[1] },
  { height: 280, image: galleryImages[2] },
  { height: 380, image: galleryImages[3] },
  { height: 300, image: galleryImages[4] },
  { height: 360, image: galleryImages[5] },
];

function ProgressBar({ label, value }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <div className={styles.progressItem} ref={ref}>
      <div className={styles.progressHeader}>
        <span className={styles.progressLabel}>{label}</span>
        <span className={styles.progressValue}>{value}%</span>
      </div>
      <div className={styles.progressBarTrack}>
        <div
          className={`${styles.progressBarFill} ${animated ? styles.progressBarFillAnimated : ''}`}
          style={{ width: animated ? `${value}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function PhaseOnePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ScrollReveal>
            <span className={styles.heroLabel}>Larimar City & Resort</span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className={styles.heroTitle}>Phase I</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className={styles.heroSubtitle}>Foundation of Paradise</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <ScrollReveal direction="left">
            <div className={styles.overviewImage} style={{ backgroundImage: 'url(/images/gallery-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <p className={styles.overviewLabel}>About Phase I</p>
              <h2 className={styles.overviewTitle}>Laying the Foundation for Caribbean&apos;s First Smart City</h2>
              <p className={styles.overviewText}>
                Phase I represents the essential foundation of Larimar City & Resort. This stage focuses on building critical infrastructure, including road networks, utilities, and smart city systems that will power the entire development.
              </p>
              <p className={styles.overviewText}>
                Highlights include the construction of our championship 18-hole golf course, the first residential towers, the Mediterranean-inspired waterfront promenade, and the initial commercial and recreational facilities that will define everyday life in Larimar.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Amenities */}
      <section className={styles.amenities}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>What&apos;s Included</p>
            <h2 className={styles.sectionTitle}>Phase I Amenities</h2>
            <p className={styles.sectionSubtitle}>
              From world-class recreation to everyday conveniences, Phase I delivers a complete lifestyle from day one.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.amenitiesGrid}>
          {amenities.map((amenity, i) => (
            <ScrollReveal key={amenity.title} delay={i * 0.08}>
              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>{amenity.icon}</div>
                <h3 className={styles.amenityTitle}>{amenity.title}</h3>
                <p className={styles.amenityDesc}>{amenity.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Development Roadmap</p>
            <h2 className={styles.sectionTitle}>Project Timeline</h2>
            <p className={styles.sectionSubtitle}>
              A carefully planned three-phase approach to building the Caribbean&apos;s most ambitious development.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className={styles.timelineTrack}>
            <div className={styles.timelineLine}>
              <div className={styles.timelineLineFill} />
            </div>

            <div className={`${styles.timelineCard} ${styles.timelineCardActive}`}>
              <p className={styles.timelineYears}>2023 - 2025</p>
              <div className={styles.timelineDot} />
              <h3 className={styles.timelineName}>Phase I</h3>
              <p className={styles.timelineDesc}>Foundation</p>
              <span className={`${styles.timelineStatus} ${styles.statusInProgress}`}>In Progress</span>
            </div>

            <div className={`${styles.timelineCard} ${styles.timelineCardSelling}`}>
              <p className={styles.timelineYears}>2025 - 2027</p>
              <div className={styles.timelineDot} />
              <h3 className={styles.timelineName}>Phase II</h3>
              <p className={styles.timelineDesc}>Expansion</p>
              <span className={`${styles.timelineStatus} ${styles.statusSelling}`}>Selling</span>
            </div>

            <div className={styles.timelineCard}>
              <p className={styles.timelineYears}>2027 - 2029</p>
              <div className={styles.timelineDot} />
              <h3 className={styles.timelineName}>Phase III</h3>
              <p className={styles.timelineDesc}>Completion</p>
              <span className={`${styles.timelineStatus} ${styles.statusUpcoming}`}>Upcoming</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Progress */}
      <section className={styles.progress}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Phase I Status</p>
            <h2 className={styles.sectionTitle}>Construction Progress</h2>
            <p className={styles.sectionSubtitle}>
              Real-time updates on the development milestones of Phase I.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.progressGrid}>
          {progressData.map((item) => (
            <ScrollReveal key={item.label} delay={0.1}>
              <ProgressBar label={item.label} value={item.value} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Visual Progress</p>
            <h2 className={styles.sectionTitle}>Phase I Gallery</h2>
            <p className={styles.sectionSubtitle}>
              See the transformation of Larimar City & Resort as Phase I comes to life.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className={styles.galleryItem}>
                <div
                  className={styles.galleryPlaceholder}
                  style={{
                    height: item.height,
                    backgroundImage: 'url(' + item.image + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 'var(--radius-lg)',
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <ScrollReveal>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Find Your Home in Phase I</h2>
            <p className={styles.ctaText}>
              Explore available properties in Larimar City & Resort&apos;s first phase. From luxury apartments to exclusive villas, find the perfect space for your Caribbean lifestyle.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/properties" variant="primary" size="lg">
                View Properties
              </Button>
              <Button href="/contact" variant="outlineDark" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
