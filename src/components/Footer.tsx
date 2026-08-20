import { Link } from 'react-router-dom';

const footerColumns: { heading: string; links: { label: string; to?: string }[] }[] = [
  { heading: 'Solutions', links: ['IT Asset Disposition', 'Board-Level Repair', '3PL & Fulfillment', 'Global Hardware Supply', 'Asset Remarketing', 'Warranty & Support'].map(label => ({ label })) },
  { heading: 'Buy & Sell', links: [{ label: 'Shop Hardware' }, { label: 'Product Search' }, { label: 'Sell Equipment', to: '/sell' }, { label: 'Condition Guide' }, { label: 'Guarantee & Returns', to: '/rma' }] },
  { heading: 'Company', links: [{ label: 'Dedicated Difference', to: '/dedicated-difference' }, { label: 'Careers', to: '/careers' }, { label: 'Contact', to: '/contact' }] },
  { heading: 'Resources', links: ['Resources', 'FAQ', 'Certifications', 'Privacy Policy', 'Terms and Conditions'].map(label => ({ label })) },
];

export default function Footer() {
  const cartCount = 0;

  return (
    <footer style={{ background: 'oklch(0.16 0.04 258)', color: 'oklch(0.75 0.02 255)', padding: '60px 0 24px' }}>
      <div className="dn-container dn-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40, marginBottom: 44 }}>
        <div>
          <img src="/uploads/Logo-4-1.webp" alt="Dedicated Networks" style={{ height: 26, width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: 14 }} />
          <p style={{ fontSize: 13.5, lineHeight: 1.6, maxWidth: 240, marginBottom: 18 }}>
            Enterprise IT lifecycle solutions &mdash; sourcing, repair, fulfillment, remarketing, and disposition, delivered globally.
          </p>
          <div style={{ fontSize: 13.5, lineHeight: 1.8 }}>
            <div>(866) 555-0142</div>
            <div>123 Enterprise Way, Suite 400<br />Your City, ST 00000</div>
            <div><a href="#" style={{ color: 'oklch(0.75 0.02 255)' }}>info@dedicatednetworksinc.com</a></div>
          </div>
        </div>
        {footerColumns.map(col => (
          <div key={col.heading}>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: 13.5, marginBottom: 16 }}>{col.heading}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5 }}>
              {col.links.map(({ label, to }) => (
                to ? (
                  <Link key={label} to={to} style={{ color: 'oklch(0.75 0.02 255)' }}>{label}</Link>
                ) : (
                  <a key={label} href="#" onClick={e => e.preventDefault()} style={{ color: 'oklch(0.75 0.02 255)' }}>{label}</a>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="dn-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 12.5, flexWrap: 'wrap', gap: 12 }}>
        <div>&copy; 2026 Dedicated Networks, Inc. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 18 }}>
          <a href="#" style={{ color: 'oklch(0.75 0.02 255)' }}>Login / My Account</a>
          <a href="#" style={{ color: 'oklch(0.75 0.02 255)' }}>Cart ({cartCount})</a>
          <a href="#" style={{ color: 'oklch(0.75 0.02 255)' }} aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
