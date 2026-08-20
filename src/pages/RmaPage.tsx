import { useState } from 'react';
import QuestionsCta from '../components/QuestionsCta';

const exclusions = [
  'Normal wear and tear',
  'Mistreated or mishandled',
  'Improperly installed or configured',
  'Subject to an accident',
  'Power surges or electrical stress',
  'Subject to an act of God',
  'Altered or modified',
  'Sold "as-is" with disclosed flaws',
];

const policyNotes = [
  "Return for exchange, refund, repair, or credit — whatever fits best.",
  "We cover return shipping if the issue was our error; otherwise it's on you.",
  'Factory-sealed items returned open or used carry a restocking fee.',
  "Unreturned cases close after 60 days — a new form starts the process over.",
];

const processSteps = [
  { n: 1, text: 'Complete the Return Merchandise Form within one year of purchasing equipment.' },
  { n: 2, text: 'Our Dedicated customer service team will contact you for additional details and provide a shipping label, if applicable.' },
  { n: 3, text: 'Reset the device back to factory default or original settings.' },
  { n: 4, text: 'Properly package equipment to prevent damage during shipping.' },
  { n: 5, text: 'Return equipment using the provided shipping label within 30 days of the return request being approved.' },
  { n: 6, text: 'Await confirmation of arrival and two business days for credit to be issued or a replacement sent.' },
];

