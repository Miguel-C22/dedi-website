import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import QuoteModal from './QuoteModal';

export interface QuoteModalContext {
  onOpenQuote: (selection?: string) => void;
}

export default function Layout() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteSelection, setQuoteSelection] = useState('Purchase hardware');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = quoteOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [quoteOpen]);

  const openQuoteModal = (selection = 'Purchase hardware') => {
    setQuoteSelection(selection);
    setQuoteOpen(true);
  };
  const closeQuoteModal = () => setQuoteOpen(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Header onOpenQuote={openQuoteModal} />
      <Outlet context={{ onOpenQuote: openQuoteModal } satisfies QuoteModalContext} />
      <Footer />
      <QuoteModal isOpen={quoteOpen} selection={quoteSelection} onSelect={setQuoteSelection} onClose={closeQuoteModal} />
    </div>
  );
}
