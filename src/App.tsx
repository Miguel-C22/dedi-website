import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import SolutionsHub from './components/SolutionsHub';
import ProcessSteps from './components/ProcessSteps';
import GlobalReach from './components/GlobalReach';
import WhyDedicated from './components/WhyDedicated';
import Certifications from './components/Certifications';
import CaseStudy from './components/CaseStudy';
import Sustainability from './components/Sustainability';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteSelection, setQuoteSelection] = useState('Purchase hardware');

  useEffect(() => {
    document.body.style.overflow = quoteOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [quoteOpen]);

  const openQuoteModal = () => {
    setQuoteSelection('Purchase hardware');
    setQuoteOpen(true);
  };
  const closeQuoteModal = () => setQuoteOpen(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Header onOpenQuote={openQuoteModal} />
      <Hero onOpenQuote={openQuoteModal} />
      <TrustBar />
      <SolutionsHub />
      <ProcessSteps />
      <GlobalReach />
      <WhyDedicated />
      <Certifications />
      <CaseStudy />
      <Sustainability />
      <FinalCTA onOpenQuote={openQuoteModal} />
      <Footer />
      <QuoteModal isOpen={quoteOpen} selection={quoteSelection} onSelect={setQuoteSelection} onClose={closeQuoteModal} />
    </div>
  );
}
