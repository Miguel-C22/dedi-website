interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

const links = ['Solutions', 'Buy Hardware', 'Sell Equipment', 'About', 'Resources', 'My Account', 'Contact'];

export default function MobileMenu({ isOpen, onClose, onOpenQuote }: MobileMenuProps) {
  return (
    <div id="mobile-menu" className={isOpen ? 'open' : ''}>
      <div className="dn-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68, borderBottom: '1px solid oklch(0.91 0.005 255)' }}>
        <img src="/uploads/Logo-4-1.webp" alt="Dedicated Networks" style={{ height: 28, width: 'auto' }} />
        <button className="dn-focus" aria-label="Close menu" onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 24 }}>&#10005;</button>
      </div>
      <nav className="dn-container" style={{ display: 'flex', flexDirection: 'column', paddingTop: 12 }}>
        <button
          className="dn-focus"
          onClick={onOpenQuote}
          style={{ margin: '14px 0 22px', textAlign: 'center', background: 'oklch(0.62 0.16 148)', color: 'oklch(0.16 0.02 150)', fontWeight: 700, border: 'none', borderRadius: 4, padding: 15, fontSize: 16 }}
        >
          Request a Quote
        </button>
        {links.map(label => (
          <a
            key={label}
            href="#"
            onClick={e => e.preventDefault()}
            className="dn-focus"
            style={{ padding: '15px 0', borderBottom: '1px solid oklch(0.93 0.005 255)', fontWeight: 600, fontSize: 16.5, color: 'oklch(0.22 0.01 255)' }}
          >
            {label}
          </a>
        ))}
        <a href="#" onClick={e => e.preventDefault()} className="dn-focus" style={{ padding: '15px 0', fontWeight: 600, fontSize: 16.5, color: 'oklch(0.45 0.01 255)' }}>
          Careers
        </a>
      </nav>
    </div>
  );
}