export default function RmaPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* ===== HERO BAND ===== */}
      <section style={{ background: 'oklch(0.2 0.05 258)', padding: '148px 0 40px' }}>
        <div className="dn-container">
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.68 0.16 148)', textTransform: 'uppercase', marginBottom: 12 }}>Guarantee &amp; Returns</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 3.6vw, 40px)', fontWeight: 800, lineHeight: 1.15, maxWidth: 680, marginBottom: 14 }}>Our 1-Year Guarantee prioritizes our dedication to customers and quality.</h1>
          <p style={{ color: 'oklch(0.82 0.02 255)', fontSize: 15.5, lineHeight: 1.6, maxWidth: 620 }}>
            Not satisfied with your pre-owned equipment? We want to make it right &mdash; start your return with the{' '}
            <a href="#rma-form" style={{ color: 'oklch(0.72 0.15 150)', fontWeight: 600 }}>Return Merchandise Form</a> below.
          </p>
        </div>
      </section>

      {/* ===== QUICK FACTS ===== */}
      <section style={{ padding: '44px 0 0' }}>
        <div className="dn-container dn-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            { big: '1 Year', label: 'Guarantee from date of purchase' },
            { big: '60 Days', label: 'To return equipment before your case closes' },
            { big: '2 Days', label: 'To issue credit or ship a replacement after arrival' },
          ].map(f => (
            <div key={f.big} style={{ background: '#fff', border: '1px solid oklch(0.9 0.005 255)', borderTop: '3px solid oklch(0.62 0.16 148)', borderRadius: 8, padding: 24, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 800, fontSize: 32, color: 'oklch(0.3 0.1 255)' }}>{f.big}</div>
              <div style={{ fontSize: 13.5, color: 'oklch(0.45 0.01 255)', marginTop: 4 }}>{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COVERAGE + PROCESS SIDEBAR ===== */}
      <section style={{ background: 'oklch(0.965 0.004 255)', padding: '48px 0' }}>
        <div className="dn-container dn-guarantee-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: '#fff', border: '1px solid oklch(0.9 0.005 255)', borderRadius: 10, padding: 28 }}>
              <h2 style={{ fontSize: 16, fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 14 }}>What the guarantee doesn't cover</h2>
              <div className="dn-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
                {exclusions.map(x => (
                  <div key={x} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'oklch(0.38 0.01 255)', lineHeight: 1.4 }}>
                    <span style={{ color: 'oklch(0.58 0.02 30)', fontWeight: 800, flexShrink: 0 }}>&#10005;</span>{x}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12.5, color: 'oklch(0.55 0.01 255)', lineHeight: 1.5, marginTop: 16 }}>Replacements are provided only when the item is in stock or can be located. Products are re-sold goods covered solely by this guarantee &mdash; not by manufacturer warranties.</p>
            </div>
            <div style={{ background: 'oklch(0.97 0.04 148)', border: '1px solid oklch(0.85 0.06 148)', borderRadius: 10, padding: 28 }}>
              <h2 style={{ fontSize: 16, fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 12 }}>Good to know</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {policyNotes.map(n => (
                  <div key={n} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: 'oklch(0.3 0.05 150)', lineHeight: 1.45 }}>
                    <span style={{ color: 'oklch(0.5 0.15 148)', fontWeight: 800, flexShrink: 0 }}>&#10003;</span>{n}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: 'oklch(0.2 0.05 258)', borderRadius: 10, padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.2, color: 'oklch(0.68 0.16 148)', textTransform: 'uppercase' }}>Return Process</h3>
            {processSteps.map(s => (
              <div key={s.n} style={{ display: 'flex', gap: 14 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'oklch(0.62 0.16 148)', color: 'oklch(0.16 0.02 150)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12.5 }}>{s.n}</div>
                <p style={{ fontSize: 14, color: 'oklch(0.85 0.02 255)', lineHeight: 1.5 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RMA FORM ===== */}
      <section id="rma-form" style={{ padding: '56px 0 72px' }}>
        <div className="dn-container" style={{ maxWidth: 780 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 4 }}>Return Merchandise Authorization</h2>
          <p style={{ fontSize: 15, color: 'oklch(0.44 0.01 255)', marginBottom: 24 }}>Please complete this form to begin your return process.</p>
          <div style={{ background: '#fff', border: '1px solid oklch(0.9 0.005 255)', borderRadius: 10, boxShadow: '0 12px 32px -20px rgba(15,30,60,0.15)', padding: 40 }}>
            {submitted ? (
              <div style={{ background: 'oklch(0.97 0.04 148)', border: '1.5px solid oklch(0.62 0.16 148)', borderRadius: 8, padding: 24, fontSize: 15, color: 'oklch(0.3 0.05 150)', fontWeight: 600 }}>
                Thanks &mdash; a request like this would be sent to our customer service team. This form is a mockup and hasn't been wired to the WordPress form handler yet.
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="dn-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Name *</label>
                    <input required className="dn-input dn-focus" placeholder="Jordan Reyes" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Phone *</label>
                    <input required className="dn-input dn-focus" placeholder="(555) 555-0143" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Email *</label>
                    <input required type="email" className="dn-input dn-focus" placeholder="jordan@company.com" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Company</label>
                    <input className="dn-input dn-focus" placeholder="Company name" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Sales Rep Name</label>
                    <input className="dn-input dn-focus" placeholder="If known" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Original Reference *</label>
                    <select required className="dn-select dn-focus">
                      <option value="">&mdash; None &mdash;</option>
                      <option>PO#</option>
                      <option>Order#</option>
                      <option>Invoice#</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Original Reference Number *</label>
                    <input required className="dn-input dn-focus" placeholder="e.g. PO-10432" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Serial Number *</label>
                    <input required className="dn-input dn-focus" placeholder="Device serial number" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Request Type *</label>
                    <select required className="dn-select dn-focus">
                      <option value="">&mdash; None &mdash;</option>
                      <option>Replacement</option>
                      <option>Return</option>
                      <option>Tech Support</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Reason Code</label>
                    <select className="dn-select dn-focus">
                      <option value="">&mdash; None &mdash;</option>
                      <option>No longer wants item</option>
                      <option>Received incorrect item</option>
                      <option>Received inoperable item</option>
                      <option>Unsatisfied with condition</option>
                      <option>Item damaged in shipment</option>
                      <option>Did not receive item</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.22 0.01 255)', marginBottom: 6 }}>Describe</label>
                  <textarea rows={4} className="dn-textarea dn-focus" placeholder="Please provide details" style={{ resize: 'vertical' }} />
                </div>
                <div>
                  <button type="submit" className="dn-btn-primary dn-focus" style={{ padding: '15px 32px', fontSize: 15.5 }}>Submit</button>
                  <p style={{ fontSize: 12.5, color: 'oklch(0.55 0.01 255)', marginTop: 10 }}>Mockup only &mdash; no data is submitted. Wire to the WordPress form handler in build.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <QuestionsCta />
    </div>
  );
}
