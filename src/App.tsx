import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import DedicatedDifferencePage from './pages/DedicatedDifferencePage';
import RmaPage from './pages/RmaPage';
import SellPage from './pages/SellPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="dedicated-difference" element={<DedicatedDifferencePage />} />
        <Route path="rma" element={<RmaPage />} />
        <Route path="sell" element={<SellPage />} />
      </Route>
    </Routes>
  );
}
