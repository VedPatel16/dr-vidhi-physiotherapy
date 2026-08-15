import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('enter'); // enter → visible → exit → done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('visible'), 100);
    const t2 = setTimeout(() => setPhase('exit'), 4200);
    const t3 = setTimeout(() => { setPhase('done'); onDone(); }, 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  if (phase === 'done') return null;

  return (
    <div className={`splash-root splash-${phase}`}>
      {/* Animated background orbs */}
      <div className="splash-orb splash-orb-1" />
      <div className="splash-orb splash-orb-2" />
      <div className="splash-orb splash-orb-3" />

      {/* Top — Sanskrit Shloka */}
      <div className="splash-shloka">
        <div className="shloka-text devanagari">
          युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु ।<br />
          युक्तस्वप्नावबोधस्य योगो भवति दुःखहा ॥
        </div>
        <div className="shloka-source gujarati">
          શ્રીમદ્ ભગવદ્ ગીતા : અધ્યાય - ૬ | શ્લોક - ૧૭
        </div>
      </div>

      {/* Center — Brand */}
      <div className="splash-center">
        <div className="splash-lotus">✦</div>
        <h1 className="splash-brand">DR. VIDHI PHYSIOTHERAPY</h1>
        <div className="splash-divider">
          <span className="divider-line" />
          <span className="divider-gem">◆</span>
          <span className="divider-line" />
        </div>
        <p className="splash-tagline gujarati">
          તમે અહીં આવ્યા એટલે સાજા થયા સમજો.
        </p>
      </div>

      {/* Bottom loader */}
      <div className="splash-loader">
        <div className="loader-track">
          <div className="loader-fill" />
        </div>
      </div>
    </div>
  );
}
