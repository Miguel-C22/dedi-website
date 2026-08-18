import { quoteOptionDefs } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  selection: string;
  onSelect: (label: string) => void;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, selection, onSelect, onClose }: QuoteModalProps) {
  const selectedOption = quoteOptionDefs.find(q => q.label === selection) ?? quoteOptionDefs[0];

  return (
    <div id="quote-modal-backdrop" className={isOpen ? 'open' : ''} onClick={onClose}>
      <div id="quote-modal-content" onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 10, maxWidth: 560, width: '100%', height: 'fit-content', position: 'relative' }}>
        <div style={{ padding: '28px 40px 22px', borderBottom: '1px solid oklch(0.93 0.005 255)' }}>
          <button className="dn-focus" aria-label="Close" onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', fontSize: 20, color: 'oklch(0.45 0.01 255)' }}>&#10005;</button>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.2, color: 'oklch(0.56 0.17 255)', textTransform: 'uppercase', marginBottom: 8 }}>Request a Quote</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: 'oklch(0.22 0.01 255)' }}>How can we help?</h2>
        </div>
        <div style={{ padding: '26px 40px 40px' }}>
          <p style={{ fontWeight: 700, fontSize: 14.5, color: 'oklch(0.22 0.01 255)', marginBottom: 14 }}>Choose the option that fits best</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 24 }}>
            {quoteOptionDefs.map(q => (
              <button
                key={q.label}
                className={`dn-focus quote-option${q.label === selection ? ' selected' : ''}`}
                onClick={() => onSelect(q.label)}
              >
                <span className="qo-icon" dangerouslySetInnerHTML={{ __html: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${q.svgPath}</svg>` }} />
                <span>
                  <span style={{ display: 'block', fontWeight: 700, fontSize: 14.5, color: 'oklch(0.22 0.01 255)' }}>{q.label}</span>
                  <span style={{ display: 'block', fontSize: 13, color: 'oklch(0.5 0.01 255)', marginTop: 2 }}>{q.sub}</span>
                </span>
              </button>
            ))}
          </div>
          <div style={{ height: 1, background: 'oklch(0.93 0.005 255)', marginBottom: 24 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px', marginBottom: 18 }}>
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Full name</label>
              <input className="dn-focus" placeholder="Jordan Reyes" style={{ width: '100%', padding: '11px 14px', border: '1px solid oklch(0.85 0.005 255)', borderRadius: 5, fontSize: 14.5, boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Work email</label>
              <input className="dn-focus" placeholder="jordan@company.com" style={{ width: '100%', padding: '11px 14px', border: '1px solid oklch(0.85 0.005 255)', borderRadius: 5, fontSize: 14.5, boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Company</label>
              <input className="dn-focus" placeholder="Company name" style={{ width: '100%', padding: '11px 14px', border: '1px solid oklch(0.85 0.005 255)', borderRadius: 5, fontSize: 14.5, boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Phone</label>
              <input className="dn-focus" placeholder="(555) 555-0143" style={{ width: '100%', padding: '11px 14px', border: '1px solid oklch(0.85 0.005 255)', borderRadius: 5, fontSize: 14.5, boxSizing: 'border-box' }} />
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>{selectedOption.dynLabel}</label>
            <textarea
              className="dn-focus"
              placeholder={selectedOption.dynPlaceholder}
              rows={3}
              style={{ width: '100%', padding: '11px 14px', border: '1px solid oklch(0.85 0.005 255)', borderRadius: 5, fontSize: 14.5, boxSizing: 'border-box', fontFamily: "'Source Sans 3', sans-serif", resize: 'vertical' }}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px', marginBottom: 28 }}>
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Required condition</label>
              <input className="dn-focus" placeholder="New, refurbished, or either" style={{ width: '100%', padding: '11px 14px', border: '1px solid oklch(0.85 0.005 255)', borderRadius: 5, fontSize: 14.5, boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Ship-to country</label>
              <input className="dn-focus" placeholder="United States" style={{ width: '100%', padding: '11px 14px', border: '1px solid oklch(0.85 0.005 255)', borderRadius: 5, fontSize: 14.5, boxSizing: 'border-box' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
            <button className="dn-btn-primary dn-focus">Submit request</button>
            <p style={{ fontSize: 12.5, color: 'oklch(0.55 0.01 255)', margin: 0 }}>Mockup only &mdash; no data is submitted. Wire to the WordPress form handler in build.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
