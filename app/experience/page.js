import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

const experiences = [
  {
    label: 'Recreation',
    title: 'Golf & Country Club',
    desc: 'An 18-hole championship golf course spanning 60 hectares of meticulously sculpted Caribbean terrain. Designed for players of all levels, from beginners to seasoned professionals, the Larimar Golf & Country Club offers a world-class experience surrounded by tropical beauty.',
    image: '/images/golf-country-club.webp',
    features: [
      '18-hole championship course',
      '60 hectares of sculpted landscape',
      'Clubhouse with restaurant and pro shop',
      'Golf academy and professional coaching',
      'Practice ranges and putting greens',
    ],
  },
  {
    label: 'Waterfront',
    title: 'Beach & Water',
    desc: 'A 3-kilometer artificial crystal-clear lagoon beach, complemented by a Mediterranean-inspired promenade lined with palms, boutiques, and open-air dining. Enjoy an unparalleled waterfront lifestyle with water sports, sailing, and beachside relaxation.',
    image: '/images/gallery-2.jpg',
    features: [
      '3km crystal-clear lagoon beach',
      'Mediterranean waterfront promenade',
      'Water sports center with equipment rental',
      'Beachside dining and cocktail bars',
      'Sunset sailing and catamaran tours',
    ],
  },
  {
    label: 'Wellbeing',
    title: 'Wellness & Spa',
    desc: 'State-of-the-art fitness facilities, a full-service luxury spa, meditation gardens, and wellness programs designed using principles of neuroarchitecture. Every space has been engineered to promote physical health, mental clarity, and deep relaxation.',
    image: '/images/slide-4.jpg',
    features: [
      'Full-service luxury spa with treatment rooms',
      'Modern gymnasium with personal trainers',
      'Yoga and meditation pavilions',
      'Neuroarchitecture-designed wellness spaces',
      'Hydrotherapy circuits and thermal baths',
    ],
  },
  {
    label: 'Lifestyle',
    title: 'Dining & Entertainment',
    desc: 'A vibrant cultural and culinary scene featuring international restaurants, artisan bars, a contemporary shopping mall, and a calendar of cultural events, live music, and community celebrations that bring the Larimar community together.',
    image: '/images/gallery-3.jpg',
    features: [
      'International fine-dining restaurants',
      'Artisan cocktail bars and wine lounges',
      'Contemporary shopping mall',
      'Open-air amphitheater for events',
      'Art galleries and cultural programming',
    ],
  },
];

const galleryItems = [
  { height: 320, image: '/images/farallon.jpg' },
  { height: 400, image: '/images/slide-2.jpg' },
  { height: 280, image: '/images/gallery-2.jpg' },
  { height: 360, image: '/images/slide-3.jpg' },
  { height: 300, image: '/images/gallery-3.jpg' },
  { height: 380, image: '/images/gallery-4.jpg' },
  { height: 340, image: '/images/horizon-view.webp' },
  { height: 260, image: '/images/slide-4.jpg' },
  { height: 420, image: '/images/slide-5.jpg' },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ScrollReveal>
            <span className={styles.heroLabel}>Discover a New Way of Living</span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className={styles.heroTitle}>The Larimar<br />Experience</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className={styles.heroSubtitle}>
              An immersive lifestyle where luxury, nature, and innovation converge in the heart of the Caribbean.
            </p>
          </ScrollReveal>
        </div>
        <div className={styles.heroScroll}>
          <span>Explore</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* Experience Sections */}
      {experiences.map((exp, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <section
            key={exp.title}
            className={`${styles.experienceSection} ${styles[`experienceBg${index}`]}`}
          >
            <div className={`${styles.experienceInner} ${isReversed ? styles.experienceReversed : ''}`}>
              <ScrollReveal direction={isReversed ? 'right' : 'left'}>
                <div
                  className={styles.experienceImage}
                  style={{ backgroundImage: 'url(' + exp.image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
              </ScrollReveal>

              <ScrollReveal direction={isReversed ? 'left' : 'right'} delay={0.15}>
                <div>
                  <p className={styles.experienceLabel}>{exp.label}</p>
                  <h2 className={styles.experienceTitle}>{exp.title}</h2>
                  <p className={styles.experienceDesc}>{exp.desc}</p>
                  <ul className={styles.featureList}>
                    {exp.features.map((feature) => (
                      <li key={feature} className={styles.featureItem}>
                        <span className={styles.featureIcon}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* Virtual Tour CTA */}
      <section className={styles.virtualTour}>
        <div className={styles.virtualTourInner}>
          <ScrollReveal>
            <div className={styles.virtualTourIcon}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className={styles.virtualTourTitle}>Take a Virtual Tour</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className={styles.virtualTourText}>
              Explore Larimar City & Resort from anywhere in the world. Walk through our amenities, experience the views, and envision your life in the Caribbean&apos;s first smart city.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <Button href="/contact" variant="gold" size="lg">
              Start Virtual Tour
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Lifestyle Gallery</p>
            <h2 className={styles.sectionTitle}>Life at Larimar</h2>
            <p className={styles.sectionSubtitle}>
              A glimpse into the extraordinary lifestyle that awaits residents and visitors of Larimar City & Resort.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
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
            <h2 className={styles.ctaTitle}>Ready to Experience Larimar?</h2>
            <p className={styles.ctaText}>
              Connect with our team to learn more about life in the Caribbean&apos;s most innovative city. Schedule a visit, request information, or begin your journey today.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
              <Button href="/properties" variant="outlineDark" size="lg">
                Explore Properties
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
