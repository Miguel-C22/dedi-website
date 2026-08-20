import { useState } from 'react';
import { Link } from 'react-router-dom';
import { buyCategoryLinks, manufacturers, solutionsNavLinks } from '../data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

const plainLinks: { label: string; to?: string }[] = [
  { label: 'Sell Equipment', to: '/sell' },
  { label: 'Dedicated Difference', to: '/dedicated-difference' },
  { label: 'Resources' },
  { label: 'My Account' },
];

export default function MobileMenu({ isOpen, onClose, onOpenQuote }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (key: string) => setOpenSection(prev => (prev === key ? null : key));

  return (
    <div id="mobile-menu" className={isOpen ? 'open' : ''}>
      <div className="dn-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68, borderBottom: '1px solid oklch(0.91 0.005 255)' }}>
        <img src="/uploads/Logo-4-1.webp" alt="Dedicated Networks" style={{ height: 28, width: 'auto' }} />
        <button className="dn-focus icon-btn" aria-label="Close menu" onClick={onClose} style={{ background: 'none', border: 'none', borderRadius: 8, padding: 6, fontSize: 24, color: 'oklch(0.22 0.01 255)' }}>&#10005;</button>
      </div>
      <nav className="dn-container" style={{ display: 'flex', flexDirection: 'column', paddingTop: 8, paddingBottom: 32 }}>
        <div className="mobile-nav-section">
          <button className="mobile-nav-toggle dn-focus" aria-expanded={openSection === 'solutions'} onClick={() => toggleSection('solutions')}>
            Solutions
            <span className={`mobile-nav-chevron${openSection === 'solutions' ? ' open' : ''}`}>&#9662;</span>
          </button>
          <div className={`mobile-nav-panel${openSection === 'solutions' ? ' open' : ''}`}>
            {solutionsNavLinks.map(({ title, sub }) => (
              <a key={title} href="#" onClick={e => e.preventDefault()} className="dn-focus mobile-nav-sublink">
                <span>{title}</span>
                {sub && <small>{sub}</small>}
              </a>
            ))}
          </div>
        </div>

        <div className="mobile-nav-section">
          <button className="mobile-nav-toggle dn-focus" aria-expanded={openSection === 'buy'} onClick={() => toggleSection('buy')}>
            Buy Hardware
            <span className={`mobile-nav-chevron${openSection === 'buy' ? ' open' : ''}`}>&#9662;</span>
          </button>
          <div className={`mobile-nav-panel${openSection === 'buy' ? ' open' : ''}`}>
            <div className="mobile-nav-group-label">Categories</div>
            {buyCategoryLinks.map(label => (
              <a key={label} href="#" onClick={e => e.preventDefault()} className="dn-focus mobile-nav-sublink"><span>{label}</span></a>
            ))}
            <div className="mobile-nav-group-label" style={{ marginTop: 6 }}>Manufacturers</div>
            {manufacturers.map(label => (
              <a key={label} href="#" onClick={e => e.preventDefault()} className="dn-focus mobile-nav-sublink"><span>{label}</span></a>
            ))}
          </div>
        </div>

        {plainLinks.map(({ label, to }) => (
          to ? (
            <Link
              key={label}
              to={to}
              onClick={onClose}
              className="dn-focus"
              style={{ padding: '15px 0', borderBottom: '1px solid oklch(0.93 0.005 255)', fontWeight: 600, fontSize: 16.5, color: 'oklch(0.22 0.01 255)' }}
            >
              {label}
            </Link>
          ) : (
            <a
              key={label}
              href="#"
              onClick={e => e.preventDefault()}
              className="dn-focus"
              style={{ padding: '15px 0', borderBottom: '1px solid oklch(0.93 0.005 255)', fontWeight: 600, fontSize: 16.5, color: 'oklch(0.22 0.01 255)' }}
            >
              {label}
            </a>
          )
        ))}
        <Link to="/contact" onClick={onClose} className="dn-focus" style={{ padding: '15px 0', fontWeight: 700, fontSize: 16.5, color: 'oklch(0.56 0.17 255)' }}>
          Contact
        </Link>

        <div style={{ marginTop: 12, paddingTop: 20, borderTop: '1px solid oklch(0.93 0.005 255)', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <a href="#" onClick={e => e.preventDefault()} className="dn-focus" style={{ padding: '10px 0', fontWeight: 600, fontSize: 15, color: 'oklch(0.45 0.01 255)' }}>Login</a>
        </div>

        <button
          className="dn-focus"
          onClick={onOpenQuote}
          style={{ marginTop: 22, textAlign: 'center', background: 'oklch(0.62 0.16 148)', color: 'oklch(0.16 0.02 150)', fontWeight: 700, border: 'none', borderRadius: 6, padding: 15, fontSize: 16 }}
        >
          Request a Quote
        </button>
      </nav>
    </div>
  );
}
