import React, { useState } from 'react';
import { serviceAreas } from '../data/siteData';
import { useInView } from '../utils/useInView';
import './HomeVisitAreas.css';

export default function HomeVisitAreas() {
  const [ref, inView] = useInView();
  const [hoveredArea, setHoveredArea] = useState(null);

  return (
    <section id="areas" className="areas-section">
      <div ref={ref} className={`areas-container ${inView ? 'animate-in' : ''}`}>
        {/* Header */}
        <div className="section-header">
          <div className="section-label">We Come to You</div>
          <h2 className="section-title">
            Home Visit<br />
            <span className="gradient-text">Areas</span>
          </h2>
          <p className="section-desc">
            Dr. Vidhi personally visits patients across all major areas of Gandhinagar.
            No clinic visit needed — professional physiotherapy at your home.
          </p>
        </div>

        {/* Layout: areas left, quick info right */}
        <div className="areas-layout">
          {/* Left: Area chips */}
          <div className="areas-grid-wrapper">
            <div className="areas-intro">
              <div className="areas-intro-icon">📍</div>
              <div>
                <h3>Serving {serviceAreas.length}+ Locations</h3>
                <p>Gandhinagar & surrounding areas</p>
              </div>
            </div>

            <div className="areas-grid">
              {serviceAreas.map((area, i) => (
                <div
                  key={area.name}
                  className={`area-chip ${hoveredArea === area.name ? 'area-chip-active' : ''}`}
                  style={{ animationDelay: `${i * 0.04}s` }}
                  onMouseEnter={() => setHoveredArea(area.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                >
                  <span className="area-dot" />
                  {area.name}
                </div>
              ))}
            </div>

            <div className="areas-note">
              <span>📞</span>
              <span>Don't see your area? Call to confirm — we may still be able to reach you.</span>
            </div>
          </div>

          {/* Right: Quick info cards */}
          <div className="quick-info-panel">
            <div className="coverage-banner">
              <div className="coverage-icon">🏠</div>
              <div className="coverage-text">
                <div className="coverage-title">100% Home Visits</div>
                <div className="coverage-sub">No clinic. No travel. We come to you.</div>
              </div>
            </div>

            {[
              { icon: '⏱️', title: 'Same Day Service', desc: 'Book and get visited the same day' },
              { icon: '🕐', title: 'Flexible Hours', desc: 'Morning, afternoon & evening slots available' },
              { icon: '💼', title: 'All Equipment Included', desc: 'Brings all therapy tools and machines along' },
              { icon: '📱', title: 'Easy Booking', desc: 'Just call or WhatsApp to book your slot' },
            ].map((item) => (
              <div key={item.title} className="quick-card">
                <span className="quick-icon">{item.icon}</span>
                <div>
                  <div className="quick-title">{item.title}</div>
                  <div className="quick-desc">{item.desc}</div>
                </div>
              </div>
            ))}

            <button
            className="btn-primary areas-cta"
            onClick={() => document.querySelector('#callback')?.scrollIntoView({ behavior: 'smooth' })}
          >
            📞 Book a Home Visit
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
