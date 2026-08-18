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
      <div className="dn-container" style={{ paddingTop: 22, paddingBottom: 26 }}>
        <div className="search-bar-row" style={{ display: 'flex', alignItems: 'stretch', gap: 12 }}>
          <input
            className="dn-focus search-input"
            autoFocus={isOpen}
            value={query}
            onChange={e => onQueryChange(e.target.value)}
            placeholder="Search by part number or keyword"
            style={{ border: '1px solid oklch(0.85 0.005 255)', borderRadius: 8, outline: 'none', flex: 1, minWidth: 0, fontSize: 15, padding: '15px 20px', fontFamily: "'Source Sans 3', sans-serif", background: '#fff' }}
          />
          <button aria-label="Search" className="dn-focus search-submit-btn" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'oklch(0.2 0.05 258)', color: '#fff', border: 'none', borderRadius: 999, padding: '0 30px', fontWeight: 700, fontSize: 15 }}>
            <svg className="search-submit-icon" width="16" height="16" viewBox="0 0 19 19" fill="none"><circle cx="8.2" cy="8.2" r="6.2" stroke="currentColor" strokeWidth="1.8" /><line x1="13" y1="13" x2="17.5" y2="17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            <span className="search-submit-label">Search</span>
          </button>
          <button className="dn-focus" aria-label="Close search" onClick={onClose} style={{ flexShrink: 0, background: 'none', border: 'none', fontSize: 18, color: 'oklch(0.5 0.01 255)', padding: 8 }}>&#10005;</button>
        </div>
        <div style={{ maxWidth: 800, marginTop: 10 }}>
          {hasResults && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {results.map(r => (
                <a
                  key={r.name}
                  href="#"
                  onClick={e => e.preventDefault()}
                  className="dn-focus search-result-row"
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
