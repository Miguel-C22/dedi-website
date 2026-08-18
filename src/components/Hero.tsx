import { useEffect, useRef, useState } from 'react';
import { headlineWords } from '../data';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordOpacity, setWordOpacity] = useState(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordOpacity(0.15);
      window.setTimeout(() => {
        setWordIndex(prev => (prev + 1) % headlineWords.length);
        setWordOpacity(1);
      }, 220);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play?.().catch(() => {});
    }
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: 'oklch(0.2 0.05 258)' }}>
      <video ref={videoRef} muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/uploads/DedicatedNetworks2022Rev.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, oklch(0.16 0.05 258 / 0.75) 0%, oklch(0.16 0.05 258 / 0.55) 45%, oklch(0.16 0.05 258 / 0.88) 100%)' }} />
      <div className="dn-container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24, zIndex: 1 }}>
        <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 5vw, 58px)', fontWeight: 800, lineHeight: 1.08, maxWidth: 780 }}>
          Enterprise IT{' '}
          <span style={{ position: 'relative', display: 'inline-block', color: 'oklch(0.68 0.16 148)' }}>
            <span id="headline-word" style={{ opacity: wordOpacity }}>{headlineWords[wordIndex]}</span>
          </span>{' '}
          Solutions. Delivered Globally.
        </h1>
        <p style={{ color: 'oklch(0.92 0.01 255)', fontSize: 19, lineHeight: 1.55, maxWidth: 600 }}>
          From hardware sourcing and repair to ITAD, fulfillment, and asset recovery, we help organizations maximize the value and useful life of enterprise technology.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 6 }}>
          <button className="dn-btn-primary dn-focus" style={{ padding: '16px 30px', fontSize: 16 }}>Explore Our Solutions</button>
          <button className="dn-btn-secondary dn-focus" onClick={onOpenQuote} style={{ padding: '15px 29px', fontSize: 16 }}>Request a Quote</button>
        </div>
      </div>
    </section>
  );
}
