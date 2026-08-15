import React from 'react';
import { doctorInfo } from '../data/siteData';
import { useInView } from '../utils/useInView';
import './MeetDoctor.css';

const credentials = [
  { icon: '🎓', label: 'Degree', value: doctorInfo.degree },
  { icon: '⏳', label: 'Experience', value: doctorInfo.experience },
  { icon: '🏥', label: 'Patients Treated', value: doctorInfo.patients },
  { icon: '📍', label: 'Based in', value: doctorInfo.location },
];

const expertiseList = [
  'Orthopaedic & Sports Injuries',
  'Post-Surgery Rehabilitation',
  'Neurological Rehabilitation (Paralysis)',
  'Women\'s Pre & Post Natal Wellness',
  'Personal & Group Yoga Training',
  'Customised Diet Planning',
  'Posture Correction',
  'Geriatric Physiotherapy',
];

export default function MeetDoctor() {
  const [ref, inView] = useInView();

  const storyParagraphs = doctorInfo.story.split('\n\n').filter(Boolean);

  return (
    <section id="doctor" className="doctor-section">
      <div className="doctor-bg">
        <div className="doc-orb doc-orb-1" />
        <div className="doc-orb doc-orb-2" />
      </div>

      <div ref={ref} className={`doctor-container ${inView ? 'animate-in' : ''}`}>
        {/* Header */}
        <div className="section-header">
          <div className="section-label">Your Therapist</div>
          <h2 className="section-title">
            Meet Your<br />
            <span className="gradient-text">Doctor</span>
          </h2>
        </div>

        {/* Main profile */}
        <div className="doctor-profile">
          {/* Left: Visual */}
          <div className="profile-left">
            <div className="profile-photo-wrapper">
              <div className="profile-photo">
                <div className="photo-placeholder">
                  {/* Replace with: <img src="/dr-vidhi.jpg" alt="Dr. Vidhi Patel" /> */}
                  <span className="photo-initial">V</span>
                </div>
              </div>
              <div className="photo-decoration" />
              <div className="photo-tag">
                <span className="tag-dot" />
                Available for Home Visits
              </div>
            </div>

            {/* Credentials */}
            <div className="credentials">
              {credentials.map((c) => (
                <div key={c.label} className="credential-item">
                  <span className="cred-icon">{c.icon}</span>
                  <div>
                    <div className="cred-label">{c.label}</div>
                    <div className="cred-value">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Story */}
          <div className="profile-right">
            <div className="doctor-name-block">
              <h3 className="doc-name">{doctorInfo.name}</h3>
              <div className="doc-title">{doctorInfo.speciality}</div>
            </div>

            <div className="doc-tagline gujarati">
              "{doctorInfo.tagline}"
            </div>

            {/* Journey story */}
            <div className="doc-story">
              <h4 className="story-heading">
                <span className="story-ornament">✦</span>
                The Journey
              </h4>
              {storyParagraphs.map((para, i) => (
                <p key={i} className="story-para">{para}</p>
              ))}
            </div>

            {/* Expertise */}
            <div className="expertise-section">
              <h4 className="expertise-heading">Areas of Expertise</h4>
              <div className="expertise-grid">
                {expertiseList.map((item) => (
                  <div key={item} className="expertise-item">
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              className="btn-primary doc-cta"
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
