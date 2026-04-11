const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  // Two circles that overlap horizontally like chain links.
  // Left circle: center (30, 28), r=16
  // Right circle: center (50, 28), r=16
  // Distance between centers = 20, so they overlap.
  // Intersection points: (40, 15.5) and (40, 40.5)
  // Each circle removes the quarter where the other passes through.
  // Interlocking: left ring in front at top, right ring in front at bottom.

  const h = size * 0.7;
  return (
    <svg
      viewBox="0 0 80 56"
      width={size}
      height={h}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 48%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 48%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
      </defs>

      {/* Layer 1: Left ring BOTTOM half (behind right ring) */}
      <path
        d="M 14 28 A 16 16 0 0 0 40 40.5"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Layer 2: Right ring FULL 270° arc (gap on left quarter) */}
      <path
        d="M 40 40.5 A 16 16 0 0 0 66 28 A 16 16 0 0 0 40 15.5"
        fill="none"
        stroke="url(#logoGrad2)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Layer 3: Left ring TOP half (in front of right ring) */}
      <path
        d="M 40 15.5 A 16 16 0 0 0 14 28"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SperoteckLogo;
