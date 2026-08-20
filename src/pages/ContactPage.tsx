import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* ===== HERO BAND ===== */}
      <section style={{ background: 'oklch(0.2 0.05 258)', padding: '160px 0 64px' }}>
        <div className="dn-container">
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.68 0.16 148)', textTransform: 'uppercase', marginBottom: 14 }}>Contact</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 800, lineHeight: 1.12, maxWidth: 640, marginBottom: 16 }}>Here to help you get connected.</h1>
          <p style={{ color: 'oklch(0.85 0.02 255)', fontSize: 17, lineHeight: 1.55, maxWidth: 560, marginBottom: 28 }}>Complete the form below for general inquiries or product questions.</p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ fontSize: 14.5, color: 'oklch(0.9 0.01 255)' }}>Have product to sell? <Link to="/sell" style={{ color: 'oklch(0.72 0.15 150)', fontWeight: 600 }}>Contact our Purchasing team &rarr;</Link></div>
            <div style={{ fontSize: 14.5, color: 'oklch(0.9 0.01 255)' }}>Need to start a return? <Link to="/rma" style={{ color: 'oklch(0.72 0.15 150)', fontWeight: 600 }}>Complete the RMA form &rarr;</Link></div>
          </div>
        </div>
      </section>

      {/* ===== FORM + CONTACT INFO ===== */}
      <section style={{ padding: '72px 0' }}>
        <div className="dn-container dn-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 22 }}>Get In Touch</h2>
            {submitted ? (
              <div style={{ background: 'oklch(0.97 0.04 148)', border: '1.5px solid oklch(0.62 0.16 148)', borderRadius: 8, padding: 24, fontSize: 15, color: 'oklch(0.3 0.05 150)', fontWeight: 600 }}>
                Thanks &mdash; a message like this would be sent to our team. This form is a mockup and hasn't been wired to the WordPress form handler yet.
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                style={{ display: 'flex', flexDirection: 'column', gap: 18, background: '#fff', border: '1px solid oklch(0.9 0.005 255)', borderRadius: 10, boxShadow: '0 12px 32px -20px rgba(15,30,60,0.15)', padding: 32 }}
              >
                <div className="dn-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>First Name *</label>
                    <input required className="dn-input dn-focus" placeholder="Jordan" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Last Name *</label>
                    <input required className="dn-input dn-focus" placeholder="Reyes" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Company *</label>
                  <input required className="dn-input dn-focus" placeholder="Company name" />
                </div>
                <div className="dn-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Email *</label>
                    <input required type="email" className="dn-input dn-focus" placeholder="jordan@company.com" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Phone *</label>
                    <input required className="dn-input dn-focus" placeholder="(555) 555-0143" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Message</label>
                  <textarea rows={5} className="dn-input dn-focus" placeholder="How can we help?" style={{ resize: 'vertical' }} />
                </div>
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'oklch(0.4 0.01 255)', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: 17, height: 17 }} />
                  Request a callback
                </label>
                <div>
                  <button type="submit" className="dn-btn-primary dn-focus" style={{ padding: '15px 32px', fontSize: 15.5 }}>Get In Touch</button>
                  <p style={{ fontSize: 12.5, color: 'oklch(0.55 0.01 255)', marginTop: 10 }}>Mockup only &mdash; no data is submitted. Wire to the WordPress form handler in build.</p>
                </div>
              </form>
            )}
          </div>

          <div style={{ background: 'oklch(0.2 0.05 258)', borderRadius: 10, padding: 36, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.2, color: 'oklch(0.68 0.16 148)', textTransform: 'uppercase' }}>Other Contact Methods</h3>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'oklch(0.68 0.16 148)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1z" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 5 }}>Mailing Address</div>
                <div style={{ fontSize: 14.5, color: 'oklch(0.8 0.02 255)', lineHeight: 1.55 }}>8801 95th Ave N, Suite 100<br />Brooklyn Park, MN 55445</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'oklch(0.68 0.16 148)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .7 2.9a2 2 0 01-.4 2.1L8.1 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.4 1.9.6 2.9.7a2 2 0 011.6 2z" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 5 }}>Phone</div>
                <div style={{ fontSize: 14.5, color: 'oklch(0.8 0.02 255)', lineHeight: 1.55 }}>Main Phone: <a href="tel:7632337200" style={{ color: 'oklch(0.72 0.15 150)' }}>763-233-7200</a><br />Fax: 763-951-2138<br />Hours: 8am&ndash;5pm M-F CST</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'oklch(0.68 0.16 148)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 5 }}>Email Address</div>
                <div style={{ fontSize: 14.5, color: 'oklch(0.8 0.02 255)' }}><a href="mailto:info@dedicatednetworksinc.com" style={{ color: 'oklch(0.72 0.15 150)' }}>Send us an email</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
