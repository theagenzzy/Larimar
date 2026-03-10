'use client';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const propertyLinks = [
  { label: 'Ocean View Residences', href: '/properties' },
  { label: 'Garden Villas', href: '/properties' },
  { label: 'Marina Townhouses', href: '/properties' },
  { label: 'Sunset Residences', href: '/properties' },
  { label: 'Paradise Towers', href: '/properties' },
  { label: 'Breeze Towers', href: '/properties' },
];

const socials = [
  { label: 'Fb', ariaLabel: 'Facebook' },
  { label: 'Ig', ariaLabel: 'Instagram' },
  { label: 'Li', ariaLabel: 'LinkedIn' },
  { label: 'Yt', ariaLabel: 'YouTube' },
];

export default function Footer() {
  const { t } = useLanguage();

  const exploreLinks = [
    { label: t('nav.theCity'), href: '/the-city' },
    { label: t('nav.cityConcept'), href: '/city-concept' },
    { label: t('nav.whyInvest'), href: '/why-invest' },
    { label: t('nav.phaseI'), href: '/phase-1' },
    { label: t('nav.experience'), href: '/experience' },
    { label: t('nav.news'), href: '/news' },
  ];

  return (
    <>
      <style>{`
        .footer-link {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.5);
          transition: color 0.2s ease;
          text-decoration: none;
          position: relative;
          display: inline-block;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #B79D52;
          transition: width 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .footer-link:hover { color: #D4BC7C; }
        .footer-link:hover::after { width: 100%; }
        .footer-social {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .footer-social:hover {
          border-color: #B79D52;
          color: #B79D52;
          transform: translateY(-3px);
        }
        .footer-bottom-link {
          color: rgba(255,255,255,0.35);
          transition: color 0.2s ease;
          text-decoration: none;
          font-size: 0.75rem;
        }
        .footer-bottom-link:hover { color: #B79D52; }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom-inner { flex-direction: column !important; gap: 12px !important; text-align: center !important; }
        }
      `}</style>

      <footer style={{
        background: 'linear-gradient(180deg, #001a33 0%, #000d1a 100%)',
        color: 'rgba(255,255,255,0.6)',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Gold top line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '2px',
          background: 'linear-gradient(135deg, #B79D52 0%, #D4BC7C 50%, #B79D52 100%)',
        }} />

        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '40px',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          {/* Brand */}
          <div style={{ paddingRight: '24px' }}>
            <div style={{ marginBottom: '20px' }}>
              <img src="/images/logo-white.png" alt="Larimar City" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '24px', color: 'rgba(255,255,255,0.5)' }}>
              {t('footer.brandDescription')}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map((s) => (
                <a key={s.ariaLabel} href="#" className="footer-social" aria-label={s.ariaLabel}>{s.label}</a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#fff',
              marginBottom: '20px',
            }}>{t('footer.explore')}</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {exploreLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#fff',
              marginBottom: '20px',
            }}>{t('footer.properties')}</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {propertyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#fff',
              marginBottom: '20px',
            }}>{t('footer.contactTitle')}</h4>
            {[
              { icon: '📍', text: t('footer.address') },
              { icon: '📧', text: 'info@larimarcity.com' },
              { icon: '📞', text: '+1 (809) 000-0000' },
              { icon: '🕐', text: t('footer.hours') },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', fontSize: '0.875rem' }}>
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          marginTop: '80px',
          padding: '20px 24px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div className="footer-bottom-inner" style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.35)',
          }}>
            <span>&copy; {new Date().getFullYear()} {t('footer.copyright')}</span>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#" className="footer-bottom-link">{t('footer.privacyPolicy')}</a>
              <a href="#" className="footer-bottom-link">{t('footer.legalNotice')}</a>
              <a href="#" className="footer-bottom-link">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
