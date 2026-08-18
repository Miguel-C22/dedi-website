import { advantages } from '../data';
import { useInView } from '../hooks/useInView';

export default function WhyDedicated() {
  const [sectionRef, sectionInView] = useInView<HTMLElement>();
  const [gridRef, gridInView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className={`dn-container dn-fade-section${sectionInView ? ' dn-in-view' : ''}`} style={{ padding: '76px 32px' }}>
      <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.56 0.17 255)', textTransform: 'uppercase', marginBottom: 12 }}>The Dedicated Difference</div>
      <h2 style={{ fontSize: 'clamp(28px,3.4vw,38px)', fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 48, lineHeight: 1.15, maxWidth: 680 }}>Why Organizations Choose Dedicated Networks</h2>
      <div ref={gridRef} id="advantages-grid" className={`dn-grid-2${gridInView ? ' revealed' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 64, rowGap: 40 }}>
        {advantages.map((a, i) => (
          <div key={a.title} className="advantage-item" style={{ transitionDelay: `${i * 80}ms` }}>
            <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 8, background: 'oklch(0.94 0.03 255)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'oklch(0.56 0.17 255)' }}>
              <span dangerouslySetInnerHTML={{ __html: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${a.svgPath}</svg>` }} />
            </div>
            <div>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>{a.title}</h3>
              <p style={{ fontSize: 14.5, color: 'oklch(0.44 0.01 255)', lineHeight: 1.55 }}>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
