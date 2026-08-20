import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionsCta from '../components/QuestionsCta';
import { useInView } from '../hooks/useInView';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

const team: TeamMember[] = [
  { name: 'Alex Howerton', role: 'Refurbishing Lead', photo: '/uploads/Alex2-1024x1024.png', bio: 'Our refurb magician, known for integrity and transparent communication with colleagues. As one team member put it, “We’re fortunate to have a leader like him at Dedicated!”' },
  { name: 'Jayden Sutch', role: 'Refurbishing Associate', photo: '/uploads/Jayden-Sutch-1-1024x1024.png', bio: 'Jayden’s extraordinary positivity and expertise in refurbishing gear set her apart. She’s consistently proactive and ever-ready to lend a helping hand to her colleagues!' },
  { name: 'Garret Franko', role: 'Business Development Executive', photo: '/uploads/Garret2-1024x1024.png', bio: 'Garret is a tenured and essential component of the Dedicated Networks culture, contributing his humor, expertise, and can-do attitude. We count ourselves fortunate to have him on our team!' },
];

export default function CareersPage() {
  const [activeMemberIndex, setActiveMemberIndex] = useState<number | null>(null);
  const activeMember = activeMemberIndex != null ? team[activeMemberIndex] : null;

  const [teamSectionRef, teamSectionInView] = useInView<HTMLElement>();
  const [teamGridRef, teamGridInView] = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [cultureRef, cultureInView] = useInView<HTMLElement>();
  const [positionsRef, positionsInView] = useInView<HTMLElement>();
  const [eeoRef, eeoInView] = useInView<HTMLElement>();

  return (
    <div>
      {/* ===== HERO ===== */}
      <section style={{ background: 'oklch(0.2 0.05 258)', padding: '156px 0 64px' }}>
        <div className="dn-container">
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.68 0.16 148)', textTransform: 'uppercase', marginBottom: 14 }}>Careers</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 800, lineHeight: 1.12, maxWidth: 640, marginBottom: 16 }}>Join Our Team</h1>
          <p style={{ color: 'oklch(0.85 0.02 255)', fontSize: 17, lineHeight: 1.55, maxWidth: 560 }}>A career at Dedicated Networks gives you a unique opportunity to be part of a vibrant, growing industry.</p>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section ref={teamSectionRef} className={`dn-container dn-fade-section${teamSectionInView ? ' dn-in-view' : ''}`} style={{ padding: '56px 32px 60px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto 40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px,2.4vw,27px)', fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 8, lineHeight: 1.2 }}>Meet Members of Our Incredible Team</h2>
          <p style={{ fontSize: 15, color: 'oklch(0.5 0.01 255)' }}>Select a photo to read more.</p>
        </div>
        <div ref={teamGridRef} className={`dn-reveal-grid${teamGridInView ? ' revealed' : ''}`} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px 32px', maxWidth: 660, margin: '0 auto' }}>
          {team.map((member, i) => (
            <button
              key={member.name}
              className="dn-focus dn-reveal-item"
              onClick={() => setActiveMemberIndex(i)}
              style={{ transitionDelay: `${i * 80}ms`, textAlign: 'center', border: 'none', padding: 0, cursor: 'pointer', background: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, width: 172 }}
            >
              <div style={{ width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', background: 'oklch(0.93 0.005 255)' }}>
                <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15.5, color: 'oklch(0.22 0.02 255)' }}>{member.name}</div>
                <div style={{ fontSize: 12.5, color: 'oklch(0.5 0.02 255)', marginTop: 4 }}>{member.role}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ===== TEAM MEMBER MODAL ===== */}
      {activeMember && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,18,32,0.6)', overflowY: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px 20px' }}
          onClick={() => setActiveMemberIndex(null)}
        >
          <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 12, maxWidth: 480, width: '100%', height: 'fit-content', position: 'relative', padding: 40, textAlign: 'center', animation: 'dn-fade-in .15s ease' }}>
            <button className="dn-focus" aria-label="Close" onClick={() => setActiveMemberIndex(null)} style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: 20, color: 'oklch(0.45 0.01 255)' }}>&#10005;</button>
            <div style={{ width: 128, height: 128, borderRadius: 14, overflow: 'hidden', margin: '0 auto 20px' }}>
              <img src={activeMember.photo} alt={activeMember.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ fontWeight: 800, fontSize: 20, color: 'oklch(0.22 0.01 255)', marginBottom: 4 }}>{activeMember.name}</div>
            <div style={{ fontSize: 14, color: 'oklch(0.56 0.17 255)', fontWeight: 600, marginBottom: 20 }}>{activeMember.role}</div>
            <p style={{ fontSize: 15, color: 'oklch(0.42 0.01 255)', lineHeight: 1.6, textAlign: 'left' }}>{activeMember.bio}</p>
          </div>
        </div>
      )}

      {/* ===== CULTURE ===== */}
      <section ref={cultureRef} className={`dn-fade-section${cultureInView ? ' dn-in-view' : ''}`} style={{ background: 'oklch(0.965 0.004 255)', padding: '64px 0 76px' }}>
        <div className="dn-container dn-grid-2" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1fr', gap: 56, alignItems: 'start' }}>
          <div style={{ position: 'relative', paddingBottom: 32 }}>
            <div style={{ aspectRatio: 1.05, borderRadius: 8, overflow: 'hidden', background: 'oklch(0.92 0.008 255)' }}>
              <img src="/uploads/Career-Page-Pictures-5.png" alt="Team members walking through the warehouse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="dn-inset-photo" style={{ position: 'absolute', bottom: 0, aspectRatio: 1.15, borderRadius: 8, overflow: 'hidden', border: '6px solid oklch(0.965 0.004 255)', boxShadow: '0 16px 32px -14px rgba(15,30,60,0.28)', background: 'oklch(0.92 0.008 255)' }}>
              <img src="/uploads/Career-Page-Pictures-4.png" alt="Team members packing equipment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 8 }}>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.56 0.17 255)', textTransform: 'uppercase', marginBottom: 10 }}>Values Driven Work Environment</div>
              <h2 style={{ fontSize: 'clamp(22px,2.4vw,26px)', fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 12, lineHeight: 1.25 }}>Since our founding, we have invested in innovative ideas, exceptional talent, and building a team environment.</h2>
              <p style={{ fontSize: 15, color: 'oklch(0.42 0.01 255)', lineHeight: 1.6 }}>
                We achieve excellence in all that we do. Teamwork, open communication, and exceptional opportunities for personal and professional development are all part of the{' '}
                <Link to="/dedicated-difference">Dedicated Difference</Link>. Leaders take a genuine interest in team members and it clearly reflects in the engagement and passion towards the work we do.
              </p>
            </div>
            <div style={{ height: 1, background: 'oklch(0.88 0.005 255)' }} />
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.4, color: 'oklch(0.56 0.17 255)', textTransform: 'uppercase', marginBottom: 10 }}>Develop Lasting Skills</div>
              <h2 style={{ fontSize: 'clamp(22px,2.4vw,26px)', fontWeight: 800, color: 'oklch(0.22 0.01 255)', marginBottom: 12, lineHeight: 1.25 }}>A career at Dedicated Networks gives you a unique opportunity to be part of a vibrant growing industry.</h2>
              <p style={{ fontSize: 15, color: 'oklch(0.42 0.01 255)', lineHeight: 1.6 }}>Come join an integrity-driven team. We foster a culture that values curiosity, continuous improvement, and delighting our customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AVAILABLE POSITIONS ===== */}
      <section ref={positionsRef} className={`dn-fade-section${positionsInView ? ' dn-in-view' : ''}`} style={{ background: 'oklch(0.2 0.05 258)', padding: '60px 0' }}>
        <div className="dn-container" style={{ maxWidth: 860 }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,32px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>Available Positions</h2>
          <p style={{ fontSize: 16, color: 'oklch(0.82 0.02 255)', lineHeight: 1.6, marginBottom: 32, maxWidth: 640 }}>Dedicated Networks provides a fun, flexible, and friendly atmosphere with tremendous growth opportunities. If you are interested in taking your career to the next level with Dedicated Networks, check out our current openings below.</p>
          <div style={{ textAlign: 'center' }}>
            <a
              href="https://www.paycomonline.net/v4/ats/web.php/jobs?clientkey=B7F6DF8B4F62A55215F936EB6804B4CA&jpt=bb64ddf7428ee8c5dc36ed4363965825"
              target="_blank"
              rel="noreferrer"
              className="dn-btn-primary dn-focus"
              style={{ display: 'inline-flex', padding: '15px 32px', fontSize: 15.5 }}
            >
              View Current Openings &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ===== EEO STATEMENT ===== */}
      <section ref={eeoRef} className={`dn-container dn-fade-section${eeoInView ? ' dn-in-view' : ''}`} style={{ padding: '48px 32px', maxWidth: 900 }}>
        <p style={{ fontSize: 14, color: 'oklch(0.5 0.01 255)', lineHeight: 1.65, marginBottom: 16 }}>Dedicated Networks is an equal opportunity employer that is committed to diversity and inclusion in the workplace. We prohibit discrimination and harassment of any kind based on race, color, sex, religion, sexual orientation, national origin, disability, genetic information, pregnancy, or any other protected characteristic as outlined by federal, state, or local laws.</p>
        <p style={{ fontSize: 14, color: 'oklch(0.5 0.01 255)', lineHeight: 1.65 }}>This policy applies to all employment practices within our organization, including hiring, recruiting, promotion, termination, layoff, recall, leave of absence, compensation, benefits, training, and apprenticeship. Dedicated Networks makes hiring decisions based solely on qualifications, merit, and business needs at the time.</p>
      </section>

      <QuestionsCta />
    </div>
  );
}
