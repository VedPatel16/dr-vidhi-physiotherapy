// ─── Doctor Info ────────────────────────────────────────────────────────────
export const doctorInfo = {
  name: 'Dr. Vidhi Patel',
  degree: 'B.Pt. (Bachelor of Physiotherapy)',
  experience: '7+ Years',
  patients: '500+',
  speciality: 'Orthopaedic & Rehabilitation Physiotherapy',
  phone: '+91 99999 00000',
  whatsapp: '919104132905',
  email: 'drvidhiphysio@gmail.com',
  location: 'Gandhinagar, Gujarat, India',
  googleBusinessUrl: 'https://share.google/O1vDXkdUdQKpQBiIB',
  story: `Every great journey begins with a single step — and mine began with a vision to bring healing to people's doorsteps.

After completing my Bachelor of Physiotherapy, I realised that many patients — elderly, post-surgery, or simply unable to travel — struggled to get the care they truly deserved. Clinics felt cold and distant. Waiting rooms filled with anxiety. Recovery shouldn't begin with a painful commute.

So I made a choice. I packed my expertise, my equipment, and my heart — and I came to you.

Over 7 years and 500+ patients across Gandhinagar, I have witnessed miracles that happen when professional physiotherapy meets the comfort of home. A grandfather walking again after knee replacement. A young mother recovering her strength post-delivery. A stroke patient regaining movement, one session at a time.

My practice is built on three pillars: Science, Care, and Presence. I bring the latest physiotherapy techniques — combined with personalised yoga, nutrition guidance, and genuine human connection — directly to your home.

Because healing is not just physical. It is deeply personal. And it deserves a personal touch.`,
  tagline: 'તમે અહીં આવ્યા એટલે સાજા થયા સમજો.',
  taglineEn: 'Your healing journey begins the moment you reach out.',
};

// ─── Treatments ──────────────────────────────────────────────────────────────
export const treatments = [
  {
    id: 1,
    category: 'Orthopaedic Care',
    icon: '🦴',
    color: '#0d9488',
    conditions: [
      'Shoulder Injury & Frozen Shoulder',
      'Knee Injury & Pain',
      'Ankle Injury & Sprain',
      'Joint Pain (All Joints)',
      'Muscle Strain & Tear',
      'Neck & Back Pain',
      'Sciatica',
      'Spondylosis',
    ],
  },
  {
    id: 2,
    category: 'Post-Surgery Rehabilitation',
    icon: '🔧',
    color: '#059669',
    conditions: [
      'Post Knee Replacement Exercise',
      'Post Hip Replacement Therapy',
      'Post Fracture Mobilisation',
      'Post Spinal Surgery Care',
      'Scar Tissue Management',
    ],
  },
  {
    id: 3,
    category: 'Neurological Rehabilitation',
    icon: '🧠',
    color: '#0891b2',
    conditions: [
      'Paralysis (Hemiplegia / Paraplegia)',
      'Stroke Rehabilitation',
      "Bell's Palsy",
      'Cerebral Palsy (Supportive)',
      'Balance & Coordination Disorders',
    ],
  },
  {
    id: 4,
    category: 'Posture & Strengthening',
    icon: '💪',
    color: '#7c3aed',
    conditions: [
      'Posture Correction (Adults & Children)',
      'Core Strengthening',
      'Muscle Strengthening Programs',
      'Sports Injury Prevention',
      'Ergonomic Assessment',
    ],
  },
  {
    id: 5,
    category: "Women's Wellness",
    icon: '🌸',
    color: '#db2777',
    conditions: [
      'Pre-Natal Exercise & Wellness',
      'Post-Delivery Recovery',
      'Pelvic Floor Rehabilitation',
      'Diastasis Recti Management',
      'Hormonal Health Exercise',
    ],
  },
  {
    id: 6,
    category: 'Yoga & Diet',
    icon: '🧘',
    color: '#d97706',
    conditions: [
      'Personal Yoga Training',
      'Group Yoga Sessions',
      'Therapeutic Yoga',
      'Customised Diet Planning',
      'Weight Management through Lifestyle',
      'Stress Relief & Mindfulness',
    ],
  },
];

// ─── Service Areas ───────────────────────────────────────────────────────────
export const serviceAreas = [
  { name: 'Kudasan', lat: 23.2156, lng: 72.6369 },
  { name: 'Koba', lat: 23.2287, lng: 72.6523 },
  { name: 'Raysan', lat: 23.2012, lng: 72.6541 },
  { name: 'Randesan', lat: 23.2198, lng: 72.6687 },
  { name: 'Bhaijipura', lat: 23.2098, lng: 72.6280 },
  { name: 'Sargasan', lat: 23.2345, lng: 72.6402 },
  { name: 'GIFT City', lat: 23.1624, lng: 72.6734 },
  { name: 'Dholakuva', lat: 23.2231, lng: 72.6198 },
  { name: 'Infocity', lat: 23.2067, lng: 72.6849 },
  { name: 'CHA Road', lat: 23.2178, lng: 72.6312 },
  { name: 'Adalaj', lat: 23.1654, lng: 72.5987 },
  { name: 'Sector 1', lat: 23.2231, lng: 72.6550 },
  { name: 'Sector 2', lat: 23.2198, lng: 72.6580 },
  { name: 'Sector 3', lat: 23.2165, lng: 72.6610 },
  { name: 'Sector 4', lat: 23.2132, lng: 72.6640 },
  { name: 'Sector 5', lat: 23.2099, lng: 72.6670 },
  { name: 'Sector 6', lat: 23.2066, lng: 72.6700 },
  { name: 'Sector 7', lat: 23.2033, lng: 72.6730 },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: 7, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Patients Treated' },
  { value: 18, suffix: '+', label: 'Areas Covered' },
  { value: 100, suffix: '%', label: 'Home Visits' },
];

// ─── Navigation Links — Fix 3: rename "Home Visits" ──────────────────────────
export const navLinks = [
  { label: 'Request Callback', href: '#callback' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Home Visit Areas', href: '#areas' },
  { label: 'Meet Doctor', href: '#doctor' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Join With Us', href: '#join' },
];
