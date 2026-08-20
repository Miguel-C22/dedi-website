import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

interface QuestionsCtaProps {
  background?: string;
  headingColor?: string;
}

export default function QuestionsCta({ background = 'oklch(0.2 0.05 258)', headingColor = '#fff' }: QuestionsCtaProps) {
  const [sectionRef, inView] = useInView<HTMLElement>();

  return (
    <section ref={sectionRef} className={`dn-fade-section${inView ? ' dn-in-view' : ''}`} style={{ background, padding: '30px 0' }}>
      <div className="dn-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: headingColor }}>Questions? We can help.</h3>
        <Link to="/contact" className="dn-btn-primary dn-focus" style={{ display: 'inline-block' }}>Contact Us</Link>
      </div>
    </section>
  );
}
