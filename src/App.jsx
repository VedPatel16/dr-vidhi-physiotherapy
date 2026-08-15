import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CallbackForm from './components/CallbackForm';
import Treatments from './components/Treatments';
import HomeVisitAreas from './components/HomeVisitAreas';
import MeetDoctor from './components/MeetDoctor';
import PatientReviews from './components/PatientReviews';
import JoinWithUs from './components/JoinWithUs';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const SPLASH_KEY = 'drvidhi_splash_shown';

export default function App() {
  // Fix 1: Show splash only once — check sessionStorage
  const [splashDone, setSplashDone] = useState(() => {
    return sessionStorage.getItem(SPLASH_KEY) === 'true';
  });

  const handleSplashDone = () => {
    sessionStorage.setItem(SPLASH_KEY, 'true');
    setSplashDone(true);
  };

  return (
    <>
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}

      <div
        style={{
          opacity: splashDone ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: splashDone ? 'all' : 'none',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <CallbackForm />
          <Treatments />
          <HomeVisitAreas />
          <MeetDoctor />
          <PatientReviews />
          <JoinWithUs />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
}
