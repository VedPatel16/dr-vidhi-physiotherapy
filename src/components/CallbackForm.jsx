import React, { useState } from 'react';
import { useInView } from '../utils/useInView';
import { sendCallbackRequest } from '../utils/emailService';
import './CallbackForm.css';

const initialForm = {
  name: '', gender: '', age: '', address: '', phone: '', problem: ''
};

export default function CallbackForm() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.gender) e.gender = 'Please select gender';
    if (!form.age || isNaN(form.age) || form.age < 1 || form.age > 120) e.age = 'Valid age required';
    if (!form.address.trim()) e.address = 'Address is required';
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Valid 10-digit Indian number required';
    if (!form.problem.trim()) e.problem = 'Please describe your problem';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    try {
      await sendCallbackRequest(form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="callback" className="callback-section">
      {/* Background */}
      <div className="callback-bg">
        <div className="cb-orb cb-orb-1" />
        <div className="cb-orb cb-orb-2" />
      </div>

      <div ref={ref} className={`callback-container ${inView ? 'animate-in' : ''}`}>
        {/* Left: Info panel */}
        <div className="callback-info">
          <div className="section-label">Step 1</div>
          <h2 className="section-title callback-title">
            Request a<br />
            <span className="gradient-text">Callback</span>
          </h2>
          <p className="callback-desc">
            Share your details and Dr. Vidhi will personally call you to understand 
            your condition and schedule a convenient home visit.
          </p>

          <div className="callback-steps">
            {[
              { icon: '📋', title: 'Fill the form', desc: 'Share your basic info and medical concern' },
              { icon: '📞', title: 'Get a call', desc: 'Dr. Vidhi calls you within a few hours' },
              { icon: '🏠', title: 'Home visit', desc: 'Treatment begins at your home' },
            ].map((step) => (
              <div key={step.title} className="step-item">
                <div className="step-icon">{step.icon}</div>
                <div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="callback-contact">
            <a href="tel:+919104132905" className="contact-link">
              📞 Call Now
            </a>
            <a href="https://wa.me/919104132905?text=Hello Dr. Vidhi, I would like to inquire about physiotherapy." className="contact-link" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{flexShrink:0, color:'#25d366'}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="callback-form-wrapper">
          {status === 'success' ? (
            <div className="success-card">
              <div className="success-icon">✅</div>
              <h3>Request Received!</h3>
              <p>
                Thank you, <strong>{form.name || 'Patient'}</strong>! Dr. Vidhi will contact you shortly.
                Your healing journey has begun.
              </p>
              <button className="btn-primary" onClick={() => setStatus('idle')}>
                Submit Another
              </button>
            </div>
          ) : (
            <form className="callback-form" onSubmit={handleSubmit} noValidate>
              <h3 className="form-title">Patient Information</h3>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Gender *</label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className={`form-input ${errors.gender ? 'input-error' : ''}`}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && <span className="error-msg">{errors.gender}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Age *</label>
                  <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="Age in years"
                    min="1"
                    max="120"
                    className={`form-input ${errors.age ? 'input-error' : ''}`}
                  />
                  {errors.age && <span className="error-msg">{errors.age}</span>}
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
              </div>

              <div className="form-group">
                <label className="form-label">Full Address *</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House no., area, sector, Gandhinagar"
                  className={`form-input ${errors.address ? 'input-error' : ''}`}
                />
                {errors.address && <span className="error-msg">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Medical Problem / Reason for Physiotherapy *</label>
                <textarea
                  name="problem"
                  value={form.problem}
                  onChange={handleChange}
                  placeholder="Describe your issue (e.g. knee pain after surgery, shoulder injury, paralysis recovery...)"
                  rows={4}
                  className={`form-input form-textarea ${errors.problem ? 'input-error' : ''}`}
                />
                {errors.problem && <span className="error-msg">{errors.problem}</span>}
              </div>

              {status === 'error' && (
                <div className="error-banner">
                  ⚠️ Sorry! Something Wrong Happened. call or WhatsApp us directly at +91 91041 32905
                </div>
              )}

              <button
                type="submit"
                className="btn-primary submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <><span className="spinner" />Sending...</>
                ) : (
                  <>📞 Request Callback</>
                )}
              </button>

              <p className="form-note">
                🔒 Your information is private and will only be seen by Dr. Vidhi Patel.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
