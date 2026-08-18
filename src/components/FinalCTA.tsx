import { useInView } from '../hooks/useInView';

interface FinalCTAProps {
  onOpenQuote: () => void;
}

export default function FinalCTA({ onOpenQuote }: FinalCTAProps) {
  const [sectionRef, inView] = useInView<HTMLElement>();

  return (
    <section ref={sectionRef} className={`dn-fade-section${inView ? ' dn-in-view' : ''}`} style={{ position: 'relative', padding: '84px 0', overflow: 'hidden', background: 'oklch(0.2 0.05 258)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=70)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, oklch(0.16 0.05 258 / 0.85), oklch(0.16 0.05 258 / 0.92))' }} />
      <div style={{ position: 'absolute', top: 14, left: 32, background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: 11, fontFamily: 'monospace', padding: '4px 9px', borderRadius: 3 }}>
        STOCK PLACEHOLDER &mdash; warehouse / logistics
      </div>
      <div className="dn-container" style={{ position: 'relative', textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(28px,3.6vw,42px)', fontWeight: 800, color: '#fff', marginBottom: 18, lineHeight: 1.15 }}>Turn IT Assets Into Opportunity.</h2>
        <p style={{ fontSize: 17, color: 'oklch(0.85 0.02 255)', marginBottom: 34, lineHeight: 1.5 }}>Source equipment, recover asset value, or build a lifecycle solution with our team.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="dn-btn-primary dn-focus" onClick={onOpenQuote} style={{ padding: '16px 30px', fontSize: 16 }}>Request a Quote</button>
          <button className="dn-btn-secondary dn-focus" style={{ padding: '15px 29px', fontSize: 16 }}>Talk to an Expert</button>
        </div>
      </div>
    </section>
  );
}
