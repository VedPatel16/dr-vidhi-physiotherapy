import React, { useState } from 'react';
import { useInView } from '../utils/useInView';
import { doctorInfo } from '../data/siteData';
import './PatientReviews.css';

// Fix 5: Real patient reviews
const realReviews = [
  {
    id: 1,
    name: 'Rushil Prajapati',
    area: 'Gandhinagar',
    rating: 5,
    text: 'I had a serious accident and underwent a complicated surgery on my right leg. Post-surgery physiotherapy was crucial for my recovery, and I\'m extremely thankful to my physiotherapist Dr. Vidhi Patel for her excellent care and support. I took physiotherapy for 50 days, and her professional approach, patience, and guidance helped me regain strength and mobility. I\'ve seen significant improvement because of her treatment. Highly recommended for anyone looking for a dedicated and skilled physiotherapist.',
    condition: 'Post-Surgery Leg Recovery',
    date: '2024',
  },
  {
    id: 2,
    name: 'Anjali Rai',
    area: 'Gandhinagar',
    rating: 5,
    text: 'I had shoulder pain post pregnancy and it was unbearable. Thanks to Dr. Vidhi for helping me in handling the pain and curing it. She is very attentive, caring, friendly and professional. She gets you comfortable before starting the session. It was a very satisfying experience with her work. Thank you Dr. Vidhi.',
    condition: 'Post-Pregnancy Shoulder Pain',
    date: '2024',
  },
  {
    id: 3,
    name: 'Jahnvi Vaidya',
    area: 'Gandhinagar',
    rating: 5,
    text: 'It was a good experience with Dr. Vidhi — she is very attentive. She took the time to listen, ask questions and make sure everything was properly diagnosed. She has great knowledge regarding physiotherapy. I highly recommend her.',
    condition: 'Physiotherapy Assessment & Treatment',
    date: '2024',
  },
  {
    id: 4,
    name: 'Shubh Vagada',
    area: 'Gandhinagar',
    rating: 5,
    text: 'I had an accident and had surgery in my right leg. I was unable to walk after surgery. So, I consulted Dr. Vidhi Patel who is very talented and has expertise in physiotherapy. Under her guidance I was able to walk again in a very short period of time. I would definitely recommend her consultation to others.',
    condition: 'Post-Surgery Rehabilitation',
    date: '2024',
  },
];

function StarRating({ rating, onChange, size = 'md' }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`star-btn ${size === 'sm' ? 'star-sm' : ''} ${star <= (hover || rating) ? 'star-filled' : 'star-empty'}`}
          onClick={() => onChange && onChange(star)}
          onMouseEnter={() => onChange && setHover(star)}
          onMouseLeave={() => onChange && setHover(0)}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review, delay = 0 }) {
  return (
    <div className="review-card" style={{ animationDelay: `${delay}s` }}>
      <div className="review-top">
        <div className="reviewer-avatar">{review.name.charAt(0)}</div>
        <div className="reviewer-info">
          <div className="reviewer-name">{review.name}</div>
          <div className="reviewer-area">📍 {review.area}</div>
        </div>
        <div className="review-date">{review.date}</div>
      </div>
      <StarRating rating={review.rating} size="sm" />
      <div className="review-condition-tag">{review.condition}</div>
      <p className="review-text">"{review.text}"</p>
    </div>
  );
}

