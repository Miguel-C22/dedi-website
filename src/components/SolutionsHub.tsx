import { useState } from 'react';
import { solutionDefs } from '../data';
import { useInView } from '../hooks/useInView';

const RADIUS = 150;
const CENTER = 200;

export default function SolutionsHub() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRef, sectionInView] = useInView<HTMLElement>();
  // The source design defines a `solutionsRef` reveal hook but never attaches
  // it to any element, so the hub nodes would stay permanently invisible in
  // the original prototype. We bind the reveal to the hub itself so the
  // (clearly intended) fade-in actually plays.
  const [hubRef, hubInView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  const active = solutionDefs[activeIndex];

  const nodes = solutionDefs.map((s, i) => {
    const rad = (s.angleDeg * Math.PI) / 180;
    const x = CENTER + RADIUS * Math.cos(rad);
    const y = CENTER + RADIUS * Math.sin(rad);
    return {
      ...s,
      index: i,
      x,
      y,
      left: `${(x / 400) * 100}%`,
      top: `${(y / 400) * 100}%`,
      isActive: i === activeIndex,
    };
  });

  return (
    <section ref={sectionRef} className={`dn-fade-section${sectionInView ? ' dn-in-view' : ''}`} style={{ background: 'oklch(0.16 0.045 258)', padding: '88px 0' }}>
      <div className="dn-container dn-grid-2" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.68 0.16 148)', textTransform: 'uppercase', marginBottom: 12 }}>Our Capabilities</div>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,38px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>Complete Solutions Across the IT Asset Lifecycle</h2>
          <p style={{ fontSize: 16.5, color: 'oklch(0.75 0.02 255)', lineHeight: 1.55, marginBottom: 32, maxWidth: 440 }}>
            Source, manage, restore, recover, and redeploy enterprise technology with one experienced partner. Select a capability to learn more.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: 24 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{active.title}</h3>
            <p style={{ fontSize: 15, color: 'oklch(0.75 0.02 255)', lineHeight: 1.55, marginBottom: 16, maxWidth: 440 }}>{active.desc}</p>
            <a href="#" onClick={e => e.preventDefault()} className="dn-link-arrow dn-focus" style={{ color: 'oklch(0.68 0.16 148)' }}>Learn More &rarr;</a>
          </div>
        </div>
        <div ref={hubRef} id="solutions-hub" className={hubInView ? 'revealed' : ''} style={{ position: 'relative', width: '100%', maxWidth: 460, aspectRatio: '1', margin: '0 auto' }}>
          <svg viewBox="0 0 400 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            {nodes.map(n => (
              <line key={n.title} x1="200" y1="200" x2={n.x} y2={n.y} className={`hub-line${n.isActive ? ' active' : ''}`} />
            ))}
          </svg>
          <button
            className="dn-focus"
            style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 76, height: 76, borderRadius: '50%', background: 'oklch(0.62 0.16 148)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 14px rgba(105,200,150,0.08)' }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="oklch(0.16 0.02 150)"><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></svg>
          </button>
          {nodes.map(n => (
            <button
              key={n.title}
              className={`dn-focus hub-node${n.isActive ? ' active' : ''}`}
              aria-pressed={n.isActive}
              onClick={() => setActiveIndex(n.index)}
              style={{ left: n.left, top: n.top }}
            >
              <span className="hn-icon" dangerouslySetInnerHTML={{ __html: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${n.svgPath}</svg>` }} />
              <span className="hn-label">{n.title.split(' ').slice(0, 2).join(' ')}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
