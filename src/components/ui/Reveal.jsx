export function Reveal({ children, className = '' }) {
  return <div className={className.trim() || undefined}>{children}</div>;
}
