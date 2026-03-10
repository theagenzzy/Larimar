'use client';

import { useState } from 'react';
import styles from './TestimonialSlider.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonialInitials = ['JM', 'CR', 'EF'];

export default function TestimonialSlider() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: t('testimonials.quote1'),
      name: t('testimonials.name1'),
      role: t('testimonials.role1'),
      initials: testimonialInitials[0],
    },
    {
      id: 2,
      quote: t('testimonials.quote2'),
      name: t('testimonials.name2'),
      role: t('testimonials.role2'),
      initials: testimonialInitials[1],
    },
    {
      id: 3,
      quote: t('testimonials.quote3'),
      name: t('testimonials.name3'),
      role: t('testimonials.role3'),
      initials: testimonialInitials[2],
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>{t('testimonials.label')}</span>
          <h2 className={styles.title}>{t('testimonials.title')}</h2>
        </div>

        <div className={styles.slider}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.slide} ${index === active ? styles.slideActive : ''}`}
            >
              <div className={styles.quoteIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                  <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                </svg>
              </div>
              <blockquote className={styles.quote}>
                {testimonial.quote}
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.initials}</div>
                <div>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === active ? styles.dotActive : ''}`}
              onClick={() => setActive(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
