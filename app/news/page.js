'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allNewsArticles } from '@/data/news';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

const categories = ['All', 'Development', 'Technology', 'Sustainability', 'Lifestyle'];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allNewsArticles
    : allNewsArticles.filter((a) => a.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ScrollReveal direction="up">
            <h1 className={styles.heroTitle}>News & Insights</h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className={styles.heroSubtitle}>
              Stay up to date with the latest developments, innovations, and lifestyle stories from Larimar City & Resort.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <ScrollReveal direction="up">
              <Link href={`/news/${featured.slug}`} className={styles.featuredLink}>
                <div className={styles.featuredCard}>
                  <div className={styles.featuredImage} style={{ backgroundImage: `url(${featured.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <span className={styles.categoryBadge}>{featured.category}</span>
                  </div>
                  <div className={styles.featuredBody}>
                    <span className={styles.articleDate}>{formatDate(featured.date)}</span>
                    <h2 className={styles.featuredTitle}>{featured.title}</h2>
                    <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                    <span className={styles.readMoreBtn}>
                      Read Full Article
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* News Grid */}
      {rest.length > 0 && (
        <section className={styles.gridSection}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {rest.map((article, i) => (
                <ScrollReveal key={article.id} direction="up" delay={i * 0.08}>
                  <Link href={`/news/${article.slug}`} className={styles.cardLink}>
                    <article className={styles.card}>
                      <div className={styles.cardImage} style={{ backgroundImage: `url(${article.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <span className={styles.categoryBadge}>{article.category}</span>
                      </div>
                      <div className={styles.cardBody}>
                        <span className={styles.articleDate}>{formatDate(article.date)}</span>
                        <h3 className={styles.cardTitle}>{article.title}</h3>
                        <p className={styles.cardExcerpt}>{article.excerpt}</p>
                        <span className={styles.readMore}>
                          Read More
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className={styles.newsletter}>
        <div className={styles.container}>
          <ScrollReveal direction="up">
            <div className={styles.newsletterInner}>
              <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
              <p className={styles.newsletterText}>
                Get the latest news, project updates, and exclusive investment opportunities delivered straight to your inbox.
              </p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.newsletterInput}
                />
                <Button variant="gold" size="md" onClick={(e) => e.preventDefault()}>
                  Subscribe
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
