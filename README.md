# Dr. Vidhi Physiotherapy Website

A modern, responsive website for Dr. Vidhi Patel — Expert Physiotherapist in Gandhinagar.
# website link : https://dr-vidhi-physiotherapy.vercel.app/

---

## 🗂️ Project Structure

```
dr-vidhi-physio/
├── index.html                        # HTML entry point
├── package.json                      # Dependencies
├── vite.config.js                    # Vite build config
├── tailwind.config.js                # Tailwind CSS config
├── postcss.config.js                 # PostCSS config
└── src/
    ├── main.jsx                      # React entry point
    ├── App.jsx                       # Root component (orchestrates all sections)
    ├── styles/
    │   └── index.css                 # Global styles, CSS variables, animations
    ├── data/
    │   └── siteData.js               # All site content (treatments, areas, doctor info)
    ├── utils/
    │   ├── emailService.js           # EmailJS integration for form submissions
    │   └── useInView.js              # Custom hooks (scroll animations, count-up)
    └── components/
        ├── SplashScreen.jsx/.css     # 5-second intro with Sanskrit shloka
        ├── Navbar.jsx/.css           # Sticky navigation with mobile menu
        ├── Hero.jsx/.css             # Landing section with stats
        ├── CallbackForm.jsx/.css     # Patient callback request form
        ├── Treatments.jsx/.css       # Treatments & care accordion cards
        ├── HomeVisitAreas.jsx/.css   # Service area map & chips
        ├── MeetDoctor.jsx/.css       # Doctor profile & journey story
        ├── PatientReviews.jsx/.css   # Reviews grid + submission form
        ├── JoinWithUs.jsx/.css       # Professional network form
        ├── Footer.jsx/.css           # Full footer with all links
        └── FloatingActions.jsx/.css  # WhatsApp FAB + scroll-to-top
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output in /dist folder — deploy to Vercel, Netlify, or any static host
```

---

## ⚙️ Configuration

### 1. Update Contact Details
Edit `src/data/siteData.js`:
```js
export const doctorInfo = {
  phone: '+91 XXXXX XXXXX',   // ( shows actual phone number of Dr.Vidhi Patel)
  email: 'dr.vidhi97@email.com',
  ...
}
```

### 2. Set Up Email Notifications (for forms)
Both the **Callback Request** form and **Join With Us** form need EmailJS to send submissions to Dr. Vidhi.

**Steps:**
1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add your Gmail/email service
3. Create two email templates:
   - **Patient Template** — include fields: `patient_name`, `patient_gender`, `patient_age`, `patient_address`, `patient_phone`, `medical_problem`, `submitted_at`
   - **Join Template** — include fields: `doctor_name`, `designation`, `phone`, `reason`, `submitted_at`
4. Copy your Service ID, Template IDs, and Public Key into `src/utils/emailService.js`:
```js
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',
  PATIENT_TEMPLATE_ID: 'your_patient_template',
  JOIN_TEMPLATE_ID: 'your_join_template',
  PUBLIC_KEY: 'your_public_key',
};
```

### 3. Add Doctor's Photo
Replace the avatar placeholder in `MeetDoctor.jsx`:
```jsx
// Find this line and replace:
<div className="photo-placeholder">...</div>

// With:
<img src="/dr-vidhi.jpg" alt="Dr. Vidhi Patel" />
```
Place the photo at `public/dr-vidhi.jpg` (ideally 400x500px portrait)

### 4. Add Patient Photos/Videos
In `PatientReviews.jsx`, the media grid has placeholder slots.
Replace with actual `<img>` or `<video>` elements for patient recovery photos/videos.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Color | `#0d9488` (Teal) |
| Accent Color | `#f59e0b` (Gold) |
| Dark | `#0a1628` |
| Display Font | Cormorant Garamond |
| Body Font | DM Sans |
| Gujarati Font | Noto Sans Gujarati |
| Devanagari Font | Noto Sans Devanagari |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended — Free)
```bash
npm install -g vercel
npm run build
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Drag /dist folder to netlify.com/drop
```

---

## 📱 Features
- ✅ 5-second splash screen with Sanskrit shloka (Bhagavad Gita 6:17)
- ✅ Sticky navbar with smooth scroll
- ✅ Hero with animated stats counter
- ✅ Patient callback form with validation
- ✅ Treatments accordion (6 categories, 30+ conditions)
- ✅ Interactive area map with 18 Gandhinagar locations
- ✅ Doctor profile with journey story
- ✅ Patient reviews + submission form
- ✅ Professional join-with-us form
- ✅ Full footer with shloka, links, areas, contact
- ✅ Floating WhatsApp button
- ✅ Scroll-to-top button
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations on all sections
- ✅ SEO meta tags

---

*Built for Dr. Vidhi Patel — Bringing healing to your doorstep.*
