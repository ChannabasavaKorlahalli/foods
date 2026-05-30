import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from './layouts/SiteLayout';
import { HomePage } from './pages/HomePage';
import { WhyUsPage } from './pages/WhyUsPage';
import { HowWeWorkPage } from './pages/HowWeWorkPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="why-us" element={<WhyUsPage />} />
        <Route path="how-we-work" element={<HowWeWorkPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
