import { manufacturers } from '../data';
import { useInView } from '../hooks/useInView';

export default function Certifications() {
  const [sectionRef, inView] = useInView<HTMLElement>();

  return (
    <section ref={sectionRef} className={`dn-fade-section${inView ? ' dn-in-view' : ''}`} style={{ background: 'oklch(0.965 0.004 255)', padding: '64px 0' }}>
      <div className="dn-container dn-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.56 0.17 255)', textTransform: 'uppercase', marginBottom: 10 }}>Certifications</div>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 20 }}>Verified standards</h3>
          <div style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
            <div style={{ width: 84, height: 84, background: '#fff', border: '1px solid oklch(0.88 0.005 255)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, boxShadow: '0 2px 8px -4px rgba(15,30,60,0.08)' }}>
              <img src="/uploads/ISO_9001_2015-232x300.webp" alt="ISO 9001:2015" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ width: 84, height: 84, background: 'oklch(0.2 0.05 258)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 14, boxShadow: '0 2px 8px -4px rgba(15,30,60,0.08)' }}>
              <img src="/uploads/NAID-AAA-Certified-logo-white-472aaa82.webp" alt="NAID AAA Certified" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
          <p style={{ fontSize: 14.5, color: 'oklch(0.44 0.01 255)', lineHeight: 1.55 }}>
            ISO 9001:2015 certified quality management, and NAID AAA certified for secure data destruction. Additional certifications to be listed once verified.
          </p>
        </div>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.56 0.17 255)', textTransform: 'uppercase', marginBottom: 10 }}>Equipment Sold &amp; Supported</div>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 20 }}>Manufacturers in our catalog</h3>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
            {manufacturers.map(mf => (
              <div key={mf} style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700, fontSize: 15, color: 'oklch(0.35 0.02 255)', border: '1px solid oklch(0.88 0.005 255)', background: '#fff', borderRadius: 8, padding: '12px 22px' }}>{mf}</div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'oklch(0.55 0.01 255)', lineHeight: 1.5 }}>
            Wordmarks shown as text placeholders. These manufacturers&rsquo; equipment is sold and supported by Dedicated Networks; no authorization, endorsement, or partnership is implied. Confirm logo usage rights before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
