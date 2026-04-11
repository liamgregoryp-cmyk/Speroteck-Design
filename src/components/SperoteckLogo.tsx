const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
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

      {/* 
        Two overlapping circles like chain links.
        Left circle: cx=30, cy=28, r=16  |  Right circle: cx=50, cy=28, r=16
        Intersection points: (40, 15.5) top and (40, 40.5) bottom
        Each circle's quarter facing the other is removed.
        Interlocking: left passes in front at top, right passes in front at bottom.
      */}

      {/* 1. Left ring BOTTOM half (behind) — from leftmost down-right to bottom intersection */}
      <path
        d="M 14 28 A 16 16 0 0 1 40 40.5"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* 2. Right ring full 270° arc — from bottom intersection, clockwise around right side to top intersection */}
      <path
        d="M 40 40.5 A 16 16 0 0 1 66 28 A 16 16 0 0 1 40 15.5"
        fill="none"
        stroke="url(#logoGrad2)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* 3. Left ring TOP half (in front) — from top intersection, counter-clockwise over top to leftmost */}
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
