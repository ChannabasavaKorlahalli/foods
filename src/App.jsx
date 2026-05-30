import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from './layouts/SiteLayout';

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage').then((m) => ({ default: m.WhyUsPage })));
const HowWeWorkPage = lazy(() =>
  import('./pages/HowWeWorkPage').then((m) => ({ default: m.HowWeWorkPage }))
);
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));

function PageFallback() {
  return <div className="min-h-[50vh] bg-navy" aria-hidden />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageFallback />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="why-us"
          element={
            <Suspense fallback={<PageFallback />}>
              <WhyUsPage />
            </Suspense>
          }
        />
        <Route
          path="how-we-work"
          element={
            <Suspense fallback={<PageFallback />}>
              <HowWeWorkPage />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageFallback />}>
              <ContactPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
