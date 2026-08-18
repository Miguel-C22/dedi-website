import { useEffect, useRef, useState } from 'react';
import { processStepDefs } from '../data';
import { useInView } from '../hooks/useInView';

export default function ProcessSteps() {
  const [sectionRef, sectionInView] = useInView<HTMLElement>();
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ratios = new Map<Element, number>();
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => ratios.set(entry.target, entry.intersectionRatio));
        let bestEl: Element | null = null;
        let bestRatio = 0;
        ratios.forEach((ratio, el) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestEl = el;
          }
        });
        if (bestEl) {
          const index = Number((bestEl as HTMLElement).dataset.stepIndex);
          setActiveStepIndex(prev => (prev !== index ? index : prev));
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    stepRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`dn-fade-section${sectionInView ? ' dn-in-view' : ''}`} style={{ background: 'oklch(0.965 0.004 255)', padding: '72px 0' }}>
      <div className="dn-container dn-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 92, height: 440, borderRadius: 6, overflow: 'hidden' }}>
          {processStepDefs.map((s, i) => (
            <div
              key={s.title}
              className={`step-bg-image${activeStepIndex === i ? ' active' : ''}`}
              style={{ backgroundImage: `url(${s.bgImage})` }}
            />
          ))}
          <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: 10.5, fontFamily: 'monospace', padding: '3px 8px', borderRadius: 3 }}>
            STOCK PLACEHOLDER PHOTO/VIDEO
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 16, lineHeight: 1.15 }}>Technical Expertise at Every Stage</h2>
          <p style={{ fontSize: 16.5, color: 'oklch(0.42 0.01 255)', lineHeight: 1.55, marginBottom: 36, maxWidth: 480 }}>
            Every asset is handled with care &mdash; from inspection and testing to repair, configuration, secure data handling, and redeployment.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {processStepDefs.map((s, i) => (
              <div
                key={s.title}
                ref={el => { stepRefs.current[i] = el; }}
                data-step-index={i}
                className={`process-step${activeStepIndex === i ? ' active' : ''}`}
              >
                <div className="step-circle">{s.n}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16.5, color: 'oklch(0.22 0.01 255)', marginBottom: 3 }}>{s.title}</div>
                  <div style={{ fontSize: 14.5, color: 'oklch(0.45 0.01 255)', lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
