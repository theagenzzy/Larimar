'use client';
import { useState } from 'react';
import styles from './AccordionFAQ.module.css';

export default function AccordionFAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${openIndex === index ? styles.itemOpen : ''}`}
        >
          <button
            className={styles.trigger}
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className={styles.question}>{item.question}</span>
            <span className={styles.icon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line
                  x1="4" y1="10" x2="16" y2="10"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                />
                <line
                  x1="10" y1="4" x2="10" y2="16"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  className={styles.vertical}
                />
              </svg>
            </span>
          </button>
          <div className={styles.content}>
            <div className={styles.answer}>
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
