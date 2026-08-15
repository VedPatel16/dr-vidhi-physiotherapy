import React, { useState } from 'react';
import { treatments } from '../data/siteData';
import { useInView } from '../utils/useInView';
import './Treatments.css';

export default function Treatments() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(null);

  return (
    <section id="treatments" className="treatments-section">
      <div className="treatments-bg">
        <div className="treat-orb treat-orb-1" />
      </div>

      <div ref={ref} className={`treatments-container ${inView ? 'animate-in' : ''}`}>
        {/* Header */}
        <div className="section-header">
          <div className="section-label">Complete Care</div>
          <h2 className="section-title">
            Treatments &<br />
            <span className="gradient-text">Care Services</span>
          </h2>
          <p className="section-desc">
            Comprehensive physiotherapy across all conditions — from orthopaedic injuries 
            to neurological rehabilitation, women's wellness, and lifestyle health.
          </p>
        </div>

        {/* Cards grid */}
        <div className="treatments-grid">
          {treatments.map((t, i) => (
            <div
              key={t.id}
              className={`treatment-card ${active === t.id ? 'card-active' : ''}`}
              style={{ '--card-color': t.color, animationDelay: `${i * 0.1}s` }}
              onClick={() => setActive(active === t.id ? null : t.id)}
            >
              <div className="card-header">
                <div className="card-icon">{t.icon}</div>
                <div>
                  <h3 className="card-category">{t.category}</h3>
                  <div className="card-count">{t.conditions.length} conditions treated</div>
                </div>
                <div className="card-arrow">{active === t.id ? '▲' : '▼'}</div>
              </div>

              <div className={`card-conditions ${active === t.id ? 'conditions-open' : ''}`}>
                <div className="conditions-inner">
                  {t.conditions.map((c) => (
                    <div key={c} className="condition-item">
                      <span className="condition-dot" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="treatments-note">
          <div className="note-icon">💡</div>
          <div>
            <strong>Not sure if we can help?</strong> Every case is unique. Call or request a callback — 
            Dr. Vidhi personally assesses each patient's needs before recommending a treatment plan.
          </div>
          <button
            className="btn-primary note-btn"
            onClick={() => document.querySelector('#callback')?.scrollIntoView({ behavior: 'smooth' })}
          >
            📞 Tell Us Your Problem
          </button>
        </div>
      </div>
    </section>
  );
}
