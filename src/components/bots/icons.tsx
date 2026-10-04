export function OrbwebsMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <circle cx="32" cy="32" r="18" stroke="#00e5ff" strokeWidth="1.6" fill="url(#orbG)" />
      <circle cx="32" cy="32" r="7" fill="#00e5ff" opacity="0.7" />
      <path d="M32 10v44M10 32h44M18 18l28 28M46 18 18 46" stroke="#00e5ff" strokeWidth="1" opacity="0.75" />
      <path
        d="M32 6c8 8 16 6 20 10-4 10 4 16 0 24-10-4-16 8-20 4-6-2-8-12-16-16 4-8-4-12 0-18 6 2 10-6 16-4Z"
        stroke="#00e5ff"
        strokeWidth="0.9"
        opacity="0.45"
      />
      <defs>
        <radialGradient id="orbG">
          <stop offset="0%" stopColor="#00e5ff" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function UsMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="32" r="14" stroke="#ff2fd6" strokeWidth="2" fill="rgba(255,47,214,0.12)" />
      <circle cx="40" cy="32" r="14" stroke="#00e5ff" strokeWidth="2" fill="rgba(0,229,255,0.12)" />
      <path d="M27 27l10 10M37 27 27 37" stroke="#eaf4ff" strokeWidth="1.6" />
    </svg>
  );
}

export function SpiderMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <ellipse cx="32" cy="38" rx="12" ry="10" fill="#9dff7a" opacity="0.9" />
      <circle cx="32" cy="24" r="9" fill="#9dff7a" />
      <circle cx="28" cy="22" r="2.1" fill="#040816" />
      <circle cx="36" cy="22" r="2.1" fill="#040816" />
      <path
        d="M20 30Q12 22 8 28M20 36Q10 40 6 34M20 42Q14 50 8 46M44 30Q52 22 56 28M44 36Q54 40 58 34M44 42Q50 50 56 46"
        stroke="#9dff7a"
        strokeWidth="1.8"
      />
      <path d="M30 38h4v6h-1.2l-2.8 5" stroke="#040816" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SpiderWebMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <circle cx="32" cy="32" r="22" stroke="#00e5ff" strokeWidth="1" opacity="0.5" />
      <circle cx="32" cy="32" r="14" stroke="#00e5ff" strokeWidth="1" opacity="0.6" />
      <circle cx="32" cy="32" r="6" stroke="#00e5ff" strokeWidth="1.2" />
      <path d="M32 8v48M8 32h48M14 14l36 36M50 14 14 50" stroke="#00e5ff" strokeWidth="1" />
    </svg>
  );
}
