import { useCountUp } from '../hooks/useCountUp';

export default function TrustBar() {
  const [ref, p] = useCountUp<HTMLElement>();

  const metrics = [
    { value: `${Math.round(250000 * p).toLocaleString()}+`, label: 'Products in stock*' },
    { value: `${Math.round(60 * p)}+`, label: 'Countries served*' },
    { value: 'Same-Day', label: 'U.S. shipping*' },
    { value: '1-Year', label: 'Satisfaction guarantee*' },
  ];

  return (
    <section ref={ref} style={{ background: 'oklch(0.22 0.06 258)', padding: '100px 0', minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="dn-container" style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.68 0.16 148)', textTransform: 'uppercase', marginBottom: 12 }}>By The Numbers</div>
        <h2 style={{ fontSize: 'clamp(24px,2.8vw,32px)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>Scale you can build on</h2>
      </div>
      <div className="dn-container dn-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {metrics.map(m => (
          <div key={m.label} className={`metric-item${p > 0 ? ' counted' : ''}`}>
            <div style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4.2vw,48px)', color: '#fff' }}>{m.value}</div>
            <div style={{ fontSize: 14, color: 'oklch(0.78 0.02 255)', marginTop: 8, letterSpacing: 0.2 }}>{m.label}</div>
          </div>
        ))}
      </div>
      <div className="dn-container" style={{ marginTop: 24, textAlign: 'center' }}>
        <p style={{ fontSize: 11.5, color: 'oklch(0.6 0.02 255)', fontFamily: 'monospace' }}>* Candidate metrics carried over from current site &mdash; verify before publishing.</p>
      </div>
    </section>
  );
}
