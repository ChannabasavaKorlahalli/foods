export function Reveal({ children, className = '', delay = 0 }) {
  const delayClass = delay === 1 ? 'reveal-delay-1' : delay === 2 ? 'reveal-delay-2' : delay === 3 ? 'reveal-delay-3' : '';
  return <div className={`reveal ${delayClass} ${className}`.trim()}>{children}</div>;
}
