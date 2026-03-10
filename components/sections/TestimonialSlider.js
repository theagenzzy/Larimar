'use client';

import { useState } from 'react';
import styles from './TestimonialSlider.module.css';

const testimonials = [
  {
    id: 1,
    quote: 'Investing in Larimar City was the best decision we ever made. The quality of life here is unmatched, and the smart city infrastructure makes everything seamless.',
    name: 'James & Sarah Mitchell',
    role: 'Homeowners since 2025',
    initials: 'JM',
  },
  {
    id: 2,
    quote: 'As a real estate investor, I have seen many developments, but Larimar City stands apart. The vision, the execution, and the ROI potential are truly exceptional.',
    name: 'Carlos Rodriguez',
    role: 'Real Estate Investor',
    initials: 'CR',
  },
  {
    id: 3,
    quote: 'The blend of Caribbean beauty with modern technology creates a living experience like no other. Waking up to ocean views with every smart comfort at your fingertips is paradise.',
    name: 'Elena & David Foster',
    role: 'Residents, Ocean View Tower',
    initials: 'EF',
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>TESTIMONIALS</span>
          <h2 className={styles.title}>What Our Residents Say</h2>
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
