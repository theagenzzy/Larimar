'use client';

import { useState } from 'react';
import { faqData } from '@/data/stats';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import AccordionFAQ from '@/components/ui/AccordionFAQ';
import styles from './page.module.css';

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Address',
    value: 'Punta Cana, Dominican Republic',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
    label: 'Email',
    value: 'info@larimarcity.com',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 809 000 0000',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: 'Hours',
    value: 'Mon - Fri, 9:00 AM - 6:00 PM',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Any',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ScrollReveal direction="up">
            <h1 className={styles.heroTitle}>Get In Touch</h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className={styles.heroSubtitle}>
              Have questions about Larimar City & Resort? Our team is here to help you find your perfect Caribbean home.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Left: Form */}
            <ScrollReveal direction="left">
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSubtitle}>Fill out the form below and we will get back to you within 24 hours.</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={styles.input}
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={styles.input}
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="interest">Property Interest</label>
                    <select
                      id="interest"
                      name="interest"
                      className={styles.select}
                      value={form.interest}
                      onChange={handleChange}
                    >
                      <option value="Any">Any Property Type</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="Townhouse">Townhouse</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className={styles.textarea}
                      placeholder="Tell us about what you're looking for..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button variant="primary" size="lg" onClick={handleSubmit}>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 2L7 9M14 2l-4 12-3-5-5-3 12-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Right: Info */}
            <ScrollReveal direction="right">
              <div className={styles.infoColumn}>
                <div className={styles.infoCards}>
                  {contactInfo.map((item, i) => (
                    <div key={i} className={styles.infoCard}>
                      <div className={styles.infoIcon}>{item.icon}</div>
                      <div>
                        <span className={styles.infoLabel}>{item.label}</span>
                        <span className={styles.infoValue}>{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className={styles.mapPlaceholder}>
                  <div className={styles.mapInner}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={styles.mapText}>Punta Cana, Dominican Republic</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className={styles.socialSection}>
                  <h3 className={styles.socialTitle}>Follow Us</h3>
                  <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialLink} aria-label="Facebook">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                      </svg>
                    </a>
                    <a href="#" className={styles.socialLink} aria-label="Instagram">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5"/>
                        <circle cx="12" cy="12" r="5"/>
                        <circle cx="17.5" cy="6.5" r="1.5"/>
                      </svg>
                    </a>
                    <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                    </a>
                    <a href="#" className={styles.socialLink} aria-label="YouTube">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.35 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <ScrollReveal direction="up">
            <div className={styles.faqHeader}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionSubtitle}>
                Find answers to common questions about Larimar City & Resort.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className={styles.faqWrapper}>
              <AccordionFAQ items={faqData} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal direction="up">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Schedule a Visit</h2>
              <p className={styles.ctaText}>
                Experience Larimar City & Resort firsthand. Book a private tour and discover your future Caribbean home.
              </p>
              <Button href="/contact" variant="gold" size="lg">
                Book Your Visit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
