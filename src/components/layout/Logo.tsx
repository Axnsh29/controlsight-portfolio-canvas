export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="cs-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--brand-light)" />
          <stop offset="1" stopColor="var(--primary)" />
        </linearGradient>
      </defs>
      <path d="M33 11.5A16 16 0 1 0 33 28.5" fill="none" stroke="url(#cs-g)" strokeWidth="6" strokeLinecap="round" />
      <path d="M26 15.5A7 7 0 1 0 26 24.5" fill="none" stroke="var(--brand-light)" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}
