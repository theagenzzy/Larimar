'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navigation } from '@/data/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();

  const navLabelKeys = {
    'The City': 'nav.theCity',
    'Discover Larimar': 'nav.discoverLarimar',
    'City Concept': 'nav.cityConcept',
    'Phase I': 'nav.phaseI',
    'Properties': 'nav.properties',
    'Why Invest': 'nav.whyInvest',
    'Experience': 'nav.experience',
    'News': 'nav.news',
    'Contact': 'nav.contact',
  };
  const navT = (label) => navLabelKeys[label] ? t(navLabelKeys[label]) : label;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    background: isScrolled
      ? 'linear-gradient(135deg, rgba(78, 173, 218, 0.97) 0%, rgba(110, 193, 228, 0.97) 100%)'
      : 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%)',
    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
    boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.12)' : 'none',
  };

  const innerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 10,
    textDecoration: 'none',
  };

  const logoIconStyle = {
    width: '42px',
    height: '42px',
    background: 'linear-gradient(135deg, #B79D52 0%, #D4BC7C 50%, #B79D52 100%)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    color: '#fff',
    fontSize: '1.2rem',
    fontFamily: 'var(--font-heading)',
  };

  const menuStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    listStyle: 'none',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '8px 18px',
    fontSize: '0.82rem',
    fontWeight: isScrolled ? 600 : 500,
    color: isScrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.88)',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.2s ease, font-weight 0.2s ease',
    fontFamily: 'var(--font-body)',
    textShadow: isScrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.3)',
  };

  const ctaStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 24px',
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: isScrolled ? '#004274' : '#fff',
    background: isScrolled
      ? '#fff'
      : 'linear-gradient(135deg, #B79D52 0%, #D4BC7C 50%, #B79D52 100%)',
    borderRadius: '50px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    gap: '6px',
    cursor: 'pointer',
    zIndex: 10,
    background: 'none',
    border: 'none',
    padding: '4px',
  };

  const barBase = {
    display: 'block',
    width: '28px',
    height: '2px',
    background: '#fff',
    borderRadius: '2px',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    transformOrigin: 'center',
  };

  const mobileMenuStyle = {
    position: 'fixed',
    top: 0,
    right: isMobileOpen ? '0' : '-100%',
    width: '100%',
    height: '100dvh',
    background: 'linear-gradient(180deg, #6EC1E4 0%, #4AADDA 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    transition: 'right 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    zIndex: 5,
  };

  const mobileLinkStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(1.4rem, 4vw, 2rem)',
    fontWeight: 300,
    color: 'rgba(255,255,255,0.7)',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    textDecoration: 'none',
    padding: '8px 0',
    transition: 'all 0.2s ease',
  };

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop-menu, .nav-desktop-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        .nav-link:hover { color: #fff !important; text-shadow: 0 0 8px rgba(255,255,255,0.3) !important; }
        .nav-mobile-link:hover { color: #004274 !important; letter-spacing: 6px !important; }
        .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
        .nav-dropdown {
          position: absolute; top: 100%; left: 0; min-width: 220px;
          background: rgba(78,173,218,0.97); backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px); border-radius: 12px; padding: 8px;
          opacity: 0; visibility: hidden; transform: translateY(10px);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.2);
          list-style: none;
        }
        .nav-item:hover .nav-dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
        .nav-dropdown-link {
          display: block; padding: 10px 14px; color: rgba(255,255,255,0.9);
          font-size: 0.85rem; font-weight: 500; border-radius: 8px; transition: all 0.2s ease; text-decoration: none;
        }
        .nav-dropdown-link:hover { color: #fff; background: rgba(255,255,255,0.15); }
        .nav-item:hover .nav-arrow { transform: rotate(180deg); }
      `}</style>

      <nav style={navStyle}>
        <div style={innerStyle}>
          {/* Logo */}
          <Link href="/" style={logoStyle} onClick={() => setIsMobileOpen(false)}>
            <img src="/images/logo-white.png" alt="Larimar City" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop Menu */}
          <ul className="nav-desktop-menu" style={menuStyle}>
            {navigation.map((item) => (
              <li key={item.href} className="nav-item" style={{ position: 'relative' }}>
                <Link href={item.href} className="nav-link" style={linkStyle}>
                  {navT(item.label)}
                  {item.children && (
                    <span className="nav-arrow" style={{ fontSize: '0.55rem', transition: 'transform 0.2s ease' }}>&#9660;</span>
                  )}
                </Link>
                {item.children && (
                  <ul className="nav-dropdown">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="nav-dropdown-link">{navT(child.label)}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link href="/contact" className="nav-desktop-cta nav-cta" style={ctaStyle}>
            {t('nav.investNow')}
          </Link>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            style={hamburgerStyle}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <span style={{
              ...barBase,
              transform: isMobileOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
            }} />
            <span style={{
              ...barBase,
              opacity: isMobileOpen ? 0 : 1,
              transform: isMobileOpen ? 'scaleX(0)' : 'none',
            }} />
            <span style={{
              ...barBase,
              transform: isMobileOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
            }} />
          </button>

          {/* Mobile Menu */}
          <div style={mobileMenuStyle}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-mobile-link"
                style={mobileLinkStyle}
                onClick={() => setIsMobileOpen(false)}
              >
                {navT(item.label)}
              </Link>
            ))}
            <Link
              href="/contact"
              className="nav-cta"
              style={{ ...ctaStyle, marginTop: '16px' }}
              onClick={() => setIsMobileOpen(false)}
            >
              {t('nav.investNow')}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
