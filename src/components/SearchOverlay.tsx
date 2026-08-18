import { useMemo } from 'react';
import { catalog } from '../data';

interface SearchOverlayProps {
  isOpen: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, query, onQueryChange, onClose }: SearchOverlayProps) {
  const trimmed = query.trim().toLowerCase();
  const results = useMemo(
    () => (trimmed ? catalog.filter(item => item.name.toLowerCase().includes(trimmed)) : []),
    [trimmed]
  );
  const hasResults = trimmed.length > 0 && results.length > 0;
  const hasNoResults = trimmed.length > 0 && results.length === 0;

  return (
    <div id="search-overlay" className={isOpen ? 'open' : ''}>
      <div className="dn-container" style={{ padding: '28px 32px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 12 }}>
          <input
            className="dn-focus"
            autoFocus={isOpen}
            value={query}
            onChange={e => onQueryChange(e.target.value)}
            placeholder="Search 250,000+ products by part number or keyword"
            style={{ border: '1px solid oklch(0.85 0.005 255)', borderRadius: 8, outline: 'none', flex: 1, fontSize: 15, padding: '15px 20px', fontFamily: "'Source Sans 3', sans-serif", background: '#fff' }}
          />
          <button className="dn-focus" style={{ background: 'oklch(0.2 0.05 258)', color: '#fff', border: 'none', borderRadius: 999, padding: '0 30px', fontWeight: 700, fontSize: 15 }}>Search</button>
          <button className="dn-focus" aria-label="Close search" onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 18, color: 'oklch(0.5 0.01 255)', padding: 8 }}>&#10005;</button>
        </div>
        <div style={{ maxWidth: 800, marginTop: 10 }}>
          {hasResults && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {results.map(r => (
                <a
                  key={r.name}
                  href="#"
                  onClick={e => e.preventDefault()}
                  className="dn-focus"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 4px', borderBottom: '1px solid oklch(0.94 0.005 255)' }}
                >
                  <span style={{ fontSize: 14.5, color: 'oklch(0.22 0.01 255)', fontWeight: 600 }}>{r.name}</span>
                  <span style={{ fontSize: 12.5, color: 'oklch(0.5 0.01 255)', fontFamily: 'monospace' }}>{r.category}</span>
                </a>
              ))}
            </div>
          )}
          {hasNoResults && (
            <p style={{ fontSize: 14, color: 'oklch(0.45 0.01 255)', padding: '14px 4px' }}>
              No results for &ldquo;{query}&rdquo; &mdash; mocked search, catalog data not connected yet.
            </p>
          )}
        </div>
        <p style={{ fontSize: 11, fontFamily: 'monospace', color: 'oklch(0.6 0.02 255)', marginTop: 14 }}>
          MOCK SEARCH &mdash; sample results only, not wired to live inventory.
        </p>
      </div>
    </div>
  );
}
