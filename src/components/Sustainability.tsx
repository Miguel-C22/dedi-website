import { useInView } from '../hooks/useInView';

export default function Sustainability() {
  const [sectionRef, sectionInView] = useInView<HTMLElement>();
  const [diagramRef, diagramInView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className={`dn-fade-section${sectionInView ? ' dn-in-view' : ''}`} style={{ background: 'oklch(0.96 0.025 250)', padding: '84px 0' }}>
      <div className="dn-container dn-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div ref={diagramRef} className={`lifecycle-diagram${diagramInView ? ' revealed' : ''}`} style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width="340" height="220" viewBox="0 0 340 220">
            <line x1="60" y1="150" x2="170" y2="70" stroke="oklch(0.75 0.02 255)" strokeWidth="1.5" />
            <line x1="170" y1="70" x2="280" y2="150" stroke="oklch(0.75 0.02 255)" strokeWidth="1.5" />
            <line x1="60" y1="150" x2="60" y2="185" stroke="oklch(0.75 0.02 255)" strokeWidth="1.5" />
            <line x1="170" y1="70" x2="170" y2="35" stroke="oklch(0.75 0.02 255)" strokeWidth="1.5" />
            <line x1="280" y1="150" x2="280" y2="185" stroke="oklch(0.75 0.02 255)" strokeWidth="1.5" />
            <circle cx="60" cy="185" r="2.5" fill="oklch(0.6 0.02 255)" />
            <circle cx="170" cy="35" r="2.5" fill="oklch(0.6 0.02 255)" />
            <circle cx="280" cy="185" r="2.5" fill="oklch(0.6 0.02 255)" />
            <rect x="45" y="135" width="30" height="30" rx="5" fill="oklch(0.3 0.1 255)" transform="rotate(45 60 150)" />
            <rect x="155" y="55" width="30" height="30" rx="5" fill="oklch(0.56 0.17 255)" transform="rotate(45 170 70)" />
            <rect x="265" y="135" width="30" height="30" rx="5" fill="oklch(0.62 0.16 148)" transform="rotate(45 280 150)" />
            <text x="60" y="207" textAnchor="middle" fontSize="12.5" fontWeight="700" letterSpacing="0.5" fill="oklch(0.3 0.02 255)" fontFamily="'Public Sans', sans-serif">RECEIVE</text>
            <text x="170" y="24" textAnchor="middle" fontSize="12.5" fontWeight="700" letterSpacing="0.5" fill="oklch(0.3 0.02 255)" fontFamily="'Public Sans', sans-serif">RESTORE</text>
            <text x="280" y="207" textAnchor="middle" fontSize="12.5" fontWeight="700" letterSpacing="0.5" fill="oklch(0.3 0.02 255)" fontFamily="'Public Sans', sans-serif">REDEPLOY</text>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.56 0.17 255)', textTransform: 'uppercase', marginBottom: 12 }}>Lifecycle Value</div>
          <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 16, lineHeight: 1.15 }}>Creating opportunity by extending the life of IT assets</h2>
          <p style={{ fontSize: 16.5, color: 'oklch(0.42 0.01 255)', lineHeight: 1.55, maxWidth: 480 }}>
            Reuse, repair, responsible disposition, and value recovery help technology work harder for longer &mdash; without vague promises or unverified impact claims.
          </p>
        </div>
      </div>
    </section>
  );
}
