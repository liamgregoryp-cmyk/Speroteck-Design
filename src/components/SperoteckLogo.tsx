const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  // Two overlapping circles, chain-link style.
  // Left circle: cx=20, cy=25, r=15
  // Right circle: cx=40, cy=25, r=15
  // Centers 20 apart, radius 15 → ~90° quarter removed from each.
  // Intersection points: (30, 13.82) and (30, 36.18)
  // Interlocking: left in front at top, right in front at bottom.

  const h = size * 0.83;
  return (
    <svg
      viewBox="0 0 60 50"
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

      {/* 1. Left ring BOTTOM half (behind right ring) */}
      {/* From leftmost (5,25) clockwise along bottom to bottom intersection (30,36.18) */}
      <path
        d="M 5 25 A 15 15 0 0 1 30 36.18"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* 2. Right ring full 270° arc */}
      {/* From bottom intersection (30,36.18) clockwise to rightmost (55,25) then to top intersection (30,13.82) */}
      <path
        d="M 30 36.18 A 15 15 0 0 1 55 25 A 15 15 0 0 1 30 13.82"
        fill="none"
        stroke="url(#logoGrad2)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* 3. Left ring TOP half (in front of right ring) */}
      {/* From top intersection (30,13.82) counter-clockwise over top to leftmost (5,25) */}
      <path
        d="M 30 13.82 A 15 15 0 0 0 5 25"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SperoteckLogo;
