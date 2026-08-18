import { useInView } from '../hooks/useInView';

export default function CaseStudy() {
  const [sectionRef, inView] = useInView<HTMLElement>();

  return (
    <section ref={sectionRef} className={`dn-container dn-fade-section${inView ? ' dn-in-view' : ''}`} style={{ padding: '76px 32px' }}>
      <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 1.2, color: 'oklch(0.45 0.01 255)', textTransform: 'uppercase', marginBottom: 28 }}>Customer Outcome</div>
      <div className="dn-case-study" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 0, borderRadius: 10, overflow: 'hidden', border: '1px solid oklch(0.9 0.005 255)', boxShadow: '0 16px 40px -24px rgba(15,30,60,0.25)' }}>
        <div style={{ minHeight: '100%', position: 'relative', backgroundImage: 'url(https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=70)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, oklch(0.16 0.05 258 / 0.05), oklch(0.16 0.05 258 / 0.5))' }} />
          <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: 10.5, fontFamily: 'monospace', padding: '4px 9px', borderRadius: 3 }}>STOCK PLACEHOLDER</div>
          <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, color: '#fff', fontFamily: 'monospace', fontSize: 11, border: '1px dashed rgba(255,255,255,0.6)', padding: '8px 12px', borderRadius: 4 }}>
            SAMPLE CASE STUDY &mdash; pending an approved customer example
          </div>
        </div>
        <div style={{ background: '#fff', padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', gap: 18 }}>
            <div style={{ flexShrink: 0, width: 30, height: 30, borderRadius: '50%', background: 'oklch(0.3 0.1 255)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>1</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'oklch(0.22 0.01 255)', marginBottom: 4 }}>Challenge</div>
              <p style={{ fontSize: 15.5, color: 'oklch(0.42 0.01 255)', lineHeight: 1.55 }}>A national IT services provider needed to retire equipment across multiple sites on a fixed timeline, with strict data-security requirements.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 18 }}>
            <div style={{ flexShrink: 0, width: 30, height: 30, borderRadius: '50%', background: 'oklch(0.3 0.1 255)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>2</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'oklch(0.22 0.01 255)', marginBottom: 4 }}>Solution</div>
              <p style={{ fontSize: 15.5, color: 'oklch(0.42 0.01 255)', lineHeight: 1.55 }}>Dedicated Networks coordinated pickup, secure data erasure, grading, and remarketing across all locations from a single point of contact.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 18 }}>
            <div style={{ flexShrink: 0, width: 30, height: 30, borderRadius: '50%', background: 'oklch(0.62 0.16 148)', color: 'oklch(0.16 0.02 150)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>3</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'oklch(0.22 0.01 255)', marginBottom: 4 }}>Result</div>
              <p style={{ fontSize: 14.5, color: 'oklch(0.5 0.01 255)', lineHeight: 1.55, fontStyle: 'italic', borderLeft: '2px dashed oklch(0.8 0.01 255)', paddingLeft: 12 }}>
                Placeholder &mdash; measurable result to be confirmed with an approved customer example before publishing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
