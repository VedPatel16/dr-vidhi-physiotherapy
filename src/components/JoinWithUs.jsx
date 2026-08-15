import React, { useState } from 'react';
import { useInView } from '../utils/useInView';
import { sendJoinRequest } from '../utils/emailService';
import './JoinWithUs.css';

const designations = [
  'Physiotherapist (BPT - MPT)',
  'Orthopaedic Surgeon',
  'General Physician',
  'Neurologist',
  'Dietitian - Nutritionist',
  'Yoga Trainer',
  'Occupational Therapist',
  'Sports Medicine Specialist',
  'Other Healthcare Professional',
];

const benefits = [
  { icon: '🤝', title: 'Collaborative Network', desc: 'Join a growing network of healthcare professionals focused on patient wellness.' },
  { icon: '🏠', title: 'Home Visit Referrals', desc: 'Refer patients who need home physiotherapy. We ensure best-in-class care.' },
  { icon: '📈', title: 'Grow Together', desc: 'Co-create wellness programs, workshops, and joint treatment plans.' },
  { icon: '🎓', title: 'Knowledge Exchange', desc: 'Share expertise, attend sessions, and stay updated on best practices.' },
];

const initialForm = { name: '', designation: '', phone: '', reason: '' };

export default function JoinWithUs() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.designation) e.designation = 'Please select your role';
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Valid 10-digit number required';
    if (!form.reason.trim() || form.reason.trim().length < 10) e.reason = 'Please provide a reason (min 10 characters)';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      await sendJoinRequest(form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="join" className="join-section">
      <div className="join-bg">
        <div className="join-orb join-orb-1" />
        <div className="join-orb join-orb-2" />
        <div className="join-pattern" />
      </div>

      <div ref={ref} className={`join-container ${inView ? 'animate-in' : ''}`}>
        {/* Header */}
        <div className="join-header">
          <div className="section-label">For Healthcare Professionals</div>
          <h2 className="section-title">
            Join With<br />
            <span className="gradient-text">Us</span>
          </h2>
          <p className="section-desc">
            Are you a physiotherapist, orthopaedic surgeon, neurologist, or any other 
            healthcare professional? Let's collaborate to deliver exceptional patient care.
          </p>
        </div>

        {/* Benefits */}
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={b.title} className="benefit-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="benefit-icon">{b.icon}</div>
              <h4 className="benefit-title">{b.title}</h4>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="join-form-wrapper">
          <div className="join-form-intro">
            <h3>Connect With Dr. Vidhi</h3>
            <p>Fill in your details and Dr. Vidhi will get in touch to explore how we can work together for better patient outcomes.</p>
          </div>

          {status === 'success' ? (
            <div className="join-success">
              <div className="success-icon">🎉</div>
              <h4>Connection Request Sent!</h4>
              <p>Thank you for reaching out, Dr. <strong>{form.name || ''}</strong>! Dr. Vidhi will contact you soon to discuss collaboration opportunities.</p>
              <button className="btn-primary" onClick={() => setStatus('idle')}>Send Another</button>
            </div>
          ) : (
            <form className="join-form" onSubmit={handleSubmit} noValidate>
              <div className="join-form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dr. Your Name"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Designation / Role *</label>
                  <select
                    name="designation"
                    value={form.designation}
                    onChange={handleChange}
                    className={`form-input ${errors.designation ? 'input-error' : ''}`}
                  >
                    <option value="">Select your role</option>
                    {designations.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  {errors.designation && <span className="error-msg">{errors.designation}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`form-input ${errors.phone ? 'input-error' : ''}`}
                />
                {errors.phone && <span className="error-msg">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Reason for Connecting *</label>
                <textarea
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  placeholder="Describe how you'd like to collaborate (e.g. patient referrals, joint treatment plans, workshops...)"
                  rows={4}
                  className={`form-input form-textarea ${errors.reason ? 'input-error' : ''}`}
                />
                {errors.reason && <span className="error-msg">{errors.reason}</span>}
              </div>

              {status === 'error' && (
                <div className="error-banner">
                  ⚠️ Sorry! Something Wrong Happened. call or WhatsApp us directly at +91 91041 32905
                </div>
              )}

              <button
                type="submit"
                className="btn-primary join-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <><span className="spinner" />Sending...</>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" style={{flexShrink:0, color:'rgba(255,255,255,0.85)'}}>
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                    Let's Collaborate
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
