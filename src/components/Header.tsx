import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrolled } from '../hooks/useScrolled';
import { buyCategoryLinks, solutionsNavLinks } from '../data';
import MobileMenu from './MobileMenu';
import SearchOverlay from './SearchOverlay';

interface HeaderProps {
  onOpenQuote: () => void;
}

type MenuKey = 'solutions' | 'buy' | null;

const activePageForPath = (pathname: string) => {
  switch (pathname) {
    case '/contact': return 'contact';
    case '/sell': return 'sell';
    case '/careers': return 'careers';
    case '/dedicated-difference': return 'about';
    default: return 'home';
  }
};

export default function Header({ onOpenQuote }: HeaderProps) {
  const scrolled = useScrolled(48);
  const { pathname } = useLocation();
  const activePage = activePageForPath(pathname);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const closeTimer = useRef<number | undefined>(undefined);
  const cartCount = 0;

  const clearCloseTimer = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const openMenuNow = (key: Exclude<MenuKey, null>) => {
    clearCloseTimer();
    setOpenMenu(key);
  };

  const scheduleCloseMenu = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 180);
  };

  const toggleMenu = (key: Exclude<MenuKey, null>) => {
    setOpenMenu(prev => (prev === key ? null : key));
  };

  const closeAllMenus = () => {
    clearCloseTimer();
    setOpenMenu(null);
  };

  const toggleSearch = () => {
    setSearchOpen(prev => !prev);
    setMobileMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
  };

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const handleOpenQuote = () => {
    setMobileMenuOpen(false);
    onOpenQuote();
  };

  return (
    <>
      <header id="site-header" className={scrolled ? 'scrolled' : ''} onMouseLeave={closeAllMenus}>
        <div className="dn-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68, gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Link to="/">
              <img id="site-logo" src="/uploads/Logo-4-1.webp" alt="Dedicated Networks" style={{ height: 30, width: 'auto' }} />
            </Link>
          </div>

          <nav className="dn-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 18, flex: 1, justifyContent: 'center', flexWrap: 'nowrap', minWidth: 0 }}>
            <div style={{ position: 'relative' }} onMouseEnter={() => openMenuNow('solutions')} onMouseLeave={scheduleCloseMenu}>
              <button
                className="dn-focus dn-glass-link"
                style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap', fontWeight: 600, fontSize: 15, padding: '8px 4px' }}
                aria-expanded={openMenu === 'solutions'}
                onClick={() => toggleMenu('solutions')}
              >
                Solutions <span style={{ fontSize: 10, marginTop: 2 }}>&#9662;</span>
              </button>
              <div className={`dn-dropdown-panel${openMenu === 'solutions' ? ' open' : ''}`}>
                <div className="dn-container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, padding: '36px 32px 40px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px 32px' }}>
                    {solutionsNavLinks.map(({ title, sub }) => (
                      <a key={title} href="#" onClick={e => e.preventDefault()} className="dn-focus" style={{ display: 'block' }}>
                        <div style={{ fontWeight: 700, color: 'oklch(0.22 0.01 255)', fontSize: 15, marginBottom: 4 }}>{title}</div>
                        <div style={{ fontSize: 13.5, color: 'oklch(0.45 0.01 255)' }}>{sub}</div>
                      </a>
                    ))}
                  </div>
                  <div style={{ background: 'oklch(0.97 0.005 255)', borderRadius: 6, padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div style={{ height: 110, borderRadius: 4, position: 'relative', backgroundImage: 'url(https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=70)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      <div style={{ position: 'absolute', top: 6, right: 6, background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: 9, fontFamily: 'monospace', padding: '2px 5px', borderRadius: 3 }}>STOCK PLACEHOLDER</div>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 14.5, color: 'oklch(0.22 0.01 255)' }}>One partner, full lifecycle</div>
                    <a href="#" onClick={e => e.preventDefault()} className="dn-link-arrow dn-focus">View all solutions &rarr;</a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }} onMouseEnter={() => openMenuNow('buy')} onMouseLeave={scheduleCloseMenu}>
              <button
                className="dn-focus dn-glass-link"
                style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap', fontWeight: 600, fontSize: 15, padding: '8px 4px' }}
                aria-expanded={openMenu === 'buy'}
                onClick={() => toggleMenu('buy')}
              >
                Buy Hardware <span style={{ fontSize: 10, marginTop: 2 }}>&#9662;</span>
              </button>
              <div className={`dn-dropdown-panel${openMenu === 'buy' ? ' open' : ''}`}>
                <div className="dn-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.1fr', gap: 48, padding: '36px 32px 40px' }}>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.2, color: 'oklch(0.56 0.17 255)', textTransform: 'uppercase', marginBottom: 16 }}>Categories</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {buyCategoryLinks.map(label => (
                        <a key={label} href="#" onClick={e => e.preventDefault()} className="dn-focus" style={{ fontSize: 15, color: 'oklch(0.28 0.01 255)' }}>{label}</a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.2, color: 'oklch(0.56 0.17 255)', textTransform: 'uppercase', marginBottom: 16 }}>Manufacturers</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {['Cisco', 'Arista', 'Juniper', 'HP / HPE', 'Dell'].map(label => (
                        <a key={label} href="#" onClick={e => e.preventDefault()} className="dn-focus" style={{ fontSize: 15, color: 'oklch(0.28 0.01 255)' }}>{label}</a>
                      ))}
                    </div>
                    <p style={{ fontSize: 12, color: 'oklch(0.6 0.01 255)', marginTop: 16 }}>Equipment sold and supported. Not an authorized-partner claim.</p>
                  </div>
                  <div style={{ background: 'oklch(0.97 0.005 255)', borderRadius: 6, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ fontWeight: 700, fontSize: 14.5, color: 'oklch(0.22 0.01 255)' }}>Find a part fast</div>
                    <input className="dn-focus" placeholder="Part number or keyword" style={{ border: '1px solid oklch(0.85 0.005 255)', borderRadius: 6, padding: '11px 14px', fontSize: 14, fontFamily: "'Source Sans 3', sans-serif", outline: 'none' }} />
                    <button className="dn-focus" style={{ background: 'oklch(0.2 0.05 258)', color: '#fff', border: 'none', borderRadius: 6, padding: 12, fontWeight: 700, fontSize: 14.5 }}>Search catalog</button>
                    <a href="#" onClick={e => e.preventDefault()} className="dn-link-arrow dn-focus">Browse full catalog &rarr;</a>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/sell"
              className="dn-focus dn-glass-link"
              style={{ fontWeight: activePage === 'sell' ? 700 : 600, fontSize: 15, padding: '8px 4px', whiteSpace: 'nowrap', ...(activePage === 'sell' ? { color: 'oklch(0.68 0.16 148)' } : {}) }}
            >
              Sell Equipment
            </Link>
            <Link
              to="/dedicated-difference"
              className="dn-focus dn-glass-link"
              style={{ fontWeight: activePage === 'about' ? 700 : 600, fontSize: 15, padding: '8px 4px', whiteSpace: 'nowrap', ...(activePage === 'about' ? { color: 'oklch(0.68 0.16 148)' } : {}) }}
            >
              Dedicated Difference
            </Link>
            <a href="#" onClick={e => e.preventDefault()} className="dn-focus dn-glass-link" style={{ fontWeight: 600, fontSize: 15, padding: '8px 4px', whiteSpace: 'nowrap' }}>Resources</a>
            <Link
              to="/contact"
              className="dn-focus dn-glass-link"
              style={{ fontWeight: activePage === 'contact' ? 700 : 600, fontSize: 15, padding: '8px 4px', whiteSpace: 'nowrap', ...(activePage === 'contact' ? { color: 'oklch(0.68 0.16 148)' } : {}) }}
            >
              Contact
            </Link>
          </nav>

          <div className="dn-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 18, flexShrink: 0 }}>
            <div className="dn-nav-utility nav-utility" style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13, paddingRight: 6 }}>
              <a href="#" onClick={e => e.preventDefault()} className="dn-focus" style={{ color: 'inherit' }}>Login</a>
              <a href="#" onClick={e => e.preventDefault()} className="dn-focus dn-utility-cart" style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: 5 }}>
                Cart <span style={{ background: 'oklch(0.62 0.16 148)', color: 'oklch(0.16 0.02 150)', borderRadius: 9, padding: '1px 6px', fontWeight: 700, fontSize: 10.5 }}>{cartCount}</span>
              </a>
            </div>
            <button aria-label="Search" aria-expanded={searchOpen} className="dn-focus icon-btn" onClick={toggleSearch} style={{ background: 'none', border: 'none', padding: 6, display: 'flex' }}>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none"><circle cx="8.2" cy="8.2" r="6.2" stroke="currentColor" strokeWidth="1.8" /><line x1="13" y1="13" x2="17.5" y2="17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
            <button className="dn-btn-primary dn-focus" onClick={onOpenQuote} style={{ padding: '10px 20px', fontSize: 14 }}>Request a Quote</button>
          </div>

          <div className="dn-mobile-only" style={{ alignItems: 'center', gap: 6, marginLeft: 'auto' }}>
            <button aria-label="Search" className="dn-focus icon-btn" onClick={toggleSearch} style={{ background: 'none', border: 'none', borderRadius: 8, padding: 8, display: 'flex' }}>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none"><circle cx="8.2" cy="8.2" r="6.2" stroke="currentColor" strokeWidth="1.8" /><line x1="13" y1="13" x2="17.5" y2="17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
            <button
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="dn-focus icon-btn hamburger-btn"
              onClick={toggleMobileMenu}
              style={{ background: 'none', border: 'none', borderRadius: 8, padding: 8, position: 'relative', display: 'flex', alignItems: 'center' }}
            >
              <span className={`hamburger-icon${mobileMenuOpen ? ' open' : ''}`}>
                <span /><span /><span />
              </span>
              {cartCount > 0 && (
                <span style={{ position: 'absolute', top: 2, right: 2, background: 'oklch(0.62 0.16 148)', color: 'oklch(0.16 0.02 150)', borderRadius: 8, padding: '0 4px', fontSize: 10, fontWeight: 700 }}>{cartCount}</span>
              )}
            </button>
          </div>
        </div>

        <SearchOverlay isOpen={searchOpen} query={searchQuery} onQueryChange={setSearchQuery} onClose={closeSearch} />
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} onOpenQuote={handleOpenQuote} />
    </>
  );
}
