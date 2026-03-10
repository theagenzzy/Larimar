'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { allNewsArticles } from '@/data/news';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = allNewsArticles.find((a) => a.slug === slug);
  const currentIndex = allNewsArticles.findIndex((a) => a.slug === slug);

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h1>Article Not Found</h1>
        <p>The article you are looking for does not exist.</p>
        <Button href="/news" variant="primary" size="lg">Back to News</Button>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Get related articles (same category, excluding current)
  const related = allNewsArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // Next and previous articles
  const prevArticle = currentIndex > 0 ? allNewsArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allNewsArticles.length - 1 ? allNewsArticles[currentIndex + 1] : null;

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} style={{ backgroundImage: `url(${article.image})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <ScrollReveal>
            <Link href="/news" className={styles.backLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className={styles.heroBadge}>{article.category}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className={styles.heroTitle}>{article.title}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className={styles.heroMeta}>
              <span className={styles.heroDate}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {formatDate(article.date)}
              </span>
              <span className={styles.heroDivider} />
              <span className={styles.heroAuthor}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                {article.author}
              </span>
              <span className={styles.heroDivider} />
              <span className={styles.heroReadTime}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {article.readTime}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className={styles.articleSection}>
        <div className={styles.articleContainer}>
          <ScrollReveal>
            <div className={styles.articleBody}>
              {article.content.map((paragraph, i) => (
                <p key={i} className={styles.articleParagraph}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          {/* Share & Tags */}
          <div className={styles.articleFooter}>
            <div className={styles.articleTags}>
              <span className={styles.tag}>{article.category}</span>
              <span className={styles.tag}>Larimar City</span>
              <span className={styles.tag}>Caribbean</span>
            </div>
            <div className={styles.shareSection}>
              <span className={styles.shareLabel}>Share this article</span>
              <div className={styles.shareButtons}>
                <button className={styles.shareBtn} aria-label="Share on Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </button>
                <button className={styles.shareBtn} aria-label="Share on LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </button>
                <button className={styles.shareBtn} aria-label="Share on Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      {(prevArticle || nextArticle) && (
        <section className={styles.navSection}>
          <div className={styles.articleContainer}>
            <div className={styles.articleNav}>
              {prevArticle ? (
                <Link href={`/news/${prevArticle.slug}`} className={styles.navCard}>
                  <span className={styles.navDirection}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Previous Article
                  </span>
                  <span className={styles.navTitle}>{prevArticle.title}</span>
                </Link>
              ) : <div />}
              {nextArticle ? (
                <Link href={`/news/${nextArticle.slug}`} className={`${styles.navCard} ${styles.navCardNext}`}>
                  <span className={styles.navDirection}>
                    Next Article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                  <span className={styles.navTitle}>{nextArticle.title}</span>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {related.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <ScrollReveal>
              <h2 className={styles.relatedTitle}>Related Articles</h2>
            </ScrollReveal>
            <div className={styles.relatedGrid}>
              {related.map((rel, i) => (
                <ScrollReveal key={rel.id} delay={i * 0.1}>
                  <Link href={`/news/${rel.slug}`} className={styles.relatedCard}>
                    <div className={styles.relatedImage} style={{ backgroundImage: `url(${rel.image})` }}>
                      <span className={styles.relatedBadge}>{rel.category}</span>
                    </div>
                    <div className={styles.relatedBody}>
                      <span className={styles.relatedDate}>{formatDate(rel.date)}</span>
                      <h3 className={styles.relatedName}>{rel.title}</h3>
                      <p className={styles.relatedExcerpt}>{rel.excerpt}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.ctaCard}>
              <h2 className={styles.ctaTitle}>Stay Informed</h2>
              <p className={styles.ctaText}>
                Subscribe to our newsletter for the latest news, project updates, and exclusive investment opportunities from Larimar City.
              </p>
              <div className={styles.ctaButtons}>
                <Button href="/contact" variant="gold" size="lg">Contact Us</Button>
                <Button href="/news" variant="outline" size="lg">All Articles</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
