import { useState } from 'react';
import QuestionsCta from '../components/QuestionsCta';

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* ===== HERO BAND ===== */}
      <section style={{ background: 'oklch(0.2 0.05 258)', padding: '148px 0 40px' }}>
        <div className="dn-container">
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.68 0.16 148)', textTransform: 'uppercase', marginBottom: 12 }}>Sell To Us</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 3.6vw, 40px)', fontWeight: 800, lineHeight: 1.15, maxWidth: 700, marginBottom: 12 }}>Why do more companies sell their used networking gear to us?</h1>
          <p style={{ color: 'oklch(0.85 0.02 255)', fontSize: 16.5, fontWeight: 600, marginBottom: 6 }}>Quick. Simple. Your way.</p>
          <p style={{ color: 'oklch(0.8 0.02 255)', fontSize: 15, lineHeight: 1.55, maxWidth: 640 }}>Our experienced purchasing team knows the intricacies of network gear valuation and works closely with you to ensure you get the best price for your unwanted assets, with a repair and refurbishment process built to high-quality standards.</p>
        </div>
      </section>

      {/* ===== FORM + WAYS TO REACH US ===== */}
      <section style={{ padding: '48px 0 72px' }}>
        <div className="dn-container dn-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 20 }}>Ready to sell? Fill out the form to get started.</h2>
            {submitted ? (
              <div style={{ background: 'oklch(0.97 0.04 148)', border: '1.5px solid oklch(0.62 0.16 148)', borderRadius: 8, padding: 24, fontSize: 15, color: 'oklch(0.3 0.05 150)', fontWeight: 600 }}>
                Thanks &mdash; a message like this would be sent to our purchasing team. This form is a mockup and hasn't been wired to the WordPress form handler yet.
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                style={{ display: 'flex', flexDirection: 'column', gap: 16, background: '#fff', border: '1px solid oklch(0.9 0.005 255)', borderRadius: 10, boxShadow: '0 12px 32px -20px rgba(15,30,60,0.15)', padding: 32 }}
              >
                <div className="dn-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
                <div className="dn-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
                  <textarea rows={3} className="dn-input dn-focus" placeholder="Tell us about the equipment you're looking to sell" style={{ resize: 'vertical' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Asset list</label>
                  <div style={{ border: '1.5px dashed oklch(0.8 0.005 255)', borderRadius: 6, padding: 16, textAlign: 'center', fontSize: 13.5, color: 'oklch(0.5 0.01 255)', fontFamily: 'monospace' }}>UPLOAD PLACEHOLDER &mdash; attach a spreadsheet or list of equipment</div>
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

          <div style={{ background: 'oklch(0.2 0.05 258)', borderRadius: 10, padding: 32, display: 'flex', flexDirection: 'column', gap: 26 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.2, color: 'oklch(0.68 0.16 148)', textTransform: 'uppercase' }}>Other Ways To Reach Us</h3>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'oklch(0.68 0.16 148)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-8.5 8.5A8.38 8.38 0 014 11.5 8.38 8.38 0 0112.5 3a8.38 8.38 0 018.5 8.5z" /><path d="M8 11.5h9M8 8h6M8 15h6" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 5 }}>Option 1 &mdash; Web Chat</div>
                <div style={{ fontSize: 14.5, color: 'oklch(0.8 0.02 255)', lineHeight: 1.55 }}>Contact our online professionals utilizing our web chat.</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'oklch(0.68 0.16 148)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 5 }}>Option 2 &mdash; Email or Call</div>
                <div style={{ fontSize: 14.5, color: 'oklch(0.8 0.02 255)', lineHeight: 1.55 }}>Reach out at <a href="mailto:info@dedicatednetworksinc.com" style={{ color: 'oklch(0.72 0.15 150)' }}>info@dedicatednetworksinc.com</a> or call <a href="tel:7632337200" style={{ color: 'oklch(0.72 0.15 150)' }}>(763) 233-7200</a>.</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'oklch(0.68 0.16 148)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 5 }}>Option 3 &mdash; This Form</div>
                <div style={{ fontSize: 14.5, color: 'oklch(0.8 0.02 255)', lineHeight: 1.55 }}>Fill it out and upload an asset list of equipment you're looking to get a top dollar bid on.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuestionsCta />
    </div>
  );
}
