import React, { useEffect, useState } from 'react';
import { doctorInfo, stats } from '../data/siteData';
import { useCountUp, useInView } from '../utils/useInView';
import './Hero.css';

function StatCard({ stat, start }) {
  const count = useCountUp(stat.value, 1800, start);
  return (
    <div className="stat-card">
      <div className="stat-number">
        {count}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function Hero() {
  const [statsRef, statsInView] = useInView(0.4);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToCallback = (e) => {
    e.preventDefault();
    document.querySelector('#callback')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="hero">
      {/* Animated background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className={`hero-badge ${loaded ? 'fade-up-1' : ''}`}>
            <span className="badge-dot" />
            <span>Available for Home Visits · Gandhinagar</span>
          </div>

          {/* Main heading */}
          <h1 className={`hero-title ${loaded ? 'fade-up-2' : ''}`}>
            Expert Physiotherapy<br />
            <span className="title-accent">At Your Doorstep</span>
          </h1>

          {/* Gujarati tagline */}
          <p className={`hero-tagline gujarati ${loaded ? 'fade-up-3' : ''}`}>
            {doctorInfo.tagline}
          </p>

          <p className={`hero-sub ${loaded ? 'fade-up-4' : ''}`}>
            Trusted by <strong>500+ patients</strong> across Gandhinagar. Specialised in orthopaedic care, 
            post-surgery rehabilitation, women's wellness, yoga, and personalised diet planning.
          </p>

          {/* CTAs */}
          <div className={`hero-ctas ${loaded ? 'fade-up-5' : ''}`}>
            <button className="btn-primary hero-btn-primary" onClick={scrollToCallback}>
              <span>📞</span> Request Callback
            </button>
            <a 
              href="https://wa.me/919104132905?text=Hello Dr. Vidhi, I would like to inquire about physiotherapy." 
              target="_blank" 
              rel="noreferrer"
              className="btn-outline hero-btn-outline"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{color:'#25d366', flexShrink:0}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className={`hero-trust ${loaded ? 'fade-up-6' : ''}`}>
            <span className="trust-item">✓ No Clinic Visits Required</span>
            <span className="trust-sep">·</span>
            <span className="trust-item">✓ Latest Equipment</span>
            <span className="trust-sep">·</span>
            <span className="trust-item">✓ Personalised Care</span>
          </div>
        </div>

        {/* Doctor card */}
        <div className={`hero-card ${loaded ? 'fade-right' : ''}`}>
          <div className="doctor-card">
            <div className="doctor-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initial">V</span>
              </div>
              <div className="avatar-ring" />
              <div className="available-badge">
                <span className="avail-dot" />
                Available Today
              </div>
            </div>

            <div className="doctor-info">
              <h2 className="doctor-name">{doctorInfo.name}</h2>
              <p className="doctor-degree">{doctorInfo.degree}</p>
              <p className="doctor-spec">{doctorInfo.speciality}</p>
            </div>

            <div className="card-divider" />

            <div className="card-features">
              {['🏠 Home Visits', '💊 Personalised Plans', '🧘 Yoga & Diet', '⚡ Latest Equipment'].map((f) => (
                <span key={f} className="feature-tag">{f}</span>
              ))}
            </div>
          </div>

          {/* Floating elements */}
          <div className="float-pill float-pill-1">
            <span>🦴</span> Orthopaedic Expert
          </div>
          <div className="float-pill float-pill-2">
            <span>⭐</span> 500+ Happy Patients
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div ref={statsRef} className="hero-stats">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} start={statsInView} />
        ))}
      </div>

    </section>
  );
}
