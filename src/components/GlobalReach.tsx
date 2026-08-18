import { useInView } from '../hooks/useInView';

export default function GlobalReach() {
  const [sectionRef, inView] = useInView<HTMLElement>();

  return (
    <section ref={sectionRef} className={`dn-fade-section${inView ? ' dn-in-view' : ''}`} style={{ background: 'oklch(0.2 0.05 258)', padding: '76px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="dn-container dn-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>Global Reach. Local Accountability.</h2>
          <p style={{ fontSize: 16.5, color: 'oklch(0.82 0.02 255)', lineHeight: 1.55, marginBottom: 28, maxWidth: 460 }}>
            Dedicated Networks buys, sells, fulfills, and supports enterprise equipment across an established international network.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
            {['Shipping to 60+ countries*', 'Established global buyer network', 'Worldwide sourcing capabilities'].map(text => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'oklch(0.9 0.01 255)', fontSize: 15 }}>
                <span style={{ color: 'oklch(0.7 0.16 148)', fontWeight: 800 }}>&#10003;</span> {text}
              </div>
            ))}
          </div>
          <a href="#" onClick={e => e.preventDefault()} className="dn-link-arrow dn-focus" style={{ color: 'oklch(0.72 0.15 150)' }}>Explore Our Global Capabilities &rarr;</a>
        </div>
        <div style={{ aspectRatio: '1.3', borderRadius: 6, position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at 50% 45%, oklch(0.26 0.06 258), oklch(0.16 0.05 258))' }}>
          <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.65)', fontSize: 10, fontFamily: 'monospace', padding: '3px 8px', borderRadius: 3, zIndex: 2 }}>
            ILLUSTRATIVE &mdash; real network map/video to be produced
          </div>
          <svg viewBox="0 0 400 320" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <g style={{ transformOrigin: '200px 160px', animation: 'dn-globe-spin 40s linear infinite' }}>
              <circle cx="200" cy="160" r="105" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
              <ellipse cx="200" cy="160" rx="105" ry="38" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <ellipse cx="200" cy="160" rx="105" ry="72" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <ellipse cx="200" cy="160" rx="38" ry="105" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </g>
            <path d="M115 120 Q200 40 290 145" fill="none" stroke="oklch(0.62 0.16 148)" strokeWidth="1.5" strokeDasharray="4 5" style={{ animation: 'dn-route-flow 3s linear infinite' }} />
            <path d="M130 210 Q210 260 300 175" fill="none" stroke="oklch(0.65 0.15 230)" strokeWidth="1.5" strokeDasharray="4 5" style={{ animation: 'dn-route-flow 3.6s linear infinite' }} />
            <path d="M120 165 Q200 120 275 95" fill="none" stroke="oklch(0.7 0.1 255)" strokeWidth="1.5" strokeDasharray="4 5" style={{ animation: 'dn-route-flow 2.6s linear infinite' }} />
            <g>
              <circle cx="115" cy="120" r="4" fill="oklch(0.62 0.16 148)" />
              <circle cx="115" cy="120" r="4" fill="none" stroke="oklch(0.62 0.16 148)" strokeWidth="1.5" style={{ animation: 'dn-ping 2.4s ease-out infinite' }} />
              <circle cx="290" cy="145" r="4" fill="oklch(0.65 0.15 230)" />
              <circle cx="290" cy="145" r="4" fill="none" stroke="oklch(0.65 0.15 230)" strokeWidth="1.5" style={{ animation: 'dn-ping 2.4s ease-out infinite .5s' }} />
              <circle cx="130" cy="210" r="4" fill="oklch(0.7 0.1 255)" />
              <circle cx="130" cy="210" r="4" fill="none" stroke="oklch(0.7 0.1 255)" strokeWidth="1.5" style={{ animation: 'dn-ping 2.4s ease-out infinite 1s' }} />
              <circle cx="300" cy="175" r="4" fill="oklch(0.62 0.16 148)" />
              <circle cx="300" cy="175" r="4" fill="none" stroke="oklch(0.62 0.16 148)" strokeWidth="1.5" style={{ animation: 'dn-ping 2.4s ease-out infinite 1.5s' }} />
              <circle cx="275" cy="95" r="4" fill="oklch(0.65 0.15 230)" />
              <circle cx="120" cy="165" r="4" fill="oklch(0.7 0.1 255)" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