export default function PatientReviews() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', area: '', condition: '', rating: 5, text: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const validate = () => {
    const e = {};

    // Name validation — only letters, spaces, dots — 2 to 50 chars
    if (!form.name.trim()) {
      e.name = 'Name is required';
    } else if (!/^[a-zA-Z\s.'-]{2,50}$/.test(form.name.trim())) {
      e.name = 'Name should only contain letters (2–50 characters)';
    }

    // Condition treated — only letters, spaces, special chars — max 100 chars
    if (form.condition && form.condition.trim().length > 0) {
      if (!/^[a-zA-Z\s,.()\-/]{3,100}$/.test(form.condition.trim())) {
        e.condition = 'Please enter a valid condition (letters only, max 100 characters)';
      }
    }

    // Review text — min 15 chars, max 1000 chars
    if (!form.text.trim()) {
      e.text = 'Review is required';
    } else if (form.text.trim().length < 15) {
      e.text = 'Review is too short — please write at least 30 characters';
    } else if (form.text.trim().length > 1000) {
      e.text = `Too long — ${form.text.trim().length}/1000 characters`;
    }

    // Rating
    if (!form.rating) {
      e.rating = 'Please select a rating';
    }

    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    // Build WhatsApp message
    const message =
      `*New Patient Review* ⭐\n\n` +
      `*Name:* ${form.name}\n` +
      `*Area:* ${form.area || 'Not specified'}\n` +
      `*Condition Treated:* ${form.condition || 'Not specified'}\n` +
      `*Rating:* ${'⭐'.repeat(form.rating)}\n\n` +
      `*Review:*\n${form.text}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919104132905?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-bg"><div className="rev-orb rev-orb-1" /></div>

      <div ref={ref} className={`reviews-container ${inView ? 'animate-in' : ''}`}>
        {/* Header */}
        <div className="section-header">
          <div className="section-label">Patient Stories</div>
          <h2 className="section-title">
            Feedback &<br />
            <span className="gradient-text">Reviews</span>
          </h2>
          <p className="section-desc">
            Real experiences from real patients who recovered with Dr. Vidhi's dedicated home physiotherapy.
          </p>
        </div>

        {/* Overall rating + Google Business */}
        <div className="overall-rating">
          <div className="overall-score">5.0</div>
          <div>
            <StarRating rating={5} size="md" />
            <div className="overall-label">Based on 500+ patient treatments</div>
          </div>
          <div className="overall-right">
            <div className="overall-badges">
              {['🏆 Top Rated', '✅ Verified Reviews', '🌟 100% Satisfaction'].map((b) => (
                <span key={b} className="rating-badge">{b}</span>
              ))}
            </div>
            {/* Google Business link */}
            <a
              href={doctorInfo.googleBusinessUrl}
              target="_blank"
              rel="noreferrer"
              className="google-biz-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{flexShrink:0}}>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              View on Google
            </a>
          </div>
        </div>

        {/* Real review cards */}
        <div className="reviews-grid">
          {realReviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} delay={i * 0.1} />
          ))}
        </div>

        {/* Media placeholders */}
        <div className="media-section">
          <div className="media-header">
            <h3>📸 Patient Photos & Videos</h3>
            <p>Share your recovery journey with Dr. Vidhi on WhatsApp to be featured here!</p>
          </div>
          <div className="media-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="media-placeholder">
                <div className="media-icon">{i % 2 === 0 ? '🎥' : '📷'}</div>
                <div className="media-text">Patient {i % 2 === 0 ? 'Video' : 'Photo'}</div>
                <div className="media-sub">Coming soon</div>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/919104132905?text=Hello Dr. Vidhi, I want to share my recovery photos/videos"
            target="_blank"
            rel="noreferrer"
            className="btn-primary media-share-btn"
          >
             	🌟 Share Your Recovery Photos & Videos
          </a>
        </div>

        {/* Write review form */}
        <div className="write-review-section">
          <div className="write-review-header">
            <h3>✍️ Share The Review</h3>
            <p>Treated by Dr. Vidhi? Share your experience to help others.</p>
          </div>

          {submitted ? (
            <div className="review-success">
              <div className="success-icon">🙏</div>
              <h4>Thank You for Your Review!</h4>
              <p>Your testimonial has been submitted and will be reviewed by Dr. Vidhi before publishing.</p>
              <button className="btn-primary" onClick={() => setSubmitted(false)}>Write Another</button>
            </div>
          ) : (
            <form className="review-form" onSubmit={handleSubmit} noValidate>
              <div className="review-form-row">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className={`form-input ${errors.name ? 'input-error' : ''}`} />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Your Area</label>
                  <input name="area" value={form.area} onChange={handleChange}
                    placeholder="e.g. Kudasan, Gandhinagar" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Condition Treated</label>
                <input name="condition" value={form.condition} onChange={handleChange}
                  placeholder="e.g. Knee injury, Post surgery recovery..." className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Your Rating *</label>
                <StarRating rating={form.rating} onChange={(r) => setForm((p) => ({ ...p, rating: r }))} />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Your Review *
                  <span style={{
                    float: 'right',
                    fontSize: '0.72rem',
                    color: form.text.length > 1000 ? '#ef4444' : '#94a3b8',
                    fontWeight: 'normal'
                  }}>
                    {form.text.length}/1000
                  </span>
                </label>
                <textarea name="text" value={form.text} onChange={handleChange}
                  placeholder="Share your experience with Dr. Vidhi's physiotherapy services..."
                  rows={5}
                  maxLength={1000}
                  className={`form-input form-textarea ${errors.text ? 'input-error' : ''}`} />
                {errors.text && <span className="error-msg">{errors.text}</span>}
              </div>

              <button type="submit" className="btn-primary review-submit-btn">
                ✍️ Share Review
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
