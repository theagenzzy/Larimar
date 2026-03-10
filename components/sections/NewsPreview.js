'use client';

import styles from './NewsPreview.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { newsArticles } from '@/data/stats';

const newsImages = [
  '/images/slide-2.jpg',
  '/images/gallery-1.jpg',
  '/images/slide-5.jpg',
];

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsPreview() {
  const articles = newsArticles.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>NEWS</span>
            <h2 className={styles.title}>Latest News</h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.15}>
              <article className={styles.card}>
                <div
                  className={styles.imageArea}
                  style={{ backgroundImage: 'url(' + newsImages[index] + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className={styles.cardContent}>
                  <div className={styles.meta}>
                    <time className={styles.date}>{formatDate(article.date)}</time>
                    <span className={styles.categoryBadge}>{article.category}</span>
                  </div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.excerpt}>{article.excerpt}</p>
                  <a href={`/news/${article.slug}`} className={styles.readMore}>
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
