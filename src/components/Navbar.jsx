import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/siteData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#top" className="navbar-logo" onClick={(e) => handleNav(e, '#top')}>
          <span className="logo-icon">✦</span>
          <div>
            <div className="logo-name">Dr. Vidhi Patel</div>
            <div className="logo-sub">Physiotherapy</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? 'nav-link-active' : ''}`}
              onClick={(e) => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="tel:+919104132905" className="navbar-cta">
          <span className="cta-icon">📞</span>
          <span>Call Now</span>
        </a>

        {/* Hamburger — 3 lines with cross animation */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Slide-down mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-scroll">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={(e) => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+919104132905" className="mobile-cta">
            📞 Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
