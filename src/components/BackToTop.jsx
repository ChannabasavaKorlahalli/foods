import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
    >
      <ChevronUp size={22} strokeWidth={2} aria-hidden />
    </button>
  );
}
