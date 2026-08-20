import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import SolutionsHub from '../components/SolutionsHub';
import ProcessSteps from '../components/ProcessSteps';
import GlobalReach from '../components/GlobalReach';
import WhyDedicated from '../components/WhyDedicated';
import Certifications from '../components/Certifications';
import CaseStudy from '../components/CaseStudy';
import Sustainability from '../components/Sustainability';
import FinalCTA from '../components/FinalCTA';
import type { QuoteModalContext } from '../components/Layout';

export default function Home() {
  const { onOpenQuote } = useOutletContext<QuoteModalContext>();

  return (
    <>
      <Hero onOpenQuote={() => onOpenQuote()} />
      <TrustBar />
      <SolutionsHub />
      <ProcessSteps />
      <GlobalReach />
      <WhyDedicated />
      <Certifications />
      <CaseStudy />
      <Sustainability />
      <FinalCTA onOpenQuote={() => onOpenQuote()} />
    </>
  );
}
